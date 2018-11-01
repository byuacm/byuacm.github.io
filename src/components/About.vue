<template>
    <div id="about">
        <h4>About Us</h4>
        <p>{{about}}</p>

        <h4>Networking</h4>
        <p>{{networking}}</p>

        <h4>Education</h4>
        <p>{{education}}</p>

        <h4>Service</h4>
        <p>{{service}}</p>

        <h4>Paying Club Dues</h4>

        <h4>Contact Us</h4>
        <p>{{contact}}
        <p></p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            contact: "",
            contactSlack: "",
            about: "",
            aboutLink: "",
            networking: "",
            education: "",
            service: "",
        }
    },
    methods: {
        load: function() {
            axios.post('/acm/about').then( res => {
                this.contact = res.data.contact;
                this.contactSlack = res.data.contactSlack;
                this.about = res.data.about;
                this.aboutLink = res.data.aboutLink;
                this.networking = res.data.networking;
                this.education = res.data.education;
                this.service = res.data.service;
            })

        }
    },
    created: function() {
        this.load();
    }
}
</script>

<style scoped>

#about {
    /* text-align: center; */
}

h4 {
    color: #2BBAE4;
    font-size: 22px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 500;
    line-height: 1.1;
}
</style>
