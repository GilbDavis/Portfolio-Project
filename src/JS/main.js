import smoothScrolling from './Animation/smoothScroll';
import onScrollAnimation from './Animation/onScrollAnimations';
import changeActiveMenu from './Animation/changeActiveMenu';
import headerMenuBackgroundChange from './Animation/headerBackgroundChange';
import toggleHamburger from './Animation/toggleHamburger';
import lazyLoading from './utility/lazyLoading';
import netlifyFormSendEmail from './utility/sendEmail';
// Habilitar el import css para build de produccion
import '../css/app.css';

onScrollAnimation();
smoothScrolling();
changeActiveMenu();
toggleHamburger();
lazyLoading();
netlifyFormSendEmail();
window.onscroll = function () { headerMenuBackgroundChange() };