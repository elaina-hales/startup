# Notes for this class!

## Overall (domains, servers, the console and ports):
development environment -- local environment, on your laptop
production environment -- published environment, the one in the cloud, should be the complete version

javascript is back end code
caddy handles web authentication and allows us to run other services and route our requests to the right service

user -- site -- get IP address, DNS (Route53) and talk to the server (EC2), the internet connects these

web certificates (.pem file) -- allows you to access the https 

#### DNS
A DNS A record points to an ip address and other A records
- top level domain- .com, .gov, .org., etc
- subdomain-- prefix to the domain (the simon part of your startup)
- root domain-- main domain name


#### Ports
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




@import utrl('link') --> import to CSS

