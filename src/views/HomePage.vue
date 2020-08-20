<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand" style="color: white;">
              <h1>BYU ACM</h1>
              <h3>Excellerate your career, excellerate the world.</h3>
              <!-- <md-button class="md-primary">Default</md-button> -->
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section section-basic" id="scroll_to_about">
        <div class="container">
          <div class="title">
            <h2 id="about">What We're About</h2>
          </div>
          <div class="tim-typo">
            <h2
              class="title"
            >Enhancing our university experience through Networking, Education and Service</h2>
            <p>We are about connecting students and companies together through awesome events and activies like YHack, Recruitment Dinner, and club meetings! We strive to prepare students to be ready to go out and change the world in tech.</p>
            <p>BYU's ACM Chapter is just a small part of the world wide ACM community. The Association for Computing Machinery was founded in 1947 and is the largest educational and computing society in the world! ACM continues to deliver resources that advance computing as a science and a profession even into the 21st century. The BYU ACM club is the goto Computer Science club at BYU. We host the annual Recruitment Dinner and YHack events that have become staples of the BYU student college experience.</p>
            <p>Join our email list to get all of the latest up to date info about the BYU ACM Chapter straight to your inbox! If you own or represent a company and you would like to get information about how you can connect with, and support our students, please send us an email!</p>
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
              <p>Every year we love to hold our annual recruitment dinner, an excellent opportunity for students and recruiters to chat over a catered meal about interview tips, resume hacks, and 30 second elevator pitches. The dinner is held at the Hinkley Center on the eve of the first day of BYU's Fall Semester STEM fair, a fair where companies and prospective students will meet to quickly exchange contact info and resumes and hopefully the student may leave with an interview with a company. The BYU ACM Recruitment Dinner is a great way for students who are interested in going to the STEM Fair to meet with recruiters under a more casual setting and ask them basic questions before the day of. Not only do the students have a blast, but recruiters also have a great time meeting with students and seeing their energy and enthusaism before a long two days working on the STEM Fair floor.</p>
              <p>Traditionally 2 recruiters will sit at a table with 6-8 students over a two course meal and then dessert. One or two speakers will present briefly at the beginning or end of the dinner, but other than that the one and a half hour dinner is set to allow the students and recruiters to connect, socialize, and destress before the next two days of STEM Fair.</p>
            </div>
          </div>

          <div class="title">
            <h3>YHack</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <p>The YHack has become an annual tradition for the students at BYU. Once a year, pizza suppliers, coke distillers, and special security clearances are garnered for the 24 hour straight BYU YHack. Where, fueled solely on pizza and soda, students and friends can meet and work on any projects they desire. Even though we are hosting it, all students are welcome to attend and join in the fun and caffeine. Students may work by themselves, in pairs, or groups. Projects can be a special challenge solely for the YHack, or something a student has been working on for awhile. Workshops and learning sessions are also provided at certain times throughout the hack. Companies and industry professionals are invited to come and present interesting tech insights at certain times during the YHack. Companies also love to provide merch and food during the hackathon. By the end of the 24 hours, even in the midst of a caffeine crash, students always leave having had a great time socializing and getting to work on cool projects together! The YHack has been an awesome experience for students to connect and also inspire students to build and create cool code projects!</p>
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
                    <img src="@/assets/img/acm_img/donuts.png" alt="carousel2" />
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
                  {{event.description.substring(0, 100)}}
                  <span
                    v-if="event.description.length > 100"
                  >...</span>
                  <br />
                  <br />
                  Date: {{printDate(event)}}
                  <br />
                  Location: {{event.location}}
                </template>
                <template slot="tab-pane-2">
                  {{event.description}}
                  <br />
                  <br />
                  Date: {{event.start}}
                  <br />
                  Location: {{event.location}}
                  <br />
                  RSVP: {{event.rsvp}}
                  <br />
                  Cost: {{event.cost}}
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
            <p>Obviously we aren't where we are today without all of our amazing members and companies that support the club. That being said, there's a special handful of students who deserve a shoutout for helping to pull everything together.</p>
          </div>
          <div class="md-layout">
            <!-- officers go here! -->
            <div
              v-for="(leader, index) in leadership"
              v-bind:key="leader.name"
              class="md-layout-item md-size-33 md-medium-size-50 md-small-size-100"
            >
              <div class="card-expansion">
                <md-card>
                  <md-card-media>
                    <!-- <img :src=leader.photo v-bind:alt="leader.name"> -->
                    <img :src="officer_images[index]" v-bind:alt="leader.name" />
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
      // TODO: Find a better way to do this lol
      officer_images: [
        require("@/assets/img/officers/daniel_ekpo.jpg"),
        require("@/assets/img/officers/griffin_holt.jpg"),
        require("@/assets/img/officers/franklin_yuan.jpg"),
        require("@/assets/img/officers/cache_ostler.jpg"),
        require("@/assets/img/officers/corban_anderson.jpg"),
        require("@/assets/img/officers/cailyn_bosworth.jpg"),
        require("@/assets/img/officers/joshua_wilson.jpg"),
        require("@/assets/img/officers/drake_foltz.jpg"),
        require("@/assets/img/officers/ellie_van_de_graaff.jpg"),
        require("@/assets/img/officers/riley_norton.jpg"),
      ],
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
        .filter((a) => a.start.isAfter(moment().subtract(1, "week")))
        .sort((a, b) => a.start - b.start)
        .slice(0, 4);
    },
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

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
