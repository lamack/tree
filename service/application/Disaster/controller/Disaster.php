<?php
namespace app\Disaster\controller;
use \think\Request;
class Disaster
{   
    private $_disasterSt = array('即将到来','正在进行' ,'已结束');
    private $_disasterTp = array('台风','洪水','干旱');
    public function index()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $disaster_db = db('disaster');
        $data = $disaster_db->select();
        foreach ($data as $key => $value) {
            $data[$key]['disaster_type'] = $this->_disasterTp[$value['disaster_type']];
            $data[$key]['status'] = $this->_disasterSt[$value['status']];
            $data[$key]['start_time'] = date('Y-m-d',$value['start_time']);
            $data[$key]['push_begin_time'] = date('Y-m-d',$value['push_begin_time']);
        }
        // 指定json数据输出
        return apiResponse($data);
    }

    public function disaster_setting()
    {
        $request = Request::instance();
        $params = $request->param();

        $disaster_db = db('disaster');
        $data = $disaster_db->insert($params);
        if ($data) {
            $data = ['status'=>'succ'];
            return apiResponse($data); 
        }else{
            $data = ['status'=>'error', 'msg'=>'添加失败'];
            return apiResponse($data);
        }
    }
   
}
