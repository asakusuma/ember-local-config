import Ember from 'ember';
import config from 'dummy/config/environment';

export default Ember.Route.extend({
  model() {
    return config;
  }
});