import DS from 'ember-data';

export default DS.JSONSerializer.extend({

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {

        var attrs = payload.data.attributes;

        attrs.school = {
            name: attrs.school.name,
            zip: attrs.school.zip,
            degree_types: attrs.school.degrees_awarded.predominant,
            ownership: attrs.school.ownership
        }

        attrs.admissions = {
            admissions_rate: attrs.admissions.admisson_rate.overall,
            sat_avg: attts.admissions.sat_scores.average.overall,
            act_avg: attrs.admissions.act_scores.midpoint.cumulative
        }

        attrs.cost = {
            avg_cost: attr.cost.attendance.academic_year || attr.cost.attendance.program_year,
            avg_net_price: attr.cost.avg_net_price.public || attr.ckst.avg_net_price.public
        }

        attrs.student = {
            size: attrs.student.size,
            retention_rate: attrs.student.retention_rate.four_year.full_time,
            receiving_finaid: attrs.student.federal_loan_rate,
            recieving_pell: attrs.student.students_with_pell_grant
        }


        // update payload with serialized values
        payload.data.attributes = attrs;

        return this._super(...arguments);
    },

});
