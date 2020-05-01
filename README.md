# Description

This is a web dashboard designed in Next JS to view Jenkins statistics and insights in real time.

The backend API is designed in Node JS which fetches data from Jenkins and store the data in mongo database.
The API can be found at https://github.com/sourabhgupta385/jenkins-dashboard-api



<p align="center">
  <img src="images/dashboard.png" width="700" align="center">
</p>

* [Pre-Requisites](#pre-requisites "Goto Pre-Requisites")
* [Installation](#installation "Goto Installation")

## Pre-Requisites

1. Set up the API as described here: https://github.com/sourabhgupta385/jenkins-dashboard-api
2. Provide the slave API and jobs API URL in `next.config.js` file

## Installation

1. Install all dependencies

```
$ npm install
```

2. Run the web application 

```
$ npm run dev
```
