// make sure we don't try and hit the server on the initial load
Feature.fetch = function() {
  return true;
};
