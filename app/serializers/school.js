import DS from 'ember-data';

export default DS.JSONSerializer.extend({

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {

        var newPayload = {
            meta: payload.metadata,
            data: []
        }

        for(var i = 0; i < payload.results.length; i++) {
            newPayload.data.push({
                id: payload.results[i].id,
                type: 'school',
                attrs: payload.results[i]
            });
            delete(newPayload.data[i].attrs.id);
        }

        store.pushPayload(newPayload);

        return newPayload;

    },

});
