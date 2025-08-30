// Import Modules
import {toggleNavbarBackground} from '../javascript/toggleNavbarBg.js';
import getPropertiesDetails from '../javascript/properties.js';

async function test(){
  const properties = await getPropertiesDetails();
  console.log(properties);
}
test();

//Event Listeners
window.addEventListener("scroll",toggleNavbarBackground);