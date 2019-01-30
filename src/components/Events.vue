<template>
  <div v-if="semester !== ''" class="events-container">
    <h1>Events for {{semester}}</h1>

    <md-card class="event">
      <md-card-header>
        <h4 class="md-title">{{opening}}</h4>
        <div class="md-subhead">
          <div>{{openingDate || 'Date TBD'}}</div>
          <div>{{openingTime || 'Time TBD'}}</div>
          <div>{{openingLoc || 'Location TBD'}}</div>
        </div>
      </md-card-header>
      <md-card-content>
        <h4>{{openingDesc}}</h4>
      </md-card-content>
    </md-card>

    <md-card class="event">
      <md-card-header>
        <h4 class="md-title">{{dinner}}</h4>
        <div class="md-subhead">
          <div>{{dinnerDate || 'Date TBD'}}</div>
          <div>{{dinnerTime || 'Time TBD'}}</div>
          <div>{{dinnerLoc || 'Location TBD'}}</div>
        </div>
      </md-card-header>
      <md-card-content>
        <h4>{{dinnerDesc}}</h4>
      </md-card-content>
    </md-card>

    <md-card class="event">
      <md-card-header>
        <h4 class="md-title">{{progcomp}}</h4>
        <div class="md-subhead">
          <div>{{progcompDate || 'Date TBD'}}</div>
          <div>{{progcompTime || 'Time TBD'}}</div>
          <div>{{progcompLoc || 'Location TBD'}}</div>
        </div>
      </md-card-header>
      <md-card-content>
        <h4>{{progcompDesc}}</h4>
      </md-card-content>
    </md-card>

    <md-card class="event">
      <md-card-header>
        <h4 class="md-title">{{closing}}</h4>
        <div class="md-subhead">
          <div>{{closingDate || 'Date TBD'}}</div>
          <div>{{closingTime || 'Time TBD'}}</div>
          <div>{{closingLoc || 'Location TBD'}}</div>
        </div>
      </md-card-header>
      <md-card-content>
        <h4>{{closingDesc}}</h4>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      semester: "",

      opening: "",
      openingDate: "",
      openingTime: "",
      openingLoc: "",
      openingDesc: "",

      dinner: "",
      dinnerDate: "",
      dinnerTime: "",
      dinnerLoc: "",
      dinnerDesc: "",

      progcomp: "",
      progcompDate: "",
      progcompTime: "",
      progcompLoc: "",
      progcompLoc: "",
      progcompDesc: "",

      closing: "",
      closingDate: "",
      closingTime: "",
      closingLoc: "",
      closingDesc: "",

      marchHack: "",
      marchHackDate: "",
      marchHackTime: "",
      marchHackLoc: "",
      marchHackDesc: "",

      // Add any new events and their respective dates here
      otherEvent1: "",
      otherEvent1Date: "",
      otherEvent1Time: "",
      otherEvent1Loc: "",
      otherEvent1Des: ""
    };
  },
  methods: {
    load: function() {
      axios.post("/acm/events").then(res => {
        this.semester = res.data.semester;
        this.opening = res.data.opening;
        this.openingDate = res.data.openingDate;
        this.openingTime = res.data.openingTime;
        this.openingLoc = res.data.openingLoc;
        this.openingDesc = res.data.openingDesc;

        this.dinner = res.data.dinner;
        this.dinnerDate = res.data.dinnerDate;
        this.dinnerTime = res.data.dinnerTime;
        this.dinnerLoc = res.data.dinnerLoc;
        this.dinnerDesc = res.data.dinnerDesc;

        this.progcomp = res.data.progcomp;
        this.progcompDate = res.data.progcompDate;
        this.progcompTime = res.data.progcompTime;
        this.progcompLoc = res.data.progcompLoc;
        this.progcompDesc = res.data.progcompDesc;

        this.closing = res.data.closing;
        this.closingDate = res.data.closingDate;
        this.closingTime = res.data.closingTime;
        this.closingLoc = res.data.closingLoc;
        this.closingDesc = res.data.closingDesc;

        this.marchHack = res.data.marchHack;
        this.marchHackDate = res.data.marchHackDate;
        this.marchHackTime = res.data.marchHackTime;
        this.marchHackLoc = res.data.marchHackLoc;
        this.marchHackDesc = res.data.marchHackDesc;

        // Add any new events and their respective dates here
        this.otherEvent1 = res.data.otherEvent1;
        this.otherEvent1Date = res.data.otherEvent1Date;
        this.otherEvent1Time = res.data.otherEvent1Time;
        this.otherEvent1Loc = res.data.otherEvent1Loc;
        this.otherEvent1Desc = res.data.otherEvent1Desc;
      });
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

.md-subhead {
  display: flex;
}
</style>
