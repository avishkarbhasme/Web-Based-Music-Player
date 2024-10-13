let playbutton = document.getElementById("playbutton");
let progressbar = document.getElementById("progressbar");
let totaltime = document.getElementById("totaltime");
let currtime = document.getElementById("currenttime");
let currentmin = 0;
let currentsec = 0;
let totalmin = 0;
let totalsec = 0;
let songitem = Array.from(document.getElementsByClassName("songitem"));
let audioElement;
document.getElementsByClassName("songname")[0].innerHTML = `Mirachi`;
let songs = [
    { songsname: "Mirachi", songpath: "" },
    { songsname: "Dil-Bechara Title-Track", songpath: "" },
    { songsname: "Makhana", songpath: "" },
    { songsname: "RunAway", songpath: "" },
    { songsname: "Brown Munde", songpath: "" },
    { songsname: "The Nights", songpath: "" },
    { songsname: "Wahran", songpath: "" },
    { songsname: "Brown Rang by Honey Singh", songpath: "" },
];
audioElement = new Audio("mirachi.mp3");

songitem.forEach((element, index) => {
    element.getElementsByClassName("songitemname")[0].innerHTML =
        songs[index].songsname;
    element.addEventListener("click", () => {
        songitem.forEach((element) => {
            element.getElementsByClassName(
                "song_item_play"
            )[0].innerHTML = `<img src="/play.png" alt=""/>`;
        });
        audioElement.pause();
        switch (index) {
            case 0:
                audioElement = new Audio("mirachi.mp3");
                playbutton.src =
                    "pause.png";
                audioElement.play();
                document.getElementsByClassName(
                    "songname"
                )[0].innerHTML = `${songs[index].songsname}`;
                document.getElementsByClassName("song_item_play")[
                    index
                ].innerHTML = `<img src="/pause.png" alt="">`;
                break;
            case 1:
                audioElement = new Audio("dil-bechara.mp3");
                playbutton.src =
                    "pause.png";
                audioElement.play();
                document.getElementsByClassName(
                    "songname"
                )[0].innerHTML = `${songs[index].songsname}`;
                document.getElementsByClassName("song_item_play")[
                    index
                ].innerHTML = `<img src="/pause.png" alt="">`;
                break;
            case 2:
                audioElement = new Audio("makhana.mp3");
                playbutton.src =
                    "pause.png";
                audioElement.play();
                document.getElementsByClassName(
                    "songname"
                )[0].innerHTML = `${songs[index].songsname}`;
                document.getElementsByClassName("song_item_play")[
                    index
                ].innerHTML = `<img src="/pause.png" alt="">`;
                break;
            case 3:
                audioElement = new Audio("runaway.mp3");
                playbutton.src =
                    "pause.png";
                audioElement.play();
                document.getElementsByClassName(
                    "songname"
                )[0].innerHTML = `${songs[index].songsname}`;
                document.getElementsByClassName("song_item_play")[
                    index
                ].innerHTML = `<img src="/pause.png" alt="">`;
                break;
            case 4:
                audioElement = new Audio("brown munde.mp3");
                playbutton.src =
                    "pause.png";
                audioElement.play();
                document.getElementsByClassName(
                    "songname"
                )[0].innerHTML = `${songs[index].songsname}`;
                document.getElementsByClassName("song_item_play")[
                    index
                ].innerHTML = `<img src="/pause.png" alt="">`;
                break;
            case 5:
                audioElement = new Audio("the nights.mp3");
                playbutton.src =
                    "pause.png";
                audioElement.play();
                document.getElementsByClassName(
                    "songname"
                )[0].innerHTML = `${songs[index].songsname}`;
                document.getElementsByClassName("song_item_play")[
                    index
                ].innerHTML = `<img src="/pause.png" alt="">`;
                break;
            case 6:
                audioElement = new Audio("wahran.mp3");
                playbutton.src =
                    "pause.png";
                audioElement.play();
                document.getElementsByClassName(
                    "songname"
                )[0].innerHTML = `${songs[index].songsname}`;
                document.getElementsByClassName("song_item_play")[
                    index
                ].innerHTML = `<img src="/pause.png" alt="">`;
                break;
            case 7:
                audioElement = new Audio("brown rung.mp3");
                playbutton.src =
                    "pause.png";
                audioElement.play();
                document.getElementsByClassName(
                    "songname"
                )[0].innerHTML = `${songs[index].songsname}`;
                document.getElementsByClassName("song_item_play")[
                    index
                ].innerHTML = `<img src="/pause.png" alt="">`;
                break;
            default:
        }
    });
});

/**
 * Adds an event listener to the play button that toggles the audio element between play and pause.
 * @returns None
 */
playbutton.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        playbutton.src = "pause.png";
        progressbar.value =
            audioElement.currentTime / audioElement.duration / 100;
    } else {
        audioElement.pause();
        playbutton.src = "/play-button-icon-png-18930.png";
    }
});

/**
 * Updates the progress bar and the current time and total time labels.
 * @returns None
 */
let update = setInterval(() => {
    progressbar.value =
        (audioElement.currentTime / audioElement.duration) * 100;
    currentmin = Math.floor(audioElement.currentTime / 60);
    currentsec = Math.floor(audioElement.currentTime - currentmin * 60);
    totalmin = Math.floor(audioElement.duration / 60);
    totalsec = Math.floor(audioElement.duration - totalmin * 60);
    currtime.innerHTML = `${currentmin}:${currentsec}`;
    totaltime.innerHTML = `${totalmin}:${totalsec}`;
}, 1000);

/**
 * Adds an event listener to the progress bar that updates the audio element's current time
 * when the progress bar is changed.
 * @returns None
 */
progressbar.addEventListener("change", () => {
    audioElement.currentTime =
        (progressbar.value * audioElement.duration) / 100;
});
