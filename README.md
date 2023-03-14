# Prismic Take Home Assignment

Welcome to my implemntation of the take away assignment. Find instructions here: [Instructions](INSTRUCTIONS.md)

## Getting Started

First clone the repository to your local machine

```
git clone https://github.com/brandeddavid/prismic-test.git
```

While in the project root, run command below to install required dependencies.:

```
npm install
```

After successful completion run command below to run the dev server.

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Tech walkthrough

The solution has been implemented using the following technologies and libraries

1. ReactJS.
2. Typescript.
3. NextJs.
4. ContextAPI.
5. React Hooks.
6. Storybook.
7. Jest.
8. React Testing Library.
9. Tailwindcss

### Storage and state management

The solution utilizes a mix of in memory storage, localStorage and Reacts ContextAPI to store and manage data sharing across pages and components. You can navigate through the solution and data will be persisted.

### Component documentation

Storybook has been used to document and test components and pages in isolation from the applications logic. Here's is an example of one:

https://user-images.githubusercontent.com/8037062/224883566-ff3d983e-6f02-45ea-9df2-e9b64dea5c36.mov

This allows us to test all states a component or page can be without hooking some logic to it, just pass in required props. To run story book, use the command

```
npm run storybook
```

### Running tests

The application uses Jest and react testing libraries for unit test. To run tests, run this command:

```
npm run test
```

## Development stats

Here are some important repo stats giving info on time spent on project down to time spent per file. Note this is time spent only spent on the editor.
[Wakatime Stats](https://wakatime.com/projects/prismic-test)

<img width="1440" alt="Screenshot 2023-03-14 at 09 17 05" src="https://user-images.githubusercontent.com/8037062/224912864-4f3fa94d-13df-423e-8fa0-731985eda044.png">

<img width="1440" alt="Screenshot 2023-03-14 at 09 17 16" src="https://user-images.githubusercontent.com/8037062/224912901-446f39a8-78d0-4fd1-980e-7bc9e66afbcc.png">

## Improvements to make

1. Improve responsiveness.
   Pages currently been build with responsiveness in mind but the are some screens that can do with some improvements. These currently include extra small and extra large screens.
2. Integrate cypress tests.
   Cypress would be a great integration to the application for end to end testing of some of the features.
