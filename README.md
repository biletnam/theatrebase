TheatreBase [![Circle CI](https://circleci.com/gh/andygout/theatrebase/tree/master.svg?style=svg)](https://circleci.com/gh/andygout/theatrebase)
=================


Brief
-------

A graph database-driven site that provides listings for theatrical productions, playtexts and associated data.


To run locally
-------

- Clone this repo.
- Install node modules: `$ npm install`.
- Add favicon: `$ touch ./client/favicons/favicon.ico`.
- Copy development environment variables from `.env-dev` into `.env` by running command: `$ node transfer-env-dev`.
- Create Neo4j database called `theatrebase` and run on port `localhost:7474` (using [Neo4j Community Edition](https://neo4j.com/download/community-edition)).
- Build client-side JavaScript and CSS: `$ npm run build`; build and update on change with `$ npm run watch`.
- Run server using: `$ npm start` and visit homepage: `localhost:3000`.


To test
-------

- Ensure `$ npm install` has been run.
- `$ npm test`.
