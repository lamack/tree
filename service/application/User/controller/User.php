<?php
namespace app\User\controller;
use \think\Request;
class User
{
    public function login()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }

    public function code()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }

    public function index()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }  
    public function userinfo()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function userupdate()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function uppw()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function add()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function roleadd()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    } 
    public function role()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    } 
   
}
