# strop-ui

Front End for [strop-insights](https://github.com/IcaliaLabs/strop-insights).
Invision: https://invis.io/SGDI43A2X

This app is based on the boilerplate [react-slingshot](https://github.com/coryhouse/react-slingshot). Go there for details on the development setup, production build, etc.

The only thing that I've added is: 
* `npm run share` which will share with [localtunnel](https://localtunnel.github.io/www/) the app to a public url.
* `npm run security-check` which will look for any vulnerabilities in the npm packages with [nodesecurity.io](https://nodesecurity.io/)

## Table of contents

* [Client Details](#client-details)
* [Environment URLS](#environment-urls)
* [Da Team](#team)
* [Management resources](#management-resources)
* [Setup the project](#setup-the-project)
* [Running the stack for development](#running-the-stack-for-development)
* [Stop the project](#stop-the-project)
* [Restoring the database](#restoring-the-database)
* [Debugging](#debugging)
* [Running specs](#running-specs)
* [Checking code for potential issues](#checking-code-for-potential-issues)


### Client Details

| Name  | Email | Role | Slack |
| ------------- | ------------- | ------------- | ------------- |
| Steven Riskey | steven@stropinsights.com | CEO |  |


### Environment URLS

* **Production** - [https://www.not.yet](https://www.not.yet)
* **Staging** - [https://www.not.yet](https://www.not.yet)

### Da team

| Name  | Email | Role |
| ------------- | ------------- | ------------- |
| Luis Gerardo Enrique Valdez | -  | Development |
| Walter Reyes  | wal@icalialabs.com  | Development |

### Management tools

You should ask for access to this tools if you don't have it already:

* [Github repo](https://github.com/IcaliaLabs/strop-ui)
* [Pivotal tracker project](https://www.pivotaltracker.com/n/projects/2124643)
* [Client Slack](stropinsights.slack.com)

## Development

### Setup the project
1. Clone this repository into your local machine

```bash
$ git clone git@github.com:IcaliaLabs/strop-insights.git
```

2. Simply run `npm install`

### Running the stack for development

1. Open a terminal and run:
```
$ npm start -s
```

### Stop the project

1. To stop every container run in the terminal:
```
$ stop the process in the terminal
```

### Running test

1. To run jest
```
$ npm run test:watch
```
