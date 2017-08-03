<?php
namespace app\Prop\controller;
use \think\Request;
class Prop
{
    public function index()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $prop_db = db('prop');
        $data = $prop_db->select();
        foreach ($data as $key => $value) {
            $data[$key]['convert'] = $value['convert'].': 1';
        }    
        // 指定json数据输出
        return apiResponse($data);
    }

    public function prop_setting()
    {
        $request = Request::instance();
        $params = $request->param();
        $params['create_time'] = time();
        $prop_db = db('prop');
        if($prop_db->where('position', intval($params['position']))->find()){
            $data = $prop_db->where('position', intval($params['position']))->update($params);
            if ($data) {
                $data = ['status'=>'succ'];
                return apiResponse($data); 
            }else{
                $data = ['status'=>'error', 'msg'=>'编辑失败'];
                return apiResponse($data);
            }
        }else{
            $data = $prop_db->insert($params);
            if ($data) {
                $data = ['status'=>'succ'];
                return apiResponse($data); 
            }else{
                $data = ['status'=>'error', 'msg'=>'添加失败'];
                return apiResponse($data);
            }
        }
        
    }
   
}
