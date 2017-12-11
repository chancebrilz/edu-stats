import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({

    studentPopOptions: {
        width: '100%',
        colors: ['#BEB2C8'],
        chart: {
            title: 'Student Population for 2000-2015',
            subtitle: 'Zero values indicate missing data.',
        },
        vAxis: {
            format: '#'
        },
        legend: {
            position: 'none'
        }
    },

    studentPopData: Ember.computed(function() {
        return this.buildData(['Year', '# of Students'], 'student.size');
    }),

    attendanceCostOptions: {
        width: '100%',
        colors: ['#f97263'],
        chart: {
            title: 'Cost of Attendance for 2000-2015',
            subtitle: 'Zero values indicate missing data.',
        },
        vAxis: {
            format: '$'
        },
        legend: {
            position: 'none'
        },
    },

    attendanceCostData: Ember.computed(function() {
        return this.buildData(['Year', 'Attendance Cost'], 'cost.attendance.academic_year');
    }),

    acceptanceRateOptions: {
        width: '100%',
        colors: ['#6699CC'],
        chart: {
            title: 'Acceptance Rate for 2000-2015',
            subtitle: 'Zero values indicate missing data.',
        },
        vAxis: {
            format: '#%'
        },
        legend: {
            position: 'none'
        }
    },

    acceptanceRateData: Ember.computed(function() {
        return this.buildData(['Year', 'Acceptance Rate'], 'admissions.admission_rate.overall');
    }),

    avgSATScoreOptions: {
        width: '100%',
        colors: ['#ABC798'],
        chart: {
            title: 'Average SAT Scores for 2000-2015',
            subtitle: 'Zero values indicate missing data.',
        },
        vAxis: {
            format: '#'
        },
        legend: {
            position: 'none'
        }
    },

    avgSATScoreData: Ember.computed(function() {
        return this.buildData(['Year', 'SAT Score'], 'admissions.sat_scores.average.overall');
    }),

    avgACTScoreOptions: {
        width: '100%',
        colors: ['#EDDEA4'],
        chart: {
            title: 'Average ACT Scores for 2000-2015',
            subtitle: 'Zero values indicate missing data.',
        },
        vAxis: {
            format: '#'
        },
        legend: {
            position: 'none'
        }
    },

    avgACTScoreData: Ember.computed(function() {
        return this.buildData(['Year', 'ACT Score'], 'admissions.act_scores.midpoint.cumulative');
    }),

    pellGrantsOptions: {
        width: '100%',
        colors: ['#8D8D92'],
        chart: {
            title: 'Students with Pell Grants for 2000-2015',
            subtitle: 'Zero values indicate missing data.',
        },
        vAxis: {
            format: '#%'
        },
        legend: {
            position: 'none'
        }
    },

    pellGrantsData: Ember.computed(function() {
        return this.buildData(['Year', '% of Students'], 'student.students_with_pell_grant');
    }),

    fedLoanOptions: {
        width: '100%',
        colors: ['#CCAD8F'],
        chart: {
            title: 'Students with Federal Loans for 2000-2015',
            subtitle: 'Zero values indicate missing data.',
        },
        vAxis: {
            format: '#%'
        },
        legend: {
            position: 'none'
        }
    },

    fedLoanData: Ember.computed(function() {
        return this.buildData(['Year', '% of Students'], 'aid.federal_loan_rate');
    }),

    retentionRateOptions: {
        width: '100%',
        colors: ['#EDA4BD'],
        chart: {
            title: 'Retention Rate of Full Time for 2000-2015',
            subtitle: 'Zero values indicate missing data.',
        },
        vAxis: {
            format: '#%'
        },
        legend: {
            position: 'none'
        }
    },

    retentionRateData: Ember.computed(function() {
        return this.buildData(['Year', '% of Students'], 'student.retention_rate.four_year.full_time');
    }),


    buildData: function(headers, field) {
        let _data = [headers];
        let school = this.get('school');
        for(var year = 2000; year <= 2015; year++) {
            _data.push([year.toString(), school.get('attrs.'+year+'.'+field) || 0 ]);
        }
        return _data;
    }

});
