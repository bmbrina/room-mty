# room-mty

This app is based on the boilerplate [react-slingshot](https://github.com/coryhouse/react-slingshot). Go there for details on the development setup, production build, etc.

The only thing that I've added is:
* `npm run share` which will share with [localtunnel](https://localtunnel.github.io/www/) the app to a public url.
* `npm run security-check` which will look for any vulnerabilities in the npm packages with [nodesecurity.io](https://nodesecurity.io/)

## Table of contents

* [Setup the project](#setup-the-project)
* [Running the stack for development](#running-the-stack-for-development)
* [Stop the project](#stop-the-project)
* [Restoring the database](#restoring-the-database)
* [Debugging](#debugging)
* [Running specs](#running-specs)
* [Checking code for potential issues](#checking-code-for-potential-issues)

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
