<template>
    <div v-if="president !== ''"  class="leadership-container">
      <md-card>
        <md-card-media>
          <img :src="presPhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{president}}</div>
          <div class="md-subhead">President</div>
        </md-card-header>
        <md-card-content>
          <p>{{presBio}}</p>
        </md-card-content>
      </md-card>

      <md-card>
        <md-card-media>
          <img :src="vpresPhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{vpresident}}</div>
          <div class="md-subhead">Vice President</div>
        </md-card-header>
        <md-card-content>
          <p>{{vpresBio}}</p>
        </md-card-content>
      </md-card>

      <md-card>
        <md-card-media>
          <img :src="secPhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{secretary}}</div>
          <div class="md-subhead">Secretary</div>
        </md-card-header>
        <md-card-content>
          <p>{{secBio}}</p>
        </md-card-content>
      </md-card>

      <md-card>
        <md-card-media>
          <img :src="netPhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{networking}}</div>
          <div class="md-subhead">Networking Officer</div>
        </md-card-header>
        <md-card-content>
          <p>{{netBio}}</p>
        </md-card-content>
      </md-card>

      <md-card>
        <md-card-media>
          <img :src="finPhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{finance}}</div>
          <div class="md-subhead">Finance Officer</div>
        </md-card-header>
        <md-card-content>
          <p>{{finBio}}</p>
        </md-card-content>
      </md-card>

      <md-card>
        <md-card-media>
          <img :src="evePhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{event}}</div>
          <div class="md-subhead">Event Officer</div>
        </md-card-header>
        <md-card-content>
          <p>{{eveBio}}</p>
        </md-card-content>
      </md-card>

      <md-card>
        <md-card-media>
          <img :src="markPhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{marketing}}</div>
          <div class="md-subhead">Marketing Officer</div>
        </md-card-header>
        <md-card-content>
          <p>{{markBio}}</p>
        </md-card-content>
      </md-card>

      <md-card>
        <md-card-media>
          <img :src="techPhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{technology}}</div>
          <div class="md-subhead">Technology Officer</div>
        </md-card-header>
        <md-card-content>
          <p>{{techBio}}</p>
        </md-card-content>
      </md-card>

      <md-card>
        <md-card-media>
          <img :src="servPhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{service}}</div>
          <div class="md-subhead">Service Officer</div>
        </md-card-header>
        <md-card-content>
          <p>{{servBio}}</p>
        </md-card-content>
      </md-card>

      <md-card>
        <md-card-media>
          <img :src="hackPhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{hackathon}}</div>
          <div class="md-subhead">Hackathon (MLH) Officer</div>
        </md-card-header>
        <md-card-content>
          <p>{{hackBio}}</p>
        </md-card-content>
      </md-card>

      <md-card>
        <md-card-media>
          <img :src="facPhoto">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{faculty}}</div>
          <div class="md-subhead">Faculty Advisor</div>
        </md-card-header>
        <md-card-content>
          <p>{{facBio}}</p>
        </md-card-content>
      </md-card>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Leadership",
  data() {
    return {
      president: "",
      presBio: "",
      presPhoto: "",

      vpresident: "",
      vpresBio: "",
      vpresPhoto: "",

      secretary: "",
      secBio: "",
      secPhoto: "",

      networking: "",
      netBio: "",
      netPhoto: "",

      finance: "",
      finBio: "",
      finPhoto: "",

      event: "",
      eveBio: "",
      evePhoto: "",

      marketing: "",
      markBio: "",
      markPhoto: "",

      technology: "",
      techBio: "",
      techPhoto: "",

      service: "",
      servBio: "",
      servPhoto: "",

      socialmedia: "",
      socialBio: "",
      socialPhoto: "",

      hackathon: "",
      hackBio: "",
      hackPhoto: "",

      faculty: "",
      facBio: "",
      facPhoto: ""
    };
  },
  methods: {
    load: function() {
      axios
        .post("/acm/leadership")
        .then(res => {
          // Loads the officer name, bio, and photo for the site
          this.president = res.data.president;
          this.presBio = res.data.presBio;
          this.presPhoto = res.data.presPhoto;

          this.vpresident = res.data.vpresident;
          this.vpresBio = res.data.vpresBio;
          this.vpresPhoto = res.data.vpresPhoto;

          this.secretary = res.data.secretary;
          this.secBio = res.data.secBio;
          this.secPhoto = res.data.secPhoto;

          this.networking = res.data.networking;
          this.netBio = res.data.netBio;
          this.netPhoto = res.data.netPhoto;

          this.finance = res.data.finance;
          this.finBio = res.data.finBio;
          this.finPhoto = res.data.finPhoto;

          this.event = res.data.event;
          this.eveBio = res.data.eveBio;
          this.evePhoto = res.data.evePhoto;

          this.marketing = res.data.marketing;
          this.markBio = res.data.markBio;
          this.markPhoto = res.data.markPhoto;

          this.service = res.data.service;
          this.servBio = res.data.servBio;
          this.servPhoto = res.data.servPhoto;

          this.socialmedia = res.data.socialmedia;
          this.socialBio = res.data.socialBio;
          this.socialPhoto = res.data.socialPhoto;

          this.technology = res.data.technology;
          this.techBio = res.data.techBio;
          this.techPhoto = res.data.techPhoto;

          this.hackathon = res.data.hackathon;
          this.hackBio = res.data.hackBio;
          this.hackPhoto = res.data.hackPhoto;

          this.faculty = res.data.faculty;
          this.facBio = res.data.facBio;
          this.facPhoto = res.data.facPhoto;
        })
        .catch(err => {});
    }
  },
  created: function() {
    this.load(); // Ensures the information will load no matter what.
  }
};
</script>

<style scoped>
.leadership-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.md-card {
  width: 250px;
  margin: 40px;
  border-radius: 10px;
}

img {
  border-radius: 10px;
  display: inline;
  width: 250px;
  height: 250px;
  margin-right: 10px;
}
</style>
