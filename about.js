let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")




btn1.addEventListener("click", ()=>{

    let audio = new Audio("sounds/boom.wav")

    btn1.innerHTML =   audio.play(audio)
    btn1.innerHTML = "boom"
    setTimeout(()=>{
        btn1.innerHTML = "1" 
    }, 2000)
})

btn2.addEventListener("click", ()=>{

    let audio = new Audio("sounds/clap.wav")

    btn2.innerHTML =   audio.play(audio)
    btn2.innerHTML = "clap"
    setTimeout(()=>{
        btn2.innerHTML = "2"
    }, 2000)
})

btn3.addEventListener("click", ()=>{

    let audio = new Audio("sounds/hihat.wav")

    btn3.innerHTML =   audio.play(audio)
    btn3.innerHTML = "hithat"
    setTimeout(()=>{
        btn3.innerHTML = "3"
    }, 2000)
})

btn4.addEventListener("click", ()=>{

    let audio = new Audio("sounds/kick.wav")

    btn4.innerHTML =   audio.play(audio)
    btn4.innerHTML = "kick"
    setTimeout(()=>{
        btn4.innerHTML = "4"
    }, 2000)
})

btn5.addEventListener("click", ()=>{

    let audio = new Audio("sounds/openhat.wav")

    btn5.innerHTML =   audio.play(audio)
    btn5.innerHTML = "openhat"
    setTimeout(()=>{
        btn5.innerHTML = "5"
    }, 2000)
})

btn6.addEventListener("click", ()=>{

    let audio = new Audio("sounds/ride.wav")

    btn6.innerHTML =   audio.play(audio)
    btn6.innerHTML = "ride"
    setTimeout(()=>{
        btn6.innerHTML = "6"
    }, 2000)
})

btn7.addEventListener("click", ()=>{

    let audio = new Audio("sounds/snare.wav")

    btn7.innerHTML =   audio.play(audio)
    btn7.innerHTML = "snare"
    setTimeout(()=>{
        btn7.innerHTML = "7"
    }, 2000)
})

btn8.addEventListener("click", ()=>{

    let audio = new Audio("sounds/tink.wav")

    btn8.innerHTML =   audio.play(audio)
    btn8.innerHTML = "tink"
    setTimeout(()=>{
        btn8.innerHTML = "8"
    }, 2000)
})

btn9.addEventListener("click", ()=>{

    let audio = new Audio("sounds/tom.wav")

    btn9.innerHTML =   audio.play(audio)
    btn9.innerHTML = "tom"
    setTimeout(()=>{
        btn9.innerHTML = "9"
    }, 2000)
    
})





