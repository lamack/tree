<?php
namespace app\Member\controller;
use \think\Request;
class Member
{
    public function index()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }

    public function recode()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function info()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
   
}
