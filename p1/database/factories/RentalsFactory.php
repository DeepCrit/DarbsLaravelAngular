<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rentals>
 */
class RentalsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        return [
            "rental_start" => Carbon::now(),
            "rental_end" => Carbon::now()->addDays(2),
            "e_bikes_id" => 1,
            "employees_id" => 1,
            "active_rental" => 1,
        ];
    }
}
