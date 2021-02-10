# Purpose/Aim

The website serves as an educational site for sharing information and knowledge about Nepal. The development of this website is targeted to educate the users or readers to 
get familiar with Nepal as country, its amazing facts and the interesting places as attractions to visit.
Another purpose of this website is to interact with users or readers by allowing them to share their experiences about Nepal whether through travelling or any ideas to be 
included into this website. The website also displays various images of places in Nepal to help users and readers with the visualizations of the topics. 
Interactive Google map is added to allow users to locate the interesting and beautiful places in various regions of Nepal. 
With the specified purpose and aim in mind, I have decided to build this website to reach out to the broader and wider users around the world, while also trying to introduce 
the amazing yet interesting information about Nepal. This will hopefully attract more people or traveller to visit the beautiful Nepal once the pandemic is over as well as 
trigger the interests of all the users who access this website.

# Table of Contents

 - [User Stories](#user-stories)
 - [Wireframes](#wireframes)
 - [Features](#features)
 - [Future Features to be Implemented](#future-features-to-be-implemented)
 - [Technologies Used](#technologies-used)
   - [Language Used](#language-used)
   - [Frameworks, Libraries, Programme and Resources Used](#frameworks,-libraries,-programme-and-resources-used)
   - [Code Validation](#code-validation)
 - [Testing](#testing)
 - [Issues and Resolution](#issues-and-resolutions)
 - [Deployment](#deployment)
 - [Credits](#credits)
 - [Aknowledgement](#aknowledgement)


## User Stories

### First Time User Goals
- As a First Time User of this site, I want to easily navigate the site across all pages
- As a First Time User of this site, I want to get educated with knowledge about Nepal as a country with its amazing and intresting fact.
- As a First Time User of this site, I want to get information of unique attractions and places in Nepal as a future reference when planning for visiting Nepal

### Frequent User Goals
- As a Frequent User of this site, I want to easily navigate the site across all pages
- As a Frequent User of this site, I want to find new information about Nepal, e.g. interesting facts which updated into this website
- As a Frequent User of this site, I want to be able to get updates about places and attractions to visit in Nepal
- As a Frequent User of this site, I want to get connected with various knowledge about Nepal via social media.

### Return Users Goals
- As a Return User of this site, I want to easily navigate the site across all pages
- As a Return User of this site, I want to be able read through all the information and update my knowledge about Nepal, in general
- As a Return User of this site, I want to find various locations of places to visit in Nepal
- As a Return User of this site, I want to be able to contact the administrator to answer any query I may have about Nepal and at the same time sharing my experiences which might be useful for new ideas of this website


### Wireframes

- As an initial process of the project design, wireframes were created for desktop, iPad and mobile screen sizes using [Balsamiq](https://balsamiq.com/).

* Desktop Wireframe - [View](assets/wireframes/wireframe-desktop-ms2.pdf)

* iPad Wireframe - [View](assets/wireframes/wireframe-ipad-ms2.pdf)

* Mobile Wireframe - [View](assets/wireframes/wireframe-mobile-ms2.pdf)

### Features
 
##### Navigation Bar
- The navigation bar is positioned at the top of the page and it contains main menu of the website, which allows users to easily navigate and access all section and information regarding the website itself in just one click. Navbar has four menu items which are Home, Information, Explore and Contact. Small logo and nav-title is positioned on left side of the Navbar, logo used on this page is official symbol of nepal in real and I have taken this from google. Logo set to be hidden on xs screen size for better ux purpose. 
 
##### Home Section
- Background Video
  - The background video of landing page is carefully choosen to show the beautiful nature of the contents to users. The video serves as welcome getaway to encourage the curiosity and exploration sense of the users who are accessing the website. The video will draw the attention and give clear indicative of what the website is trying to display or share to the users.
- Contents
  - Home section is the landing page to welcome the users who access the website. The display contents are simple and concise which able to give a brief information about the country of interest. The flag is catchy and uniquely place in the middle as a centre stage to focus the attention of users, followed by the name of the country of interest and its nickname which truly engaging the curiosity sense of the users. This website is aiming to introduce the country of interest to the world from unusual point of view of the website’s creator by sharing some of the remarkable information and his favourite places.
 
##### Information Section
- Heading
  - The first part of Information section is to introduce the country of interest to the users by stating the general information, and other interesting facts which informative and add the overall knowledge of the users regarding this country of interest.
  - The second part of Information section is created using bootstrap carousel to show combination of descriptions and images to slide through in the display which give more detail information about the unique and amazing fact of the country. This part of the section is important piece of the website to convey the correct message of the vast and dynamic attractions of the country to the users.
 
##### Explore Section
- The Explore section is created mainly by utilizing JavaScript and jQuery effets to the overall section, such as buttons, images, texts and most importantly the Google Maps is embedded into this section by utilizing google map API. The buttons of interesting places in the country of interest serve as command to display the right images and followed by its descriptions as well as at the same time allowing the marker in Google Maps to call the right location coordinates of those places. This feature will ensure visibility for the users to check and locate those places accordingly.
 
##### Contact Us Section
- Background Image
  - The image is specially selected to illustrate the natural life of this country of interest which will bring calmness and serenity to the users who see this image. The image is also displayed to trigger nostalgic experiences in life which can bring happy memories and increase their dopamine level.
- Contents
  - The Contact Us section is allowing users to contact and communicate with the website’s creator or administrator by providing information of the office address, email address and phone number for the users who are interested to explore more about the country of interest. The Contact Us form is also provided for users who want to submit their inputs, opinions or comments about the website and its contents. The main purpose of the form is allowing users to submit their interests or experiences which can be added or included into the website as future reference for other users to explore this country of interest. By doing so, the website will gain additional information and becomes the place where users can collaborate and supporting one another to encourage more exploration towards this country of interest.
  - Users are alos expected to search various pages and links related to Nepal via social meadia too therefore Social media icons are added to this section which would redirect the users to access those social media’s websites in just one click.
  - This section also has an sign up button for user to sign up to the page , once sign up users will be getting all the updates on the website to their email directly, however this is not fully functioning yet and will be adding this functionality in future.

##### Scroll to top arrow
- An upward arrow is also added to the right corner of the page which set to be only be visible once user scroll below from the landing page, purpose of this arrow is to take the user to the top of the page directly upon clicking on this arrow therefore user do not require to scroll manually all the way to the top of the page to access the Navbar, arrow will fade away in 2000ms once user reach to the landing page everytime and fade in again once user reach to the next page either by scrolling or by selecting the options from Navbar.


## Future Features to be Implemented
  - Additional section on website with Gallery, Video clips clips and peoples opinion section.
  - Additional Section which allow user to book the flights, accomodation and places to visit.
  - Additional Page to promot Local culture, food and people in Nepal. 


## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries, Programme and Resources Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google font was used to embed the YuseiMagic and Ovo types font which are used on all pages throughout the website.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery was used as Javascript Library
1. [Popper.js](https://popper.js.org/) 
    - Popper.js was used for bootstrap modal
1. [Google Maps JavaScript API](https://cloud.google.com/maps-platform/)
   - Google Maps API was used to render the map and markers on the page using API key.
1. [EmailJS API](https://www.emailjs.com/)
  -  EmailJs API was used to create email sending function with JavaScript.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.
1. [Gitpod](https://www.gitpod.io/)
    - Gitpod was used as IDE for local development.
1. [GitHub:](https://github.com/)
    - GitHub was used to store the projects code after being pushed from Gitpod.
1. [Github Pages](https://pages.github.com/)
    - Github pages were used for deployment of the website
1. [HTML Formatter](https://htmlformatter.com/) 
    - HTML formatter was used to format HTML code
1. [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln/related) 
    - Unicorn Revealer tool was used to identify any overflow issues
1. [Lighthouse](https://developers.google.com/web/tools/lighthouse)
    - Lighthouse was used to test the performance and loading speed of the website


### Code Validation

- [W3C Markup Validation](https://validator.w3.org/#validate_by_input) 
  - W3C Markup Validation was used throughout the process to validate HTML codes
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) 
  - W3C CSS Validation was used to vaildate CSS codes
- [JSHINT](https://jshint.com/) 
  - JSHINT was used for JavaScript code warning & error check.


## Testing

#### Testing documentation can be found on seperate file - [CLICK HERE TO VIEW ](TEST.md)

## Issues and Resolutions
- Issue with Navbar as Navbar did not overlay correctly on top of video on Home page which resulted Navbar appear seperately on top of the page and [video display only below Navbar](assets/bugs/issue-navbar.jpg).
  - I have fixed this issue by utilizing the devtool : bg-dark class that was added to nav replaced  by bg-light class then set background color of bg-light class to #24537005 which
ressolved an issue.
- [Background video on the home page did not cover entire screen](assets/bugs/issue-padding.jpg) eventhough container-fluid class was used, instead left with some white space on both left and right hand side of the screen which was not desired outcome.
  - Issue was fixed by adding some extra css property to main container class: value of 0 set to both padding right and padding left to main-container class and this solved issue.
- Padding issue between the columns inside the row : while using col-md-2 classes to created two columns inide the row there was a [excess white space between those columns](assets/bugs/issue-padding.jpg) however no space between colums was desired outcome.
  - I have used bootstrap documentation to find the solution of this : I added no-gutters class to the row which hold those columns and this solve an issue.  
- I noticed that [top section of second page was overlapping](assets/bugs/issue-margin.jpg) on the bottom of the first page which i didnt wanted and this was definitely a poorly presented pahe which needed to be fixed.
  - On my style.css I had previously used negative margin-top of 80px to the home id which was used for different purpose however this was causing an issue with page overlapping and issue resolved once i remove this style from my style.css 
- I was having an issue with Buttons not displaying correctly, there was 6 buttons used inside one of the column inside the expo id and those buttons were expected to display inline while viewing the page on small screen size however result was opposite as all the [buttons were shown vertically as a block element rather than inline display](assets/bugs/issue-margin2.jpg).
  - I added 50% of both margin right and left value to button class during inital styling process inorder to display button in the centre however this was the main reason causing an issue, once I remove both margin property from style.css, I got an [outcome](assets/bugs/issue-margin3.jpg) that I wanted.
- After I add some content and style to #expo add #contact, I noticed a bit strange issue on my page as [sections were overlapping](assets/bugs/issue-height.jpg) to each other while viewing on smaller and medium screen.
  - I initially gave height value of 100vh to all sections as i wanted the sections to cover the entire screen however this was causing the contents overlapping, I have fixed this issue by changing the vaulu of height for those ids to auto and this ressolved an issue.
- I had an issue with my carousel during build up process as one of carousel indicator was not functioning while clicking over the indicator.
  - After checking all of my codes, I found that there was [spelling error](assets/bugs/issue-carousel.jpg) on one of the carousel indicator class which was causing an issue, issue ressolved once I corrected spelling.
- Background Image that I added to contact section did not displayed while viewing page on browser, insted threw 404 error.
  - Issue happen due to [incorrect filepath](assets/bugs/issue-filepath.jpg) of image, Once i updated the filepath correctly it fixed an issue.
- I had encounter an issue on my explore page as function that was assigned to display images, information and google map did not work which resulted no images, description and map on display eventhough all the codes were correct and functions were assigned correctly.
  - upon checking on devtool console I have noticed some error however this was not enough for me to understand the issue straightway and I did not fully agree with error message , then I decided to look into each and every codes inside my location.js file and spoted there was [spelling error](assets/bugs/issue-function1.jpg) on my code which caused and issue and it resolved after I corrected spelling
- Each buttons on explore section of page were assigned with different location and those were supposed to display image, information and google map relevant to the place while clicking on them however this effect did not take place  which resulted information, image and map did not changed while clicking on the buttons and only default data displayed.
  - Console on devtool displayed an error message and I immediately decided to check my codes on [JShint](https://jshint.com/) however couldnt find any error and as a final attempt before I approach Tutor support I decided to recheck all the semicolons and curly braces and  spotted that one of the [closing curly brace and closing parenthesis was used way before](assets/bugs/issues-curlybrace.jpg) then it should be and this was ressolved once I corrected this.
- Contact form on my page was not functioning as I was not getting any message on my email after submitting the form from the page which was linked to emailjs and assigned to sendMail function.
  - I was getting 501 error on my browser after submitting the form and also an error code on console stating that emailjs is not defined but I couldnt spot any issue and neither any issue with function nor codes and I gave up on this and move to another section, I rechecked this issue next day and figure out that I somehow [script tag for emailjs was deleted from index.html page](assets/bugs/issue-emailjs.jpg) and this was resulting and issue which sorted once I use emailjs script tag from emailjs documentetion.
- Image that was set inside the carousel did not cover the entire column height while testing on medium screen and instead [left some white space below the image](assets/bugs/issue-carousel2.jpg) which was not expected outcome.
  - Initially I loaded carousel images to my index.html file using img tag, once I noticed issue above then I used css background property to upload the images which solved issue but I have noticed another issue agian as image height seen too small, I have then added new class of carouselImageSlider to all columns which had images and set height on style.css which then solved entire issue.


## Credits
- Thanks to True Coder for [youtube video](https://www.youtube.com/watch?v=rpujWVkmiPE) on Contact form, this video inspire me to create the unique contact form rather than just normal form, I have also taken some concept and also took some code while styling my contact form.
- Thanks to zFunx Web Developement for [youtube video](https://www.youtube.com/watch?v=R7OcJyL_rbw) on Responsive Circle using CSS, I have taken some code from this video and modified as per my requirement.
- Thanks to The Coding Train for [youtube video](https://www.youtube.com/watch?v=_NFkzw6oFtQ&t=318s) on What is JSON, this video was really helpful to understand JSON an gave me an idea and inspire me to create JSON file to store data on my project.
- Thanks to Coding Journey for [youtube video](https://www.youtube.com/watch?v=gphMli74Chk&t=1056s) on Back to Top Button, I took the concept from video to add scroll to top option with arrow on my page.
- I have read some part of the book, named "A Smarter Way to Learn Javascript" which was written by "Mark Myers", this book also help me to understand many concepts and logic on function and object so many thanks to author of this book.
- I have accessed [W3School page](https://www.w3schools.com/js/default.asp) throughout the build process which was really helpful and informative.
- I have spent some time on [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) page to gain more knowledge on function and this page was very helpful to understand function in simple way.
- Thanks to Traversy media for [youtube video](https://www.youtube.com/watch?v=Xy3GlrddZFI) on Fullscreen Video Background With HTML & CSS, I took the concept of having full screen video on my landing page from this video.
- I have taken images and Text description inside the Carousel of information section from [holidify](https://www.holidify.com/pages/facts-about-nepal-2683.html).
- I was relied on various resources to gather information and images of nepal, those including Pinterest(https://www.pinterest.co.uk/pin/99501472997803445/), [Kids-world-travel-guide.com](https://www.kids-world-travel-guide.com/nepal-facts.html), [Britannica](https://www.britannica.com/place/Nepal/Climate), [Wikipedia](https://en.wikipedia.org/wiki/Nepal) and [Google](https://www.google.com/) were my main source of information and images about nepal.
- I have also taken some Image and Background video for my landing page from [Unsplash](https://unsplash.com/)
- Logo that I have used on my Navbar is oficial symbol of Nepal and flag on the landing page is also official flag of Nepal, I have taken both from [Google](https://www.google.com/).