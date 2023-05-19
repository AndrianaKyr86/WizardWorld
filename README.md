# WizardWorld

MVP for CodeOp bootcamp based in Barcelona
In git run "npm migrate",
In git run "npm install " ,

in same terminal run "npm start" for the server to start.

In new terminal cd in wizard file and run " npm run dev "

What the app is?
Welcome to the Wizarding World App! Discover the enchanting realm of Hogwarts and unravel its secrets. Get sorted into your House, learn all the crooks and crannies, explore unique traits, and delve into spells and potions. Join us on a magical journey like no other.
The app was built for fun, showcasing the ability to work with components, adding functions and call upon them as well as practicing on CSS.

This is a web app with the following:
Landing page
Nav Bar
Paragraph
Cards with Houses
Button upon click calls function sortinghat
Opens a popup window with the information stored.

Technologies used
Javascript
HTML 
CSS
React offers a powerful and efficient framework for building dynamic and interactive user interfaces, making it a popular choice for modern web and mobile app development.

The process
I started this application according to the guide Scaffolding project.
On the app.jsx I started with the return to have a more concrete view.
Added the paragraph and then I knew I wanted to make a navbar (that will be functional in the future with react route and the data stored in the folder under wizard/db/data) and four cards that give a small preview of the four houses.
I created the components NavBar, and Houses, connected them to the app.jsx
Then I added the button and function - I selected to keep the function on the app.jsx and not create another component.
This function is calling information from the file Hogwards.js and it is using the math.random function.
With these in place, I created a popup card that displays the information stored in Hogwards,js according to the previous step.
The close button of the pop up is functional.
I have the EndLine component imported in Popup but CSS not fully functional at the moment.

Potential future features
Create the other three pages with React Route
Make functional the EndLine component that is imported on the Popup component
From the Popup I want to make another button that goes into the page Houses and will have information about people as well (API is here https://orange-equinox-201454.postman.co/workspace/0034e3b0-0f99-4a6e-8e10-5ede864bce70/request/26941194-34924688-06b2-4174-8330-5a0ede8539e4 )
Further beautify the app


![image](https://github.com/AndrianaKyr86/WizardWorld/assets/77279841/14ca88f2-a8b5-4f3d-8090-248f4cd3f7f1)
