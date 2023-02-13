<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectUser extends Model
{
    use HasFactory;
    protected $primaryKey = null;
    public $incrementing = false;
    protected $fillable =['project_id','user_id'];
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    } 
    public function project()
    {
        return $this->belongsTo('App\Models\Project');
    }
}
