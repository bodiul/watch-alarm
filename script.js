// step 0 - set the audio clip
const audio = new Audio("asstes/audio-clip.mp3");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;
// step 1 - digital clock
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let preiod = document.getElementById('preiod');
let clock = setInterval(
    function time(){
        let date_now = new Date();
        let hr = date_now.getHours();
        let min = date_now.getMinutes();
        let sec = date_now.getSeconds();
        preiod.innerText = "AM";
        if(hr >= 12){
            preiod.innerText = "PM"
        }
        if(hr == 0){
            hr = 12;
        }
        if(hr > 12){
            hr = hr - 12;
        }
        hr = hr < 10 ? '0' + hr : hr;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        hour.textContent = hr;
        minute.textContent = min;
        second.textContent = sec;
    },1000);
// step 2 - set the alarm
function setAlarmTime(value){
    alarmTime = value;
}
function setAlarm(){
    alert(alarmTime);
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(function(){
                audio.play();
            },timeout);
            alert('Alarm set!');
        }
    }
}
// step 3 - clear the alarm
function clearAlarm(){
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert('Alarm Clear!');
    }
}




