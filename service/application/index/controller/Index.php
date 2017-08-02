<?php
namespace app\index\controller;
use \think\Request;
use think\captcha\Captcha;
class Index
{
    public function index()
    {

        $data = ['name'=>'thinkphp','url'=>'thinkphp.cn'];
        // 指定json数据输出
        return json(['data'=>$data,'code'=>1,'message'=>'操作完成111']);
    }
    //
    public function hello(){
        // $data = '1'; 
        // $key  = passkey();
        // $en = encrypt($data); 
        // $de = decrypt($en); 
        // echo "加密原型："; 
        // print_r($data); 
        // echo " 
        // 密钥：$key 

        // 加密结果：$en 

        // 解密结果："; 
        // print_r($de); exit;
        $request = Request::instance();

        //login/code
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
    public function hello1(){
        $request = Request::instance();
        return json($request->param());exit;
    }
}
