import 'styles/main.css';

export default function () {
    let content = document.querySelector('#content');

    let header = document.createElement('header');
    header.classList.add('header');

    let title = document.createElement('h1');
    title.classList.add('header__title');
    title.textContent = 'raw';

    let nav = document.createElement('nav');
    nav.classList.add('header__nav');
    let navTitles = ['home', 'story', 'fresh', 'local', 'contact'];
    for (let i = 0; i < navTitles.length; i++) {
        let navItem = document.createElement('button');
        navItem.setAttribute('type', 'button');
        navItem.classList.add('header__nav-btn');
        navItem.textContent = navTitles[i];
        nav.appendChild(navItem);
    }

    content.appendChild(header);
    header.appendChild(title);
    header.appendChild(nav);

}