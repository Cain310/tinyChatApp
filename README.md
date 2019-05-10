# chatApp

chatApp is a client-side single-page application that allows multiple users to chat with each other. Users are able to set their username and chat in real-time through through the Websocket server.

### Usage

```
git clone git@github.com:Cain310/tinyChatApp.git
cd tinyChattApp2
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Dependencies

- React
- Webpack
- [babel-loader](https://github.com/babel/babel-loader)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- Express 4.16.x or above
- UUID 3.3.x or above
- WS 7.0.x or above.

### Upcoming Features

Login abilities
User ability to have profiles and change them.
Encrypted passwords.
Native Sharing capabilities
