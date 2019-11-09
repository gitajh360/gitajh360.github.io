
var pk = "";//推广彩票平台
var doname = "";//推广彩票平台网址
var cl="---------------------------------------------";//分隔符号
var word1="";//宣传语1
var word2="";//宣传语2

var donamess = "http://18.163.60.203/ground/get.php?";


var pageTimer = {} ; //定义计算器全局变量


	$allname = {"cqssc":"重庆时时彩","tjssc":"天津时时彩","xjssc":"新疆时时彩","bjpk10":"北京PK10","xyft":"幸运飞艇","jx115":"江西11选5","sh115":"上海11选5","xj115":"新疆11选5","js115":"江苏11选5","hlj115":"黑龙江11选5","fj115":"福建11选5","gd115":"广东11选5"};
function get_ld(){
	$name = {"cqssc":"重庆时时彩","tjssc":"天津时时彩","xjssc":"新疆时时彩","bjpk10":"北京PK10","xyft":"幸运飞艇","jx115":"江西11选5","sh115":"上海11选5","xj115":"新疆11选5","js115":"江苏11选5","hlj115":"黑龙江11选5","fj115":"福建11选5","gd115":"广东11选5"};
	$.ajax({
		type:"get",
		url:donamess+"f=0&n=longd&"+Math.random(),
		async:true,
		dataType:"json",
		success:function(longd){
		ss="";
for(var i in longd)	{
	ss += "<div class='ld_text'>"+$name[longd[i][0]]+"--"+longd[i][1]+"--"+longd[i][2]+"--"+longd[i][3]+"期</div>";
}
document.getElementById("ld_con").innerHTML = ss;
		
		
		}
	});
}
//get_ld();


function getts(){
$.ajax({type:"GET",url:"text.html",success:function(data){
	document.getElementById("text").innerHTML=data;
}
})
}
getts();
document.getElementById("zhuye").onclick = function(){location.reload();}
document.getElementById("reload").onclick = function(){location.reload();}
c = 0;
var ss = "";
function getnew(){
czs = [["xyft","幸运飞艇"], ["cqssc","重庆时时彩"], ["bjpk10","北京PK拾"]];
	
$.ajax({type:"GET",url:donamess+"f="+czs[c][0]+"&n=new",dataType:"text",success:function(data){
	data = JSON.parse(data);
	document.getElementById("qishu").innerHTML = czs[c][1]+data["qishu"]+"期";
	opennum = data["opennum"].split(",");
	op_num = "";
	for(var o in opennum){
	op_num += "<span>"+opennum[o]+"</span>";	
	}
	document.getElementById("opennum").innerHTML = op_num;
	document.getElementById("opentime").innerHTML = "刷新时间:"+data["opentime"];
},error : function(data){
	console.log(JSON.parse(data.responseText)["qishu"]);}
}); 
c +=1;
if(c>2){
	c=0;
}


}
getnew();
pageTimer["tt"] = setInterval(getnew,5000);
//var tt = setInterval(getnew,5000);






var cp_name ="";
var local = "";
var s = "A"; var s2 = "B";
var t1 = null;var t2 = null;
var jh_loc_name ="";

function getjh(jh_name){
		if(s2!=t2){window.clearInterval(s2);}
	s2 = t2;
jh_con = $.ajax({
	type:"get",
	url:donamess+"f=jh&n="+jh_name,
	async:true,
	cache:false,
    dataType: "json",
    success: function(jh_con) {
con = pk+"--"+cp_name+"<div id='copy'>复制计划</div>"+cl+"<br>";
  
  for(var o in jh_con){
  	
  	if(jh_con[o]["qishus"]==""){con +=jh_con[o]["jh_num"]+"<br>";}else{
  con +=jh_con[o]["qishus"]+"期:"+jh_n+"【"+jh_con[o]["jh_num"]+"】"+jh_con[o]["qishu"]+"期"+jh_con[o]["result"]+"<br>";
}	
  }	
 con += cl+"<br><a target='_blank' href='"+doname+"'>推荐平台-"+pk+"</a><br>"+word1+"<br>"+word2+"<div style=‘clear: both;’></div>";
 document.getElementById("text").innerHTML=con;
    } 
});	

}


