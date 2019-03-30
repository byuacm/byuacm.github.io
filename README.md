# Rebuilt BYU ACM site

> A new front end for the ACM website using the Vue.js framework.
This Nginx server and Vue Webpack/Vue 2.0 framework were all applied from the Winter 2018 CS 260 Web Programming class taught by Dr. Zappala.<br> 
The website was rebuilt by the BYU ACM leadership in the academic Fall/Winter 2018-19 year.<br><br> 


# The Why

Here's a list of why the site was rebuilt:
- This new frontend is to directly apply what's taught in CS 260*.
- The old backend was a Python/Django server that didn't end up working well after the original creators left. It doesn't help that the documentation for running the website wasn't complete and the files were overwhelming to look at individually.
- We completely removed all the Django backend, so it's only Nginx running the Vue frontend.
- Learning how to configure Nginx is a good skill to have if you plan on doing some kind of web development.

Technically, we could put all the information from the .js files in the /constants directory in the Vue components code, but it was easier to update those files than the whole Vue component.

*Depending on the teacher, you may learn the Vue or Angular framework.

## What is Vue/Vue Webpack

Here's an explanation of what Vue is by the creators <br>
https://vuejs.org (Watch the video)

Here's an article explaning Vue Webpack's usefulness <br>
https://medium.com/js-dojo/4-ways-to-boost-your-vue-js-app-with-webpack-8f915feef182

## What is Nginx

Here's a simple articles of what node is <br>
https://www.w3schools.com/nodejs/nodejs_intro.asp 

## How to update the website


### What files to update 


``` 
# update the code in the main directory
git pull

# build for production with minification
npm run build

# if npm run build says there missing css files, run this command and then build again
npm i

# now copy the new files created in the /dist folder to where nginx will host the files
cd dist/
cp index.html /var/www/html
cp -r static/ /var/www/html
```
Webiste is all updated!

### Updating the Node server

```
# update the code in the main directory
git pull

# kill the server being run in the background
pm2 delete acm

# restart the server 
pm2 start server.js --name "acm"
```
New server code is running!

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
