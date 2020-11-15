export default function smoothScrolling() {
  let jump = require('../../../node_modules/jump.js/dist/jump');

  // Links of the menu bar
  const homeLink = document.querySelectorAll(".links");
  const arrayOfSectionsToScroll = ['#Hero', '#about', '#Portfolio', '#Contact']; // List of sections where homeLink has to scroll
  // "See my work button"
  const actionButton = document.querySelector('.action-button');

  homeLink.forEach((link, index) => {
    link.addEventListener('click', () => {
      if (arrayOfSectionsToScroll[index].length !== '') {
        jump(arrayOfSectionsToScroll[index], {
          duration: index === 2 ? 1000 : 500,
          offset: index === 2 ? -40 : -50
        });
      }
    });
  });

  actionButton.addEventListener('click', () => {
    jump('#Portfolio', {
      duration: 1000,
      offset: -40
    });
  });
}

