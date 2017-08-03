<?php
namespace app\Reward\controller;
use \think\Request;
class Reward
{
    private $_cashWay = ['网页兑奖','线下兑奖'];
    private $_status = ['未使用','已使用','已过期'];
    public function user()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $reward_db = db('reward');
        $data = $reward_db->select();
        foreach ($data as $key => $value) {
            $data[$key]['username'] = _getUserName($value['user_id']);
            $data[$key]['cash_way'] = $this->_cashWay[$value['cash_way']];
            $data[$key]['create_time'] = date('Y-m-d',$value['create_time']);
        }
        // 指定json数据输出
        return apiResponse($data);
    }

    public function user_detail()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $reward_db = db('reward');
        $data = $reward_db->select();
        foreach ($reward_db as $key => $value) {
            $data[$key]['username'] = _getUserName($value['user_id']);
            $data[$key]['cash_way'] = $this->_cashWay[$value['cash_way']];
            $data[$key]['status'] = $this->_status[$value['status']];
            $data[$key]['create_time'] = date('Y-m-d',$value['create_time']);
        }  
        // 指定json数据输出
        return apiResponse($data);
    }
   
}
