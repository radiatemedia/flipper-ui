describe 'App Routing', ->
  beforeEach ->
    Spine.Model.Ajax = {}
  describe 'feature route, no gate passed', ->
    it 'should be matched', ->
      expect(Spine.Route.matchRoute('/features/feature_name')).toBeDefined()
