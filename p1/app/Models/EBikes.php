<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EBikes extends Model
{
    /** @use HasFactory<\Database\Factories\EBikesFactory> */
    protected $table = "e_bikes";
    protected $fillable = [
        "name",
        "image",
        "description"
    ];
    use HasFactory;
}
