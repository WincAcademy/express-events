# Express Events Starter

This repository contains starter code for the Express Events exercise. There are two folders in this repository: `starter` and `solution`.

## How to get started

Sometimes in the course, we might suggest you to download the "starter" code as a ZIP file. There is always an option to get started right from this repo though. You can either fork, or download this repository, and create your own solution as a root-level folder. This way, you have continuous access to the solution.

However, we recommend you to try solving the exercises as independently as possible - you will find very similar code in the course contents, which you can also use as reference.

## Starting the App

To start the app, follow these steps:

1. Create a `.env` file in the root directory of the `starter` or `solution` folder.
2. Replace the values for `AUTH_SECRET_KEY` and `SENTRY_DSN` with your own values.

```plaintext
AUTH_SECRET_KEY=your_secret_key_here
SENTRY_DSN=your_sentry_dsn_here
```

## Running tests

Tests are created using Newman, a command-line tool that is able to automate execution of Postman-created tests. Therefore, this command will simulate more or less the same tests that we executed during the course (e.g. test if the "happy case" returns 200 or 201 status code, or it returns 404 Not found when we are requesting a non-existing ID).

To run the tests, execute the following command in the root folder of your project:

```plaintext
npm test
```

If you have a look at the `package.json` file, you will see that it executes the collection stored in the `postman` folder of the repo root.
