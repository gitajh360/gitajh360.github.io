sd_io = document.getElementById("sound");

sd_io.onclick = function(){
if(sound==true){
sd_io.innerHTML = '<img src="images/sound.png">';
sound=!sound;
}else{
sd_io.innerHTML = '<img src="images/no-sound.png">';
sound=!sound;
}

}

sd_io_2 = document.getElementById("sd2");
sd_io_2.onclick = function(){
if(sound==true){
sd_io_2.innerHTML = '<img src="images/no-sound.png"><div>声音</div>';
sound=!sound;
}else{
sd_io_2.innerHTML = '<img src="images/sound.png"><div>静音</div>';
sound=!sound;
}

}
