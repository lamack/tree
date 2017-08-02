<?php
namespace app\Adv\controller;
use \think\Request;
class Adv
{
    private $_advSt = array('启用','停用');
    private $_advTp = array('游戏介绍','游戏公告');

    //announcement
    public function announcement()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $announcement_db = db('announcement');
        $data = $announcement_db->select();
        foreach ($data as $key => $value) {
            $data[$key]['adv_status'] = $this->_advSt[$value['adv_status']];
            $data[$key]['adv_type'] = $this->_advTp[$value['adv_type']];
            $data[$key]['create_time'] = date('Y-m-d',$value['create_time']);
        }
        // 指定json数据输出
        return apiResponse($data);
    }

    //add
    public function add()
    {
        $request = Request::instance();
        $params = $request->param();
        $params['create_time'] = time();

        $announcement_db = db('announcement');
        $data = $announcement_db->insert($params);
        if ($data) {
            $data = ['status'=>'succ'];
            return apiResponse($data); 
        }else{
            $data = ['status'=>'error', 'msg'=>'添加失败'];
            return apiResponse($data);
        }
        
    }
   
}
