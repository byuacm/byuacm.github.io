<template>
  <div v-if="semester !== ''" class="home-container">
    <md-card>
      <md-card-header>
        <div class="md-title">Notice: YHack is canceled</div>
        <!--<div class="md-title">Next club activity for {{semester}} semester:</div>-->
      </md-card-header>
      <md-card-content>
        <div>
          <p>Hello everyone,</p>
          <p>Due to the direction provided by the Utah State Governor, Gary Herbert, BYUSA has been asked to discontinue activities and events until further notice, with intention to slow down the spread of COVID-19. All club gatherings over 100 must be cancelled. So, unfortunately, the YHack is canceled this year. We will keep you updated on future club events. If you have any questions, please feel free to email us at <a href="cs.byu.acm@gmail.com">cs.byu.acm@gmail.com</a>.</p>
          <p>For additional information, look at the links below:</p>
          <ul>
            <li>Link to BYU's article about coronavirus: <a href="https://newsroom.churchofjesuschrist.org/article/ces-guidelines-covid-19">https://newsroom.churchofjesuschrist.org/article/ces-guidelines-covid-19</a></li>
            <li>Link to the Salt Lake Tribune's Article about Gov Herbert's speech today: <a href="https://www.sltrib.com/news/2020/03/12/coronavirus-spreads-utah/">https://www.sltrib.com/news/2020/03/12/coronavirus-spreads-utah</a></li>
          </ul>
        </div>
      </md-card-content>
      <!--
      <md-card-media>
        <a href="https://byu.az1.qualtrics.com/jfe/form/SV_aVmeFBusXsnw1tH"> 
          <img class="flyer" v-bind:src="hackathon_flyer">
        </a>
      </md-card-media>
      -->
    </md-card>
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
}

.md-card {
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flyer {
  padding: 0 30px 30px 30px;
}
</style>
