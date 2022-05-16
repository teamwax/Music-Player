music_name = "If You Were Here.mp3"
let play_btn = document.querySelector("#play");
let prev_btn = document.querySelector("#next");
let next_btn = document.querySelector("#prev");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img");
let isPlaying = false;
let duration = 0;
let currentTime = 0;
let Song = new Audio();
window.onload = playsong;


function playsong(){
    Song.src = music_name;
    console.log(Song)

    play_btn.addEventListener('click' ,function(){
         if(!isPlaying){
            Song.play();
            isPlaying = true;
            duration = Song.duration;
            range.max = duration;
            play_img.src = "stopthatrightnow.png";
         }else{
            Song.pause();
            isPlaying = false;
            play_img.src = "letsplay.png"; 
        }
       
        range.addEventListener('change',function(){  
            Song.currentTime = range.value;
        })

        Song.addEventListener('timeupdate',function(){
             range.value = Song.currentTime;
        })  
        Song.addEventListener('ended',function(){
            Song.currentTime = 0;
            Song.pause();
            isPlaying = false;
            range.value = 0;
            play_img.src = "letsplay.png";

        })

    })

}
