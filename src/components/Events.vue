<template>
    <div>
        <h1>Events for {{semester}}</h1>
        
        <div class="event">
            <h4 id="title">{{opening}}</h4>
            <h4>{{openingDate}}</h4>
            <h4>{{openingTime}}</h4>
            <h4>{{openingLoc}}</h4>
            <h4>{{openingDesc}}</h4>
        </div>


        <div class="event">
            <h4 id="title">{{dinner}}</h4>
            <h4>{{dinnerDate}}</h4>
            <h4>{{dinnerTime}}</h4>
            <h4>{{dinnerLoc}}</h4>
            <h4>{{dinnderDesc}}</h4>
        </div>


        <div class="event">
            <h4 id="title">{{progcomp}}</h4>
            <h4>{{progcompDate}}</h4>
            <h4>{{progcompTime}}</h4>
            <h4>{{progcompLoc}}</h4>
            <h4>{{progcompDesc}}</h4>
        </div>


        <div class="event">
            <h4 id="title">{{closing}}</h4>
            <h4>{{closingDate}}</h4>
            <h4>{{closingTime}}</h4>
            <h4>{{closingLoc}}</h4>
            <h4>{{closingDesc}}</h4>
        </div>

        <footer id="footer">
            © 2017 BYU Association for Computing Machinery
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
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
            otherEvent1Des: "",
        }
    },
    methods: {
        load: function() {
            axios.post('/acm/events').then( res => {
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
            })
        }
    },
    created: function() {
        this.load();
    }
}
</script>

<style scoped>

div .event {
    margin: 400;
}

#title {
    color: #2BBAE4;
    font-size: 22px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 500;
    line-height: 1.1;
}

footer {
    /* Puts the footer bar at the bottom of the page*/
    /* position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    clear: both; */

    color: #2BBAE4;
    background-color: #2D2C2D;
    padding: 15px;
    text-align: center;
    font-family: Verdana;
}

</style>
