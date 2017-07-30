<?php
namespace app\Disaster\controller;
use \think\Request;
class Disaster
{
    public function index()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }

    public function disaster_setting()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
   
}
