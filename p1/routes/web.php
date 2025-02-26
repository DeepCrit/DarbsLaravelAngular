<?php

use App\Http\Controllers\BikeController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\RentalController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'welcome';
});


// Route::get("/bikes/{id}", function (string $id) {
//     return "returned id $id";
// })->whereNumber("id"); // id must be number

// group endpoints by controller
Route::controller(BikeController::class)
->group(function(){

    Route::get('/bikes', "all");

    Route::get("/bikes/{bike}","show");

    // Route::get('/t', "img");


});

Route::get("/rentals",[RentalController::class,"all"]);

Route::post("/rentals/range",[RentalController::class,"range"]);

Route::post("/create/rental",[RentalController::class,"create"]);

Route::get("/emp",[EmployeeController::class,"all"]);

