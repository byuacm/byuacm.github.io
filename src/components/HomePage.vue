<template>
    <div class="frontpage">
        <h1>Next club activity for {{semester}} semester!</h1>
        <img id="flyer" v-bind:src="flyer"/>

        <footer id="footer">
            © 2019 BYU Association for Computing Machinery
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
// import express from 'express';
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
            console.log("loading items");
            axios.post('/acm/home').then( res => {
                console.log("in axios.post");
                this.flyer = res.data.flyer;
                this.semester = res.data.semester;
                console.log("grabbed items");
            }).catch(err => {
                console.log(err);
            });
        }
    },
    created: function() {
        this.load();
        console.log("loaded items")
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
    color: #2BBAE4;
    background-color: #2D2C2D;
    padding: 15px;
    text-align: center;
    font-family: Verdana;
}

</style>