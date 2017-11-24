import DS from 'ember-data';

export default DS.JSONSerializer.extend({

    normalizeResponse(store, primaryModelClass, payload) {

        var newPayload = {
            meta: payload.metadata,
            data: []
        }

        for(var i = 0; i < payload.results.length; i++) {
            if(payload.results.length == 1) {
                newPayload.data = {
                    id: payload.results[i].id,
                    type: 'school',
                    attrs: this._deepen(payload.results[i])
                }
                delete(newPayload.data.attrs.id);
            } else {
                newPayload.data.push({
                    id: payload.results[i].id,
                    type: 'school',
                    attrs: this._deepen(payload.results[i])
                });
                delete(newPayload.data[i].attrs.id);
            }

        }

        store.pushPayload(newPayload);

        return newPayload;

    },

    _deepen(o) {
      var oo = {},
        t, parts, part;
      for (var k in o) {
        t = oo;
        parts = k.split('.');
        var key = parts.pop();
        while (parts.length) {
          part = parts.shift();
          t = t[part] = t[part] || {};
        }
        t[key] = o[k]
      }
      return oo;
    }

});
