<?php
namespace app\User\controller;
use \think\Request;
use think\captcha\Captcha;
class User
{
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

    public function index()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }  
    public function userinfo()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function userupdate()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function uppw()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function add()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    }
    public function roleadd()
    {
        $request = Request::instance();

        $data = ['status'=>'succ'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    } 
    public function role()
    {
        $request = Request::instance();

        $data = [];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成']);
    } 
   
}
