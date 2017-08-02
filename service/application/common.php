<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件

function passkey(){
    return 'saictree';
} 

function encrypt($data) { 
    $key = passkey();
    $prep_code = serialize($data); 
    $block = mcrypt_get_block_size('des', 'ecb'); 
    if (($pad = $block - (strlen($prep_code) % $block)) < $block) { 
    $prep_code .= str_repeat(chr($pad), $pad); 
    } 
    $encrypt = mcrypt_encrypt(MCRYPT_DES, $key, $prep_code, MCRYPT_MODE_ECB); 

    return base64_encode($encrypt); 
} 

function decrypt($str) { 
    $key = passkey();
    $str = base64_decode($str); 
    $str = mcrypt_decrypt(MCRYPT_DES, $key, $str, MCRYPT_MODE_ECB); 
    $block = mcrypt_get_block_size('des', 'ecb'); 
    $pad = ord($str[($len = strlen($str)) - 1]); 

    if ($pad && $pad < $block && preg_match('/' . chr($pad) . '{' . $pad . '}$/', $str)) { 
        $str = substr($str, 0, strlen($str) - $pad); 
    } 

    return unserialize($str); 
} 
