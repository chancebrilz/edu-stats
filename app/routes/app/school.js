import Route from '@ember/routing/route';

export default Route.extend({

    geocodeUrl: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyChKhXN14ZHYTFL0in4J7JOKUE-v9CPOjI',

    model(params) {
        return this.get('store').queryRecord('school', {
            'id': params.school_id
        });
    },

    afterModel(model) {
        $.getJSON(this.get('geocodeUrl'), {
            address: model.get('attrs.school.zip')
        }).then((data) => {
            var location = data.results[0].formatted_address.split(',');
           model.set('attrs.school.zip', location[0] + ", " + location[1]);
        });
    }
});
