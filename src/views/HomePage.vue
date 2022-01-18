<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>BYU ACM</h1>
              <h3> Accelerate your career. Accelerate the world.</h3>
              <md-button class="md-primary" href='https://goo.gl/8Gq7Cz'>Join Us!</md-button>
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section section-basic" id="scroll_to_about">
        <div class="container">
          <div class="md-layout md-alignment-top-center">
            <div class="md-layout-item md-size-50 md-medium-size-100">
              <img src="@/assets/img/Recruiting Dinner 2022.png" alt="Recruitment dinner" class="img-responsive" />
            </div>
          </div>

          <div class="title">
            <h2 id="about">What We're About</h2>
          </div>
          <div>
            <h2 class="title">Enhancing our university experience through Networking, Education and Service</h2>
            <p>We are about connecting students and companies together through awesome events and activities like the YHack, our annual Recruitment Dinner, and regular club meetings! We strive to prepare students to go out and change the world in tech.</p>
            <p>BYU's ACM Chapter is just a small part of the worldwide ACM community. The Association for Computing Machinery was founded in 1947 and is the largest educational and computing society in the world! ACM continues to deliver resources that advance computing as a science and a profession even into the 21st century. The BYU ACM club is the go-to Computer Science club at BYU. We host the annual Recruitment Dinner and YHack events that have become staples of the BYU student college experience!</p>
            <p>Join our email list to get all of the latest up to date info about the BYU ACM Chapter straight to your inbox! If you represent a company or organization, send us an email at <a href='mailto:cs.byu.acm@gmail.com?subject=We%20would%20be%20interested%20in%20connecting!'>cs.byu.acm@gmail.com</a> to get more information about supporting or connecting with our students!</p>
          </div>

          <div class="title">
            <h2>Some of Our Personal Favs</h2>
          </div>

          <div class="title">
            <h3>Recruitment Dinner</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <img src="@/assets/img/acm_img/recruitment_dinner.jpg" />
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <p>Every year we love to hold our annual recruitment dinner, an excellent opportunity for students and recruiters to chat over a catered meal about interview tips, resume hacks, and 30 second elevator pitches. The dinner is held at the Hinkley Center on the eve of BYU's Fall Semester STEM fair, where companies and current students meet to exchange info and explore employment opportunities. The BYU ACM Recruitment Dinner is a great way for students interested in going to the STEM Fair to meet with recruiters under a more relaxed setting and ask them basic questions. Not only do the students have a blast, but recruiters also have a great time meeting with students and seeing their energy and enthusiasm before a long two days working on the STEM Fair floor.</p>
              <p>Traditionally 2 recruiters will sit at a table with 6-8 students over a two-course meal and dessert. This event is a great opportunity for students and recruiters to connect and socialize more informally before STEM fair!</p>
            </div>
          </div>

          <div class="title">
            <h3>YHack</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <p>The YHack has become an annual tradition for students at BYU. Once a year, pizza suppliers, coke distillers, and special security clearances are garnered for the 24 hour straight BYU YHack. Fueled primarily on that pizza and soda, students and friends can meet and work on any project they desire. Despite being an official BYU ACM event, all students are welcome to attend and join in the fun and caffeine. Students may work by themselves, in pairs, or groups. Projects can be a special challenge solely for the 24 hour YHack, or something a student has been working on for a while. Companies and industry professionals present interesting tech insights at designated times throughout the YHack. Local companies often give away swag during the hackathon. Special workshops and learning sessions are also provided at certain times throughout the hack! By the end of the 24 hours, even in the midst of a caffeine crash, students always leave having had a great time socializing and getting to work on cool projects together. The YHack has been an awesome experience for students to connect with and inspire each other to build and create cool code projects!</p>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <img src="@/assets/img/acm_img/hackathon.jpg" />
            </div>
          </div>

          <div class="title">
            <h3>General Computing Awesomeness!</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
              <md-card>
                <carousel
                  :per-page="1"
                  loop
                  :speed="700"
                  autoplay
                  :autoplay-timeout="5000"
                  :mouse-drag="false"
                  navigationEnabled
                  navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
                  navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
                >
                  <slide>
                    <img src="@/assets/img/acm_img/tech_talks.jpg" alt="carousel3" />
                  </slide>
                  <slide>
                    <!-- <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>-->
                    <img src="@/assets/img/acm_img/donuts.jpg" alt="carousel2" />
                  </slide>
                  <slide>
                    <img src="@/assets/img/acm_img/prizes.jpg" alt="carousel3" />
                  </slide>
                  <slide>
                    <img src="@/assets/img/acm_img/pizza.jpg" alt="carousel2" />
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="title">
            <h2>Upcoming Events</h2>
          </div>
          <div class="md-layout">
            <div
              v-for="event in events"
              :key="event.title"
              class="md-layout-item md-size-50 md-small-size-100"
            >
              <h3>{{event.title}}</h3>
              <tabs
                :tab-name="['Info', 'Deets']"
                :tab-icon="['dashboard', 'schedule']"
                color-button="primary"
              >
                <!-- here you can add your content for tab-content -->
                <template slot="tab-pane-1">
                  <p>{{event.description.substring(0, 100) | striphtml }}
                    <span
                      v-if="event.description.length > 100"
                    >...</span>
                    <br />
                    <br />
                    Date: {{printDate(event)}}
                  </p>
                  <p slot="location" v-html="event.location"></p>
                </template>
                <template slot="tab-pane-2">
                  <p slot="description" v-html="event.description"></p>
                  <p>Date: {{printDate(event)}}</p>
                  <p slot="location" v-html="event.location"></p>
                  <p>RSVP: {{event.rsvp}}<br/>Cost: {{event.cost}}</p>
                </template>
              </tabs>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="title">
            <h2>The Dream Team</h2>
          </div>
          <div class="tim-typo">
            <p>Obviously we aren't where we are today without all of our amazing members and companies that support the club! That being said, there's a handful of students who deserve a special shoutout for helping to pull everything together.</p>
          </div>
          <div class="md-layout">
            <!-- officers go here! -->
            <div
              v-for="leader in leadership"
              v-bind:key="leader.name"
              class="md-layout-item md-size-33 md-medium-size-50 md-small-size-100"
            >
              <div class="card-expansion">
                <md-card>
                  <md-card-media>
                    <!-- <img :src=leader.photo v-bind:alt="leader.name"> -->
                    <img :src="officerImgUrl(leader.photo)" v-bind:alt="leader.name" />
                  </md-card-media>
                  <md-card-header
                    class="md-primary"
                    style="position: relative; top: 0px; z-index: 100; background-color: white; padding-left: 10px"
                  >
                    <div class="md-title">{{leader.name}}</div>
                    <div class="md-subhead">{{leader.position}}</div>
                  </md-card-header>

                  <md-card-expand>
                    <md-card-actions md-alignment="space-between" style="background: transparent;">
                      <md-button class="md-primary md-round md-just-icon md-center-text" :href="leader.linkedIn" target="_blank">
                        <font-awesome-icon class="md-default" :icon="['fab', 'linkedin']"></font-awesome-icon>
                        <md-tooltip md-direction="bottom">View My LinkedIn</md-tooltip>
                      </md-button>
                      <md-card-expand-trigger>
                        <md-button class="md-icon-button md-just-icon md-round md-primary">
                          <md-icon>keyboard_arrow_down</md-icon>
                        </md-button>
                      </md-card-expand-trigger>
                    </md-card-actions>

                    <md-card-expand-content>
                      <md-card-content>{{leader.bio}}</md-card-content>
                    </md-card-expand-content>
                  </md-card-expand>
                </md-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { Tabs } from "@/components";