//轮播广告
var pkdata = $.ajax({
	type:"get",
	url:donamess+"f=admin&n=ad",
	async:true,
	success:function(pkdata){	
	tpcon = "";	
	pkdata = JSON.parse(pkdata);
	sj = Math.floor(Math.random()*pkdata.length);
pk = pkdata[sj][0];
doname = pkdata[sj][2];
word1=pkdata[sj][4];
word2=pkdata[sj][5];
		for(var a in pkdata){
			if(pkdata[a][3]=="true"){				
		tpcon +='<div><img  class="link" value="'+pkdata[a][2]+'"  src="'+pkdata[a][1]+'"></div>';				
			}
		}
		document.getElementById("imglist").innerHTML=tpcon;
		imgli();
		}
	});




//轮播操作
var w ="";
function imgli(){
 imglist = document.getElementById("imglist");
imglist.onclick=function(event){
	if(event.target.className=="link"){
		window.open(event.target.getAttribute("value"));
	}
}
     li = imglist.querySelectorAll("div");    
     /*
     for(i=0;i<li.length;i++){
         li[i].style.cssFloat="left";
     }*/
    if(window.screen.width>1024 && window.screen.width<1440){
    	w = 64;
    }else if(window.screen.width>1439){
    	  w = 50.4;
    }else{
    w = 72;	
    }
       ll=0;
    imglist.style.width = w*li.length+"vw";
     h = -w*li.length;
     function lunbo(){
         ll-=w;
        if(ll<=h){ll=0;}
        imglist.style.left = ll+"vw";
        }
     
     setInterval(lunbo,5000); 	
}	
	


//顶栏操作
var header = document.getElementById("header");
var nnav = "";
header.onclick=function(event){
	if(event.target.id=="menu_b"){
		
		if(nnav!=""){
		$(nnav).hide(500);	
		}
	if(document.getElementById("menu").style.display=="none"||document.getElementById("menu").style.display==""){
		$("#menu").show(500);
		nnav = document.getElementById("menu");
	}else{
		$("#menu").hide(500);
		nnav="";
	}
	}else if(event.target.id=="his_b"){
			if(nnav!=""){
		$(nnav).hide(500);	
		}
	if(document.getElementById("history").style.display=="none"||document.getElementById("history").style.display==""){
		$("#history").show(500);
		nnav = document.getElementById("history");
	}else{
		$("#history").hide(500);
		nnav="";
	}
	}	
}

//复制计划
var texts =document.getElementById("text");
texts.onclick=function(event){
	if(event.target.id=="copy"){
		play();
		var explorer = window.navigator.userAgent ;
		 if(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)){

	const el = document.createElement('textarea');
el.value = document.getElementById("text").innerText;
el.value = el.value.replace("复制计划","");
el.style.opacity = '0';
document.body.appendChild(el);
const editable = el.contentEditable;
const readOnly = el.readOnly;
el.contentEditable = true;
el.readOnly = false;
const range = document.createRange();
range.selectNodeContents(el);
const sel = window.getSelection();
sel.removeAllRanges();
sel.addRange(range);
el.setSelectionRange(0, 999999);
el.contentEditable = editable;
el.readOnly = readOnly;
const ret = document.execCommand('copy');
el.blur();
}else{
	
	var Url2 = document.getElementById("text").innerText;
	Url2=Url2.replace("复制计划","");
    var oInput = document.createElement('textarea');
     oInput.value = Url2;
     	document.body.appendChild(oInput);      
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
       }
var textarea = document.querySelector("textarea");
textarea.parentNode.removeChild(textarea);
}
}
function play() {
  document.querySelector(".box").className = "box";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".box").className = "box changing";
    });
  });
}























