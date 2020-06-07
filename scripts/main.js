let song = new Audio;
let muted = false;
let icon_playpause = false
let vol = 1;
song.type = 'audio/mpeg';
let slider= document.querySelector('.slider')
song.src= 'audio_video/audio_1.mp3';
let music1 = document.querySelector('.music1')
let music2 = document.querySelector('.music2')
let music3 = document.querySelector('.music3')
let music4 = document.querySelector('.music4')
let music5 = document.querySelector('.music5')
let loop_state = document.querySelector('#loop')
let colorborder= document.getElementById('loop')


	music1.addEventListener('click',() =>{
	song.src='audio_video/audio_1.mp3' 
	song.play()
	document.querySelector('.icon_playpause').innerHTML = '<i class="fa fa-pause"></i>'

})
	
	music2.addEventListener('click',() =>{
	song.src='audio_video/audio_2.mp3' 
	song.play()
	document.querySelector('.icon_playpause').innerHTML = '<i class="fa fa-pause"></i>'

})

	
	music3.addEventListener('click',() =>{
	song.src='audio_video/audio_3.mp3' 
	song.play()
	document.querySelector('.icon_playpause').innerHTML = '<i class="fa fa-pause"></i>'

})

music4.addEventListener('click',() =>{
	song.src='audio_video/audio_4.mp3' 
	song.play()
	document.querySelector('.icon_playpause').innerHTML = '<i class="fa fa-pause"></i>'

})

	
	music5.addEventListener('click',() =>{
	song.src='audio_video/audio_5.mp3' 
	song.play()
	document.querySelector('.icon_playpause').innerHTML = '<i class="fa fa-pause"></i>'

})


function skip(time) {
	if (time == 'back') {
		song.currentTime = (song.currentTime - 5);
	} else if (time == 'fwd') {
		song.currentTime = (song.currentTime + 5);
	}

}




function playpause() {
	if (!song.paused) {
		song.pause()
		icon_playpause = false
		document.querySelector('.icon_playpause').innerHTML = '<i class="fa fa-play"></i>';			
	} else {
		song.play();
		icon_playpause = true
		document.querySelector('.icon_playpause').innerHTML = '<i class="fa fa-pause"></i>';
		}
}



function stop() {
	song.pause();
	song.currentTime = 0;
	document.querySelector('.seek').value = 0;
	icon_playpause = false
	document.querySelector('.icon_playpause').innerHTML = '<i class="fa fa-play"></i>';

}


loop_state.addEventListener('click',() =>{

	loop_state = !loop_state
	if(loop_state==true){
		colorborder.style.borderColor = "blue";
	}
	if(loop_state==false){
		colorborder.style.borderColor = "red";
	}
})



function loop(){
	if(loop_state == true && song.currentTime == song.duration){
		song.currentTime = 0;
		song.play();
		}	
	}
	


function setPos(pos) {
	song.currentTime = pos;
}


function mute() {
	if (muted) {
		song.volume = vol;
		muted = false;
		document.querySelector('.mute').innerHTML = '<i class="fa fa-volume-up"></i>';
	} else {
		song.volume = 0;
		muted = true;
		document.querySelector('.mute').innerHTML = '<i class="fa fa-volume-off"></i>';
	}
}



function setVolume(volume) {
	song.volume = volume;
	vol = volume;
}



function display_time() 
{
	if (parseInt(curtime)/60>=1) {
        let h = Math.floor(curtime / 3600);
        curtime = curtime - h * 3600;               
        let m = Math.floor(curtime / 60);
        let s = Math.floor(curtime % 60);
        if(h.toString().length<2){h='0'+h;}
        if(m.toString().length<2){m='0'+m;}
        if(s.toString().length<2){s='0'+s;}
		document.querySelector('.time').innerHTML = m+' : '+s;         
	} 
	else {
        var m = Math.floor(curtime / 60);
        var s = Math.floor(curtime % 60);
        if(m.toString().length<2){m='0'+m;}
        if(s.toString().length<2){s='0'+s;}
		document.querySelector('.time').innerHTML = m+' : '+s;  
   		
}	
}

song.addEventListener('timeupdate',() => {
	curtime = parseInt(song.currentTime,10);
	document.querySelector('.seek').max = song.duration;
	document.querySelector('.seek').value = curtime;
	display_time()

	if(loop_state == true){
		loop()	
	}
})


