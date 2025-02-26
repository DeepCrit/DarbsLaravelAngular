<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

class EmployeeController extends Controller
{
    public function all(){
        $rez = Employee::all();
        if($rez->isEmpty()){
            return response()->noContent();
        }
        return $rez;
    }
}
