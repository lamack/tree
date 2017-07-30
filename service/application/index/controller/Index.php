<?php
namespace app\index\controller;
use \think\Request;
class Index
{
    public function index()
    {
        $data = ['name'=>'thinkphp','url'=>'thinkphp.cn'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成111']);
    }
    //
    public function hello(){
        $request = Request::instance();
        return json($request->param());

        // $data = ['name'=>'thinkphp','url'=>'thinkphp.cn'];

        // // 指定json数据输出
        // return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function hello1(){
        $request = Request::instance();
        return json($request->param());exit;
    }
}
