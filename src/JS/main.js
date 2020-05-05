import smoothScrolling from './Animation/smoothScroll';
import changeActiveMenu from './Animation/changeActiveMenu';
import headerMenuBackgroundChange from './Animation/headerBackgroundChange';
import toggleHamburger from './Animation/toggleHamburger';
import lazyLoading from './utility/lazyLoading';
import netlifyFormSendEmail from './utility/sendEmail';

smoothScrolling();
changeActiveMenu();
toggleHamburger();
lazyLoading();
netlifyFormSendEmail();
window.onscroll = function () { headerMenuBackgroundChange() };