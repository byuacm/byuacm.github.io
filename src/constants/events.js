import moment from 'moment';

const events = [
  {
    title: 'Hackerrank Challenge Winners Announced!',
    start: moment('Jun 20 2020 03:00pm', 'MMM DD YYYY hh:mma'),
    description: 'Winners will be announced for the 2020 BYU ACM Hackerrank challenge!',
    location: 'Online',
    photo: "./static/events/hacker_rank_photo.png"
  },
  {
    title: 'Summer of Code',
    start: moment('Jun 22 2020', 'MMM DD YYYY'),
    description: 'The Summer of Code is an opportunity to find a group and complete projects that could help fill out your portfolio or resume.  We are hosting this as a competition, and we will send out quarterly checkup emails.  We are also setting up a pool of mentors on the BYU CS Slack channel so that beginning or experienced programmers can ask questions and get some help with their projects.',
    location: 'Online/Potentially Meet With Your Mentor In Person',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Opening Social',
    start: moment('Sep 3 2020', 'MMM DD YYYY'),
    description: 'Opening social for ACM!!! Prepare for awesome online giveaways, online multiplayer games, and meeting with great companies to kick off your epic (virtual) semester at BYU!',
    location: 'Online',
    photo: './static/images/grue.gif',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: '"Algorithm Patterns towards Acing Your Technical Interview" Dr. Ryan Farrell',
    start: moment('Sep 15 2020 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Come and hear a great tech talk by Dr. Ryan Farrell about algorithm patterns that will help you succeed with your technical interview as you prepare your resume and presentation at the STEM fair!',
    location: 'Online',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'BYU STEM Fair - Science/Math & Data',
    start: moment('Sep 16 2020', 'MMM DD YYYY'),
    end: moment('Sep 17 2020', 'MMM DD YYYY'),
    description: 'STEM Fair is where those majoring in STEM fields can meet with companies and apply for positions and internships after the 2020-21 school year!',
    location: 'Online',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'BYU STEM Fair - Engineering/Technology',
    start: moment('Sep 23 2020', 'MMM DD YYYY'),
    end: moment('Sep 24 2020', 'MMM DD YYYY'),
    description: 'STEM Fair is where those majoring in STEM fields can meet with companies and apply for positions and internships after the 2020-21 school year!',
    location: 'Online',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Tech workshop with Lucid',
    start: moment('Sep 29 2020 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Awesome club activity where we will be meeting with Lucid!',
    location: 'Online',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Tech workshop with Podium',
    start: moment('Oct 6 2020 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Awesome club activity where we will be meeting with Podium!',
    location: 'Online',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Tech workshop with Qualtrics',
    start: moment('Oct 13 2020 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Awesome club activity where we will be meeting with Qualtrics!',
    location: 'Online',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: '2020 Lucid Programming Competition',
    start: moment('Oct 17 2020', 'MMM DD YYYY'),
    description: 'Annual programming competition with Lucid where students cam come together with a healthy dose of competitiveness and pizza for awesome sponsered prizes!',
    location: 'TBD',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Lunch N’ Learn with Linda Thakeray - Microsoft Garage',
    start: moment('Oct 20 2020 12:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Awesome club activity where we will be meeting with Lucid!',
    location: 'TBD',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Tech Talk with Bryan Mangelson Cofounder of Crowdstorage',
    start: moment('Oct 27 2020 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Hear from the cofounder of Crowdstorage! His talk is entitled Distributed Data Storage: Airbnb for the Cloud',
    location: 'Attend the event virtually on Zoom <a href="https://byu.zoom.us/my/byuacm">here!</a>',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Tech Talk with Fast Enterprises',
    start: moment('Nov 3 2020 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Exciting club event where we will be able to meet one on one with Fast Enterprises! FAST is dedicated to problem-solving, creating solutions, and maintaining strong partnerships with government agencies.',
    location: 'Attend the event virtually on Zoom <a href="https://byu.zoom.us/my/byuacm">here!</a>',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Tech Talk with Dr. Kimball Germane',
    start: moment('Nov 17 2020 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Dr. Kimball Germane is a Professor at Brigham Young University and he is the faculty advisor for the ACM Club.',
    location: 'Attend the event virtually on Zoom <a href="https://byu.zoom.us/my/byuacm">here!</a>',
    rsvp: "None",
    cost: "Free"
  },

];

export default events;

/*
All of the possible fields for events:
title
start
end
description
location can be anything
signup (link to qualtrics or something)
photo (place event image in "./static/events/your_event_image.jpg")
*/
