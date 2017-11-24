import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.data.gov',
    namespace: 'ed/collegescorecard/v1',

    API_KEY: 'ytLn79dasngd6VCCnqaQZpRT7VaiT6yDDOlSN2xz',

    _fields: {
        'school': ['name', 'zip', 'degrees_awarded.predominant', 'ownership'],
        '_admissions': ['admission_rate.overall', 'sat_scores.average.overall', 'act_scores.midpoint.cumulative'],
        '_cost': ['attendance.academic_year', 'attendance.program_year', 'avg_net_price.public', 'avg_net_price.private'],
        '_student': ['retention_rate.four_year.full_time', 'students_with_pell_grant'],
        '_aid': ['federal_loan_rate']
    },

    fields: null,

    buildURL(modelName, id, snapshot, requestType, query) {

        this._generateFields();

        query.api_key = this.get('API_KEY');
        query.fields = this.get('fields');
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

    _generateFields() {
        let _fields = this.get('_fields');
        let _years = [2000, 2015];

        this.set('fields', 'id');

        for(var [key, values] of Object.entries(_fields)) {
            for(var v = 0; v < values.length; v++) {
                if(key.charAt(0) === "_") {
                    let field = key.substring(1) + '.' + values[v];
                    for(var y = _years[0]; y < _years[1]; y++) {
                        this.set('fields', this.get('fields') + "," + y + '.' + field);
                    }
                } else {
                    let field = key + '.' + values[v];
                    this.set('fields', this.get('fields') + "," + field);
                }
            }
        }
    }


});
