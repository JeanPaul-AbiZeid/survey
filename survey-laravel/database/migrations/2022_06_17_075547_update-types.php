<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('types', function (Blueprint $table) {
            DB::table('types')->insert(['type' => 'radio']);
            DB::table('types')->insert(['type' => 'checkbox']);
            DB::table('types')->insert(['type' => 'date']);
            DB::table('types')->insert(['type' => 'number']);
            DB::table('types')->insert(['type' => 'text']);
            DB::table('types')->insert(['type' => 'dropdown']);
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('types');
    }
};