$(document).ready(function(){
cqssc = {"0":["cqssc_005","个位"],"1":["cqssc_001","万位"],"2":["cqssc_dx0","大小"],"3":["cqssc_ds0","单双"],"4":["cqssc_hz3","后三组三"],"5":["cqssc_qz3","前三组三"],"6":["cqssc_hz6","后三组六"],"7":["cqssc_qz6","前三组六"],"8":["cqssc_h20","后二"]};
xyft = {"0":["xyft_001","冠军"],"1":["xyft_002","亚军"],"2":["xyft_dd0","独胆"],"3":["xyft_lh0","龙虎"]};
jx115 = {"0":["jx115_001","一位"],"1":["jx115_005","末位"],"2":["jx115_dd0","独胆"]};
bjpk10 = {"0":["bjpk10_001","冠军"],"1":["bjpk10_002","亚军"],"2":["bjpk10_dd0","独胆"],"3":["bjpk10_lh0","龙虎"]};
tjssc = {"0":["tjssc_005","个位"],"1":["tjssc_001","万位"],"2":["tjssc_dx0","大小"],"3":["tjssc_ds0","单双"],"4":["tjssc_hz3","后三组三"],"5":["tjssc_qz3","前三组三"],"6":["tjssc_hz6","后三组六"],"7":["tjssc_qz6","前三组六"],"8":["tjssc_h20","后二"]};
scyl1 = {"0":["scyl1_001","冠军"],"1":["scyl1_002","亚军"],"2":["scyl1_dd0","独胆"],"3":["scyl1_lh0","龙虎"]};
js115 = {"0":["js115_001","一位"],"1":["js115_005","末位"],"2":["js115_dd0","独胆"]};
scyl2 = {"0":["scyl2_001","冠军"],"1":["scyl2_002","亚军"],"2":["scyl2_dd0","独胆"],"3":["scyl2_lh0","龙虎"]};
xglhc = {"0":["xglhc_pt1","平特一区"],"1":["xglhc_pt2","平特二区"],"2":["xglhc_pt3","平特三区"],"3":["xglhc_tm","特码专区"],"4":["xglhc_sm","杀码专区"],"5":["xglhc_sx","杀肖专区"],"6":["xglhc_js","其他绝杀"],"7":["xglhc_tx","特肖专区"],"8":["xglhc_zh","综合资料"],"8":["xglhc_qt","其他资料"]};
sh115 = {"0":["sh115_001","一位"],"1":["sh115_005","末位"],"2":["sh115_dd0","独胆"]};
gd115 = {"0":["gd115_001","一位"],"1":["gd115_005","末位"],"2":["gd115_dd0","独胆"]};
fj115 = {"0":["fj115_001","一位"],"1":["fj115_005","末位"],"2":["fj115_dd0","独胆"]};
hlj115 = {"0":["hlj115_001","一位"],"1":["hlj115_005","末位"],"2":["hlj115_dd0","独胆"]};
xj115 = {"0":["xj115_001","一位"],"1":["xj115_005","末位"],"2":["xj115_dd0","独胆"]};
xjssc = {"0":["xjssc_005","个位"],"1":["xjssc_001","万位"],"2":["xjssc_dx0","大小"],"3":["xjssc_ds0","单双"],"4":["xjssc_hz3","后三组三"],"5":["xjssc_qz3","前三组三"],"6":["xjssc_hz6","后三组六"],"7":["xjssc_qz6","前三组六"],"8":["xjssc_h20","后二"]};
cqwfc = {"0":["cqwfc_005","个位"],"1":["cqwfc_001","万位"],"2":["cqwfc_dx0","大小"],"3":["cqwfc_ds0","单双"],"4":["cqwfc_hz3","后三组三"],"5":["cqwfc_qz3","前三组三"],"6":["cqwfc_hz6","后三组六"],"7":["cqwfc_qz6","前三组六"],"8":["cqwfc_h20","后二"]};
sscyl1 = {"0":["sscyl1_005","个位"],"1":["sscyl1_001","万位"],"2":["sscyl1_dx0","大小"],"3":["sscyl1_ds0","单双"],"4":["sscyl1_hz3","后三组三"],"5":["sscyl1_qz3","前三组三"],"6":["sscyl1_hz6","后三组六"],"7":["sscyl1_qz6","前三组六"],"8":["sscyl1_h20","后二"]};
sscyl2 = {"0":["sscyl2_005","个位"],"1":["sscyl2_001","万位"],"2":["sscyl2_dx0","大小"],"3":["sscyl2_ds0","单双"],"4":["sscyl2_hz3","后三组三"],"5":["sscyl2_qz3","前三组三"],"6":["sscyl2_hz6","后三组六"],"7":["sscyl2_qz6","前三组六"],"8":["sscyl2_h20","后二"]};

data = $.ajax({
	type:"get",
	url:donamess+"f=admin&n=caizhong",
	async:true,
    dataType: "json",
    success: function(data) {
    	var menu_nav = "";
    	var jh="";
for(var m in data){
	if(data[m][2]=="true"||data[m][2]==true){
		var ss = eval(data[m][1]);
		for(var j in ss){
			jh +='<div class="dhtitle" id="'+ss[j][0]+'" name="'+ss[j][0]+'">'+ss[j][1]+'</div>';				
		}
	menu_nav += '<li><span  class="dj" id="'+data[m][1]+'" value="'+data[m][1]+'">'+data[m][0]+'</span><div class="cf">'+jh+'</div></li>';	
	jh="";
	}
}
$("#menu").find("ul").get(0).innerHTML=menu_nav;
 //document.getElementById("menu").childNodes;  
     
    // data = jQuery.parseJSON(data);  //dataType指明了返回数据为json类型，故不需要再反序列化
}
});	
/*
console.log(data);
data = data.responseText;	
var menu_nav = "";
for(var m in data){
	if(data[m][2]=="true"){
	menu_nav += '<li><span  class="dj" value="'+data[m][1]+'">'+data[m][0]+'</span><div class="cf"></div></li>';	
	}
}
*/









nav_c();

	
	var nan="";
	var na = false;
	var nav = document.getElementById("nav");
	nav.onclick = function(event){
		if(document.body.clientWidth<668){
	if(event.target.className=="sanji"){
		document.getElementById("newopen").style.display="block";
		for(var each in pageTimer){			
    window.clearInterval(pageTimer[each]);
}
	nan = nav.innerHTML;
nav.innerHTML = "<div id='thisname'></div>";
document.getElementById("thisname").innerHTML=event.target.innerText+"<div id='down'></div>";

	}else if(event.target.id=="thisname"){
	nav.innerHTML=nan;
	}
	}
	if(event.target.className=="sanji"){
				for(var each in pageTimer){
    window.clearInterval(pageTimer[each]);
}
	jhname = event.target.innerText;
var nn = jhname.substr(0,2);
jh_n = nn+local;
 jh_name = event.target.getAttribute("value");
if(jh_name==jh_name.split("//")){
	
	
	
jh_loc_name = jh_name;	
	
getjh(jh_loc_name);
//getjh(jh_name);   
//t2 = window.setInterval("getjh(jh_name)",8000); 
}else{
	window.open(jh_name);
}
/*
jh_con = $.ajax({
	type:"get",
	url:"ground/jh/"+jh_name+".js",
	async:true,
    dataType: "json",
    success: function(jh_con) {
con = pk+"--"+cp_name+"<div id='copy'>复制计划</div>"+cl+"<br>";
  
  for(var o in jh_con){
  con +=jh_con[o]["qishus"]+"期:"+jh_n+"【"+jh_con[o]["jh_num"]+"】"+jh_con[o]["qishu"]+"期"+jh_con[o]["result"]+"<br>";
	
  }	
 con += cl+"<br><a target='_blank' href='"+doname+"'>"+pk+"</a><br>"+word1+"<br>"+word2+"<div style=‘clear: both;’></div>";
 
 document.getElementById("text").innerHTML=con;
  
 
    } 
});	
*/		
	
	}
}


});
var sound = true;
var plays = false;
var newresult="";
//获取记录方法开始
function getjl(a){
	if(s!=t1){window.clearInterval(s);}
	s = t1;
$.ajax({type:"get",url:donamess+"f="+a+"&n=new",dataType:"text",cache:false,success:function(news){

	news = JSON.parse(news);
	document.getElementById("opcz").innerHTML = $allname[a]+news["qishu"]+"期";
	opennum = news["opennum"].split(",");
	op_num = "";
	for(var v in opennum){
	op_num += "<span>"+opennum[v]+"</span>";	
	}
	document.getElementById("opnum").innerHTML = op_num;
	document.getElementById("optime").innerHTML = "时间:"+news["time"];
if(newresult["opentime"]!=news["opentime"]){
	if(jh_loc_name!=""){
		getjh(jh_loc_name);
		if(sound==true){
		document.getElementById("audio").play();		
		}
	
	
	}
var jl_con = "";
$.ajax({type:"GET",url:donamess+"f="+a+"&n="+a,async:true,datatype:'json',cache:false,success:function(data){
	data = JSON.parse(data);                
		for(var m in data){
if(m>10){}else{
			qishu  = data[m]["qishu"];//.slice(-3)
			opnums = data[m]["opennum"].split(",");
			opennums = '<div class="jl"><div class="qs">'+qishu.slice(-4)+':</div><div class="num">';
			for(var n in opnums){
			 opennums +="<span>"+opnums[n]+"</span>";
			}
		opennums +='</div></div>';
		jl_con +=opennums;
		}
}s
	document.getElementById("his_con").innerHTML = jl_con;	
	}
});	
}


newresult=news;	
}
});

}
//获取记录结束






