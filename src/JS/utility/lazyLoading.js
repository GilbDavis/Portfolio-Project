export default function lazyLoading() {

  const LazyLoad = require('vanilla-lazyload');
  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
  });
  lazyLoadInstance.update();
}
