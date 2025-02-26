<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EBikes>
 */
class EBikesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    private string $imgUrl = "/storage/b22.jpg";
    private string $root = "http://127.0.0.1:8000";


    public function definition(): array
    {
        return [
            "name"=>fake()->text(15),
            "image"=>$this->root.$this->imgUrl,
            "description"=>fake()->realText(50)
        ];
    }
}
