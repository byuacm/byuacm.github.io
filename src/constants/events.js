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
  {
    title: 'Opening Social',
    start: moment('Feb 2 2021 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Opening social for ACM!!! Prepare for awesome online giveaways, and meeting with great companies to kick off your epic (virtual) semester at BYU!',
    location: 'Attend the event virtually on Zoom <a href="https://byu.zoom.us/my/byuacm">here!</a>',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'BYU Virtual Careers & Internship Fair',
    start: moment('Jan 28 2021', 'MMM DD YYYY'),
    description: "Join BYU's virtual career fair! All majors are welcome! See you there!",
    location: 'Register on <a href="http://handshake.byu.edu">Handshake</a>',
    rsvp: "Register on Handshake",
    cost: "Free"
  },
  {
    title: 'BYU Virtual STEM Fair: Technology',
    start: moment('Feb 2 2021', 'MMM DD YYYY'),
    description: "Welcome to the BYU STEM Fair: Technology.<br/>The focus of this fair is to connect employers with students in the following technology-related disciplines:<br/><il><li>Computer Engineering</li><li>Computer Science</li><li>Cybersecurity</li><li>Information Systems</li><li>Information Technology</li><li>Software Engineering</li><li>Technology & Engineering Studies</li></il><br/>Please note this fair is open to all majors and will be hosted virtually within the Handshake platform.",
    location: 'Register on <a href="http://handshake.byu.edu">Handshake</a>',
    rsvp: "Register on Handshake",
    cost: "Free"
  },
  {
    title: 'BYU Virtual STEM Fair: Engineering',
    start: moment('Feb 4 2021', 'MMM DD YYYY'),
    description: "Welcome to the BYU STEM Fair: Engineering.<br/>The focus of this fair is to connect employers with students in the following engineering-related disciplines:<il><li>Chemical Engineering</li><li>Civil and Environmental Engineering</li><li>Computer Engineering</li><li>Construction and Facilities Management</li><li>Electrical Engineering</li><li>Industrial Design</li><li>Manufacturing Engineering</li><li>Mechanical Engineering</li></il><br/>Please note this fair is open to all majors and will be hosted virtually within the Handshake platform.",
    location: 'Register on <a href="http://handshake.byu.edu">Handshake</a>',
    rsvp: "Register on Handshake",
    cost: "Free"
  },
  {
    title: 'BYU Virtual STEM Fair: Math & Data',
    start: moment('Feb 11 2021', 'MMM DD YYYY'),
    description: "Welcome to the BYU STEM Fair: Math & Data.<br/>The focus of this fair is to connect employers with students in the following math and data-related disciplines:<il><li>Actuarial Science</li><li>Applied & Computational Mathematics</li><li>Data Science</li><li>Information Systems</li><li>Mathematics</li><li>Statistics</li></il><br/>All students with an interest in analytics are welcome!<br/>Please note this fair is open to all majors and will be hosted virtually within the Handshake platform.",
    location: 'Register on <a href="http://handshake.byu.edu">Handshake</a>',
    rsvp: "Register on Handshake",
    cost: "Free"
  },
  {
    title: 'BYU Virtual STEM Fair: Science',
    start: moment('Feb 23 2021', 'MMM DD YYYY'),
    description: "Welcome to the BYU STEM Fair Fall 2021: Science!<br/>The focus of this fair is to connect employers with students in the following science-related disciplines:<il><li>Applied Physics</li><li>Astronomy</li><li>Biochemistry</li><li>Chemistry</li><li>Geology</li><li>Life Sciences</li><li>Physics.</li></il><br/>Please note this fair is open to all majors and will be hosted virtually within the Handshake platform.",
    location: 'Register on <a href="http://handshake.byu.edu">Handshake</a>',
    rsvp: "Register on Handshake",
    cost: "Free"
  },
  {
    title: 'BYU Virtual Summer Job Fair',
    start: moment('Mar 4 2021', 'MMM DD YYYY'),
    description: "Welcome to BYU's Summer Job fair! An excellent place to find a great summer job and make some money in between semesters!",
    location: 'Register on <a href="http://handshake.byu.edu">Handshake</a>',
    rsvp: "Register on Handshake",
    cost: "Free"
  },
  {
    title: 'My Adventures in Cybersecurity at Microsoft (and how you can join me)',
    start: moment('Feb 16 2021 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Come and join us at our techtalk with Tom Stolk a Consulting and Cybersecurity Professional from Microsoft! His talk is entitled "My Adventures in Cybersecurity at Microsoft (and how you can join me)"',
    location: 'Attend the event virtually on Zoom <a href="https://byu.zoom.us/my/byuacm">here!</a>',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Tech Talk with PwC',
    start: moment('Mar 2 2021 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Come and join our ACM Club Meeting where we will be getting an awesome tech talk from engineers at PricewaterhouseCoopers! PwC is a multinational professional services network of firms, operating as partnerships under the PwC brand. PwC ranks as the second-largest professional services network in the world and is considered one of the BIg Four accounting firms, along with Deloitte, EY, and KPMG.',
    location: 'Attend the event virtually on Zoom <a href="https://byu.zoom.us/my/byuacm">here!</a>',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Tech Talk with Esri',
    start: moment('Mar 16 2021 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Come join us with a tech talk with Esri! Esri is an international supplier of geographic information system software, web GIS and geodatabase management applications. The company is headquartered in Redlands, California. The company was founded as the Environmental Systems Research Institute in 1969 as a land-use consulting firm.',
    location: 'Attend the event virtually on Zoom <a href="https://byu.zoom.us/my/byuacm">here!</a>',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Tech Talk with The Church of Jesus Christ of Latter-day Saints',
    start: moment('Mar 23 2021 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Join us for this exciting club meeting where we will be meeting with the The Church of Jesus Christ of Latter-day Saints! The Church of Christ is an international church whose role is in bringing the restored gospel of Jesus Christ to the world in its fulness. The Church is also involved in numerous volunteer and other activities.',
    location: 'Attend the event virtually on Zoom <a href="https://byu.zoom.us/my/byuacm">here!</a>',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Tech workshop with Goldman Sachs',
    start: moment('Mar 30 2021 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'We have an exciting tech workshop planned with Goldman Sachs! The Goldman Sachs Group, Inc., is an American multinational investment bank and financial services company headquartered in New York City. It offers services in investment management, securities, asset management, prime brokerage, and securities underwriting.',
    location: 'Attend the event virtually on Zoom <a href="https://byu.zoom.us/my/byuacm">here!</a>',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'Club Elections',
    start: moment('Apr 2021 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Are you interested in serving as an officer with ACM? The ACM club runs and operates various functions and activities at BYU, service only requires a couple hours a week and enjoy giving back to the future ACM and BYU community!',
    location: 'Online',
    rsvp: "None",
    cost: "Free"
  },
  {
    title: 'ACM Closing Social',
    start: moment('Apr 6 2021 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Closing Social for ACM Club',
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
