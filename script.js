document.addEventListener("DOMContentLoaded", function(){

    const progress = document.getElementById("progress");
    const song = document.getElementById("song");
    const playIcon = document.getElementById("playIcon");
    const icon = document.querySelector(".icon");

    song.onloadedmetadata = function(){
        progress.max = song.duration;
        progress.value = song.currentTime;
    }

    

    icon.addEventListener("click", playPause);

    function playPause(){
        if(playIcon.classList.contains("fa-pause")){
            song.pause();
            playIcon.classList.remove("fa-pause");
            playIcon.classList.add("fa-play");
        }
        else{
            song.play();
            playIcon.classList.add("fa-pause");
            playIcon.classList.remove("fa-play");
        }
    }

    if(song.play){
        setInterval(()=>{
            progress.value = song.currentTime;
        },500)
    }
    progress.onchange = function(){
        song.play();
        song.currentTime = progress.value;
        playIcon.classList.add("fa-pause");
        playIcon.classList.remove("fa-play");
    }
    
   
})