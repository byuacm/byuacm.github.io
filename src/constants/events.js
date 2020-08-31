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
    start: moment('Sep 8 2020', 'MMM DD YYYY'),
    description: 'Opening social for ACM!!! Prepare for awesome online giveaways, online multiplayer games, and meeting with great companies to kick off your epic (virtual) semester at BYU!',
    location: 'Online',
    photo: './static/images/grue.gif',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Recruitment Dinner',
    start: moment('Sep 22 2020', 'MMM DD YYYY'),
    description: 'Exciting event where ACM club members can meet with real recruiter before STEM fair!',
    location: 'Online',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'BYU STEM Fair - Science/Math & Data',
    start: moment('Sep 16 2020', 'MMM DD YYYY'),
    end: moment('Sep 17 2020', 'MMM DD YYYY'),
    description: 'STEM Fair is where those majoring in STEM fields can meet with companies and apply for positions and internships after the 2020-21 school year!',
    location: 'TBD',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'BYU STEM Fair - Engineering/Technology',
    start: moment('Sep 23 2020', 'MMM DD YYYY'),
    end: moment('Sep 24 2020', 'MMM DD YYYY'),
    description: 'STEM Fair is where those majoring in STEM fields can meet with companies and apply for positions and internships after the 2020-21 school year!',
    location: 'TBD',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'ACM Club Event',
    start: moment('Sep 29 2020', 'MMM DD YYYY'),
    description: 'Awesome club activity where we will be meeting with Lucid!',
    location: 'TBD',
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
