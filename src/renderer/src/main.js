let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "pink";
ctx.lineWidth = 2;

function degToRad(degree) {
    var factor = Math.PI / 180;
    return degree * factor;
}

function renderTime() {
    var now = new Date();
    var today = now.toDateString();
    var time = now.toLocaleTimeString();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    var newSeconds = seconds + (milliseconds / 1000);





    // kontrolli aega soovide jaoks
    var isMorning = hours >= 5 && hours < 12;
    var isAfternoon = hours >= 12 && hours < 17;
    var isEvening = hours >= 17 && hours < 21;
    var isNight = hours >= 21 && hours < 4;

    // Bg
    const grd = ctx.createRadialGradient(10, 100, 100, 100, 90, 1000);
    grd.addColorStop(0, "rgba(52,52,90,1)");
    grd.addColorStop(1, "green");
    ctx.fillStyle = grd;

    ctx.fillRect(150, 210, 230, 80);


    // kuupäev
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(today, 175, 250);
    // aeg
    ctx.font = "16px Helvetica";
    ctx.fillStyle = "pink";
    ctx.fillText(time, 175, 270);

    /*    // tund
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hours * 30) - 90));
    ctx.stroke();
    // minut
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes * 6) - 90));
    ctx.stroke();
    // sekund
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds * 6) - 90));
    ctx.stroke();*/




if(now) {
            // Positsioon
            var centerX = 175 + textWidth / 2;  // X-koord ring. kesk
            var centerY = 400;  // Y-koord
            var radius = Math.max(textWidth, textHeight) / 1.5;  // Raadius
    
            // Ring
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(50, 0, 0, 0.5)";
            ctx.fill();
                    var textWidth = ctx.measureText(text).width;
}

    if (isMorning) {
        // Font
        ctx.font = "24px Arial";
        var text = "Good morning!";
        var textWidth = ctx.measureText(text).width;
        var textHeight = 24;

        // Positsioon
        var centerX = 175 + textWidth / 2;  // X-koord ring. kesk
        var centerY = 400;  // Y-koord
        var radius = Math.max(textWidth, textHeight) / 1.5;  // Raadius

        // Ring
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(50, 0, 0, 0.5)";
        ctx.fill();

        // Tekst
        ctx.fillStyle = "white";
        ctx.fillText(text, centerX - textWidth / 2, centerY + textHeight / 2);  // Y-koord
    }

    else if (isAfternoon) {
        var text = "Good Afternoon!";
    }

    else if (isEvening) {
        var text = "Good Evening!";
    }

    else if (isNight) {
        var text = "Good Night!";
    }
}

setInterval(renderTime, 40);
