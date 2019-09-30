#  Rainforest

E-commerce Books Website

## :nerd_face: Motivation

We created this site as part of our "Grace Shopper" project for Fullstack Academy of Code.

## :shopping_cart: Functionality

* Users can sign in using Google OAuth or with any active email address
* Users can view all products and drill into specific products to see details
* Users can add products to their cart, which persists across sessions by being stored in the database
* Guests can add products to their cart, which persists after refreshes and closing by being stored with session information
* Users and guests can both edit their carts by increasing or decreasing quantity, or removing from the cart entirely
* Users and guests can both checkout with the items in their cart via the Stripe API 
* Payments are viewable on Stripe’s Developer Portal 
* Users can place orders and view order history with past order details
* Admins can add and edit products

## :hammer_and_pick: Built With

Rainforest’s front-end consist primarily of React, Redux, and CSS. Modular React and Redux components allowed for easy design implementation throughout. Personal CSS contributed to most of the UI/UX of the site.

Rainforest’s back-end consist primarily of Express.js, Sequelize, and PostgreSQL for api-routing, model querying, and database, respectively. Heroku was used for deployment of app.

* Javascript
* React
* React-Redux
* HTML/CSS
* Express.js
* Sequelize
* Stripe API
* Google O-Auth
* Heroku/Travis-CI


## :writing_hand: Authors

* Jared - [Jeffg5001](https://github.com/Jeffg5001)
* Andrew O’Grady - [aogrady3](https://github.com/aogrady3)
* Maksym Fedorenko - [Maksym16](http://github.com/Maksym16)
* Tony Wong - [wongtonyb](https://github.com/wongtonyb)

## :rocket: Deployment

This website was deployed using Heroku.
http://rainforest-grace-shopper.herokuapp.com/


