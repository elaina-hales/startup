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

insertChild('#courses', 'new course');

- insert html:
- const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';

- add listener:
- const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});