<?php

namespace App\Http\Controllers;

use App\Http\Resources\RentalResponse;
use App\Models\EBikes;
use App\Models\Employee;
use App\Models\Rentals;
use Carbon\Carbon;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RentalController extends Controller
{
    public function all(){
        // $rez = Rentals::all();
        // dd($rez);

        $join = DB::table("rentals")
                    ->leftJoin("e_bikes","e_bikes_id","=","e_bikes.id")
                    ->leftJoin("employees","employees_id","=","employees.id")
                    ->get("*");

        // dd($join);
        return RentalResponse::collection($join)->toJson();// tojson or tur bus divains data params
        // return $join;
    }

    public function range(Request $request){
        if(count($request->all()) <= 0){
            return response()->noContent();
        }

        $startDate = $request->get("rental_start");
        $endDate = $request->get("rental_end");

        if($startDate == null || $endDate == null){
            return response()->json(["message"=>"Slikti dati!","data"=>$request->all(),],404);
        }

        $q = DB::table('rentals')
        ->leftJoin("e_bikes","e_bikes_id","=","e_bikes.id")
        ->leftJoin("employees","employees_id","=","employees.id")
        ->where('rental_start', '>=', $startDate)
        ->where('rental_end', '<=', $endDate)
        ->get();

        if($q->isEmpty()){
            return response()->noContent();
        }
        return RentalResponse::collection($q)->toJson();
        // return $q;
        // dd($q);
    }

    public function create(Request $request){

            // Rentals::create($request->all());

            if(count($request->all()) <= 0){
                return response()->noContent();
            }
            $empId = $request->get("employees_id");
            $bikeId = $request->get("e_bikes_id");//typo e_bike_id a te ir e_bikes_id

            if(Employee::find($empId) == null || EBikes::find($bikeId == null)){
                return response()->json(["message"=>"Slikti dati!","data"=>$request->all(),],404);
            }

            // check active rentals
            $activeRent = DB::table("rentals")
                        ->where("employees_id","=",$empId)
                        ->where("active_rental","=",1)
                        ->count();

            // dd($request->all());
            if($activeRent >= 1){
                return response()->json(["message"=>"Lietotajam jau ir aktivs abonaments"],404);
            }else{
                // update active_rental field create rental
                $newRental = Rentals::create($request->all());
                // dd($newRental);

                EBikes::where("id","=",$newRental->e_bikes_id)
                        ->update(["available" => 0]);

                Rentals::where("id","=",$newRental->id)
                        ->update(["active_rental" => 1]);


                return $newRental;
            }

    }
}
