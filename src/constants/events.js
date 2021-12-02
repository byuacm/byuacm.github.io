import moment from 'moment';

const events = [
  {
    title: 'ACM Opening Social',
    start: moment('September 7 2021 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Opening social with a panel from Qualtrics',
    location: '1170 TMCB',
    rsvp: "None",
    cost: "Free!"
  },
  {
    title: 'Combined social with WiCS with Lucid',
    start: moment('September 14 2021 7:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Combined social with Women in Computer Science and Lucid',
    location: '1170 TMCB',
    rsvp: "https://docs.google.com/forms/d/e/1FAIpQLSco5zo1ZsMIRYavAV6YQ9mxqJ7XI-ZDp2Gdm-yFSXKgCHDVVw/viewform",
    cost: "Free!"
  },
  {
    title: 'Talk with MX',
    start: moment('November 30 2021 6:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Learn about life at MX',
    location: '1170 TMCB',
    cost: "Free!"
  },
  {
    title: 'ACM Closing Social with VIA',
    start: moment('December 7 2021 6:00 PM', 'MMM DD YYYY h:mm A'),
    description: 'Last activity of the semester and secret santa event! It\'ll be awesome!',
    location: '1170 TMCB',
    cost: "Free!"
  }
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
