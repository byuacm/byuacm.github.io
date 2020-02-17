import moment from 'moment';

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
    title: 'Plaid Tech Talk',
    start: moment('Oct 8 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Oct 8 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TMCB 1170',
    description: 'Come for an awesome tech talk! Plaid is a company that helps developers work with bank APIs. Their software is used by many large companies including Venmo and American Express. There will be food and door prizes!'
  },
  {
    title: 'Hallo Tech Talk',
    start: moment('Oct 22 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Oct 22 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TMCB 1170',
    description: 'Hallo is a Provo based company connecting students with job opportunities. There will be good food and great door prizes!'
  },
  {
    title: 'Lucid Programming Competition',
    start: moment('Nov 2 2019 08:00am', 'MMM DD YYYY hh:mma'),
    end: moment('Nov 2 2019 02:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TMCB 1170',
    description: 'This is the  7th annual programming competition hosted by Lucid. Compete against teams from universities across Utah for a chance to win great prizes. You won\'t want to miss it! Teams will be composed of 1 to 3 students to solve as many problems as you can in 4 hours in your language of choice. There will be prizes worth $1000+ for top teams at each location as well as free breakfast and lunch. There will also be free T-shirts and a prize raffle for all participants.',
    signup:'https://www.golucid.co/programming-competition'
  },  
  {
    title: 'Presentation by Carine Clark',
    start: moment('Nov 5 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Nov 5 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TMCB 1170',
    description: 'Hosted by Microsoft. Carine Clark was a data-driven marketing executive at Novell, Altiris, and Symantec, which opened doors to lead Allegiance, MartizCX, Banyan, and Ember as president and CEO.'
  },
  {
    title: 'Venture Capital Night',
    start: moment('Nov 19 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Nov 19 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TMCB 1170',
    description: 'Come hear from Vice President of Battery Ventures as he discusses how their company chooses companies in which to invest. He will then talk about how we as students can choose in which companies to invest our future time and careers. There will be food afterwards!'
  },
  {
    title: 'Closing Social',
    start: moment('Dec 03 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Dec 03 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'JFSB B002',
    description:
    "Fall Semester's closing social will be hosted by Qualtrics."
  },
  {
    title: 'Winter Semester Opening Social',
    start: moment('Jan 14 2020 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Jan 14 2020 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TMCB 1170',
    description:
    "Winter Semester's opening social will be hosted by SimpleNexus."
  },
  {
    title: 'Recruitment Dinner',
    start: moment('Jan 29 2020 05:45pm', 'MMM DD YYYY hh:mma'),
    end: moment('Jan 29 2020 07:30pm', 'MMM DD YYYY hh:mma'),
    location: 'BYU Harman Building rooms 2258 & 2260',
    description:
      "Sit down and enjoy a catered meal with industry recruiters. This is a great opportunity to network! Register before spots run out! Dress business casual.",
    signup:'https://byu.az1.qualtrics.com/jfe/form/SV_6xr1LIApMrXSdHD'
  },
  {
    title: 'STEM Fair',
    start: moment('Jan 30 2020 09:00am', 'MMM DD YYYY hh:mma'),
    end: moment('Jan 30 2020 03:00pm', 'MMM DD YYYY hh:mma'),
    location: 'WSC Ballroom',
    description:
      "Go and network with recruiters at the BYU STEM Fair!"
  },
  {
    title: 'Whistic Tech Talk',
    start: moment('Feb 11 2020 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Feb 11 2020 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TMCB 1170',
    description:
      "Tech talk hosted by Whistic. "
  },
  {
    title: 'Google Tech Challenge',
    start: moment('Feb 20 2020 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Feb 20 2020 08:00pm', 'MMM DD YYYY hh:mma'),
    location: 'CB step-down lounge',
    description:
      "Cool tech challenge hosted by Google. Stay tuned for details."
  },
   {
    title: 'Fireeye Tech Talk',
    start: moment('Feb 25 2020 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Feb 25 2020 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TMCB 1170',
    description:
      "Tech talk hosted by Fireeye. "
  },
   {
    title: 'BambooHR Tech Talk',
    start: moment('Mar 10 2020 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Mar 10 2020 07:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TMCB 1170',
    description:
      "Tech talk hosted by BambooHR. "
  },
  {
    title: 'Hackathon',
    start: moment('Mar 13 2020 05:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Mar 14 2020 05:00pm', 'MMM DD YYYY hh:mma'),
    description: '24 hours of food, networking, cool projects, prizes, and more!',
    location: 'CB step-down lounge',
    signup:'https://byu.az1.qualtrics.com/jfe/form/SV_aVmeFBusXsnw1tH'
  },  
  {
    title: 'Winter Semester Closing Social',
    start: moment('Apr 7 2020 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Apr 7 2020 07:00pm', 'MMM DD YYYY hh:mma'),
    description: 'The closing social will hosted by Pluralsight',
    location: 'TMCB 1170'
  }
];

export default events;
