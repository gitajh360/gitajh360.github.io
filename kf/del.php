<?php
$file = $_GET["t"];
$files = $file.".js";
unlink($files);
$kfzx = file_get_contents("kfzx.js");//打开客服座席文件
$kfzx = json_decode($kfzx);//转为PHP数组
for($i=0;$i<count($kfzx);$i++){
if($kfzx[$i]==$file){
    $kfzx[$i]=false;   
    break; 
}
}
   $kfzx = json_encode($kfzx);//转换json
    file_put_contents("kfzx.js",$kfzx);//写入文件

?>