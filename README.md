# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# My Moves Application

## Overview
The My Moves Application is a React-based web application that allows users to view and manage their moving requests. The app features an inventory management system and a sidebar navigation to access different sections such as My Moves, My Profile, Get Quote, and Logout.

## Features

- **Movie List**: Displays a list of moving requests with detailed information including from/to addresses, property size, number of floors, distance, and order date.
- **Inventory Management**: Allows users to view and manage inventory details within each moving request.
- **Sidebar Navigation**: Provides navigation links to different sections of the application, with active link highlighting.
- **Responsive Design**: Built with Tailwind CSS for a responsive and modern design.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Font Awesome**: Icon library for adding scalable vector icons.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router DOM**: Routing library for handling navigation.

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/my-moves.git
   ```
2. **Navigate to the Project Directory**
    ````bash
    cd my-moves
    ````
3. **Install Dependencies**
- Install the required dependencies using npm or yarn:
   ```bash
   npm install
   ```
4. **Start the Development Server**
   ```bash
   npm start
   ```
## Usage
1. Sidebar Navigation: Use the sidebar on the left to navigate between different pages:

- My Moves: View the list of moves and detailed inventory.
- My Profile: View user profile information.
- Get Quote: Request a quote for a move.
- Logout: Logout from the application.

2. View Move Details: Click on "View Move Details" for more information about each move and to manage the associated inventory.

3. Edit Inventory: Use the "Edit Inventory" button to manage inventory items.

## Dependencies
- React: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.
- Axios: Promise-based HTTP client for making API requests.
- FontAwesome: Icon library used for various icons.
