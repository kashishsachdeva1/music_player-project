 console.log("Welcome to Spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('content/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
// let bottomimg = document.getElementsByClassName('bottomimg');
let songs =
[

    {songName:"Let me Love you - (Justin Beiber)", filePath:"content/songs/1.mp3", coverpath:"content/covers/cover1.jpeg"},
    {songName:"Kala Chashma - Baar Baar Dekho", filePath:"content/songs/2.mp3", coverpath:"content/covers/cover2.jpeg"},
    {songName:"Jag Ghoomeya - Sultan(2016)", filePath:"content/songs/3.mp3", coverpath:"content/covers/cover3.jpg"},
    {songName:"Kabil Hoon - Kabil", filePath:"content/songs/4.mp3", coverpath:"content/covers/cover4.jpg"},
    {songName:"BournVita - (Jassi Gill)PagalSongs.Com", filePath:"content/songs/5.mp3", coverpath:"content/covers/cover5.jpeg"},
    {songName:"Dil - (Ninja)PagalSongs.Com", filePath:"content/songs/6.mp3", coverpath:"content/covers/cover6.jpg"},
    {songName:"Att Karti - (Jassi Gill)PagalSong.Com", filePath:"content/songs/7.mp3", coverpath:"content/covers/cover7.jpeg"},
    {songName:"Fashion - (Guru Randhawa)", filePath:"content/songs/8.mp3", coverpath:"content/covers/cover8.jpg"},
    {songName:"Horn Blow - (Harrdy Sandhu)", filePath:"content/songs/9.mp3", coverpath:"content/covers/cover9.jpg"}
]
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// let audioElement = new Audio("content/1.mp3");
// audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>
    {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `content/songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})




document.getElementById('c').addEventListener('click', ()=>
{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else{

        songIndex +=1;
    }
    
    audioElement.src = `content/songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})

document.getElementById('a').addEventListener('click', ()=>
{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{

        songIndex -=1;
    }
    audioElement.src = `content/songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
