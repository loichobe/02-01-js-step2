// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {
    let target = document.getElementById('target');
    let origin = target.innerHTML;
    let i = 0;
    let random = (Math.floor(Math.random() * 200)+1);
    target.innerHTML = '';
    function typewriter() {
        target.innerHTML += origin.substring(i, i=1);
        i++;
        random = (Math.floor(Math.random() * 200)+1);
    }
    setInterval(typewriter, random);
})();
