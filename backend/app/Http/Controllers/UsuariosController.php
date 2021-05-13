<?php

namespace App\Http\Controllers;


use App\Models\Usuarios;
use Exception;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Usuarios = Usuarios::get();
        echo json_encode($Usuarios);
    }




    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $usuario = new Usuarios();
        $usuario->id = $request->input('id');
        $usuario->nombre = $request->input('nombre');
        $usuario->apellido = $request->input('apellido');
        $usuario->cedula = $request->input('cedula');
        $usuario->telefono = $request->input('telefono');
        $usuario->edad = $request->input('edad');
        $res = $usuario->save();
        try {
            if ($res) {
                return response()->json(['message' => 'Post create succesfully'], 201);
            }
            return response()->json(['message' => 'Error to create post'], 500);
        } catch (Exception $th) {
            return $th;
        }
    }





    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Usuarios  $Usuarios_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $Usuarios_id)
    {
        $usuario =  Usuarios::find($Usuarios_id);
        $usuario->id = $request->input('id');
        $usuario->nombre = $request->input('nombre');
        $usuario->apellido = $request->input('apellido');
        $usuario->cedula = $request->input('cedula');
        $usuario->telefono = $request->input('telefono');
        $usuario->edad = $request->input('edad');
        $res = $usuario->save();
        try {
            if ($res) {
                return response()->json(['message' => 'Post create succesfully'], 201);
            }
            return response()->json(['message' => 'Error to create post'], 500);
        } catch (Exception $th) {
            return $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Usuarios  $Usuarios_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($Usuarios_id)
    {
        $usuario = Usuarios::find($Usuarios_id);
        $usuario->delete();
    }
}