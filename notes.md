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

## Ways to Import:
- script src="index.js">script

- script
    function {
        js code
    }
script

- events -- put a listener on the button for example:
button onclick="sayhello()">Say Hello > button






