// Import Modules
import {toggleNavbarBackground} from '../javascript/toggleNavbarBg.js';
import displayPropertiesDetails from '../javascript/properties.js';
import displayTeamMembersDetails from '../javascript/team_Members.js';
import displayClientsTestimonials from '../javascript/clients-Testimonials.js';
import displayPropertyBuyingTips from '../javascript/property-Buying-Tips.js';
import hide_show_accordion from '../javascript/hide_show_accordion.js';
import displayAboutUsInfo from '../javascript/aboutUs.js';
import getCurrentYear from '../javascript/current_Year.js';

// async function test(){
//   const tip = await getAboutUsInformation();
//   console.log(tip);
// }

// test();
//Variables Declaration 
const cardAccordionContainer = document.querySelector(".tips-features-container");
const spanCurrentYear = document.querySelector(".js-current-year");
// spanCurrentYear.innerText = `
//   ${getCurrentYear()}
// `;

//Event Listeners
window.addEventListener("scroll",toggleNavbarBackground);
window.addEventListener("load",displayPropertiesDetails);
window.addEventListener("load",displayAboutUsInfo);
window.addEventListener("load",displayTeamMembersDetails);
window.addEventListener("load",displayClientsTestimonials);
window.addEventListener("load",displayPropertyBuyingTips);
cardAccordionContainer.addEventListener("click",hide_show_accordion);