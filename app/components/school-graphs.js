import Component from '@ember/component';

export default Component.extend({

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
        for(var year = 2000; year < 2015; year++) {
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
        for(var year = 2000; year < 2015; year++) {
            var value = school.get('attrs.'+year+'.admissions.admission_rate.overall') || 0;
            data.push([year.toString(), value]);
        }
        return data;
    }),

});
