# Notes for this class!

## Overall (domains, servers, the console and ports):
- development environment -- local environment, on your laptop
- production environment -- published environment, the one in the cloud, should be the complete version

- javascript is back end code
- caddy handles web authentication and allows us to run other services and route our requests to the right service (serve files and redirects web traffic)

- user -- site -- get IP address, DNS (Route53) and talk to the server (EC2), the internet connects these

- web certificates (.pem file) -- allows you to access the https 

### DNS
A DNS A record points to an ip address and other A records
- top level domain- .com, .gov, .org., etc
- subdomain-- prefix to the domain (the simon part of your startup)
- root domain-- main domain name


### Ports
Port 443: reserved for HTTPS (secure web browsing over SSL)
Port 80: reserved for HTTP (standard, non-encrypted web traffic)
Port 22: resered for SSH (secure remote login and other secure network service)

### Console Commands 
- -la - allows you to see all the files specified in long format
- cd - Change directory
- mkdir - Make directory
- rm - Remove file(s)
- mv - Move file(s)
- ls - List files
- ps - View the currently running processes
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- man - Look up a command in the manual
- pwd - present working directory (where am I in my files?)
- vim - launches vim text editor to edit files in the console 
- chmod - change mode (permissions)
- nano - another text editor that is simpler but no modes like vim has 
- wget - download file from the internet directly to your computer

chmod +x deploy.sh makes a script executable

## HTML
- you can use single or double quotes
- use <html> at the top of the page to make it an html page
- example image embed: img src="https://www.petlandflorida.com/wp-content/uploads/2019/09/Petland_Florida_Cavalier_King_Charles_Spaniel_puppy.jpg" alt="Puppy" width="300" height="200"

### Elements:
- body: conetnt structure
- head: metadata about page and title
- main: main content structure
- p: paragraph tag
- a: anchor element, contains address to hyperlink reference 
- header: Header of the main content
- footer: Footer of the main content
- nav: Navigational inputs
- aside: aside content from the main content
- div: a block division of content
- span: An inline span of content
- tr: Table row
- th: Table header
- td: Table data
- ol,ul: Ordered or unordered list
- li: List item
- img: Graphical image reference
- dialog: Interactive component such as a confirmation
- form: A collection of user input
- input: User input field
- svg: scalable vector graphic content
- iframe: inline frame of another HTML page
- link: relationships between that HTML page and another one

- by default, the span has a property of inline



## CSS:
- box model: margin - border - padding - content
- use .timer for elements with class timer
- use #timer for elements with id timer
- p[class='summary'] as an attribute selector
- section:hover -- when hovering change to this color
- to ref in html, you can link to it or you can use a <style> tag
- best way: link rel="stylesheet" href="css doc

### Commands: 
- color: red; -- changes font to red
- border-bottom: thin black solid;

### Combinator: 
- Descendant: body section -- any section that is a descendant of a body
- Child: section > p, A list of direct kids, any p that is a direct child of a section
- General Sibling: div ~ p, a list of siblings (any p with a div sibling)
- Adjacent sibling: div + p, Any p that has an adjacent div sibling

### Animation: 
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
@import url('link') --> import font to CSS

@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}

@media tells us what side of the screen is the longest, then change div elements to reflect this

### Flex:
- display: flex; means that all kids displayed in flex flow
- flex-direction: column; means all kids oriented in a column
- header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
- footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels.
- main - flex: 1 - means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space.
- justify-content: --- the relatedness of the object


## JavaScript
- '' and "" work the same 

### Ways to Import:
- script src="index.js">script

- script
    function {
        js code
    }
script

- events -- put a listener on the button for example:
button onclick="sayhello()">Say Hello > button

### Equality and syntax
- = is assignment
- == is hand waiving equality -- fluid, 0 and false are similar DO NOT USE
- === strict check equality 
- very lose cases
- ${} gives us the value of that object 
- let x = 1 can change, const x = 1 will not
- for in 
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
- for of
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
- arrow functions-- faster was to write functions:
standard function syntax:
a.sort(function (v1, v2) {
  return v1 - v2;
});

- arrow function syntax: 
a.sort((v1, v2) => v1 - v2);

- if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
- switch statements:
- switch (expression) {
    case value1:
        // Code block to execute if expression matches value1
        break;
    case value2:
        // Code block to execute if expression matches value2
        break;
    // You can have any number of case statements
    default:
        // Code block to execute if expression does not match any case
}

- while loops:
- let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1

