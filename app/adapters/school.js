import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.data.gov',
    namespace: 'ed/collegescorecard/v1',

    API_KEY: 'ytLn79dasngd6VCCnqaQZpRT7VaiT6yDDOlSN2xz',

    buildURL(modelName, id, snapshot, requestType, query) {
        query.api_key = this.get('API_KEY');
        return this._super(...arguments);
    },

    ajaxOptions: function() {
      let hash = this._super(...arguments);

      if (hash.contentType) {
        hash.contentType = 'application/vnd.api+json';
      }

      hash.beforeSend = function(xhr) {
        xhr.setRequestHeader('Accept', '*/*');
      };

      return hash;
    },

});
