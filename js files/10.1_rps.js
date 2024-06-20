let wlr = JSON.parse(localStorage.getItem('score')) || {w: 0, l: 0, d: 0}
fwlr = document.querySelector('.wlr')
fwlr.innerHTML = "Wins: "+wlr.w+", Losses: "+wlr.l+", Ties: "+wlr.d

function pick() {
    num = Math.random()
    if (num < 1/3) {
        choice = 'r'
    } else if (num > 2/3) {
        choice = 'p'
    } else {
        choice = 's'
    }
    return choice
}
function game(pchoice) {
    choice = pick()
    wlr = JSON.parse(localStorage.getItem('score')) || {w: 0, l: 0, d: 0}
    if(choice === pchoice){
        wlr.d++
        fr = document.querySelector('.Result')
        fr.innerHTML = "Tie" 
    } else if ((choice === 'p' && pchoice === 's') || (choice === 'r' && pchoice === 'p') || (choice === 's' && pchoice === 'r')){
        wlr.w++
        fr = document.querySelector('.Result')
        fr.innerHTML = "You win" 
    } else {
        wlr.l++
        fr = document.querySelector('.Result')
        fr.innerHTML = "You lose" 
    }
    if(pchoice === 'r'){
        pchoice = "<img src = 'images/rock.png' class = 'image'>"
    } if(pchoice === 'p'){
        pchoice = "<img src = 'images/paper.png' class = 'image'>"
    } if(pchoice === 's'){
        pchoice = "<img src = 'images/scissors.png' class = 'image'>"
    } if(choice === 'r'){
        choice = "<img src = 'images/rock.png' class = 'image'>"
    } if(choice === 'p'){
        choice = "<img src = 'images/paper.png' class = 'image'>"
    } if(choice === 's'){
        choice = "<img src = 'images/scissors.png' class = 'image'>"
    }
    localStorage.setItem('score', JSON.stringify(wlr))
    fc = document.querySelector('.Choices')
    fc.innerHTML = "You "+pchoice+choice+" Conmputa"
    fwlr = document.querySelector('.wlr')
    fwlr.innerHTML = "Wins: "+wlr.w+", Losses: "+wlr.l+", Ties: "+wlr.d
     
}
function reset() {
    wlr = {
        w: 0,
        l: 0,
        d: 0,
    };
    localStorage.setItem('score', JSON.stringify(wlr))
    fc = document.querySelector('.Choices')
    fc.innerHTML = ''
    fr = document.querySelector('.Result')
    fr.innerHTML = "" 
    fwlr = document.querySelector('.wlr')
    fwlr.innerHTML = "Wins: "+wlr.w+", Losses: "+wlr.l+", Ties: "+wlr.d
}