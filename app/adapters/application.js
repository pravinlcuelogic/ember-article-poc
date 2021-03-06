import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import ENV from "../config/environment";

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.host,
  authorizer: 'authorizer:custom',
  // session: service(),
  // headers: computed(function() {
  //   return {Authorization: this.get('session.data.authenticated.token')}
  // }).volatile()
});
