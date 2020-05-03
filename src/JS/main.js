import smoothScrolling from './Animation/smoothScroll';
import changeActiveMenu from './Animation/changeActiveMenu';
import headerMenuBackgroundChange from './Animation/headerBackgroundChange';
import toggleHamburger from './Animation/toggleHamburger';
import lazyLoading from './utility/lazyLoading';

smoothScrolling();
changeActiveMenu();
toggleHamburger();
lazyLoading();
window.onscroll = function () { headerMenuBackgroundChange() };