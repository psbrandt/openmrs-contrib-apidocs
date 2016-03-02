<img src="https://talk.openmrs.org/uploads/default/original/2X/f/f1ec579b0398cb04c80a54c56da219b2440fe249.jpg" alt="OpenMRS"/>

# OpenMRS Swagger UI
[![Build Status](https://travis-ci.org/psbrandt/openmrs-contrib-apidocs.svg?branch=swagger-ui)](https://travis-ci.org/psbrandt/openmrs-contrib-apidocs)
> [OpenMRS](http://openmrs.org) Swagger UI source

This branch is a snapshot of the [`swagger-ui`](https://github.com/swagger-api/swagger-ui) repo.
It contains the modified source to build the Swagger UI interactive API documentation for OpenMRS.
For the original README see [README.swagger-ui.md]('./README.swagger-ui.md').

## Development

To make changes to the OpenMRS Swagger UI, edit the files in the `src` directory,
then run:

```
  npm run build
```

This will build the `dist` directory. The entire `dist` directroy should then
be copied to [`omod/src/main/webapp/resources/js/swagger-ui`](https://github.com/openmrs/openmrs-module-webservices.rest/tree/master/omod/src/main/webapp/resources/js/swagger-ui/) in the [OpenMRS REST Web Services
Module repo](https://github.com/openmrs/openmrs-module-webservices.rest).

You will then need to rebuild the OpenMRS REST Web Services module to bundle
the new OpenMRS Swagger UI distribution.

### Testing

To test your OpenMRS Swagger UI changes, build the `dist` directory as described
above, then navigate into it and run an http server:

```
  http-server -p 8033
```

You can then access the OpenMRS Swagger UI at [http://localhost:8033/](http://localhost:8033/).

The above example uses [`http-server`](https://www.npmjs.com/package/http-server),
but you are free to use the HTTP server of your choice.

> :pushpin: **Note that when you are testing, the wrapper page is [`index.html`]('./src/index.html'), but
> when the docs are actually served from the OpenMRS user interface, the wrapper
> page is [`apiDocs.jsp`](https://github.com/openmrs/openmrs-module-webservices.rest/blob/master/omod/src/main/webapp/apiDocs.jsp).**

#### [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

In order to enable testing as described above, or to allow apps on different servers
to access your OpenMRS API, you'll need to enable Cross-Origin Resource Sharing
in Tomcat.

See instructions [here](http://enable-cors.org/server_tomcat.html) for Tomcat 7 and [here](https://www.dforge.net/2013/09/16/enabling-cors-on-apache-tomcat-6/) for Tomcat 6.

## License

[MPL-2.0](http://openmrs.org/license/)

`swagger-ui` licensed under [APL-2.0]('./LICENSE')
