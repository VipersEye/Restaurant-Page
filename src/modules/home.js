import 'styles/home.css';
import logo from 'images/BEETROOT.png';

export default function () {
    let content = document.querySelector('#content');

    let homeSection = document.createElement('section');
    homeSection.classList.add('home');

    let homeLogo = document.createElement('img');
    homeLogo.classList.add('home__logo');
    homeLogo.setAttribute('src', logo);
    homeLogo.setAttribute('alt', 'Restaurant logo');

    content.appendChild(homeSection);
    homeSection.appendChild(homeLogo);
}