import jump from '../node_modules/jump.js/dist/jump.module.js';

// Links of the menu bar
const homeLink = document.querySelectorAll(".links");
const arrayOfSectionsToScroll = ['#Hero', '#about', '', '']; // List of sections where homeLink has to scroll
// "See my work button"
const actionButton = document.querySelector('.action-button');

homeLink.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    if (arrayOfSectionsToScroll[index].length !== '') {
      jump(arrayOfSectionsToScroll[index], {
        duration: index === 1 ? 1000 : 500,
        offset: index === 1 ? -40 : 0
      });
    }
  });
});

actionButton.addEventListener('click', () => {
  jump('#about', {
    duration: 1000
  });
});

