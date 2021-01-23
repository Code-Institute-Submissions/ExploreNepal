# Purpose/Aim

The website serves as an educational site for sharing information and knowledge about Nepal. The development of this website is targeted to educate the users or readers to 
get familiar with Nepal as country, its vast cultures, the interesting places as attractions to visit and most importantly to introduce some of Nepalese traditional cuisines.
Another purpose of this website is to interact with users or readers by allowing them to share their experiences about Nepal whether through travelling or any ideas to be 
included into this website. The website also displays various images of places in Nepal and Nepalese cuisines to help users and readers with the visualizations of the topics. 
Interactive Google map is added to allow users to locate the interesting and beautiful places in various regions of Nepal. 
With the specified purpose and aim in mind, I have decided to build this website to reach out to the broader and wider users around the world, while also trying to introduce 
the amazing yet interesting information about Nepal. This will hopefully attract more people or traveller to visit the beautiful Nepal once the pandemic is over as well as 
trigger the interests of all the users who access this website.

## User Stories

### First Time User Goals
- As a First Time User of this site, I want to easily navigate the site across all pages
- As a First Time User of this site, I want to get educated with knowledge about Nepal as a country with its unique attractions and traditional cuisines
- As a First Time User of this site, I want to get information of Nepalese people, culture and any interesting or fun facts about the country itself

### Frequent User Goals
- As a Frequent User of this site, I want to easily navigate the site across all pages
- As a Frequent User of this site, I want to find new information about Nepal, e.g. interesting facts which updated into this website
- As a Frequent User of this site, I want to be able to get updates about places and attractions to visit in Nepal
- As a Frequent User of this site, I want to learn about some of the traditional and famous Nepalese cuisines 
- As a Frequent User of this site, I want to get connected with various knowledge about Nepal via social media.

### Return Users Goals
- As a Return User of this site, I want to easily navigate the site across all pages
- As a Return User of this site, I want to be able read through all the information and update my knowledge about Nepal, in general
- As a Return User of this site, I want to find various locations of places or attractions in Nepal as well as get updated with the mouth-watering Nepalese cuisines
- As a Return User of this site, I want to be able to contact the administrator to answer any query I may have about Nepal and at the same time sharing my experiences which might be useful for new ideas of this website


## Issues and Resolutions
- Issue with Navbar as Navbar did not overlay correctly on top of video on Home page which resulted Navbar appear seperately on top of the page and [video display only below Navbar](assets/images/issue-navbar.jpg).
  - I have fixed this issue by utilizing the devtool : bg-dark class that was added to nav replaced  by bg-light class then set background color of bg-light class to #24537005 which
ressolved an issue.
- [Background video on the home page did not cover entire screen](assets/images/padding-issue.jpg) eventhough container-fluid class was used, instead left with some white space on both left and right hand side of the screen which was not desired outcome.
  - Issue was fixed by adding some extra css property to main container class: value of 0 set to both padding right and padding left to main-container class and this solved issue.
- Padding issue between the columns inside the row : while using col-md-2 classes to created two columns inide the row there was a [excess white space between those columns](assets/images/-ssue-padding.jpg) however no space between colums was desired outcome.
  - I have used bootstrap documentation to find the solution of this : I added no-gutters class to the row which hold those columns and this solve an issue.  
- I noticed that [top section of second page was overlapping](assets/images/issue-margin.jpg) on the bottom of the first page which i didnt wanted and this was definitely a poorly presented pahe which needed to be fixed.
  - On my style.css I had previously used negative margin-top of 80px to the home id which was used for different purpose however this was causing an issue with page overlapping and issue resolved once i remove this style from my style.css 
- I was having an issue with Buttons not displaying correctly, there was 6 buttons used inside one of the column inside the expo id and those buttons were expected to display inline while viewing the page on small screen size however result was opposite as all the [buttons were shown vertically as a block element rather than inline display](assets/images/issue-margin2.jpg).
  - I added 50% of both margin right and left value to button class during inital styling process inorder to display button in the centre however this was the main reason causing an issue, once I remove both margin property from style.css, I got an [outcome](assets/images/issue-margin3.jpg) that I wanted.