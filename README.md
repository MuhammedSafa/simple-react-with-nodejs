# simple-react-with-nodejs
A Simple example of React App with a Node Backend

### For NodeJS Backend:

<ol>
  <li>Install nodejs version: v18.13.0</li>
  <li>Install npm packages "npm install"</li>
  <li>Run the project "node start"</li>
</ol>

### For React Frontend:

<ol>
  <li>Install nodejs version: v18.13.0</li>
  <li>Install npm packages "npm install"</li>
  <li>Run the project "npm start"</li>
</ol>

##### Note:

If you have problem during "npm install" process you can follow below steps:

- [npm install -g npm-check-updates](https://www.npmjs.com/package/npm-check-updates/v/3.0.12)
- ncu -u
- npm install
<br>

## Resources
- [ReactJS](https://reactjs.org/)
- [NodeJS](https://nodejs.org/)
- [ExpressJS](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Axios Tutorials](https://www.digitalocean.com/community/tutorials/react-axios-react)

# To create project from scratch

<ol>
  <li>Create a folder with your project name</li>
  <li>
    <blockquote>
      npm init -y
    </blockquote>
  </li>
  <li>Create a <b>server</b> folder in your project folder</li>
  <li>Place index.js file in server folder. This js file will be our server. You can use this <a href="https://raw.githubusercontent.com/MuhammedSafa/simple-react-with-nodejs/main/server/index.js?token=GHSAT0AAAAAAB7UO34R4C4FUAPCVV63ON22ZAG5OZA"><b>index.js</b></a> file.
    
      
  </li>
    <li>Here we use express. To install express run this command: 
      <blockquote>
        npm i express
      </blockquote>
  </li>
  <li>To start nodejs server we need to add script in package.json:
    


```json
   {
     "name": "react",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
         "start": "node server/index.js"
   },
     ...
```
  
      
  </li>
  <li>Finally start your project:
      <blockquote>
        npm run start
      </blockquote>
  </li>
  <li>Open your browser and type <b>http://localhost:3001</b>. You should see server response "Hello King"</li>
  <li>Now we create react frontend. To create react project run this command: 
    <blockquote>
      npx create-react-app test
    </blockquote>
  </li>
  <li>To install axios. We will use this library to make request to our backend nodejs server: 
    <blockquote>
      npm install axios
    </blockquote></li>
  <li>Go to your test/src folder. We need to prepare our App.js file. You can use this <a href="https://raw.githubusercontent.com/MuhammedSafa/simple-react-with-nodejs/main/test/src/App.js?token=GHSAT0AAAAAAB7UO34QTYOCYQGR5SC4OCSEZAG5S4A"><b>App.js</b></a> file. :
  </li>
  <li>In our created react folder we need to add property which is called proxy to our package.json file. 
    We need to add this because we can request to node server without provide origin running on (http://localhost:3001):
    
   

```json
  {
    "name": "test",
    "version": "0.1.0",
    "proxy": "http://localhost:3001",
    "private": true,
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-scripts": "5.0.1"
    },
    ...
```  
  </li>
  <li>Go to your <b>test</b> react folder and run the project:
    <blockquote>
        npm start
    </blockquote>
    <b>Note:</b> If you problem with starting the project you can check <a href="#note">note</a>
  </li>
</ol>


Enjoy the project...

