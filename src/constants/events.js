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
      "Create a team up to five people and compete in a puzzle competition. Before the Tech Challenge, Google will host a Machine Learning Tech Talk/Application Info Session from 4:30-5:30pm in TMCB 1170. Learn tips on updating your resume, preparing for technical interviews, and communicating effectively with your recruiter.",
    signup: 'https://docs.google.com/forms/d/e/1FAIpQLSc6hT04P7oPFKZxXWhlnhWWEB59pQYGm4IHTQNSTDh61ELPTA/viewform'
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
    description: "Tech talk hosted by BambooHR."
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
    title: 'ACM Annual HackerRank Challenge Kickoff!',
    start: moment('May 8 2020 08:00am', 'MMM DD YYYY hh:mma'),
    description: 'Hackerrank is a website where coders can hone their skills and find great jobs with companies. We will again be hosting our hackerrank competition where BYU Students and friends can compete in figuring out coding challenges! This year we will have two different challenge tracks, one track is for those who are beginners to coding, and the other for those who are fairly experienced with coding. Find more details on the main page of the website!',
    location: 'Online',
    photo: "./static/events/hacker_rank_photo.png"
  },
  {
    title: 'Hackerrank Challenge 1',
    start: moment('May 8 2020 08:00am', 'MMM DD YYYY hh:mma'),
    end: moment('May 14 2020 11:59pm', 'MMM DD YYYY hh:mma'),
    description: 'Challenge 1! A link will appear here when this challenge unlocks on May 8!',
    location: 'Online',
    photo: "./static/events/hr_challenge1.jpg"
  },
  {
    title: 'Hackerrank Challenge 2',
    start: moment('May 15 2020 08:00am', 'MMM DD YYYY hh:mma'),
    end: moment('May 21 2020 11:59pm', 'MMM DD YYYY hh:mma'),
    description: 'Challenge 2! A link will appear here when this challenge unlocks on May 15!',
    location: 'Online',
    photo: "./static/events/hr_challenge2.jpg"
  },
  {
    title: 'Hackerrank Challenge 3',
    start: moment('May 22 2020 08:00am', 'MMM DD YYYY hh:mma'),
    end: moment('May 28 2020 11:59pm', 'MMM DD YYYY hh:mma'),
    description: 'Challenge 3! A link will appear here when this challenge unlocks on May 22!',
    location: 'Online',
    photo: "./static/events/hr_challenge3.gif"
  },
  {
    title: 'Hackerrank Challenge 4',
    start: moment('May 29 2020 08:00am', 'MMM DD YYYY hh:mma'),
    end: moment('Jun 4 2020 11:59pm', 'MMM DD YYYY hh:mma'),
    description: 'Challenge 4! A link will appear here when this challenge unlocks on May 29!',
    location: 'Online',
    photo: "./static/events/hr_challenge4.jpg"
  },
  {
    title: 'Hackerrank Challenge 5',
    start: moment('Jun 5 2020 08:00am', 'MMM DD YYYY hh:mma'),
    end: moment('Jun 11 2020 11:59pm', 'MMM DD YYYY hh:mma'),
    description: 'Challenge 5! A link will appear here when this challenge unlocks on Jun 5!',
    location: 'Online',
    photo: "./static/events/hr_challenge5.jpg"
  },
  {
    title: 'Hackerrank Challenge 6',
    start: moment('Jun 12 2020 08:00am', 'MMM DD YYYY hh:mma'),
    end: moment('Jun 18 2020 11:59pm', 'MMM DD YYYY hh:mma'),
    description: 'Challenge 6! A link will appear here when this challenge unlocks on Jun 12!',
    location: 'Online',
    photo: "./static/events/hr_challenge6.gif"
  },
  {
    title: 'Hackerrank Challenge Winners Announced!',
    start: moment('Jun 20 2020 03:00pm', 'MMM DD YYYY hh:mma'),
    description: 'Winners will be announced for the 2020 BYU ACM Hackerrank challenge!',
    location: 'Online',
    photo: "./static/events/hacker_rank_photo.png"
  },



];

export default events;

/*
All of the possible fields for events:
title
start
end
description
location
signup (link to qualtrics or something)
photo (place event image in "./static/events/your_event_image.jpg")
*/
