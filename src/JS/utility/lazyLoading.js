export default function lazyLoading() {

  const lozad = require('lozad');
  const observer = lozad();

  observer.observe();
}
