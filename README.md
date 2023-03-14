# Prismic Take Home Assignment

Welcome to my implemntation of the take away assignment. Find instructions here: [Instructions](INSTRICTIONS.md)

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

### Storage and state management

The solution utilizes a mix of in memory storage, localStorage and Reacts ContextAPI to store and manage data sharing across pages and components. You can navigate through the solution and data will be persisted.

### Component documentation

Storybook has been used to document and test components and pages in isolation from the applications logic. Here's is an example of one:

https://user-images.githubusercontent.com/8037062/224883566-ff3d983e-6f02-45ea-9df2-e9b64dea5c36.mov

This allows us to test all states a component or page can be without hooking some logic to it, just pass in required props.
