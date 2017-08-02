<?php
namespace app\User\controller;
use \think\Request;
use think\captcha\Captcha;
class User
{

    //login
    public function login()
    {
        //params
        $request = Request::instance();
        $params = $request->param();

        //vail
        $captcha = new Captcha();
        if (!$captcha->check($params['code'])) {
            $data = ['status'=>'error','msg'=>'验证码错误'];
            return apiResponse($data);
        }

        $user_db = db('user');
        $user = $user_db->where('username', $params['username'])->find();
        if (!$user) {
            $data = ['status'=>'error','msg'=>'未找到该账号'];
            return apiResponse($data);
        }
        if($user['password']!=md5($params['password'])){
            $data = ['status'=>'error','msg'=>'密码不正确'];
            return apiResponse($data);
        }
        
        $token = encrypt($user['id']);
        $data = ['status'=>'succ','msg'=>'', 'token'=>$token];
        return apiResponse($data);
    }

    //code
    public function code()
    {
        $config =    [
            // 验证码字体大小
            'fontSize'    =>    20,    
            // 验证码位数
            'length'      =>    4,   
            // 关闭验证码杂点
            'useNoise'    =>    true, 
        ];
        $captcha = new Captcha($config);
        return $captcha->entry(); 
    }

    //logout
    public function logout()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        return apiResponse($data);
    } 

    //index
    public function index()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $user_db = db('user');
        $data = $user_db->field('id,username,create_time')->select();
        foreach ($data as $key => $value) {
            $data[$key]['create_time'] = date('Y-m-d',$value['create_time']);
        }
        // 指定json数据输出
        return apiResponse($data);
    }  
    //userinfo
    public function userinfo()
    {
        $request = Request::instance();
        $params = $request->param();

        $user_db = db('user');
        $data = $user_db->field('id,username,create_time,role')->where('id',intval($params['id']))->find();
        $data['create_time'] = date('Y-m-d',$data['create_time']);
        
        // 指定json数据输出
        return apiResponse($data);
    }
    //userupdate
    public function userupdate()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $user_db = db('user');
        $data = $user_db->where('id',intval($params['id']))->update(['role'=>$params['role']]);
        if ($data) {
            $data = ['status'=>'succ'];
            return apiResponse($data);
        }else{
            $data = ['status'=>'error', 'msg'=>'更新失败'];
            return apiResponse($data);
        }
    }

    //uppw
    public function uppw()
    {
        $request = Request::instance();

        $params = $request->param();
        
        $user_db = db('user');
        $data = $user_db->where('id',intval($params['id']))->update(['password'=>md5($params['password'])]);
        if ($data) {
            $data = ['status'=>'succ'];
            return apiResponse($data);
        }else{
            $data = ['status'=>'error', 'msg'=>'更新失败'];
            return apiResponse($data);
        }
    }

    //add
    public function add()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $params['create_time'] = time();
        $params['password'] = md5($params['password']);

        $user_db = db('user');
        $data = $user_db->insert($params);
        if ($data) {
            $data = ['status'=>'succ'];
            return apiResponse($data); 
        }else{
            $data = ['status'=>'error', 'msg'=>'添加失败'];
            return apiResponse($data);
        }
    }

    //roleadd
    public function roleadd()
    {
        $request = Request::instance();
        $params = $request->param();
        
        $params['create_time'] = time();

        $role_db = db('role');
        $data = $role_db->insert($params);
        if ($data) {
            $data = ['status'=>'succ'];
            return apiResponse($data); 
        }else{
            $data = ['status'=>'error', 'msg'=>'添加失败'];
            return apiResponse($data);
        }
    } 

    //role
    public function role()
    {
        $request = Request::instance();
        $params = $request->param();

        //menu
        $menu = db('menu')->where('status','0')->select();
        //rule
        $rule = db('rule')->where('role_id',$params['role_id'])->find();

        $res = [];
        $i = 0;
        //存在 menu_name id is_check parent children
        if ($rule) {
            foreach ($menu as $key => $value) {
                if($value['is_parent']==0){
                    $res[$value['id']]['name'] = $value['menu_name'];
                    $res[$value['id']]['id'] = $value['id'];
                    if (in_array($value['id'], $rule['rule'])) {
                        $res[$value['id']]['is_check'] = 1;
                    }
                }else{
                    $i++;
                    $res[$value['parent_id']]['children'][$i]['name'] = $value['menu_name'];
                    $res[$value['parent_id']]['children'][$i]['id'] = $value['id'];
                    if (in_array($value['id'], $rule['rule'])) {
                        $res[$value['parent_id']]['children'][$i]['is_check'] = 1;
                    }
                    
                }
            }
        }else{
            foreach ($menu as $key => $value) {
                if($value['is_parent']==0){
                    $res[$value['id']]['name'] = $value['menu_name'];
                    $res[$value['id']]['id'] = $value['id'];
                    $res[$value['id']]['is_check'] = 0;
                }else{
                    $i++;
                    $res[$value['parent_id']]['children'][$i]['name'] = $value['menu_name'];
                    $res[$value['parent_id']]['children'][$i]['id'] = $value['id'];
                    $res[$value['parent_id']]['children'][$i]['is_check'] = 0;
                    
                }
            }
        }
        $result = array_values($res);
        return apiResponse($result);
        
    } 
   
}
