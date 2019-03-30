import * as moment from 'moment';

const events = [
  {
    title: 'Opening Social',
    start: moment('Jan 11 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Jan 11 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: '1170 TMCB',
    description: 'Our first event of the semester! Come listen to an awesome presentation by Canopy to kick of the new school year. As always, there will be food and door prizes.'
  },
  {
    title: 'Recruitment Dinner',
    start: moment('Feb 08 2019 05:30pm', 'MMM DD YYYY hh:mma'),
    end: moment('Feb 08 2019 07:30pm', 'MMM DD YYYY hh:mma'),
    location: '',
    description:
      "Sit down and enjoy a catered meal with industry recruiters. This is a great opportunity to network! Register here before spots run out! You must pay your dues before attending the event. At least 24 recruiters are coming from companies like Sandia National Laboratories, Chicago Venture Partners, Facebook, Microsoft, ExxonMobil, Qualtrics, Zion's Bank, Pariveda, Lucidchart, SimpleNexus, Goldman Sachs, Chief Architect, & Rincon Research. Dress business casual."
  },
  {
    title: 'Programming Competition',
    start: moment('Mar 04 2019 07:00am', 'MMM DD YYYY hh:mma'),
    end: moment('Mar 04 2019 01:00pm', 'MMM DD YYYY hh:mma'),
    location: 'TMCB',
    description: 'This is a contest between BYU, USU, and the U of U. Check back for updates as we get closer to the event. Register here!'
  },
  {
    title: 'Closing Social',
    start: moment('Apr 09 2019 06:00pm', 'MMM DD YYYY hh:mma'),
    end: moment('Apr 09 2019 07:00pm', 'MMM DD YYYY hh:mma'),
    location: '1170 TMCB',
    description:
    "Fall Semester's closing social will be hosted by Apple. They are super excited to bring a presentation on personal branding and storytelling. This will be the last event of the semester."
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
