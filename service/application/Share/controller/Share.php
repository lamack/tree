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
        $data = $share_db->where('type','0')->select();
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
        $data = $share_db->where('type'=>'1')->select();
        foreach ($data as $key => $value) {
            $data[$key]['username'] = _getUserName($value['user_id']);
            $data[$key]['zan_channel'] = $value['share_channel'];
            $data[$key]['type'] = $this->_advTp[$value['type']];
            $data[$key]['zan_time'] = date('Y-m-d',$value['share_time']);
        }
        // 指定json数据输出
        return apiResponse($data);
    }

    public function zan_setting()
    {
        $request = Request::instance();
        $params = $request->param();

        $zan_setting_db = db('zan_setting');
        $data = $zan_setting_db->find();
        if ($data) {//edit
            $is = $zan_setting_db->update($params);
            if ($is) {
                $data = ['status'=>'succ'];
                return apiResponse($data); 
            }else{
                $data = ['status'=>'error', 'msg'=>'编辑失败'];
                return apiResponse($data);
            }
        }else{
            $is = $zan_setting_db->insert($params);
            if ($is) {
                $data = ['status'=>'succ'];
                return apiResponse($data); 
            }else{
                $data = ['status'=>'error', 'msg'=>'添加失败'];
                return apiResponse($data);
            }
        }
    }

    public function gift_green()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $gift_db = db('gift');
        $data = $gift_db->where('type','0')->find();
        if ($data) {//edit
            $is = $gift_db->whee('type', '0')->update($params);
            if ($is) {
                $data = ['status'=>'succ'];
                return apiResponse($data); 
            }else{
                $data = ['status'=>'error', 'msg'=>'编辑失败'];
                return apiResponse($data);
            }
        }else{
            $is = $gift_db->insert($params);
            if ($is) {
                $data = ['status'=>'succ'];
                return apiResponse($data); 
            }else{
                $data = ['status'=>'error', 'msg'=>'添加失败'];
                return apiResponse($data);
            }
        }
    }
    public function gift_trees()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $gift_db = db('gift');
        $data = $gift_db->where('type','1')->find();
        if ($data) {//edit
            $is = $gift_db->where('type','1')->update($params);
            if ($is) {
                $data = ['status'=>'succ'];
                return apiResponse($data); 
            }else{
                $data = ['status'=>'error', 'msg'=>'编辑失败'];
                return apiResponse($data);
            }
        }else{
            $is = $gift_db->insert($params);
            if ($is) {
                $data = ['status'=>'succ'];
                return apiResponse($data); 
            }else{
                $data = ['status'=>'error', 'msg'=>'添加失败'];
                return apiResponse($data);
            }
        }
    }
   
}
