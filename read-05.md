# read 5

### Heroku

heroku is a free cloud to deploy your website in the internet using Node js as a server

Use the `heroku login` command to log in to the Heroku CLI and login in the browser 

and you should have in order to start work
1. node
2. npm
3. git

in the app you want to Deploy it Create an app on Heroku, which prepares Heroku to receive your source code. by type `heroku create`
>Heroku generates a random name for your app, or you can pass a parameter to specify your own app name.

Now deploy your code by run `git push heroku master` on terminal

The application is now deployed. Ensure that at least one instance of the app is running:

`heroku ps:scale web=1`

now we can open it with `heroku open`

### NodeJS

Node.js is an open source, cross-platform runtime environment, which allows you to build server-side and networking applications. It's written in JavaScript and can be run within the Node.js runtime on any platform

#### What we need to run a serverwith node js

The first one will give you the key to Node's HTTP functionality. The second one is for possibility to interact with the file system. The third one allows you to handle file paths. The last one allows you to determine a file's MIME-type. And it's not a part of Node.js, so we need to install third-party dependencies before using it.

