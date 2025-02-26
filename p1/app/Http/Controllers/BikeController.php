<?php

namespace App\Http\Controllers;

use App\Models\EBikes;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BikeController extends Controller
{

    private function bikeJson($data):JsonResponse{
        return response()
            ->json($data)
            ->setEncodingOptions(JSON_UNESCAPED_SLASHES);
    }

    public function all(){
        $allBikes = EBikes::all();
            // ->where("available","=",1);

        if($allBikes->isEmpty()){
            return response()->noContent();
        }
        // dd($allBikes);
        return $this->bikeJson($allBikes);
    }

    public function show(EBikes $bike){
        $r = $bike::find($bike);
        if($r->isEmpty()){
            return response()->noContent();
        }
        return $this->bikeJson($r);
    }


    public function img(){
        $url = Storage::url("b22.jpg");
        // $size = Storage::size("b200x200.jpg");
        // dd( $size);
        dd($url);
        // return Storage::download($url);
    }
}
