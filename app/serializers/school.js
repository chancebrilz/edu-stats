import DS from 'ember-data';

export default DS.JSONSerializer.extend({

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {

        var results = payload.results[0];

        for(var year = 2000; year <= 2015; year++) {
            var result = results[year];
            result.admissions = {
                admissions_rate: result.admissions.admission_rate.overall,
                sat_avg: result.admissions.sat_scores.average.overall,
                act_avg: result.admissions.act_scores.midpoint.cumulative
            }

            result.cost = {
                avg_cost: result.cost.attendance.academic_year || result.cost.attendance.program_year,
                avg_net_price: result.cost.avg_net_price.public || result.cost.avg_net_price.public
            }

            result.student = {
                size: result.student.size,
                retention_rate: result.student.retention_rate.four_year.full_time,
                receiving_finaid: result.student.federal_loan_rate,
                recieving_pell: result.student.students_with_pell_grant
            }
        }

        return this._super(...arguments);
    },

});