### JSON
- json -- javascript object notation -- only text tho 
- json.stingify(obj) returns a json formated object
- JSON -- shares info across programs {"a":3, "b":"fish"}
- convert to and from javascript using JSON.parse and JSON.stringify
- json uses colons and double quotes only

### Error Handling
- try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}
OUTPUT: Error: connection error always executed

### Regex
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;

const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true

- contained inside / / 
- i says ignore case
- | is or 

### Maps and arrays:
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4


### The DOM, event listeners and local storage
- document.querySelector('button') -- applies to the first button in the tree
- document.querySelector('#button') -- must have id of button
- the DOM is a tree representation of HTML and CSS 
- .textContent -- sets the child text for the element 
- event listeners listen for a click
- you can listen for all kinds of things -- click events, text selection, keyboard, focus, clipboard, etc using addEventListener
- local storage -- can remember things locally so if db is offline its fine
- localStorage.setItem('user', user); -- consider using JSON to store it
- .getItem() will then get it 
- getElementByID("h1") - get h1 element and titleElement.textContent updates its content

### Objects
- It is possible to add new properties to javascript objects
- creating an object:
- const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}

### Promises and async/await:
- setTimeout(()=> {
    //
}, 5000); -- wait for 5 seconds to be called
- pending -- running asynchronously
- fulfilled -- completed successfully
- rejected -- failed to complete
- first param is what to do when it is fulfilled and the second is what to do when rejected
- new Promise((resolve, reject)=> resolve(True))

- function callback(resolve, reject) {
    resolve('done');
}

- const p = new Promise(callback);

- p.then((resolve_result) => console.log(resolve_result)) -- when it resolves, call it


- .then -- call when it is sucessful
- .catch -- for errors, call when error thrown
- .finally() -- call when the whole thing is done

- asynchronous -- no longer rely on an order of results 

#### Async/Await:
- try {
    const = await tossCoin;
} catch (err){
} finally {
}
- to use await, you use async before the function, it automatically returns a promise

#### Modifying the DOM:
- insert element:
- function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

- insert html:
- const el = document.querySelector('div');
el.innerHTML = 'div class="injected">b Hello< b !div';

- add listener:
- const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});


## CS 260 Final Exam Questions
1. What is the default port for HTTP/HTTPS/SSH?
- HTTP: 80
- HTTPS: 443
- SSH: 22
2. What does an HTTP status code in the range of 300/400/500 indicate?
- 300: more action is needed from the client to complete the request, redirect mainly
- 400: bad request, page not found
- 500: server errors
3. What does the HTTP header content-type allow you to do?
- allows us to define the type of data being sent: text/html; charset=utf-8. The format of the content being sent. These are described using standard MIME types.
- other http headers: Authorization, Accept, Cookie, Host, Origin, Access-Control-Allow-Origin, Content-Length, Cache-Control, User-Agent	
4. What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do?
- cookies: Key value pairs that are generated by the server and stored on the client.
- According the the website, "A cookie with the Secure attribute is only sent to the server with an encrypted request over the HTTPS protocol. It's never sent with unsecured HTTP (except on localhost), which means man-in-the-middle attackers can't access it easily. Insecure sites (with http: in the URL) can't set cookies with the Secure attribute. However, don't assume that Secure prevents all access to sensitive information in cookies. For example, someone with access to the client's hard disk (or JavaScript if the HttpOnly attribute isn't set) can read and modify the information."
5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?
- .use() is always used. 
- .put() is only used when called as well as .get()
6. Given the following Express service code: What does the following front end JavaScript that performs a fetch return?
- const express = require('express');
  const app = express();
  app.listen(8080);
- const r = await fetch('/fav/ringo', {
    method: DELETE
  });
- only this middleware matches the above request: app.delete(/fav\/(.*)/, () => {})
7. Given the following MongoDB query, select all of the matching documents {name:Mark}
- Examples of solid MongoDB queries:
// find all houses
db.house.find();


// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });


// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });


// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });


// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });

// name must start uppercase and score must be less than 3
{$or: [{name:/J.*/}, {score: {$lt:3}}]}
8. How should user passwords be stored?
- they should be hashed so they don't get hacked
9. Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?
- // Executed on server:
const { WebSocketServer } = require( 'ws');
const wss = new WebSocketServer({ port: 9900 }) ;


