<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RentalResponse extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->id,
            "rental_start"=> $this->rental_start,
            "rental_end"=> $this->rental_end,
            "active_rental"=> $this->active_rental,
            "bike_name" => $this->name,
            "e_bikes_id" => $this->e_bikes_id,
            "employees_id"=> $this->employees_id,
            "first_name" => $this->first_name,
            "last_name" => $this->last_name,
            "email" => $this->email,
        ];
    }
}
