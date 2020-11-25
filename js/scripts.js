document.body.style.backgroundColor = '#000000';
var normalimage = document.createElement('img');
var mooddiv = document.getElementById('moodimage');
normalimage.src = 'art/normaldog.jpg';
mooddiv.appendChild(normalimage);

var timetobork;
//document.getElementById('moodimage').style.backgroundImage  = "url('data:image/jpeg;base64,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')";
//function to get time
function whattime(){
	var d  = new Date();
	var h = d.getHours();
	if(h<10){h = "0"+h;}
	var m = d.getMinutes();
	if(m<10){m = "0"+m;}
	var s = d.getSeconds();
	if(s<10){s = "0"+s;}
	var r = h+":"+m+":"+s;
	return r;
}

//function to append time to clock div 
function starttheclock(){
	var time = document.createElement('H1');
	time.setAttribute("id", "borkerwatch");
	time.setAttribute('style','color : red');
	var t = document.createTextNode('['+whattime()+']');
	time.appendChild(t);
	document.getElementById('digiclock').appendChild(time);
}

function updatetheclock(){
	var time = document.getElementById('borkerwatch');
	console.log(time);
	var t= time.childNodes[0];
	t.nodeValue='['+whattime()+']';
}

starttheclock();
setInterval(function(){updatetheclock(); }, 1000); //loop to update time every second
//implementing the alarm
/*function printtime(hour){
	console.log(hour);

}*/
function attackTime(lol){
	var res = lol.value+":00";
	timetobork=res;
	return res;
}
var at = attackTime();
console.log(at);
/*function letshavefun(some){
	if(whattime()==some){
		console.log("success");
	}
}*/
