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
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('task_id');
            $table->string('task_title', 150);
            $table->text('task_description');
            $table->string('task_state',60);
            $table->unsignedBigInteger('user_id')->constrained('users');
            $table->unsignedBigInteger('project_id')->constrained('products');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('project_id')->references('project_id')->on('projects');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};
