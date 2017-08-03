<?php
namespace app\Vie\controller;
use \think\Request;
class Vie
{
    public function index()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $vie_db = db('vie');
        $data = $vie_db->select();
        
        // 指定json数据输出
        return apiResponse($data);
    }

    public function vie_setting()
    {
        $request = Request::instance();
        $params = $request->param();

        $params['create_time'] = time();
        $vie_setting_db = db('vie_setting');
        if($vie_setting_db->find()){
            $data = $vie_setting_db->where('id','1')->update($params);
            if ($data) {
                $data = ['status'=>'succ'];
                return apiResponse($data); 
            }else{
                $data = ['status'=>'error', 'msg'=>'编辑失败'];
                return apiResponse($data);
            }
        }else{
            $data = $vie_setting_db->insert($params);
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
