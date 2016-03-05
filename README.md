<img src="https://cloud.githubusercontent.com/assets/668093/12567089/0ac42774-c372-11e5-97eb-00baf0fccc37.jpg" alt="OpenMRS"/>

# OpenMRS API Documentation Builder

> Build static API docs from the [OpenMRS](http://openmrs.org) Swagger JSON

The repository contains the necessary config, templates, scripts and styles to
generate a single page containing the static API docs for OpenMRS.

:pushpin: **If you are looking for the source to build the API docs that run inside the
REST Web Service module, see the [swagger-ui branch](../../tree/swagger-ui).**

# Installation

The docs are build using [bootprint-openapi](https://github.com/nknapp/bootprint-openapi).
Install this as follows:

````
npm install -g bootprint
npm install -g bootprint-openapi
````

Ensure you have you have version `2.14+` or the [Rest Web Services module](https://modules.openmrs.org/#/show/153/webservices-rest) installed
into your OpenMRS instance.

# Usage

To build the docs run:

````
bootprint openapi -f config.js http://localhost:8080/openmrs/module/webservices/rest/swagger.json test
````

Replace the OpenMRS URL with your server.

This will create a directory called `test` containing the docs.