import leadership from "../constants/leadership.js";
import events from "../constants/events.js";

var officerImgContext = require.context("@/assets/img/officers/", false, /.*/)

export default {
  name: "HomePage",
  props: {
    main_image: {
      type: String,
      default: require("@/assets/img/mother_board.jpg"),
    },
  },
  data() {
    return {
      leadership,
      events,
      printDate: function (event) {
        let preferred_date = "MMM D, h:mm A";
        let stnd_date = "MMM D";

        let start_day_string = undefined;
        let end_day_string = undefined;

        if (event.start) {
          if (event.start.hour() == 0) {
            // We'll assume that we will never has an activity at midnight
            start_day_string = event.start.format(stnd_date);
          } else {
            start_day_string = event.start.format(preferred_date);
          }
        } else {
          return "TBD";
        }

        if (event.end) {
          let end_day_format = "MMM D";

          if (event.start.format("l") === event.end.format("l")) {
            end_day_format = "";
          }

          if (event.end.hour() != 0) {
            end_day_format = end_day_format + " h:mm A";
          }

          end_day_string = event.end.format(end_day_format);
        } else {
          return start_day_string;
        }

        return `${start_day_string} - ${end_day_string}`;
      },
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.main_image})`,
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`,
      };
    },
  },
  components: {
    Tabs,
  },
  methods: {
    /**
     * This sorts the events chronologically.
     * If an event is one week old to the current date, it's not shown on the page.
     */
    load: function () {
      this.events = this.events
        .filter((a) => a.start.isAfter(moment().subtract(3, "day")))
        .sort((a, b) => a.start - b.start)
        .slice(0, 4);
    },
    officerImgUrl: function(path) {
      return officerImgContext('./' + path)
    }
  },
  created: function () {
    this.load();
  },
};
</script>
<style lang="scss">
.md-center-text {
  text-align: center;
}

.brand {
  background-color: rgba(25,25,25,.5);
  width: 40vw;
  color: white;
  padding: 25px;

  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}

@media all and (max-width: 1191px) {
  .brand {
    width: 90vw;
    padding: 10px
  }
}

</style>
