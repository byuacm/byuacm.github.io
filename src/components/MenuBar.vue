<template>
    <div class="acm">
        <header>
            <img id="acm_logo" v-bind:src="imagePath"/> 
            <h1 id="byuacm">
                <b>BYU</b>ACM
            </h1>
            <p>Association for Computing Machinery</p>

        </header>
        <nav>
            <ul id="menu">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/events">Events</router-link></li>
                <li><router-link to="/leadership">Leadership</router-link></li>
                <li><router-link to="/contributors">Contributors</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </nav>

        <!-- <footer id="footer">
            © 2017 BYU Association for Computing Machinery
        </footer> -->
    </div>
</template>

<script>
 export default {
    data () {
        return {
            imagePath: '/static/images/byu-acm-logo.png'
        }
    }
 }
</script>

<style scoped>
body {
    padding: 0px;
    margin: 0px;
}

header {
    width: inherit;
    height: 170px;
    background: #2D2C2D;
    color: #AAA;
    position: relative;
    top: 0px;
    left: 0px;
    clear: both;
}

#acm_logo {
    float: left;
    width: 170px;
    height: 170px;
    margin-left: 10px;
}

#byuacm {
    display: inline-block;
    width: 400px;
    font-size: 70px;
    color: #2BBAE4;
    font-weight: 100;
    margin: 0;
    filter: inherit;
    margin: 45px 0 0 20px; /* Centered the B with the right side of diamond */
}

#byuacm b {
    color: white;
    font-weight: bold;
}

header p {
    color: white;
    /* padding-left: 5px; */
    padding-left: 205px; /* Aligns the A under the B */
    font-size: 18px;
    margin: 0;
}

ul {
    list-style: none;
    /* display: inline; */
    overflow: hidden;
}

nav {
    display: flex;
    width: 100%;
    justify-content: center;
    background: #2D2C2D;
    border-top-style: solid;
    border-top-color: white;
    border-top-width: 1px;    
    color: white;
    text-align: center;
}

li {
    float: left;
    padding: 14px 16px;
    text-decoration: none;
    
    line-height: 34px;
    margin: 0 41px;
}

li a {
    font-size: 24px;
    color: white;
}



</style>