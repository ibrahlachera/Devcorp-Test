<?php

namespace App\Http\Controllers;

use App\Models\ProjectUser;
use Illuminate\Http\Request;

class ProjectUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,ProjectUser $projectUser)
    {
        $input = $request->all();
        $users = $input['users'];
        $project_id = $input['project_id'];
        foreach($users as $user){
            $projUser = ProjectUser::where('user_id', $user)->where('project_id', $project_id)->exists();
            if (!$projUser) {
            $projUser = ProjectUser::create(['user_id'=>$user,'project_id'=>$project_id]);
             }
        }
        return response()->json([
            "success" => true
                    ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $projectuser = ProjectUser::where('project_id',$id)->get();
        return response()->json([
            "success" => true,
            "data" => $projectuser
            ]);
    }

    public function getProjectByUserId($user_id)
    {
        $projectuser = ProjectUser::where('user_id',$user_id)->get();
        return response()->json([
            "success" => true,
            "data" => $projectuser
            ]);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $input = $request->all();
        $projectuser = ProjectUser::where('user_id',$input['user_id'])->where('project_id',$input['project_id']);
        $projectuser->delete();
        return response()->json([
            "success" => true,
            "data" => $projectuser
            ]);
    }
}
