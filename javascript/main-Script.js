// Import Modules
import {toggleNavbarBackground} from '../javascript/toggleNavbarBg.js';
import displayPropertiesDetails from '../javascript/properties.js';
import displayTeamMembersDetails from '../javascript/team_Members.js';

//Event Listeners
window.addEventListener("scroll",toggleNavbarBackground);
window.addEventListener("load",displayPropertiesDetails);
window.addEventListener("load",displayTeamMembersDetails);