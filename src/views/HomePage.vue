<template>
  <div class='wrapper'>
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand" style='color: white;'>
              <h1>BYU ACM</h1>
              <h3>Excellerate your career, excellerate the world.</h3>
              <!-- <md-button class="md-primary">Default</md-button> -->
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section section-basic" id='scroll_to_about'>
        <div class="container">
          <div class="title">
            <h2 id="about">What We're About</h2>
          </div>
          <div class="tim-typo">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Eu consequat ac felis donec et odio. At ultrices mi tempus imperdiet nulla. Ipsum suspendisse ultrices gravida dictum fusce ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Integer eget aliquet nibh praesent. Aenean et tortor at risus viverra. Dignissim sodales ut eu sem integer vitae justo. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Integer vitae justo eget magna fermentum iaculis eu non. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Massa id neque aliquam vestibulum morbi blandit cursus. Ultrices gravida dictum fusce ut placerat orci nulla. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Viverra mauris in aliquam sem fringilla ut morbi. Tristique risus nec feugiat in fermentum posuere urna.</p>
            <p>Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Aliquet lectus proin nibh nisl condimentum id venenatis. In pellentesque massa placerat duis ultricies lacus sed. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Phasellus faucibus scelerisque eleifend donec pretium. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. In hac habitasse platea dictumst quisque sagittis purus. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Facilisi etiam dignissim diam quis. Commodo sed egestas egestas fringilla. Enim ut tellus elementum sagittis vitae et leo duis ut. Erat imperdiet sed euismod nisi porta lorem mollis. Consectetur libero id faucibus nisl tincidunt eget nullam non. Nisl tincidunt eget nullam non nisi est sit. Adipiscing diam donec adipiscing tristique risus nec feugiat in.</p>
            <p>Vitae nunc sed velit dignissim. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris. Risus commodo viverra maecenas accumsan lacus. Risus at ultrices mi tempus imperdiet nulla. Massa placerat duis ultricies lacus sed turpis tincidunt id. Sagittis vitae et leo duis ut diam quam. Phasellus faucibus scelerisque eleifend donec pretium. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Tincidunt dui ut ornare lectus. Pellentesque habitant morbi tristique senectus.</p>
          </div>
        </div>

        <div class="container">
          <div class="title">
            <h2>Upcoming Events</h2>
          </div>
          <div class="md-layout">
            <div v-for="event in events" :key="event.title" class="md-layout-item md-size-50 md-small-size-100">
              <h3>{{event.title}}</h3>
              <tabs
                :tab-name="['Info', 'Deets']"
                :tab-icon="['dashboard', 'schedule']"
                color-button="primary"
              >
                <!-- here you can add your content for tab-content -->
                <template slot="tab-pane-1">
                  {{event.description.substring(0, 100)}}
                  <span v-if="event.description.length > 100">...</span>
                  <br /><br />
                  Date: {{printDate(event)}}
                  <br />
                  Location: {{event.location}}
                </template>
                <template slot="tab-pane-2">
                  {{event.description}}
                  <br /><br />
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
            <div v-for="leader in leadership" v-bind:key="leader.name" class="md-layout-item md-size-33 md-medium-size-50 md-small-size-100">
              <div class="card-expansion">
                <md-card>
                  <md-card-media>
                    <!-- <img :src=leader.photo v-bind:alt="leader.name"> -->
                    <img src="@/assets/img/officers/daniel_ekpo.jpg" v-bind:alt="leader.name">
                  </md-card-media>

                  <md-card-header>
                    <div class="md-title">{{leader.position}}</div>
                    <div class="md-subhead">Subtitle here</div>
                  </md-card-header>

                  <md-card-expand>
                    <md-card-actions md-alignment="space-between">
                      <div>
                        <md-button>Action</md-button>
                        <md-button>Action</md-button>
                      </div>

                      <md-card-expand-trigger>
                        <md-button class="md-icon-button">
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
import moment from 'moment';
import { Tabs } from "@/components";
import leadership from "../constants/leadership.js";
import events from "../constants/events.js";

export default {
  name: "HomePage",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/mother_board.jpg")
    }
  },
  data() {
    return {
      leadership,
      events,
      printDate: function(event) {
        let preferred_date = 'MMM D, h:mm A';
        let stnd_date = 'MMM D';

        let start_day_string = undefined;
        let end_day_string = undefined;

        if(event.start){
          if(event.start.hour() == 0){
            // We'll assume that we will never has an activity at midnight
            start_day_string = event.start.format(stnd_date);
          }else{
            start_day_string = event.start.format(preferred_date);
          }
        }else{
          return 'TBD'
        }

        if(event.end){
          let end_day_format = 'MMM D';

          if(event.start.format('l') === event.end.format('l')){
            end_day_format = '';
          }

          if(event.end.hour() != 0){
            end_day_format = end_day_format + ' h:mm A';
          }

          end_day_string = event.end.format(end_day_format);
        }else{
          return start_day_string;
        }

        return `${start_day_string} - ${end_day_string}`
      }
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  components: {
    Tabs
  },
  methods: {
    /**
     * This sorts the events chronologically.
     * If an event is one week old to the current date, it's not shown on the page.
     */
    load: function() {
      this.events = this.events.filter(a => a.start.isAfter(moment().subtract(1, "week")))
                               .sort((a, b) => a.start - b.start).slice(0,4);
    }
  },
  created: function() {
    this.load();
  }
};
</script>
<style lang="scss">
  .section-download {
    .md-button + .md-button {
      margin-left: 5px;
    }
  }

  @media all and (min-width: 991px) {
    .btn-container {
      display: flex;
    }
  }


</style>
