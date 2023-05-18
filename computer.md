# internat

```
internt - The Internet is a global system of interconnected computer networks, servers..{( bhut sare computers ko ak sath jodta he)}

   use standardized communication protocols to facilitate data transmission and exchange between different devices, networks, and systems

   typeof internat
   wired -- dsl(telephon line(micro wave ),Broad Band
   wirless -- wifi(mobile) , satelite

note-- interconnected or interwoven.
internate is Interconnection and networks

part of internat
hardware, software, protocols and the connection medium

isp internt
An ISP (internet service provider) is a company that provides individuals and organizations access to the internet and other related services.

vpn -
A VPN, which stands for virtual private network,
A VPN connection establishes a secure connection between you and the internet
It creates a private network connection between your device
# ip
   IP stands for "Internet Protocol,
   An IP is an internet protocol address.
   it is a numeric value assigned to a network device, and it is used for the identification and location of a network device. IP addresses are assigned to every type of network device.

note - ip address network ki ip location hoti he,
       ip ko use kisi bhi network device ko information send and reciev ke liy hoti he
```

### server

### Architecture

- Web architecture refers to the overall structure of a website or web application, including the way it is designed, implemented, and deployed. It involves the use of technologies and protocols such as HTML, CSS, JavaScript, and HTTP to build and deliver web pages and applications to users.

* architecture ke liy prmukh chije

  1. Service Provide
  2. Service Requester/Client
  3. Messaging Protocols {soap , rest , json}

  - NOTE : soap(Simple Object Access Protocol) , rest(Representational State Transfer) , JSON(JavaScript Object Notation ) , SOAP ek xml massage protocol he jbki REST and JSON massge ke liy hlke data ke liy use .

  4. Transport Protocols {http , SMTP }

  - NOTE: http(Hypertext Transfer Protocol) - It is the protocol used for communication between web browsers and web servers over the internet. It defines the format and rules for how data is transmitted and exchanged between the client (web browser) and the server.
    SMTP - It is a standard protocol used for sending and receiving email messages over the internet. SMTP is responsible for the transmission of email from the sender's email client or server to the recipient's email server. It provides a set of rules and guidelines for how email should be formatted, transferred, and delivered

  5. Security {SSL,TLS ,XML}
     NOTE - SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols that provide secure communication over a network. They are commonly used to secure data transmission over the internet, particularly in web browsers. SSL and TLS protocols ensure that the data exchanged between a client (such as a web browser) and a server remains encrypted and protected from unauthorized access or tampering.

* type of Architecture

1.  Microservices:
2.  Monolithic Architecture:
3.  three tire articher
4.  ..

# software development design patterns

### design patterns -

Design patterns ek pramukh tarike hote hain jo software development mein istemal kiye jaate hain.

    Yeh patterns common programming problems ke liye solutions provide karte hain aur code ko organized, maintainable, aur reusable banane mein madad karte hain.
    In patterns ko repeated problems ke liye design kiya gaya hai aur verified hai ki ye problems ke liye effective solutions hote hain.

- MVC (Model-View-Controller)
- Singleton Pattern
- Factory patterns

#### mvc --

design pattern ek tarike ka blueprint hai .
Yeh pattern code ko organize karne aur user interface se logic ko alag rakhne mein madad karta hai.
eska upyog kr aap apnee code ko alg alg componet ne devid kr skte he esse aap apne code mein changes kar sakte hain bina dusre components ko prabhavit kiye.

- eske tin part hote (model - view -controller)

Model data management ke liye hota hai ( yhe data ko represent karta hai.) ,
model database interactions aur data management ko handle karta hai.

view UI ke liye hota hai,( yhe user interface (UI) ko represent karta hai. ) Ismein data ko dikhane aur user se input lene ke functions hote hain. Node.js mein, views HTML templates, CSS, aur client-side JavaScript ko handle karte hain.

controller user actions ko handle karta hai. Yeh data model se lekar view tak ka interaction handle karta hai. Node.js mein, controller HTTP requests aur routes ko handle karta hai.

- note -
  Node.js mein, aap Express.js framework ka istemal kar MVC pattern implement kar sakte hain. Express.js aapko routes ke liye controller, templates ke liye view, aur database interactions ke liye model provide karta hai. Isse aap apne Node.js applications ko organized aur modular bana sakte hain.

#### Singleton Pattern:

Yeh pattern ek instance ke sirf ek object ko allow karta hai. Isse ek global access point provide hota hai, jisse multiple objects ka sharing aur coordination ho sakta hai.

const myCat;

function getMyCat() {
if(!myCat) {
myCat = new Cat();
}
return myCat;
}

#### Factory Pattern:

Factory pattern ek factory class ka upyog karke objects ko create karta hai. Yeh approach flexibility aur loose coupling provide karta hai, kyun ki objects ko direct create karne ki bajaye factory se create kiya jata hai.

function getCat() {
return new Cat()
}

### new topics

port  
server

port
instruction ---program

front beckondfront beckondfront beckond

ssd hardisk
i5 genration
mouse how to work
kebord type
