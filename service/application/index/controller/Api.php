<?php
namespace app\index\controller;

class Api
{
    public function index()
    {
        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
}
