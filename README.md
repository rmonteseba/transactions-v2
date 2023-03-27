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

Make sure of including the given **.env** file within the working directory before running the project

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

## Improvements

Architectural improvements [TODO]

## Stay in touch

- Author - [Sebastian Montes](https://github.com/rmonteseba)
- Website - [https://rmonteseba.github.io/about-me/](https://rmonteseba.github.io/about-me/)
- LinkedIn - [rmonteseba](https://www.linkedin.com/in/sebastian-montes-2b8140192/)

## License

Nest is [MIT licensed](LICENSE).
