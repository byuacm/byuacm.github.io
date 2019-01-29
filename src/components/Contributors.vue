<template>
    <div>
        <div id="page-content" ng-view="" class="ng-scope"><div class="sponsor-container ng-scope" id="contributor-tasks">
        <article>
            <h4>2018 Contribution Model</h4>
            <p>
            At each meeting, we invite a company to give a 30 minute presentation and provide food and prizes for attendees.
            This has been an excellent way for companies to connect with our members and get involved with recruiting at BYU.
            For each meeting, we do the following for the company that will present:
            </p><ul>
                <li>Include the company's logo and name in our weekly email reminder.</li>
                <li>Include the company's logo and name in our weekly posted fliers around the Computer Science department.</li>
            </ul>
            <p></p>

            <p>
            BYU ACM functions on the support given to us by companies that we work with.
            There is no given contribution price level or requirement.
            Every semester we have the following events and each event has a different requirement for sponsorship:
            </p><dl>
                <dt>Tuesday Night Meeting</dt>
                <dd>
                Multiple times throughout the semester, ACM holds a Tuesday night meeting to host a single company for a tech talk.
                The company that helps host the event will be asked to provide dinner for the students who attend the event and $200 in prizes to raffle off.
                </dd>
        <!--         <dt>Resume Workshop</dt>
                <dd>
                This event will be two days before the STEM fair and is an opportunity to come help students get feedback on their resumes before handing them to recruiters a couple days later.
                There is no sponsorship fee, and all companies who are looking to hire students for SWE/related positions are invited to send as many recruiters as they wish.
                </dd> -->
                <dt>Recruitment Dinner</dt>
                <dd>
                This is one of the best events to have a one-on-one discussion to get to know the students who are looking for a full time position or internship at the STEM fair the next day!
                This event will be at 6pm the night before the STEM fair and for each recruiter that comes, we ask for a $100 sponsorship for the catered meal that will be provided for the recruiters and students.
                </dd>
        <!--         <dt>TheYHack</dt>
                <dd>
                This is a 24 hour event for students to come and hack away at a project they have wanted to work on!
                This is an awesome day for companies to explain more about their projects while students can discuss their own.
                Also, we will have workshops all day and fun activities to attend.
                We have different levels of sponsorship and additional details, which can be provided if you are interested in this event.
                </dd> -->
            </dl>
            We are always open to more ideas for events. Please <a href="mailto:acm@byu.edu">contact us</a> if you are coming to campus for an event.
            <p></p>
            <p>
            Please contact BYU ACM leadership (<a href=" mailto:acm@byu.edu">acm@byu.edu</a>) or Lynette Nelson (<a href="mailto:lnelson@cs.byu.edu">lnelson@cs.byu.edu</a>) in the CS department for more information about setting up an event on campus.
            </p>
            <p class="less-defined">
            Please keep in mind that your company is not required to give a contribution to BYU ACM in order to arrange an information session or other on-campus event with the Computer Science department.
            These events are publicized generally to CS undergraduate students and the CS department at BYU is happy to help you in arranging these events.
            The CS department also provides a <a href="https://cs.byu.edu/jobs" target="_blank">job board</a> where employers are always welcome to post Computer Science-related jobs.
            </p>
        </article>
        </div>

        <div id="sponsors" class="ng-scope">
        <h4>Recent Contributors</h4>
        <!-- ngRepeat: sponsor in sponsors --><span class="sponsor ng-scope" ng-repeat="sponsor in sponsors">
            <a href="https://www.domo.com/" target="_blank">
            <img alt="Domo" ng-src="/static/sponsors//domo.gif" src="/static/sponsors//domo.gif">
            </a>
        </span><!-- end ngRepeat: sponsor in sponsors -->
        <span class="sponsor ng-scope" ng-repeat="sponsor in sponsors">
            <a href="https://www.epic.com/" target="_blank">
            <img alt="Epic" ng-src="/static/sponsors//epic.jpg" src="/static/sponsors//epic.jpg">
            </a>
        </span><!-- end ngRepeat: sponsor in sponsors --><span class="sponsor ng-scope" ng-repeat="sponsor in sponsors">
            <a href="https://www.lucidchart.com/" target="_blank">
            <img alt="Lucidchart" ng-src="/static/sponsors//lucid-software.png" src="/static/sponsors//lucid-software.png">
            </a>
        </span><!-- end ngRepeat: sponsor in sponsors --><span class="sponsor ng-scope" ng-repeat="sponsor in sponsors">
            <a href="https://www.qualtrics.com/" target="_blank">
            <img alt="Qualtrics" ng-src="/static/sponsors//qualtrics.png" src="/static/sponsors//qualtrics.png">
            </a>
        </span><!-- end ngRepeat: sponsor in sponsors --><span class="sponsor ng-scope" ng-repeat="sponsor in sponsors">
            <a href="https://www.goldmansachs.com/" target="_blank">
            <img alt="Goldman Sachs" ng-src="/static/sponsors//goldman.jpeg" src="/static/sponsors//goldman.jpeg">
            </a>
        </span><!-- end ngRepeat: sponsor in sponsors --><span class="sponsor ng-scope" ng-repeat="sponsor in sponsors">
            <a href="https://www.apple.com/" target="_blank">
            <img alt="Apple" ng-src="/static/sponsors//apple.jpg" src="/static/sponsors//apple.jpg">
            </a>
        </span><!-- end ngRepeat: sponsor in sponsors --><span class="sponsor ng-scope" ng-repeat="sponsor in sponsors">
            <a href="https://www.microsoft.com/" target="_blank">
            <img alt="Microsoft" ng-src="/static/sponsors//microsoft.jpg" src="/static/sponsors//microsoft.jpg">
            </a>
        </span><!-- end ngRepeat: sponsor in sponsors --><span class="sponsor ng-scope" ng-repeat="sponsor in sponsors">
            <a href="https://www.google.com/" target="_blank">
            <img alt="Google" ng-src="/static/sponsors//google.png" src="/static/sponsors//google.png">
            </a>
        </span><!-- end ngRepeat: sponsor in sponsors --><span class="sponsor ng-scope" ng-repeat="sponsor in sponsors">
            <a href="https://www.canopytax.com/" target="_blank">
            <img alt="Canopy" ng-src="/static/sponsors//canopy.png" src="/static/sponsors//canopy.png">
            </a>
        </span><!-- end ngRepeat: sponsor in sponsors -->
        </div>
    </div>

        <footer id="footer">
            © 2019 BYU Association for Computing Machinery
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
h4 {
    color: #2BBAE4;
    font-size: 22px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 500;
    line-height: 1.1;
}

footer {
    color: #2BBAE4;
    background-color: #2D2C2D;
    padding: 15px;
    text-align: center;
    font-family: Verdana;
}

#sponsors {
    margin-bottom: 40px;
    text-align: center;
}

#sponsors img {
    display: inline-block;
    margin: 20px;
    max-height: 175px;
    max-width: 300px;
    vertical-align: top;
}

.sponsor-container li {
    color: #888;
}

.less-defined {
    font-style: italic;
    color: rgb(168, 168, 168);
}
</style>
