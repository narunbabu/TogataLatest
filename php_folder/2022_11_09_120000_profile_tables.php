
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
     public function up()
     { 
        Schema::create('Profiles', function (Blueprint $table) {
    $table->id();     $table->string('name');
     $table->string('surname');
     $table->tinyInteger('gender_id');
     $table->string('about');
     $table->string('mobile');
     $table->string('date');
     $table->tinyInteger('education_id');
     $table->tinyInteger('profession_id');
     $table->string('political_position');
     $table->string('community_position');
     $table->string('native_place');
     $table->string('present_place');
});
     
    
    
    }


    public function down()
    {
        
        Schema::dropIfExists('Profiles');

    
    }
};
