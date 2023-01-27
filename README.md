# Book Search Engine Starter Code

# Book Search Engine

## Description

This application is a search engine for books. The user is presented with a search input field and submit button, as well as an option to login or signup. A search will result in several results, each featuring a book’s title, author, description, image, and a link to that book on the [Google Books](https://books.google.com/intl/en/googlebooks/about/index.html) site. One must be logged in to enable the capability to save books, which are compiled into a retrievable list with the option to remove previously saved titles.  

Behind the scenes, it consists of a [Google Books API](https://developers.google.com/books) search engine, built with a [RESTful API](https://aws.amazon.com/what-is/restful-api/), which is then refactored to be a [GraphQL API](https://graphql.org/learn/) with [Apollo Server](https://www.apollographql.com/docs/apollo-server/). It is a full-stack MERN application ([MongoDB](https://www.mongodb.com/)-[Express.js](https://expressjs.com/)-[React](https://reactjs.org/)-[Node.js](https://nodejs.org/en/)), deployed to [Heroku](https://www.heroku.com/what) with a [MongoDB](https://www.mongodb.com/) database using [MongoDB Atlas](https://www.mongodb.com/atlas/database).


## Deployed Link

This application is deployed through [Heroku](https://www.heroku.com/what).
> https://akc-book-search.herokuapp.com/

## Table of Contents

- [User Story](#user-story)
- [Installation and Usage](#installation-and-usage)
- [Technologies Utilized](#technologies-utilized)
- [Screenshots and Walkthrough](#screenshots-and-walkthrough)
- [Contributors](#contributors)
- [License](#license)


## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```


## Installation and Usage

In order to run this application, you will want to `git clone` this repository so that the code is on your local machine. Run `npm i` while in the client folder in order to install all necessary front-end [Node.js](https://nodejs.org/en/) dependencies. Run `npm i` again while in the server folder in order to install any back-end dependancies. Then run `npm start` from either the root directory OR both the client and server folders CONCURRENTLY to launch the server.

This application is hosted at Port 3001, so typing: `http://localhost:3001/` into the address bar of your browser (while the server is running) should display the user interface.

Alternatively, you can simply visit my [Deployed Link](https://book-store-picks.herokuapp.com/).

Once in the application, you can use the search bar to find books. Search results feature a book’s title, author, description, image, and a link to that book on [Google Books](https://books.google.com/intl/en/googlebooks/about/index.html). If you find something you like and wish to save the title, you must login to do so. If you don't already have an account, you will have an opportunity to make one. Once logged in, you can revisit your saved books and delete titles from your list if you choose to do so. Lastly, there is an option to logout.


## Technologies Utilized

> [Javascript](https://www.javascript.com/)

> [MongoDB](https://www.mongodb.com/)
> - [MongoDB Atlas](https://www.mongodb.com/atlas/database)

> [Express.js](https://expressjs.com/)

> [React](https://reactjs.org/)

> [Node.js](https://nodejs.org/en/)
> - [Mongoose npm](https://www.npmjs.com/package/mongoose)
> - [Express.js npm](https://www.npmjs.com/package/express)

> [Google Books API](https://developers.google.com/books)

> [RESTful API](https://aws.amazon.com/what-is/restful-api/)

> [GraphQL API](https://graphql.org/learn/)
> - [Apollo Server](https://www.apollographql.com/docs/apollo-server/)

> [Heroku](https://www.heroku.com/what)


## Screenshots and Walkthrough

![Alt-txt-placeholder](path-placeholder)
*caption*
</br>

## Contributors

Thank you for checking out my project! If you would like to see more of my work, please take a peek at my [GitHub](https://github.com/rdcerp/) and [portfolio](https://rdcerp.github.io/React-Portfolio/).

[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/)
&nbsp;
[![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/rdcerp)


## License

This project is licensed under the MIT License &nbsp; &nbsp; &nbsp; [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Please click on the green MIT License Shield above to learn more about what the limitations of this license are.