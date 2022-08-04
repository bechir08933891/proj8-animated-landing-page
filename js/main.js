// bring all imgs by thier id
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nordev= document.querySelector('.nordev');
// execute those command when user scroll down
window.onscroll = function(){
    // bring the actual Y value when the scoll move
    let vals = scrollY;
    // move the star to left NB: all imgs are absolut
    stars.style.left = vals + 'px';
    moon.style.top = vals * 4 + 'px';
    mountain3.style.top = vals * 2 + 'px';
    mountain4.style.top = vals * 1.5 + 'px';
    river.style.top = vals + 'px';
    boat.style.left = vals * 3 + 'px'; 
    nordev.style.fontSize = vals + 'px';
    if (scrollY >= 60) {
        nordev.style.fontSize = 60 + 'px';
        nordev.style.position = 'fixed';
        if (scrollY >= 478) {
            nordev.style.display = 'none';
        }else{
            nordev.style.display = 'block';
        }
        if (scrollY >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient(45deg, #00d2ff, #928DAB)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }
    }
}