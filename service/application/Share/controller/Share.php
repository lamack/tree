<?php
namespace app\Share\controller;
use \think\Request;
class Share
{
    private $_advTp = array('分享','获赞');
    public function index()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $share_db = db('share');
        $data = $share_db->select();
        foreach ($data as $key => $value) {
            $data[$key]['username'] = _getUserName($value['user_id']);
            $data[$key]['type'] = $this->_advTp[$value['type']];
            $data[$key]['share_time'] = date('Y-m-d',$value['share_time']);
        }
        // 指定json数据输出
        return apiResponse($data);
    }

    public function zan()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $share_db = db('share');
        $data = $share_db->select();
        foreach ($data as $key => $value) {
            $data[$key]['username'] = _getUserName($value['user_id']);
            $data[$key]['type'] = $this->_advTp[$value['type']];
            $data[$key]['share_time'] = date('Y-m-d',$value['share_time']);
        }
        // 指定json数据输出
        return apiResponse($data);
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
