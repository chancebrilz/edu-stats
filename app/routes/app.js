import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.queryRecord("school", {
            id: 164924
        });
    }

});
