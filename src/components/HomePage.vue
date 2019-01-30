<template>
    <div v-if="semester !== ''" class="frontpage">
        <h1>Next club activity for {{semester}} semester!</h1>
        <img class="flyer" v-bind:src="flyer"/>
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
            }).catch(err => {});
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

.flyer {
    width: 500px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 20px;
}
</style>
