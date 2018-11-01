<template>
    <div class="frontpage">
        <h1>Next club activity for {{semester}} semester!</h1>
        <img id="flyer" v-bind:src="flyer"/>

        <footer id="footer">
            © 2017 BYU Association for Computing Machinery
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'HomePage',
    data () {
        return {
            flyer: "",
            semester: "",
        }
    },
    methods: {
        load: function() {
            axios.post('/acm/home').then( res => {
                this.flyer = res.data.flyer;
                this.semester = res.data.semester;
            })
        }
    },
    created: function() {
        this.load();
    },
}
</script>

<style scoped>
 body {
     padding: 0px;
     margin: 0px;
     text-align: center;
 }

 .frontpage {
     text-align: center;
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