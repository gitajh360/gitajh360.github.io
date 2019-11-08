<?php
$token = $_GET["t"];  //获取token
$kfzx = file_get_contents("kfzx.js");//打开客服座席文件
$kfzx = json_decode($kfzx);//转为PHP数组
$s_e ="";
for($i=0;$i<count($kfzx);$i++){
if($kfzx[$i]==false){
    $kfzx[$i]=$token;   
    $s_e ="success";
    break; 
}
}
$content = array();
if($s_e=="success"){
    echo "success";//返回成功
    $kfzx = json_encode($kfzx);//转换json
    file_put_contents("kfzx.js",$kfzx);//写入文件
 //   $content[]= array("kf","",time(),"","","会话已建立");
    $content = json_encode($content);
    file_put_contents($token.".js",$content);
}else{
    echo "error";  
}





?>