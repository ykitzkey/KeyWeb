const countdown = () => {
    const now = new Date().getTime();
    const currentYear = new Date().getFullYear();
    const birthdayThisYear = new Date(`August 4 , ${currentYear} 00:00:00`).getTime();
    const birthdayNextYear = new Date(`August 4, ${currentYear + 1} 00:00:00`).getTime();

    let countDate = birthdayThisYear;

    if (now > birthdayThisYear && now < birthdayNextYear) {
        // If today is the birthday, show the special message
        const today = new Date();
        if (today.getDate() === 4 && today.getMonth() + 1 === 8) {
            document.getElementById('days').innerText = 0;
            document.getElementById('hours').innerText = 0;
            document.getElementById('minutes').innerText = 0;
            document.getElementById('seconds').innerText = 0;
            document.getElementById('countdown').classList.add('hidden');
            document.getElementById('birthdayMessage').classList.remove('hidden');
            launchConfetti();
            return;
        } else {
            countDate = birthdayNextYear;
        }
    }

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    document.getElementById('countdown').classList.remove('hidden');
    document.getElementById('birthdayMessage').classList.add('hidden');
};

const launchConfetti = () => {
    const confettiCount = window.innerWidth > 768 ? 100 : 50; // Adjust confetti count based on screen width
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDelay = `${Math.random() * 5}s`; // Add random delay
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navbar .right');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    countdown();
    setInterval(countdown, 1000);
});