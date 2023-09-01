function playSound(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const images = document.querySelector(`img[data-key = "${e.keyCode}"`);
    if (!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play() 

    images.classList.add('playing')

}

window.addEventListener('keydown', playSound);

function removeTransition(e){
    if (e.propertyName !== 'transform'){
        return;
    }

    this.classList.remove('playing');
        
}

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('transitionend', removeTransition);
})

// function to play intro sound

function introSound() {
  const intro = document.querySelector(".intro");
  intro.addEventListener('ended', () => {
    intro.pause();
  });
}

window.addEventListener('load', () => {
    const intro = document.querySelector('.intro');
    intro.play()
    introSound()
})

// function to play sound on click

function imageClickSound () {
const audio = document.querySelector(`audio`);
    audio.play()

}

const imageClick = document.querySelectorAll('img');

imageClick.forEach(image => {
    image.addEventListener('click', () => {
        console.log('you have clicked this image');
        imageClickSound()
});

});










