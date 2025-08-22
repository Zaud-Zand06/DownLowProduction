Rebuild of the Downlow Chicken site for the DownLow Brands.

Built with React and VanillaJs, using Vite, Bun and a few additional libraries.

# Libraries

## react-responsive-carousel

- deprecated and replaced with heroContent as opposed to heroCarousel. Im leaving this here as well as the heroCarousel component incase there is any desire to swap back to using a carousel display (which i would reccomend against but whatever man)

## react-scroll-parallax

- used for the parallax scrolling in parallaxSection

## @mui/material

## @emotion/react

## @emotion/styled

- these three are used for the styling of components. They arent necessary if you want to build new components, but they help create a unified look

# Components

- each of the following components has a seperate .css file for styling, and all style changes should be made to the approptiate .css file. The only exception to this is for **colours and fonts**, which are defined as root variables in the index.css

## main.jsx

- Contains all pages of the site, and the required routes to take people there.
- The parallax provider allows for react-scroll-parallax components to create the parallax effect, and must contain the parallax components.
- ScrollToTop is a utility component that lets the window scroll to the top whenever a user selects a new page
- BrowserRouter and the Routes allow people to navigate the site using subdomains (e.g. dlchicken.com/kits, dlchicken.com/menu)

## App.jsx

- This is the landing page when you load the site.
- contains the Header, HeroContent, the clickable scroll bar, the parallax information section and the footer
- if you want to change the structure of the landing page this is where you would do it.

## Header.jsx

- Contains the dl logo, as well as all the navigation buttons, and the dropdown menu for online ordering.
- the drop down menu is built within this component and is labeled as "HeaderOrderOnlineMUIMenu".
- this component also includes a utility function called controlHeader, that allows for the header to disappear and reappear depending on how the user scrolls.
  - this function relies on the useEffect function to determine the direction the user scrolls in
- The navigation buttons are dynamically generated using a navigationConfig map, and any adjustments to the routing should also be adjusted in here to ensure the correct buttons appear for the page the user requests

## HeroContent.jsx

- This is the first component a user sees when the load the site.
- the image you are using should be placed in the assets folder
- the text in the image should be titled using an <h1>, and the main text should use a <p>

## ScrollingAlert.jsx

- if you want to change the text that scrolls across the screen, edit the text const.
- repetitions and repeatedText should be left alone - its a hacky solution to make it scroll endlessly, and shouldnt be changed unless you have a better solution.
- if you want to change the speed of the scrolling, you must change animation-duration in the .css file. It will be within the horizontalScrollingItems class
- currently the scrolling text links to the /kits subdomain, but it can changed to linking to whatever you want as long as you add the link as a variable, and change the <Link> element to an <a> element
  - remember to edit the repeated text if you are doing this to match whatever link you have it set to

## ParallaxSection.jsx

- the Parallax import `import { Parallax } from "react-scroll-parallax";` is required to make the effect work
- each item that has a parallax effect must be placed insode of a <Parallax> element and given a speed value
- the classnames are very hacky right now and should be fixed in later iterations, so right now pay attention to the classnames and the relevant .css styles
- Currently using css grid for the placement of the images and text

## Footer.jsx

- Contains all information pertaining the different locations of DLC, a google maps embed showing the locations, as well as contact information for catering
- the google map is done as a web embed.
  - the vis.gl import and gmapsAPI is there as a vestigal remain of the advanced gmap i was using. The commented out code is also a part of this.
  - The advanced map looks much better and provides more customizability, but it costs A LOT more to use that web api. It will raise the monthly cost from ~10 dollars to ~50
- all locations must contain a lat and lng in order for the embeded map to show the correct position
- default location is set to DLEV

## Menu.jsx

- all menu items must be added to their respective lists (sandosList, sidesList, etc.) as an object with a title, description, price, and whether or not it has any special text
- additional images must be added to the menuImages array, with its name, price, imagesrc and altText
- when adding a new list of items, it must also be added to the displayMenuList array, with a title, description and the new list you want to add. This will automatically add all the items to the menu with a title and description for the section using the makeMenuList function
- the menu component also contains a utility function to flip through all the images you want to display, and is currently set to 10 seconds per image

## Catering.jsx

- just information for catering, the main bulk of it is stored within the AccodianCateringMenus.jsx component and the CateringForm.jsx component

## AccordianCateringMenu.jsx

- this contains all the info for the different catering locations (dl chicken, dl burgs, and vennies)
- all built using mui components to help keep everything clean, but could be re-written in base html if we want more customization

## CateringForm.jsx

- this will be all the information we collect for catering. the formdata is saved as a state, and is then pushed to the users email client for submission. We could handle server side emailing with cloudflare worker functions
- validation is checked via a function that just makes sure the form is filled properly using regex
- form is built using MUI components, but again, can be re-written if we want more customization

## DLKits.jsx

- all the information pertaining to dl kits is contained here
- the menu is hardcoded in, as such when you edit the menu, you must place the new item in the #dlkitsMenu section, and create a <span> with the className="dlkitsMenuItem".

## UpcomingEvents.jsx

- uses google calendar id and api key to load a collaborative, public calendar with all the upcoming events on it.
- there are utility functions that help with window resizing.
- not currently in use, but as dl kits winds down we could replace that with our events page

## SecretMenu.jsx

- currently contains credits for jimmys photography as well as my webdesign, also contains credits for the fonts that i used, as they have a CC liscense that requires us to credit them

# Css Variables

- the 4 font-face declerations are all the fonts we are using for the site, any additional fonts should be added to the assets/fonts folder, and imported in the same way in the css file
- main-yellow and main-red are the primary colours for the site, along side background-colour
  - main-red and main-yellow are mainly used for the colour of <h1>,<h2>, and <h3> elements
  - background-colour is used for the background of the site
- text-dark and text-light are clearly just for the different <p> texts
- translucent-white and translucent-black are used for cards like the ones in heroContent and parallaxSection, that need to show the images underneath
- card-background-colour is used for the menu items, so that they stand out a tiny bit more from the background
- border-colour and shadow-colour are the same, but they are used for different things, i have them as seperate variables just in case we want them to be different for whatever reason. That being said I dont think im using any shadows on the site