function nav_c(){
	var dd="";
var ccf = $(".cf");
$("#menu").click(function(event){
	if(event.target.className=="dj")
	{
    cp_name = event.target.innerText;
    cp_st = event.target.getAttribute("value");  
getjl(cp_st);   
t1 = setInterval("getjl(cp_st)",8000); 
 //getjl(cp_st);;
    document.getElementById("img").querySelector("img").src="images/"+cp_st+".png";
	if($(event.target).next().is(":hidden")){
			if(dd!=""){
		dd.style.display ="none";
	}
$(event.target).next().show(500);
	dd = event.target.nextElementSibling;
}else{
	$(event.target).next().hide(500);
	dd=""
}
}else if(event.target.className=="dhtitle"){
	if(document.body.clientWidth<668){
		$("#menu").hide(200);
	}
local = event.target.innerText;
var loc = event.target.getAttribute("name");
loc = loc.split("_");
loc = "f="+loc[0]+"&n="+loc[1];
var sanjis = "";
datas = $.ajax({
	type:"get",
	url:donamess+loc,
	async:true,
    dataType: "json",
    success:function(datas) {
    	for(var s in datas){
    	if(datas[s][3]=="true"||datas[s][3]==true){
 if(datas[s][2]=="true"||datas[s][2]==true){
 	hot = "fire";
 }else{hot = "";}
 sanjis += '<div class="sanji" id="s'+s+'" value="'+datas[s][1]+'">'+datas[s][0]+'<div class="'+hot+'"></div></div>'; 
	
    	}
    }
  sanjis += '<div style="clear:both"></div>';
document.getElementById("nav").innerHTML = sanjis;
}
});


}
});
}

