const mario = document.querySelector('.mario');
const pipe = documnet.querySelector('.pipe');

const jumo = () =>{
    mario.classList.add('jump');
    settimeout(()=>{
        mario.classList.remove('jumo');
    },500);
}

const loop = setInterval(()=>{
    console.log('loop');

    const pipePosition = pipe.offsetleft
    const marioPosition =+window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePositio<=120 & pipePosition >0 && marioPosition < 80)(
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';
        
        mario.src="/assets/img/game-over.png";
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    },10);

document.addEventListener('keydown',jump);
document.addEventListener('touchstart',jump);