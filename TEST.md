# Testing User Stories from User Experience (UX) Section

## First Time User Goals

#### As a First Time User of this site, I want to easily navigate the site across all pages
- Upon entering the site, users are automatically greeted by the navigation bar at the top of the page  which contains menu items, linked to the sections of the site and allow users to access the section(s) of their choice.
- All the menu items to access the sections tested and all those took the users to the correct sections.

#### As a First Time User of this site, I want to get educated with knowledge about Nepal as a country, with its amazing and intresting facts.
- Information option from menu item of navbar will take user to the second section where 'About Nepal’ sub-section greeted the users with general information, history and interesting facts to add knowledge about Nepal to users
- The carousel used on this section tested and all the details slide accordingly shown the correct descriptions and images of Nepal
- All images tested and they are loading properly, responsive on small devices and were not overlapping to one another.

#### As a First Time User of this site, I want to get information of unique places in Nepal as future reference when planning for visiting Nepal
- Explore option from menu item of navbar will take user to the third section which displaying various locations of Nepal
- Buttons were tested and correct image, description and google map were displayed upon clicking on them also all buttons were responsive and  visible clearly on small screens
- The image, description and google map changed to follow the clicked button which also triggered the update of Google Maps’ marker to point out exact coordinate of the specific location

## Frequent User Goals

#### As a Frequent User of this site, I want to easily navigate the site across all pages
- Upon entering the site, users are automatically greeted by the navigation bar at the top of the page(s) which contains menu items, linked to the sections of the site and allow users to access the section(s) of their choice and All the menu items to access the sections tested to ensure those took the users to the correct sections.

#### As a Frequent User of this site, I want to find new information about Nepal, e.g. interesting facts which updated into this website
- Information option from menu item of navbar clicked to test and succesfully took the second section of the page where 'About Nepal’ sub-section greeted the users with general information, history and interesting facts to add knowledge about Nepal to users
- Sign Up button on the contact section of the page tested,  modal pop up on the screen while button is clicked and error message appeared when try to click the submit button without completing the form.

#### As a Frequent User of this site, I want to get connected with various knowledge about Nepal via social media.
- Contact Us option from menu item of navbar tested which took to the fourth/last section of the pge and displayed contact details and social media of the website
- Social media icons offer the users to follow the website’s updates on social media, each icon will take users to their login page window upon clicking on the icons.
- Each social media icon tested and new window were open with a login page open on the browser once the icon clicked.

## Return User Goals

#### As a Return User of this site, I want to easily navigate the site across all pages
- Upon entering the site, users are automatically greeted by the navigation bar at the top of the page(s) which contains menu items, linked to the sections of the site and allow users to access the section(s) of their choice.
All the menu items to access the sections tested and took the users to the correct sections.

#### As a Return User of this site, I want to be able read through all the information and update my knowledge about Nepal, in general
- Information section and explore section of the page mainly provide informatio about nepal in general, text-paragraph inside the paragraph were tested and they were displayed corrcetly, responsive acroll all devices and no issue of any text hidden or overlapping issue
- Text description on the explore section tested and correct description about the places were displayed when button was clicked and test description were changed to different one while clicking on different button

#### As a Return User of this site, I want to find and get updated with various locations of places or attractions in Nepal
- Sign up button on the contact section offers users to sign up to the page, all the updates about various places and attracion of nepal will reach to users email directly once information gets updated to website
- Sign Up button tested,  modal pop up on the screen while button is clicked and error message appeared when try to click the submit button without completing the form.

#### As a Return User of this site, I want to be able to contact the administrator to answer any query I may have about Nepal and at the same time sharing my experiences which might be useful for new ideas of this website
- The Contact Us form allows users to easily send their questions, share their experiences as well as submit their feedback to the website’s owner or administrator
- All the input elements on the forms tested to ensure that error message appear if missing input element or incorrect format used for email and contact number while completing the form.
- Message was received to the email associated with website once the form was submitted after completing the input field.


# Other Tests

### HTML
- Ran HTML code through [HTML Validator](https://validator.w3.org/)
 - Received an error message for type attribute used in home page to upload background video, removed type attribute as this was not required and tested the page without type attribute and background video was playing without any issue.
 - Warning for "empty heading" for ecplore section. The h1 tag with id of description pulls the information from JSON file so this warning is ignored.
 - Warnings for "The type attribute is unnecessary for JavaScript resources". Deleted both instances as they were not required and no issue after deleting them.
 
### CSS
- Ran CSS code through [CSS Validator](https://jigsaw.w3.org/css-validator/validator).
 - NO error found
 
### Javascript
- Ran all codes through [JSHINT](https://jshint.com/)
 - One errors which state that $ and google in undefined ; I have done some research on this and also approach to the community on slack and found that my JSHINT on my browser assume that I am not using jQuery therefore error shown, > clicked on configure option on top of JSHINT page and found jQuery option was not ticked, I ticked jQuery and re-ran the codes few times and all passed without any issue.
 - One missing semicolon error shown when I did my final check after making some changes to the code , and this was easy fix. 

### Lighthouse
- Lighthouse test was performed on devtool to check the site's performance and Accessibility, initially report showed performance score only 53 and I spotted that larger image sizes were causing issue , I have then compressed all the large sized pictures and uploaded again which then [lifted the performance score to 71](assets/images/lighthouse.jpg).
 
 
# Site Testing on Live page - Test carried on Desktop, Laptop, iPad, IPhone and Android phones.
- Navbar testing - Display correctly and work to direct the correct section(s) across all devices, toggle button collapse upon clicking and and navbar hidden once clicked on nav-item and re-appear again once clicked on toggle button 
- Background video of on landing page - Video did not play on iPhone 11 - issue not ressolved yet , done plenty of research on Google, stackoverflow and also approached to slack team, tutor support and mentor as well but couldnt ressolve this, most of the resourses advised to use 'playsinline' attribute within img tag for this issue to be solved which was already in my codes but still not working. Unable to identify this issue or it could be something wrong with phone setting as well.
- Flag's waving animation - Flag on the center of landing page waving on all screen
- Carousel of 'Information' section - Carousel is sliding the descriptions and images accordingly without any issue
- Buttons - all the buttons working as expected, The clicked button(s) are showing the correct image(s) and description(s) when clicked
 - Initially noticed issue with buttons on the explore section while viewing on Motorola G7 mobile as only text inside the button displayed, after refreshing the screen once all the buttons displayed so couldnt identified if this is an issue with mobile itself or something else, however no issue identified after that as testing was carried few times on the same phone
- Image and description of 'Explore' section - Image and description are updated and display according to the clicked button
- Google Maps and its marker - Google maps loads properly and the marker is updated accoding to the clicked button
- Social media icons of 'Contact Us' section - The icons redirect to the login pages of each social media upon clicking on the icons
- Form of 'Contact Us' section - Fields are filled when appropriate and 'send' button is working, error message with 'required' appeared while submitting the form without completing the input field
- Contact Us form is sent as an email using sendMail function - email received while submitting the form, success message with status code: 200 shown on console.
























