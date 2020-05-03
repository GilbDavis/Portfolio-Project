export default function lazyLoading() {

  const lozad = require('../../../node_modules/lozad/dist/lozad');
  const observer = lozad();

  observer.observe();
}
