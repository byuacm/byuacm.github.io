import * as moment from 'moment';

const events = [
  {
    title: 'Opening Social',
    start: moment('Sep 10 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Sep 10 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: '1170 TMCB',
    description: 'Our first event of the semester! Come listen to a presentation by Lucid to kick of the new school year. There will be JDwags and over 300 dollars in door prizes!'
  },
  {
    title: 'Resume/Hackerrank Workshop with Goldman Sachs',
    start: moment('Sep 17 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Sep 17 2019 08:00pm', 'MMM DD YYYY hh:mma'),
    location: '1170 TMCB',
    description: 'Bring your resume and be ready to prep yourself for interviews.'
  },
  {
    title: 'AIS/ACM Social with Pariveda',
    start: moment('Sep 20 2019 05:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Sep 20 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'Good Move Cafe (1 E. Center St. Suite 100 Provo, UT 84601)',
    description: 'Come to the Good Move Cafe for free food and games! Bring your significant others and be ready to network and have fun.'
  },
  {
    title: 'Recruitment Dinner',
    start: moment('Sep 24 2019 05:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Sep 24 2019 08:00pm', 'MMM DD YYYY hh:mma'),
    location: 'Harman Building (room 209)',
    description:
      "Sit down and enjoy a catered meal with industry recruiters. This is a great opportunity to network! Register before spots run out! You must pay your dues before attending the event. At least 35 recruiters are coming from top companies across the United States. Dress business casual.",
    signup:'https://byu.az1.qualtrics.com/jfe/form/SV_byMxYnBZm5SwWS9'
  },
  {
    title: 'STEM Fair',
    start: moment('Sep 25 2019 09:00am', 'MMM DD YYYY hh:mma'),
    end: moment('Sep 26 2019 03:00pm', 'MMM DD YYYY hh:mma'),
    location: 'WSC Ballroom',
    description: 'Meet with recruiters from 9am to 3pm. Hand out your resume and start networking! Even if you are not looking for a job/internship yet, go and meet people. See what recruiters expect in students and start building relationships.'
  },
  {
    title: 'Hallo',
    start: moment('Oct 22 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Oct 22 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TBD',
    description: ''
  },
  {
    title: 'Programming Competition',
    start: moment('Oct 26 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Oct 26 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TBD',
    description: 'Hosted by Lucid'
  },  
  {
    title: 'Presentation by Carine Clark',
    start: moment('Nov 5 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Nov 5 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TBD',
    description: 'Hosted by Microsoft. Carine Clark was a data-driven marketing executive at Novell, Altiris, and Symantec, which opened doors to lead Allegiance, MartizCX, Banyan, and Ember as president and CEO.'
  },
  {
    title: 'Research Roundup',
    start: moment('Nov 19 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Nov 19 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TBD',
    description: 'Come hear from Professors and Research Assistants about the cool projects being done in the Computer Science Department!'
  },
  {
    title: 'Closing Social',
    start: moment('Dec 03 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Dec 03 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: '1170 TMCB',
    description:
    "Fall Semester's closing social will be hosted by Qualtrics."
  },
  {
    title: 'Hackathon',
    start: moment('Mar 29 2019 05:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Mar 30 2019 05:00pm', 'MMM DD YYYY hh:mma'),
    description: '24 hours of hacking!',
    location: 'CB step-down lounge',
    signup: 'https://google.com'
  }
];

export default events;
