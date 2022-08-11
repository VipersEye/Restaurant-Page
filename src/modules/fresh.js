import 'styles/sections.css';
import image from 'images/fresh.jpg';
import icon from 'images/icon.png';

export default function () {
    let content = document.querySelector('#content');

    let section = document.createElement('section');
    section.classList.add('section');

    let sectionImage = document.createElement('img');
    sectionImage.classList.add('section__image');
    sectionImage.setAttribute('src', image);
    sectionImage.setAttribute('alt', 'section image');

    let sectionContent = document.createElement('div');
    sectionContent.classList.add('section__content');

    let sectionLogo = document.createElement('img');
    sectionLogo.classList.add('section__content-logo');
    sectionLogo.setAttribute('src', icon);
    sectionLogo.setAttribute('alt', 'section logo');

    let sectionHeader = document.createElement('h2');
    sectionHeader.classList.add('section__header');
    sectionHeader.textContent = 'fresh';

    let sectionText = document.createElement('p');
    sectionText.classList.add('section__text');
    sectionText.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, autem enim! Tempore, accusamus. Corporis ratione fugit pariatur earum, cumque unde nesciunt sequi fugiat quidem? Ipsam illo ab nesciunt culpa in tempore. Molestias vel suscipit magni aliquid officia? Possimus, quam doloremque.';

    content.appendChild(section);
    section.appendChild(sectionImage);
    section.appendChild(sectionContent);
    sectionContent.appendChild(sectionLogo);
    sectionContent.appendChild(sectionHeader);
    sectionContent.appendChild(sectionText);
}