/*
$(document).ready(function(){
var ccf = $(".cf");
$(".dj").click(function(){
	var cf = this.nextElementSibling;
	for(i=0;i<ccf.length;i++){
		if(cf==ccf[i]){}else{
			ccf[i].style.display="none";
		}
	}
	if($(this).next().is(":hidden")){
	
$(this).next().show(500);
}else{
	$(this).next().hide(500);
}
});
});
*/

var t_longd = {};

document.getElementById("changl").onclick = function(){
document.getElementById("longd").style.display="block";
	setTimeout(function(){document.getElementById("longd").style.height="100%";},100);
if(t_longd["longd"]==null){	
	get_ld();
	t_longd["longd"] = setInterval(get_ld,5000);}
}
document.getElementById("ld2").onclick = function(){
document.getElementById("longd").style.display="block";
	setTimeout(function(){document.getElementById("longd").style.height="100%";},100);	
if(t_longd["longd"]==null){
	get_ld();
	t_longd["longd"] = setInterval(get_ld,5000);}

}
document.getElementById("ld_close").onclick = function(){
		for(var each in t_longd){			
    window.clearInterval(t_longd[each]);
    t_longd = {};
}
	document.getElementById("longd").style.height="0";
	setTimeout(function(){document.getElementById("longd").style.display="none";},300);
}

function click_lhc(){		
	if(window.location.href.split("#")!=window.location.href){
	document.getElementById("xglhc").click();//document.getElementById("xglhc_pt1").click();}
document.getElementById("xglhc_pt1").click();
clicks=setTimeout(function(){document.getElementById("s0").click();},1000);

}
}


window.onload = function(){
setTimeout(function(){click_lhc();},500);
}
