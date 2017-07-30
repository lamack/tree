<?php
namespace app\Adv\controller;
use \think\Request;
class Adv
{
    public function announcement()
    {
        $request = Request::instance();

        $data = ['id'=>'1','create_time'=>'1501403946','adv_content'=>'test','adv_title'=>'test','adv_type'=>'游戏介绍','adv_status'=>'启用'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }

   
}
