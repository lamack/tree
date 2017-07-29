<?php
namespace app\index\controller;

class News
{
    public function read()
    {
        $data = ['name'=>'thinkphp','url'=>'thinkphp.cn'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
}
