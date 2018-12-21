<template>
    <div>
        <h1>Leadership of BYU ACM</h1>

        <h2>{{president}}</h2>
        <h3>President</h3>
        <img :src="presPhoto"> 
        <p>{{presBio}}</p>

        <h2>{{vpresident}}</h2>
        <h3>Vice President</h3>
        <img :src="vpresPhoto"> 
        <p>{{vpresBio}}</p>

        <h2>{{secretary}}</h2>
        <h3>Secretary</h3>
        <img :src="secPhoto">
        <p>{{secBio}}</p>

        <h2>{{networking}}</h2>
        <h3>Networking Officer</h3>
        <img :src="netPhoto">
        <p>{{netBio}}</p>

        <h2>{{finance}}</h2>
        <h3>Finance Officer</h3>
        <img :src="finPhoto">
        <p>{{finBio}}</p>

        <h2>{{event}}</h2>
        <h3>Event Officer</h3>
        <img :src="evePhoto">
        <p>{{eveBio}}</p>

        <h2>{{marketing}}</h2>
        <h3>Marketing Officer</h3>
        <img :src="markPhoto">
        <p>{{markBio}}</p>

        <h2>{{technology}}</h2>
        <h3>Technology Officer</h3>
        <img :src="techPhoto">
        <p>{{techBio}}</p>

        <h2>{{service}}</h2>
        <h3>Service Officer</h3>
        <img :src="servPhoto">
        <p>{{servBio}}</p>

        <h2>{{socialmedia}}</h2>
        <h3>Social Media Officer</h3>
        <img :src="socialPhoto">
        <p>{{socialBio}}</p>

        <h2>{{hackathon}}</h2>
        <h3>Hackathon (MLH) Officer</h3>
        <img :src="hackPhoto">
        <p>{{hackBio}}</p>

        <h2>{{faculty}}</h2>
        <h3>Faculty Advisor</h3>
        <img :src="facPhoto">
        <p>{{facBio}}</p>
        
        <footer id="footer">
            © 2017 BYU Association for Computing Machinery
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Leadership',
    data() {
        return {
            president: '',
            presBio: '',
            presPhoto: '',

            vpresident: '',
            vpresBio: '',
            vpresPhoto: '',

            secretary: '',
            secBio: '',
            secPhoto: '',

            networking: '',
            netBio: '',
            netPhoto: '',

            finance: '',
            finBio: '',
            finPhoto: '',

            event: '',
            eveBio: '',
            evePhoto: '',

            marketing: '',
            markBio: '',
            markPhoto: '',

            technology: '',
            techBio: '',
            techPhoto: '',

            service: '',
            servBio: '',
            servPhoto: '',

            socialmedia: '',
            socialBio: '',
            socialPhoto: '',

            hackathon: '',
            hackBio: '',
            hackPhoto: '',

            faculty: '',
            facBio: '',
            facPhoto: '',
        }
    },
    methods: {
        load: function() {
            axios.post('/acm/leadership').then( res => {
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
        }
    },
    created: function() {
        this.load(); // Ensures the information will load no matter what.
    }
}
</script>

<style scoped>
img {
    border-radius: 10px;
    display: inline;
    height: 150px;
    margin-right: 10px;
    width: 150px;
}

footer {
    color: #2BBAE4;
    background-color: #2D2C2D;
    padding: 15px;
    text-align: center;
    font-family: Verdana;
}
</style>
