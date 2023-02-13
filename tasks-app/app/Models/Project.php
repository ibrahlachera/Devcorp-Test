<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $primaryKey = "project_id";

    protected $fillable =['project_name'];
    
    public function users()
    {
        return $this->belongsToMany('App\Models\User','project_users','project_id','user_id');
    }
    public function project_users()
    {
        return $this->hasMany('App\Models\ProjectUser');
    }
    public function tasks()
    {
        return $this->hasMany('App\Models\Task', 'project_id');
    }
}
