<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# STEPS TO RUN MY APP LOCALLY

## 1 - Clone the Repository

####    Open a terminal and run this sequence of commands to clone the repository and to open it on Visual Studio Code. If you use another code editor do not run the second command and open the file in the code editor of your preference.

- Clone the repository, this will create a new folder with the name of your preference
```bash
$ git clone https://github.com/borisbrunop/fultimeforce-test.git ~name of your preference~
```
- Open Visual Studio Code in the folder that you created before
```bash
 $ cd ~name that you assign before~ && code .
```

## 2 - Change the Branch and Install all the dependencies 

####    Once you open the folder with your code editor run this commands in the terminal of the cloned respository to change the branch to develop and to install all the dependencies. Please run the commands in the given order

- To change branch
```bash
$ git checkout develop
```

- To install all the dependencies, this will create a new folder called 'node_modules'
```bash
# for npm users
$ npm i -a 

# for yarn users
yarn install
```

## 3 - Crate Enviroment Variables

####    Create a new file called '.env' to store all the enviroment variables, copy and paste the next lines inside the file .env file do not forget to save the file before you move on to the next step.

```bash
ENV=development
PORT=4000
CLOUDINARY_NAME=cormineco
CLOUDINARY_API_KEY=163954872246677
CLOUDINARY_API_SECRET=LA_k47T84Dm8A3yrvDh3LlDvXtU
```

## 4 - Run the App
####    Run this script the same way you did in step 2 to start the proyect in localhost. Before running this script please make sure that you dont have anything running in the localhost:4000 port

```bash
# for npm users
$ npm run start:dev

# for yarn users
 $ yarn run start:dev
```

## 5 - Run the Front-end App
  Finally go to the next link and follow the README steps to run the app locally. 
  [link to the web-app repository](https://github.com/borisbrunop/fulltimeforce-test-app)

Thank you for the opportunity, have a nice day!!

## Stay in touch

- Author - [Boris Bruno](https://borisbruno.netlify.app/)
- Website - [https://nestjs.com](https://nestjs.com/)

## License

Nest is [MIT licensed](LICENSE).
