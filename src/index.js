import initPage from 'modules/init.js';
import home from 'modules/home.js';
import story from 'modules/story.js';
import fresh from 'modules/fresh.js';
import local from 'modules/local.js';

initPage();
home();

const removeSection = () => {
    let content = document.querySelector('#content');
    let currentSection = content.querySelector('section');
    if (currentSection === null) return;
    content.removeChild(currentSection);
};

let navButtons = document.querySelectorAll('.header__nav-btn');
navButtons.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        let currentSectionName = document.querySelector('section').getAttribute('id');
        if (currentSectionName === e.target.textContent) return;
        removeSection();
        switch (e.target.textContent) {
            case ('home'):
                home();
                break;
            case ('story'):
                story();
                break;
            case ('fresh'):
                fresh();
                break;
            case ('local'):
                local();
                break;
        }
    });
});
