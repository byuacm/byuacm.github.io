<template>
  <div>
    <div v-if="semester !== ''" class="home-container">
      <md-card>
        <md-card-header>
          <div class="md-title">Annual Hackerrank Winners!!</div>
        </md-card-header>
        <md-card-content>
          <div>
            <p>Congratulations to our top winners of the annual Hackerrank Competition! It was a tough competition this year, many competitors finished the first three problems of the competitive track but that is where they really started getting hard. The average success rate across all of the competitive problems was 59.41% No entrants were able to complete the second to last problem, "Cards Permutation."</p>
            <p>Here are the top three winners! (More info about each winner will be posted as we hear back from our winners!)</p>
          </div>
          <!-- <div class="md-image">
            <img src="static/events/hacker_rank_photo.png" />
          </div> -->
          <div class='inner-cards'>
            <div class='md-card-inner'>
              <div class='md-card-light'>
                <md-card-header>
                  <span class='md-pretitle'>1st Place</span>
                  <div class="md-title">Joseph Scholl</div>
                </md-card-header>
                <md-card-content>
                  Total Points: 375
                </md-card-content>
              </div>
            </div>

            <div class='md-card-inner'>
              <div class='md-card-light'>
                <md-card-header>
                  <span class='md-pretitle'>2nd Place</span>
                  <div class="md-title">Stephen Cowley</div>
                </md-card-header>
                <md-card-content>
                  Total Points: 371.50
                </md-card-content>
              </div>
            </div>

            <div class='md-card-inner'>
              <div class='md-card-light'>
                <md-card-header>
                  <span class='md-pretitle'>3rd Place</span>
                  <div class="md-title">Isaac Pugh</div>
                </md-card-header>
                <md-card-content>
                  Total Points: 270
                </md-card-content>
              </div>
            </div>
          </div>
          <p>All of the winners will also be automatically entered into all ACM door prize raffles for the 2020-21 school year!</p>
          <p>Thank you to everyone who participated in both the Beginners' Track and the Competitive Track!! Join us next year for our annual Hackerrank Competition!</p>
        </md-card-content>
      </md-card>
    </div>

    <div class='home-container'>
      <md-card>
        <md-card-header>
          <div class="md-title">Awesome Events For Spring/Summer 2020!!</div>
        </md-card-header>
        <md-card-content>
          <div class="md-image-large">
            <img src="static/images/flyer.jpg" />
          </div>
        </md-card-content>
      </md-card>
    </div>

    <div class='home-container'>
      <md-card>
        <md-card-header>
          <div class="md-title">Stay Safe During COVID-19!!</div>
        </md-card-header>
        <md-card-content>
          <div>
            <p>The ACM club hopes that you are doing well during the current circumstances with COVID-19! Where ever you are, we hope that you and your family is safe during this time. While you are inside this is a great time to work on building your competitive skillset, we're doing our best to help with this by hosting our annual Hackerrank competition, details forthcoming. Stay safe! We look forward to seeing you again in the fall!</p>
          </div>
          <div class="md-image">
            <img src="static/images/the_office_i_love_you.gif" />
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  data() {
    return {
      semester: "Winter 2020",
      flyer: "../static/flyer.jpg",
      hackathon_flyer: "../static/hackathon_flyer.jpg",
    };
  },
};
</script>

<style scoped>

.home-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}


.md-card {
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flyer {
  padding: 0 30px 30px 30px;
}

.md-image img {
  max-width: 750px;
  min-width: 400px;
  max-height: 500px;
  height: auto;
  border-radius: 10px;
}

.md-image-large img {
  min-width: 400px;
  max-width: 750px;
  height: auto;
  border-radius: 10px;
}

.md-card-light {
  background-color: white;
  color: #2d2c2d;
}

.md-card-inner {
  max-width: 600px;
  min-width: 450px;
  justify-content: start;
  margin-bottom: 30px;
}

.md-subhead {
  display: flex;
  flex-direction: row;
  color: #2BBAE4;
  padding: auto;
}

.md-subhead div {
  margin: 0 20px 0 5px;
}

.md-pretitle {
  color: #2BBAE4;
}

.inner-cards {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
