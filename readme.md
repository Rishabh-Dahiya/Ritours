<h1 align="center">
  <br>
  <a href="https://ritours.herokuapp.com/"><img src="https://github.com/Rishabh-Dahiya/Ritours/blob/master/public/img/logo-green-round.png" alt="Ritours" width="200"></a>
  <br>
  Ritours
  <br>
</h1>

<h4 align="center">An awesome tour booking site built on top of <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>.</h4>

 <p align="center">
 <a href="#deployed-version">Demo</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#demonstration">Demonstration</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#api-usage">API Usage</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#build-with">Build With</a> •
  <a href="#to-do">To-do</a> •
  <a href="#installation">Installation</a> • 
  <a href="#known-bugs">Known Bugs</a> • 
  <a href="#future-updates">Future Updates</a> • 
  <a href="#acknowledgement">Acknowledgement</a>
</p>

## Deployed Version

Live demo (Feel free to visit) 👉 :https://ritours.herokuapp.com/

## Key Features

- Authentication and Authorization
  - Login and logout
- Tour
  - Manage booking, check tours map, check users' reviews and rating
- User profile
  - Update username, photo, email, and password
- Credit card Payment

## Demonstration

#### Signup :

https://user-images.githubusercontent.com/60999728/171215415-18ee1033-2187-46fa-8c73-f6b4369d4d64.mp4

#### Login :

https://user-images.githubusercontent.com/60999728/171215928-8ecbddf3-f36a-4c13-a187-279e48decf5c.mp4

#### Homepage :

https://user-images.githubusercontent.com/60999728/171216498-0293a4af-2409-4326-961b-072a268ee33d.mp4

#### Tour Details :

https://user-images.githubusercontent.com/60999728/171216035-898a4660-198a-4ddd-b228-f0b095cf81ac.mp4

#### Payment Process :

https://user-images.githubusercontent.com/60999728/171216192-7714e860-affb-44fc-aba3-51cf24cade3a.mp4

#### User Profile :

https://user-images.githubusercontent.com/60999728/171216322-b518b813-9041-4964-a0d5-a1359fac3f35.mp4

## How To Use

### Book a tour

- Login to the site
- Search for tours that you want to book
- Book a tour
- Proceed to the payment checkout page
- Enter the card details (Test Mood):
  ```
  - Card No. : 4242 4242 4242 4242
  - Expiry date: 02 / 23
  - CVV: 222
  ```
- Finished!

### Manage your booking

- Check the tour you have booked in "Manage Booking" page in your user settings. You'll be automatically redirected to this
  page after you have completed the booking.

### Update your profile

- You can update your own username, profile photo, email and password.

## API Usage

Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add:

```
- {{URL}} with your hostname as value (Eg. http://127.0.0.1:8000 or http://www.example.com)
- {{password}} with your user password as value.
```

Check [Ritours API Documentation](https://documenter.getpostman.com/view/20661471/UyrAGxZr) for more info.

<b> API Features: </b>

Tours List 👉https://ritours.herokuapp.com/api/v1/tours

Tours State 👉https://ritours.herokuapp.com/api/v1/tours/tour-stats

Get Top 5 Cheap Tours 👉https://ritours.herokuapp.com/api/v1/tours/top-5-cheap

Get Tours Within Radius 👉https://ritours.herokuapp.com/api/v1/tours/tours-within/200/center/34.098453,-118.096327/unit/mi

## Deployment

The website is deployed with git into heroku. Below are the steps taken:

```
git init
git add -A
git commit -m "Commit message"
heroku login
heroku create
heroku config:set CONFIG_KEY=CONFIG_VALUE
parcel build ./public/js/index.js --out-dir ./public/js --out-file bundle.js
git push heroku master
heroku open
```

You can also changed your website url by running this command:

```
heroku apps:rename Ritours-users
```

## Build With

- [NodeJS](https://nodejs.org/en/) - JS runtime environment
- [Express](http://expressjs.com/) - The web framework used
- [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
- [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
- [JSON Web Token](https://jwt.io/) - Security token
- [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
- [Stripe](https://stripe.com/) - Online payment API
- [Postman](https://www.getpostman.com/) - API testing
- [Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform
- [Heroku](https://www.heroku.com/) - Cloud platform

## To-do

- Review and rating
  - Allow user to add a review directly at the website after they have taken a tour
- Booking
  - Prevent duplicate bookings after user has booked that exact tour, implement favourite tours
- Advanced authentication features
  - Signup, confirm user email, login with refresh token, two-factor authentication
- And More ! There's always room for improvement!

## Installation

You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the
dependencies by running

```
$ npm i
set your env variables
$ npm run watch:js
$ npm run build:js
$ npm run dev (for development)
$ npm run start:prod (for production)
$ npm run debug (for debug)
$ npm start
Setting up ESLint and Prettier in VS Code 👇
$ npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node
eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
```

## Known Bugs

Feel free to email me at rishabdahiya2k@gmail.com if you run into any issues or have questions, ideas or concerns.
Please enjoy and feel free to share your opinion, constructive criticism, or comments about my work. Thank you! 🙂

## Future Updates

- Enable PWA
- Improve overall UX/UI and fix bugs
- Featured Tours
- Recently Viewed Tours
- And More ! There's always room for improvement!
