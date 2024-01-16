function ChangeImage(x,y){
    let a;
    if(y === 1){
        a = document.querySelector('.img1')
    }
    else if(y === 2 ) {
        a = document.querySelector('.img2')
    }
    if( x === 1){
        a.setAttribute('src','images/dice1.png')
    }
    else if( x === 2){
        a.setAttribute('src','images/dice2.png')
    }
    else if( x === 3){
        a.setAttribute('src','images/dice3.png')
    }
    else if( x === 4){
        a.setAttribute('src','images/dice4.png')
    }
    else if( x === 5){
        a.setAttribute('src','images/dice5.png')
    }
    else if( x === 6){
        a.setAttribute('src','images/dice6.png')
    }
}
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
ChangeImage(randomNumber1,1);
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
ChangeImage(randomNumber2,2);
if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = '🚩PLAYER1 WIN!';
}
else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = 'PLAYER2 WIN!🚩';
}
else {
    document.querySelector('h1').innerHTML = 'DRAW!';
}