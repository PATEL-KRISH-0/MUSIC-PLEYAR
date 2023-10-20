const sondDitels = [
    {
        songName: "i heat love",
        songSrc: "songs/1.mp3",
        articeName: "lisa",
        potho: "images/1.png"
    },

    {
        songName: "i love you",
        songSrc: "songs/2.mp3",
        articeName: "baby",
        potho: "images/55.jpg"
    },

    {
        songName: "only love",
        songSrc: "songs/3.mp3",
        articeName: "your lover",
        potho: "images/66.jpg"
    },
    {
        songName: "Symphony",
        songSrc: "songs/4.mp3",
        articeName: "nightcore",
        potho: "images/4.jpg"
    },
    {
        songName: "I am a MESS",
        songSrc: "songs/5.mp3",
        articeName: "nightcore",
        potho: "images/5.jpg"
    }
];

let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let playy = document.querySelector(".play-Btn");
let sonngg = document.querySelector(".songs");
let pauses = document.querySelector(".pauses")
let songIndex = 0;

playy.onclick = () => {
    sonngg.play();
    playy.classList.add("disnon");
    pauses.classList.remove("disnon")
}
pauses.onclick = () => {
    sonngg.pause();
    playy.classList.remove("disnon");
    pauses.classList.add("disnon")

}

num = 1
const nestFunction = (sond) => {


    let songSrcc = document.querySelector(".songs");
    let logos = document.querySelector(".main-Logo");
    let Titlee = document.querySelector(".s-Title");
    let articee = document.querySelector(".s-artice");
    let musicPleyr = document.querySelector(".music-Pleyar");

    songSrcc.setAttribute("src", sond.songSrc)
    logos.setAttribute("src", sond.potho)
    Titlee.innerHTML = sond.songName
    articee.innerHTML = sond.articeName

    if (num == sondDitels.length) {
        musicPleyr.classList.remove(`p${sondDitels.length - 1}`)
        num = 0;
    }
    musicPleyr.classList.add(`p${num}`)
    musicPleyr.classList.remove(`p${(num - 1)}`)
    num++

    if (playy.classList.contains("disnon")) {
        sonngg.play();
        playy.classList.add("disnon");
        pauses.classList.remove("disnon")
    }
}


const net = () => {
    songIndex++
    if (songIndex == sondDitels.length) {
        songIndex = 0;
    }
    nestFunction(sondDitels[songIndex])
}
next.addEventListener("click", net);



const preFunction = (sond) => {
    let songSrcc = document.querySelector(".songs");
    let logos = document.querySelector(".main-Logo");
    let Titlee = document.querySelector(".s-Title");
    let articee = document.querySelector(".s-artice");
    let musicPleyr = document.querySelector(".music-Pleyar");

    songSrcc.setAttribute("src", sond.songSrc)
    logos.setAttribute("src", sond.potho)
    Titlee.innerHTML = sond.songName
    articee.innerHTML = sond.articeName

    num--
    if (num == 0) {
        num = sondDitels.length
        console.log(sondDitels.length);
        musicPleyr.classList.add(`p${[sondDitels.length - 1]}`)
        musicPleyr.classList.remove(`p${0}`)
    }
    else {
        musicPleyr.classList.remove(`p${num}`)
        musicPleyr.classList.add(`p${num - 1}`)
    }

    if (playy.classList.contains("disnon")) {
        sonngg.play();
        playy.classList.add("disnon");
        pauses.classList.remove("disnon")
    }
}

const pre = () => {
    songIndex--
    if (songIndex == -1) {
        songIndex = sondDitels.length - 1;
    }
    preFunction(sondDitels[songIndex])
}
previous.addEventListener("click", pre);


