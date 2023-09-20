var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle="pink";
ctx.lineWidth=7;

function degToRad (degree){
var factor = Math.PI/180;
return degree*factor;
}

function renderTime()
{
 var now = new Date();
 var today = now.toDateString();
 var time = now.toLocaleTimeString();
 var hours = now.getHours();
 var minutes = now.getMinutes();
 var seconds = now.getSeconds();
 var milliseconds = now.getMilliseconds();
 var newSeconds = seconds + (milliseconds/1000);

 //taust
 const grd = ctx.createRadialGradient(10, 100, 100, 100, 90, 1000);
 grd.addColorStop(0, "rgba(52,52,90,1)");
 grd.addColorStop(1, "green");
 ctx.fillStyle = grd;

// ctx.fillRect(0, 0, 1000, 1000);
ctx.fillRect(150, 210, 230, 80);



 //tunnid
 ctx.beginPath();
 ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*30)-90));
 ctx.stroke();

 //minutid
 ctx.beginPath();
 ctx.arc(250,250,170,degToRad(270),degToRad((minutes*6)-90));
 ctx.stroke();

 //sekundid
 ctx.beginPath();
 ctx.arc(250,250,140,degToRad(270),degToRad((newSeconds*6)-90));
 ctx.stroke();

 //kuupäev
 ctx.font="24px Arial";
 ctx.fillStyle="black";
 ctx.fillText(today,175,250);

 //aeg e. mis kell on
 ctx.font="16px Helvetica";
 ctx.fillStyle="pink";
 ctx.fillText(time,175,270);


}
setInterval(renderTime,40);