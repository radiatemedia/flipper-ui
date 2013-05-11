(function() {
  describe('App Routing', function() {
    beforeEach(function() {
      return spyOn(Feature, 'fetch');
    });
    return describe('feature route, no gate passed', function() {
      return it('should be matched', function() {
        return expect(Spine.Route.matchRoute('/features/feature_name')).toBeDefined();
      });
    });
  });

}).call(this);
