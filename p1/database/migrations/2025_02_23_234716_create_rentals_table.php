<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rentals', function (Blueprint $table) {
            $table->id();
            $table->dateTime('rental_start');
            $table->dateTime('rental_end');
            $table->foreignId('e_bikes_id')->constrained()->onDelete('cascade');
            $table->foreignId('employees_id')->constrained()->onDelete('cascade');
            $table->string('token')->nullable();
            $table->boolean('active_rental')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rentals');
    }
};