wss.on('connection', (ws) > {
  ws. on('message', (data) =
  {
    const msg = String.fromCharCode( ... data) ;
    ws.send("Server:${msg});
  }):
}）；

// Executed on browser:
const socket = new WebSocket('ws://localhost:9900'):
socket.onmessage = (event) ={
    console. log(Client:${event.data}); // with back quotes
}:
socket.send( 'Hello');
// sends this : Client:Server:Hello

10. What is the websocket protocol intended to provide?
- It is peer to peer communication instead of client to server
11. What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
- JSX: javascript xml (react)
- JS: javascript
- aws: amazon web services
- npm: node package manager
- nvm: Node Version Manager
12. Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.
- const B = () -> burger;
- const C = () -> fish;
- const D = () -> taco;
- const A = () -> {
    const [v, updateV] = React.useState(false);
    const [x, updateX] = React.useState(B);

    let o = C
    if (v) {
      o = b;
    }

    React.useEffect(() -> updateX(D), [v]);

    return (
      p onCLick = {() -> updateV(true)}>{x}{o}<>
    );
};

// displays tacofish

13. Given a set of React components that include each other, what will be generated
- don't overthink it it is what it look like
14. What does a React component with React.useState do?
- manages the state of the variable
15. What are React Hooks used for?
- allows us to use state and other React features in functional components. Previously, these features were only available in class components. Hooks enable more concise, readable, and reusable code.
- cleaner code, easier state management, Performance Optimizations
16. What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks
- State Hooks: let componenets remember info like user input
- Context hook: receive info from distant parents without passing it as props
- Ref hooks: lets component hold some info that isnt used for rendering
- Effect Hook: modifies the DOM -- conect to and synchronize with external systems
- Performance Hook: optimize/ avoid re-rendering and skip calculations 
17. Given React Router code, select statements that are true.
- must use BroswerRouter
- Routing Components: Route path="/home" element={Home }
18. What does the package.json file do?
- contains metadata about the project and defines the dependencies, scripts, and other config settings
19. What does the fetch function do? you know this
20. What does node.js do?
- server side development (api's and server side application)
- package management
21. What does pm2 do?
- manages node.js applications easily
- ensures application remains running even if it crashes.
- it is a server daemon
- pm2 start app.js         # Start an application
- pm2 stop app             # Stop an application
- pm2 restart app          # Restart an application
- pm2 delete app           # Delete an application
22. What does Vite do?
- allows you to see your application locally
- bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS flavors. 

## Other Notes
### Web Frameworks:
- simplify common patterns
- provide common components
- improve performance
- increase device coverage 

- React is the framework we will use. It combines html and JavaScript using JsX

- must select babel as your Javascript preprocessor in codepen
react builds a virtual copy of that tree, called a shadow or virtual dom, every time a change is made, it creates another tree and then only updates what needs to be updated
components -- breaking the page into parts

- to make a component:
const Hello = () => {
   return <p>Hello world </p>;
};

- Another way:
JSX File:
<div>
    Component: <Demo who="Daniel" />
</div>

- React Component:
function Demo(props) {
  return <b>Hello {props.who}</b>;
}

### React hooks:
1. useState --> returns a list of a variable for the internal state, and a method for changing the value of that variable
    const Clicker = () => {
    const [clicked, updateClicked] = React.useState(false);

    const onClicked = (e) => {
        updateClicked(!clicked);
    };

    return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
    };
    // (color === "red" ? "green" : "red") -- if its red, turn it green, otherwise if its not red, turn it red
2. useEffect -- side effects (tracking when a component is displayed or hidden)
    function UseEffectHookDemo() {
    const [count, updateCount] = React.useState(0);
    React.useEffect(() => {
        console.log('rendered');

        return function cleanup() {
        console.log('cleanup');
        };
    });

    return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
    }
3. Hook Dependencies
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
// controls what triggers a useEffect hook by specifying its dependencies

## Router
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);


### Reactivity
Three main pieces of a React Component:
1. props
2. state
3. render

- when a component's JSX is rendered, React parses it and creates a list of references to the component's state or prop objects 
it then monitors these objects and detects change, if so, it calls the render function so that it can change

### Toolchains:
A series of tools that abstract some of the complexity of a web application away
Some common pieces:
1. Code repository - Stores code in a shared, versioned location.
2. Linter - Removes, or warns of, non-idiomatic code usage.
3. Prettier - Formats code according to a shared standard.
4. Transpiler - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
5. Polyfill - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
6. Bundler - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
7. Minifier - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
8. Testing - Automated tests at multiple levels to ensure correctness.
9. Deployment - Automated packaging and delivery of code from the development environment to the production environment.

- We use, Github for the code repo and Vite for JSX, TS, development and debugging, ESBuild for converting to ES6 modules and transpiling (with Babel underneath), Rollup for bundling and tree shaking, PostCSS for CSS transpiling, and finally a simple bash script (deployReact.sh) for deployment.

### Vite
- in Vite, main files are index.html, main.jsx and app.jsx
index.html--provides the html element that React will be injected into
- main.jsx creates the React application by associating the root element with the app component in app.jsx 
use jsx so that vite can read it 
- to deploy to a production environment, use npm run dev

### How the internet works (layers):
    APP -- HTTP/SSH 
    TCP -- Port (back end server)
    Internet -- IPV6/V4 (gotten using the DHCP protocol) -- (this is the post office)   MAC layer
    physical media -- wifi, ethernet, or cellular (connects with a hot spot) (DHCP)     MAC layer

Specs:
    *can remove any of these layers and they will work around it

Physical Media:
    all computers have chips that connect and find hot spots

Internet:
    under sea cables to conect continents
    10.(3 bytes) addresses are for local use only 
    DNS (byu.edu) -- separate into unique ip addresses

TCP:
    fair sharing of those links
    more reliable like a phone call 

APP:
    all the front end stuff we've been doing

Cookies and Errors:
    cookies allow you to create sessions
    200 means its working, 400 is error, 404 is file not found

Node Web Service
    HTTP is hypertext transfer protocol (how things talk to each other)
    const server = http.createServer(function (request, response){
        // do some stuff with those objects
        // called whenever the server gets an http request
        // must end with res.end();
    });

    req has a parameter method and another url 
    we write to url and do the method
    the default method is get
    you can run node from your back end code and debug it here 


    server.listen(8080, () =>{
        // what to do as we wait
    });

    port 8080 is local host
    node runs and interprets this code (creates one of these servers and listens)


Express
    a node module that does this ^ but has a lot of functionality built into it so that less writing
    express -- constructor and default middleware
    app -- express application
    req -- request object
    res -- response object
    router -- add child routing 

    const express = require('express');
    const app = express();
    app.get('*', (req, res) =>{ // when you receive a get request, do this. Only do this function if it matches this path (*)
        res.send(`<h1>Hi [${req.method}] ${req.originalUrl} <h1>`)
    });

    app.listen(8080);

    Express is middleware package (stuff that happens between when request comes in and response comes out)
    app.use([path], callback(req,res,next))

    cookies allow you to create sessions and store information temporarily -- information for the back end, stored on the front end
    cookieParser() package will read the cookies
    .static() serve static html files 

    pass variables into express using : 
    Example:
    app.get('/store/:id/:time', (req,res)=> {
        res.send({ id: req.params.id, time: req.params.time });
    });

    order does matter. It goes through the list and takes the first one that applies unless there's a next();. You must also pass next in as a param (with res and req)

    another param to use -- err object, if this gets called with an error, then return that object
    you can send back all kinds of objects or files or status or redirect

    .use means use this function as defined in param list right now (a sort of catch all)
    .get means check before using ()

    think of all of this like a stack, it all ends up being checked/looked at if specified -- linked together with next


Cors/SOP

PM2
- it allows us to see the running programs and start and stop them easily
- Services can be log in, but there can be more
- manager for us to run things and log out and have it still run
- we want to run satrup and simon on the backend even when we log off
- use pm2 ls to see if it's not running-
- to restart it: use pm2 restart <service>


- index.html is the element we will populate into 
- index.jsx puts stuff into it 
- public contains assets
- src has the components in it (all of our routings is in app.jsx)
- service directory has some packages and index.js file (handles back end routing (express and such))
- now we are providing extra Services
- checks for Services
- sends from 5173 to 3000
- vite.config.js -- reroutes from 5173 into 3000 where the back end is running, tells it how to handle traffic
- CORS -- avoid bad actors (welsfargo.com -> wellsfargo.com) (attacker site) - requests from real wellsfargo 
- control this using origin site and where we are allowed to serve requests from 
- find third party sites that allow you to pull from them (find them in the reading) -- only find free Services
- 

to ssh in use ssh -i <pemkey> ubuntu@<vocabbattle.click>

Mongo DB 
- like MySQL 
- once youre in monogo db, set up a username and password to get into the system
- then add a database in there
- add a configuration json file and then PUT IT IN GIT IGNORE
- use insert and find to search the collections
- now we can post info about the user. It will bring a token back that is a unique identifier that says something
- hash functions are one way functions

the back end always existed, but this time we are writing it
Caddy looks for and deploys your files, makes sure they're in the right spots
Src should not change, neither should deploy script
creating a secure api router with a new name that allows us to serve things you can only access if you are authenticated