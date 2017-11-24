import Controller from '@ember/controller';
import { task, timeout, didCancel } from 'ember-concurrency';

export default Controller.extend({

    param: null,

    mostRecent: null,

    _fields: {
        'school': ['name', 'zip', 'degrees_awarded.predominant', 'ownership'],
        '_admissions': ['admission_rate.overall', 'sat_scores.average.overall', 'act_scores.midpoint.cumulative'],
        '_cost': ['attendance.academic_year', 'attendance.program_year', 'avg_net_price.public', 'avg_net_price.private'],
        '_student': ['retention_rate.four_year.full_time', 'students_with_pell_grant'],
        '_aid': ['federal_loan_rate']
    },

    fields: null,

    init() {
        this._generateFields();
        this._super(...arguments);
    },

    updateSchoolList: task(function * () {
            yield timeout(500);
            var param = this.get('param');
            if (param !== '') {
              return this.get('store').query('school', {
                'school.name': param,
                'sort': 'school.name',
                'fields': this.get('fields')
              });
            } else {
              return this.get('store').query('school', {
                  'sort': 'school.name',
                  'fields': this.get('fields')
              });
            }
    }).restartable().on('init'),

    actions: {
      filterByName(param) {
         this.set('param', param);
         return this.get('updateSchoolList').perform().catch((e) => {
             if(!didCancel(e)) {
                 throw e;
             }
         });
      },
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
