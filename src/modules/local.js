import 'styles/sections.css';
import image from 'images/local.jpg';
import icon from 'images/icon-local.png';

export default function () {
    let content = document.querySelector('#content');

    let section = document.createElement('section');
    section.classList.add('section');

    let sectionContent = document.createElement('div');
    sectionContent.classList.add('section__content');

    let sectionLogo = document.createElement('img');
    sectionLogo.classList.add('section__content-logo');
    sectionLogo.setAttribute('src', icon);
    sectionLogo.setAttribute('alt', 'section logo');

    let sectionHeader = document.createElement('h2');
    sectionHeader.classList.add('section__header');
    sectionHeader.textContent = 'local distillation';

    let sectionText = document.createElement('p');
    sectionText.classList.add('section__text');
    sectionText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit magnam, numquam consequuntur ducimus id nisi pariatur quis sapiente est quo quia minus repellendus recusandae iusto eum architecto deserunt quasi tempora consequatur molestias sed possimus. Aliquid perferendis earum aperiam. Quas doloribus commodi architecto illo?';

    let sectionImage = document.createElement('img');
    sectionImage.classList.add('section__image');
    sectionImage.setAttribute('src', image);
    sectionImage.setAttribute('alt', 'section image');

    content.appendChild(section);
    section.appendChild(sectionContent);
    section.appendChild(sectionImage);
    sectionContent.appendChild(sectionLogo);
    sectionContent.appendChild(sectionHeader);
    sectionContent.appendChild(sectionText);
}