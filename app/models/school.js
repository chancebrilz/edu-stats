import DS from 'ember-data';

export default DS.Model.extend({

    /* 'school' dev category
     *
     * Name: name
     * Location: zip
     * Degree Type: degrees_awarded.predominant
     * Public/Private: ownership
     *
     */

    school: DS.attr(),

    /* 'admissions' dev category
     *
     * Admission Rate: admisson_rate.overall
     * SAT Avg Score: sat_scores.average.overall
     * ACT Agv Score: act_scores.midpoint.cumulative
     *
     */

     admissions: DS.attr(),

     /* 'cost' dev category
      *
      * Average Cost of Attendance: attendance.(academic_year/program_year)
      * Avg Net Price: avg_net_price.(public/private)
      *
      */

      cost: DS.attr(),

      /* 'student' dev category
       *
       * # of Undergrad: size
       * Retention Rate: retention_rate.four_year.full_time
       * # Receiving FinAid: federal_loan_rate
       * % of Pell Student: students_with_pell_grant
       *
       */

       student: DS.attr(),

});
