## How do I get setup?

1. Create a folder called "data" in the root directory of our nodejs project. This is where mongodb documents will be stored. 
2. Go to mongodb installation directory and under the bin folder run this command: `mongod --dbpath C:\Users\Carl\Documents\node-express-mongo\nodetest1\data` this will start the MongoDB server. 
3. It should now start a connection, leave the CLI open and start another CLI instance.
4. In the new CLI, navigate to where you pulled this repository, ex. C:/nodejs-mongodb-default-template then type-in: `npm install` then wait till it finishes installing all the modules required to run our NodeJs Web Application. 
5. Once the installation completed, type in `npm start` to run our Web Application. Make sure to keep the CLI oppened. 
6. Now go to [http://127.0.0.1:3000/](http://127.0.0.1:3000/) using your favorite browser.
