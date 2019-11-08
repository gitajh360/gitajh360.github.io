<?php
header("Content-type: text/html; charset=utf-8");
$contact = $_POST["c"];
$message = $_POST["m"];
$token = $_POST["t"];
$ip=$_SERVER["REMOTE_ADDR"];
$content = @file_get_contents($token.".js");
$content = json_decode($content);
$content[]= array("kh",$token,time(),$ip,$contact,$message);
$content = json_encode($content);
file_put_contents($token.".js",$content);


?>