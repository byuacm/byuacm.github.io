<template>
  <div class="events-container">
    <div>
      <h1 class="events-title">Upcoming Events</h1>
    </div>
    <md-card v-if="events.length === 0">
      <md-card-header>
        <h4 class="md-title">No Events Coming Up Soon :(</h4>
        <div class="md-subhead">
          <p>As soon as we have some more events planned they'll show up here!!!</p>
        </div>
      </md-card-header>
      <md-card-content>
        <div class="md-image">
          <img id="no_events_image" src="static/events/no_events.jpg" />
        </div>
      </md-card-content>
    </md-card>
    <md-card class="event" v-for="event in events" v-bind:key="event.title">
      <md-card-header>
        <h4 class="md-title">{{event.title}}</h4>
        <div class="md-subhead">
          <div>{{printDate(event)}}</div>
          <div>{{event.location || 'Location TBD'}}</div>
        </div>
      </md-card-header>
      <md-card-content>
        <div>{{event.description}}</div>
        <div v-if="event.signup">
          Sign up
          <a v-bind:href="event.signup">here</a>.
        </div>
        <div v-if="event.photo" class="md-image">
          <img v-bind:src="event.photo" />
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import events from "../constants/events.js";
import moment from 'moment';

export default {
  data() {
    return {
      events,
      printDate: function(event) {
        let preferred_date = 'MMM D, h:mm A';
        if (!event.end) {
          return event.start.format(preferred_date);
        }else if (event.start.format('l') === event.end.format('l')) {
          // Same day event
          return `${event.start.format(preferred_date)} - ${event.end.format('h:mm A')}`;
        } else {
          return `${event.start.format(preferred_date)} - ${event.end.format(preferred_date)}`;
        }
      }
    };
  },

  methods: {
    /**
     * This sorts the events chronologically.
     * If an event is one week old to the current date, it's not shown on the page.
     */
    load: function() {
      this.events = this.events.filter(a => a.start.isAfter(moment().subtract(1, "week")))
                               .sort((a, b) => a.start - b.start);
    }
  },
  created: function() {
    this.load();
  }
};
</script>

<style scoped>
.events-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.events-title {
  color: white;
}

.md-card {
  margin-bottom: 30px;
  width: 100%;
}

.md-subhead {
  display: flex;
  flex-direction: row;
}

.md-subhead div {
  margin: 0 20px 0 5px;
}

.md-image img {
  max-width: 750px;
  min-width: 400px;
  max-height: 500px;
  height: auto;
  border-radius: 10px;
  margin: 10px;
}
</style>
