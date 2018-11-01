/*
    All information pertaining to the website will be handled here for ease.
    The purpose is so updating the website will only consist of updating this server.js file, and then rebooting it.
    Passing in all the info from this server will try to decrease confusion of the old website, and increase simplicity.
    This node server and Vue 2.0 framework were all applied from the Winter 2018 CS 260 Web Programming class taught by Dr. Zappala.
*/


// Express Setup //
const express = require('express');
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'));
const SEMESTER = "Fall 2018"; // TODO: Change this for each new semeseter!

/*
    The server will only store and push events, officer biographies, and other assets.
*/


/************************/
/*     ACM HOME PAGE    */
/************************/
app.post('/acm/home', (req, res) => {
    flyer = './static/images/flyer.jpg';
    
    let frontpage = {
        flyer: flyer,
        semester: SEMESTER,
    }
    res.send(frontpage);
})

/************************/
/*      ACM EVENTS      */
/************************/
app.post('/acm/events/', (req, res) => {


    // The main events and their dates, time, and location every semester
    opening = "Opening Social: Sponsored by Canopy Tax";
    openingDate = "Sep 11, 2018";
    openingTime = "6-7pm";
    openingLoc = "1170 TMCB";
    openingDesc = "Our first event of the semester! Come listen to an awesome presentation by Canopy to kick of the new school year. As always, there will be food and door prizes.";

    dinner = "Recruitment Dinner";
    dinnerDate = "";
    dinnerTime = "5:30-7pm";
    dinnerLoc = "";
    dinnerDesc = "Sit down and enjoy a catered meal with industry recruiters. This is a great opportunity to network! Register here before spots run out! You must pay your dues before attending the event. At least 24 recruiters are coming from companies like Sandia National Laboratories, Chicago Venture Partners, Facebook, Microsoft, ExxonMobil, Qualtrics, Zion's Bank, Pariveda, Lucidchart, SimpleNexus, Goldman Sachs, Chief Architect, & Rincon Research. Dress business casual.";

    progcomp = "Programming Competition: Sponsored by Lucid Software";
    progcompDate = "";
    progcompTime = "";
    progcompLoc = "TMCB";
    progcompDesc = "This is a contest between BYU, USU, and the U of U. Check back for updates as we get closer to the event. Register here!"

    closing = "Closing Social";
    closingDate = "";
    closingTime = "6-7pm";
    closingLoc = "1170 TMCB";
    closingDesc = "Fall Semester's closing social will be hosted by Apple. They are super excited to bring a presentation on personal branding and storytelling. This will be the last event of the semester.";

    // Comment out first 4 if a Fall Sem
    // marchHack = "";
    // marchHackDate = "March xx - xx, 201x";
    // marchHackTime = "5pm - 5pm";
    // marchHackLoc = "CB step-down lounge";
    marchHack = "";
    marchHackDate = "";
    marchHackTime = "";
    marchHackLoc = "";
    marchHackDesc = "";
    

    // Add any new events and their respective dates here
    otherEvent1 = "";
    otherEvent1Date = "";
    otherEvent1Time = "";
    otherEvent1Loc = "";
    otherEvent1Desc = "";

    let events = {
        semester: SEMESTER,

        // main events
        opening: opening,
        openingDate: openingDate,
        openingTime: openingTime,
        openingLoc: openingLoc,
        openingDesc: openingDesc,

        dinner: dinner,
        dinnerDate: dinnerDate,
        dinnerTime: dinnerTime,
        dinnerLoc: dinnerLoc,
        dinnerDesc: dinnerDesc,

        progcomp: progcomp,
        progcompDate: progcompDate,
        procompTime: progcompTime,
        progcompLoc: progcompLoc,
        progcompDesc: progcompDesc,

        closing: closing,
        closingDate: closingDate,
        closingTime: closingTime,
        closingLoc: closingLoc,
        closingDesc: closingDesc,

        marchHack: marchHack,
        marchHackDate: marchHackDate,
        marchHackTime: marchHackTime,
        marchHackLoc: marchHackLoc,
    }
    res.send(events);
});

