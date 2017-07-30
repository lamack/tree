<?php
namespace app\Share\controller;
use \think\Request;
class Share
{
    public function index()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }

    public function zan()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }

    public function zan_setting()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }

    public function gift_green()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function gift_trees()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
   
}
