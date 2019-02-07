# Rebuilt BYU ACM site

> A new back and front end for the acm website using nodejs with the Vue framework.
This Node server (configured with Nginx) and Vue Webpack/Vue 2.0 framework were all applied from the Winter 2018 CS 260 Web Programming class taught by Dr. Zappala.<br> 
The website was rebuilt by the BYU ACM leadership in the academic Fall/Winter 2018-19 year.<br><br> 
*NOTE: it is currently being hosted on a digital ocean server while we finish the final version: http://159.89.144.81/

# The Why

Here's a list of why the site was rebuilt:
- This new backend is to directly apply what's taught in CS 260*.
- The old backend was a Python/Django server that worked very well, but the documentation for running the website wasn't complete and thefiles were overwhelming to look at individually.
- Learning how to configure Nginx is a good skill to have if you plan on doing some kind of web development.
- Maintenance with Vue and Node is much simpler than Python/Django, and it's a lot easier to understand and follow where the files are.
- It's beneficial to learn how Node (run on nginx) and Vue work together.

Technically, we could put all the information from the Node code in the Vue components code, but we want to practice  communication Vue and Node js.

*Depending on the teacher, you may learn the Vue or Angular framework, but learning Nodejs is consistent for both professors' cirriculum.

## What is Vue/Vue Webpack

Here's an explanation of what Vue is by the creators <br>
https://vuejs.org (Watch the video)

Here's an article explaning Vue Webpack's usefulness <br>
https://medium.com/js-dojo/4-ways-to-boost-your-vue-js-app-with-webpack-8f915feef182

## What is Node

Here's a simple articles of what node is <br>
https://www.w3schools.com/nodejs/nodejs_intro.asp 

Here's a more intricate explanation of what node can do <br>
https://www.codecademy.com/articles/what-is-node


## How Vue and Node work together

The Node code only pushes strings containing information of the leadership, the current semester, and the file directories for .jpg files. This is because those don't change as much, it not at all, throughout the semesters. Vue Webpack then receives this information by connecting to the port the Node server is listening on. <br>
*Note: We are thinking of putting the Contributors and About page into the server too since those don't change as much, but we have to figure out good css to go with those pages.

The Vue code contains all the HTML and CSS code for each page on the website. The Vue code is configured so it'll take the information about leadership and the current semester and automatically fill in the html elements with the corresponding css. <br>
The Events page is something that will be constantly updated in the Vue code itself. This is because defining a bunch of event variables in the node server, and then moving them around if a new event is suddenly created, is a big hassle. So, having all the event information manually edited in the html code of the Events page will be easier to manage.

## How to update the website
### Updating the Vue files

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
