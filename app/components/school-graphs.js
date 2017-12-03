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

    studentPopData: Ember.computed(function(data) {
        var school = this.get('school');
        var data = [['Year', '# of Students']];
        for(var year = 2000; year <= 2015; year++) {
            var value = school.get('attrs.'+year+'.student.size') || 0;
            data.push([year.toString(), value]);
        }
        return data;
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

    attendanceCostData: Ember.computed(function(data) {
        var school = this.get('school');
        var data = [['Year', 'Attendance Cost']];
        for(var year = 2000; year <= 2015; year++) {
            var value = school.get('attrs.'+year+'.cost.attendance.academic_year') || 0;
            data.push([year.toString(), value]);
        }
        return data;
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

    acceptanceRateData: Ember.computed(function(data) {
        var school = this.get('school');
        var data = [['Year', 'Acceptance Rate']];
        for(var year = 2000; year <= 2015; year++) {
            var value = school.get('attrs.'+year+'.admissions.admission_rate.overall') || 0;
            data.push([year.toString(), value]);
        }
        return data;
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

    avgSATScoreData: Ember.computed(function(data) {
        var school = this.get('school');
        var data = [['Year', 'SAT Score']];
        for(var year = 2000; year <= 2015; year++) {
            var value = school.get('attrs.'+year+'.admissions.sat_scores.average.overall') || 0;
            data.push([year.toString(), value]);
        }
        return data;
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

    avgACTScoreData: Ember.computed(function(data) {
        var school = this.get('school');
        var data = [['Year', 'ACT Score']];
        for(var year = 2000; year <= 2015; year++) {
            var value = school.get('attrs.'+year+'.admissions.act_scores.midpoint.cumulative') || 0;
            data.push([year.toString(), value]);
        }
        return data;
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

    pellGrantsData: Ember.computed(function(data) {
        var school = this.get('school');
        var data = [['Year', '% of Students']];
        for(var year = 2000; year <= 2015; year++) {
            var value = school.get('attrs.'+year+'.student.students_with_pell_grant') || 0;
            data.push([year.toString(), value]);
        }
        return data;
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

    fedLoanData: Ember.computed(function(data) {
        var school = this.get('school');
        var data = [['Year', '% of Students']];
        for(var year = 2000; year <= 2015; year++) {
            var value = school.get('attrs.'+year+'.aid.federal_loan_rate') || 0;
            data.push([year.toString(), value]);
        }
        return data;
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

    retentionRateData: Ember.computed(function(data) {
        var school = this.get('school');
        var data = [['Year', '% of Students']];
        for(var year = 2000; year <= 2015; year++) {
            var value = school.get('attrs.'+year+'.student.retention_rate.four_year.full_time') || 0;
            data.push([year.toString(), value]);
        }
        return data;
    }),


});