/************************/
/*    ACM LEADERSHIP    */
/************************/
app.post('/acm/leadership', (req, res) => {
    // This will send a big list of the officer name, bio, and picture to the Vue framework.
    // PLEASE save the officer photos by the officer position as a jpg in the /static/images/ directory (folder).
    // the server is already coded to accept this syntax for ease.

    president = "Nathan Geronimo";
    presBio = "Nathan is a junior in the Computer Science program. He started programming once he switched from being a chemistry major back in 2015, and he never regrets the switch. He loves music, anime, and of course learning about how technology is evolving.";
    presPhoto = "./static/images/president.jpg";

    vpresident = "John Webster";
    vpresBio = "John is a junior in computer engineering with a minor in computer science. His interests include hacking on microcontrollers and hardware design. His favorite font is Ubuntu Monospace. In his free time he enjoys spending time outdoors, swimming, and hiking.";
    vpresPhoto = "./static/images/vpresident.jpg";

    secretary = "Chandra Goodell";
    secBio = "";
    secPhoto = "./static/images/secretary.jpg";

    networking = "Braden Watkins";
    netBio = "Braden is a Junior in majoring in Computer Science and minoring in Business Management. He is passionate about building soft skills and networking to complement the hard skills we learn in school.";
    netPhoto = "./static/images/networking.jpg";

    finance = "Daniel Segrera";
    finBio = "Daniel is a Junior in Computer Science with a minor in business administration. His interests are machine learning, yoga, and choir. His future endeavors are to create a thriving tech industry in Utah that rivals the Silicon Valley!";
    finPhoto = "./static/images/finance.jpg";

    event = "Carson Campbell";
    eveBio = "Carson is from from Eagle Idaho. He\'s a junior studying computer science and business. I love playing soccer, volleyball and being outdoors doing extreme sports. I'm really interested in web development and SaaS."
    evePhoto = "./static/images/event.jpg";

    marketing = "Sierra Davis";
    markBio = "Sierra is studying Computer Science with an Animation emphasis. She loves the outdoors, music, prank wars, watermelon, and creating cool things. She is a huge BYU fan and goes to way too many sporting events. Her dream is to create amazing procedural special effects for blockbuster action films or video games";
    markPhoto = "./static/images/marketing.jpg";

    technology = "Eden Knudson";
    techBio = "Eden is a junior in the Computer Science major with a minor in Astronomy. Her interests are graphic design and watching the Amazing Race.";
    techPhoto = "./static/images/technology.jpg";

    service = "Arthur Buck";
    servBio = "";
    servPhoto = "./static/images/service.jpg";

    socialmedia = "Andrew Marquez";
    socialBio = "Andrew is a first-year Master's student studying Information Systems. His interests include longboarding, playing ultimate frisbee, and spending time with his wife. He also enjoys learning about personal finance, the Unix philosophy, and most everything his major offers. He doesn't know what the future holds, but he's looking forward to it!";
    socialPhoto = "./static/images/socialmedia.jpg";

    hackathon = "Kevin Thompson";
    hackBio = "Kevin switched to studying Computer Science after his Freshman year and has never looked back. He is a native of California and loves the outdoors. His hobbies include reading, movies, and tennis. Kevin enjoys good food and good company. He hopes one day to create SpaceY, a bigger better SpaceX.";
    hackPhoto = "./static/images/hackathon.jpg";

    faculty = "Frank Jones, PhD";
    facBio = "Dr. Jones received his B.S. and M.S. degrees in Computer Science from University of Idaho, investigating investigating high-performance architectures and compilers. He then received a Ph.D. at University of Colorado Boulder, additionally focusing on wearable computing and assistive technology. Prior to joining the Computer Science faculty at BYU, he spent time revitalizing the College of Idaho CS curriculum and working with the Naval Air Systems Command (NAVAIR) at China Lake California.";
    facPhoto = "./static/images/faculty.jpg";

    // Make a data structure of all the info
    // We'll then send the data so the site can load all the info
    let leadership = {
        president: president,
        presBio: presBio,
        presPhoto: presPhoto,

        vpresident: vpresident,
        vpresBio: vpresBio,
        vpresPhoto: vpresPhoto,

        secretary: secretary,
        secBio: secBio,
        secPhoto: secPhoto,

        networking: networking,
        netBio: netBio,
        netPhoto: netPhoto,

        finance: finance,
        finBio: finBio,
        finPhoto: finPhoto,

        event: event,
        eveBio: eveBio,
        evePhoto: evePhoto,

        marketing: marketing,
        markBio: markBio,
        markPhoto: markPhoto,

        technology: technology,
        techBio: techBio,
        techPhoto: techPhoto,

        service: service,
        servBio: servBio,
        servPhoto: servPhoto,

        socialmedia: socialmedia,
        socialBio: socialBio,
        socialPhoto: socialPhoto,

        hackathon: hackathon,
        hackBio: hackBio,
        hackPhoto: hackPhoto,

        faculty: faculty,
        facBio: facBio,
        facPhoto: facPhoto,
    }
    res.send(leadership);
});


/************************/
/*       ACM ABOUT      */
/************************/
app.post('/acm/about/', (req, res) => {
    contact = "Companies: Please email acm@byu.edu and put your company's name and the name of our networking lead, Braden Watkins in the subject line.\nStudents: Contacting the ACM Slack account, @ACM Club at byucompsci.slack.com will probably be faster than emailing acm@byu.edu (but you can do either).\nProfessors: If neither Slack nor email work for you, our faculty advisor is Dr. Frank Jones.";
    contactSlack = "https://byucompsci.slack.com/";

    about = "The Association for Computing Machinery is the largest and oldest international scientific and educational computing society in the industry today. The ACM is dedicated to advancing the art, science, engineering, and application of information technology. The BYU chapter is just one of many student chapters throughout the United States. You can view our bylaws here. Our vision for the BYU chapter of ACM is:\n\"Enhancing our university experience through Networking, Education and Service\"";
    aboutLink = "https://acm.byu.edu/misc/bylaws.pdf";

    networking = "...as in people networking. This aspect of our vision includes getting to know representatives from local and international companies, the faculty here at BYU and other universities and each other! Activities include:\nTech Talks: Presentations from faculty and industrial sponsor representatives.\nJob Openings: Career placement presentations.\nOn-on-one: Resume reviews and the recruitment dinner give you more one-on-one time with recruiters.";

    education = "This is why we're here at BYU, right? But beyond the learning we do in the classroom, there are other topics that are important to helping us transition into the workplace. Plus, it's fun to learn cool stuff! Activities include:\nTech talks covering subjects such as machine learning, big data, and technologies used in the real world as well as the soft skills required to get the job that you want.\nProgramming Competitions: At least once per semester, we have a four hour coding competition. Check our events tab for more information!\nHackathons: We will host a 24-hour hackathon during Winter Semester.";

    service = "We are all blessed with talents and abilities and now BYU ACM is providing opportunities to use those to help others!\nACM helps host “Discover STEM”, a middle school career fair at BYU. We also are always looking for opportunities to tutor and help all students, especially minorities and those K-12 get involved with computer science.";

    let abouts = {
        contact: contact,
        contactSlack: contactSlack,
        about: about,
        aboutLink: aboutLink,
        networking: networking,
        education: education,
        service: service,
    }
    res.send(abouts);
});

app.listen(7438, () => console.log('Server listening on port 7438!'));
