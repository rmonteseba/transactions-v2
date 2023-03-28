<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://decemberlabs.com/wp-content/uploads/2022/05/share.png" width="300" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications, used on the building up process of the <strong>Transactions</strong> technical challenge for <a href="https://decemberlabs.com/" target="_blank">December Labs</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## First steps

This project uses [NodeJS v18.15.0](https://nodejs.org/en/blog/release/v18.15.0) you can manage the node installation using [nvm](https://github.com/nvm-sh/nvm) 

Make sure of including the given [**.env**](https://drive.google.com/file/d/1Fg5yi34nAGNAGwP4flgt1rkbW75T7InP/view?usp=share_link) file within the working directory before running the project

By default, the application runs on the port **7000**
## PostgreSQL
This project requires [Docker](https://www.docker.com/) on your local machine for running a postgres instance, you can start the DB service by running
```bash
$ docker-compose up development-db -d
```

Or stop it by running:
```bash
$ docker-compose stop development-db
```
By default, the DB runs on the port **7001**

## Installation

```bash
$ yarn install
```

## Running migrations
```bash
$ yarn prisma migrate deploy
```

## Running seeds
```bash
$ yarn prisma db seed
```
☝️ This populates the database with basic app data, e.g basic currencies (**UYU**, **USD**, **EUR**)

## Running the app
You can run the app using:

```bash
# development
$ yarn run start
```
Or:
```bash
# watch mode
$ yarn run start:dev
```
For running the app in watch mode and allow hot reloading

## Inspect the data
During your walkthrough you can always access the database using your favorite DB workbench or you can also run

```bash
$ yarn prisma studio
```

For checking the project entities and data details

## Use cases

You can check the `/postman` directory which includes a postman environment and a postman collection with various examples.

## Improvements

**Project improvements:**
1. **Consider the inclusion/migration to scalable backend architectures** e.g hexagonal architecture, this since the project is built on top of a bank domain and bank systems are normally scalable-demanding and highly-interoperable with other systems.
2. **Implement output validation layers**, I think is a good practice to control what is being returned on each endpoint similar to the used dtos strategy.
3. **Do not allow users to populate the balance on account creation**, this was only made with testing purposes.
4. **Evaluate alternative strategies/technologies as source-of-truth for saving currency exchanges**, depending on the case and the frequency of those updates, other technologies (e.g redis) could give an interesting approach and performance metrics for tackling recurrent exchange rate updates, on another hand, subscribing to a real time API for allowing on demand (and real time) exchange rates updates could be a good alternative too
5. **Be careful with the FixerAPI downtimes**  since it seems not to be up sometimes, if we wouldn't like to change the api, we can also implement a retry strategy on the cronjobs for mitigating a possible lack of update
6. **Keep track of the currency of a transaction commission**, since we are tracking the commission amount on the transactions itself, if the account currency changes (for some reason) it will mess up the tracking

## Stay in touch

- Author - [Sebastian Montes](https://github.com/rmonteseba)
- Website - [https://rmonteseba.github.io/about-me/](https://rmonteseba.github.io/about-me/)
- LinkedIn - [rmonteseba](https://www.linkedin.com/in/sebastian-montes-2b8140192/)

## License

Nest is [MIT licensed](LICENSE).
