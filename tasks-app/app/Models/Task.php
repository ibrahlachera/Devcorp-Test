<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $primaryKey = "task_id";
    protected $fillable =['task_title','task_description','task_state','user_id','project_id'];
    public function project()
    {
        return $this->belongsTo(Project::class,'task_id','project_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
