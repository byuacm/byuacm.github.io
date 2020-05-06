<template>
  <div>
    <div v-if="semester !== ''" class="home-container">
      <md-card>
        <md-card-header>
          <div class="md-title">Annual Hackerrank Competition!!</div>
        </md-card-header>
        <md-card-content>
          <div>
            <p>Hackerrank is a website where coders can hone their skills and find great jobs with companies. We will again be hosting our Hackerrank competition where BYU Students and friends can compete in figuring out coding challenges!</p>
            <b>The Deets:</b>
            <ul>
              <li>Two different tracks this year: Beginners/No Experience Track and Competitive Track</li>
              <li>First challenge released(one for each track): May 8th, 2020 at 8am</li>
              <li>There will be a new challenge every Friday of increasing difficulty!</li>
              <li>Final Challenge: Jun 12th, 2020</li>
              <li>Winners of each track announced: Jun 20th, 2020</li>
            </ul>

            <b>Prizes for the winners:</b>
            <ul>
              <li>Featured on the website</li>
              <li>Automatically entered into all ACM door prize raffles for the 2020-21 school year!</li>
            </ul>
          </div>
          <div class="md-image">
            <img src="static/events/hacker_rank_photo.png" />
          </div>
        </md-card-content>
      </md-card>
    </div>

    <div class='home-container'>
      <md-card>
        <md-card-header>
          <div class="md-title">Awesome Events For Summer/Spring 2020!!</div>
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
      semester: "Winter 2020", // Always change every semester
      flyer: "../static/flyer.jpg", // DON'T change! Make sure the flyer has the same file name and extention.
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
</style>
