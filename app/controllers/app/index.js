import Controller from '@ember/controller';
import { task, timeout, didCancel } from 'ember-concurrency';

export default Controller.extend({

    param: null,

    updateSchoolList: task(function * () {
            yield timeout(500);
            var param = this.get('param');
            if (param !== '') {
              return this.get('store').query('school', {
                'school.name': param,
                'sort': 'school.name'
              });
            } else {
              return this.get('store').query('school', {
                  'sort': 'school.name'
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

});
