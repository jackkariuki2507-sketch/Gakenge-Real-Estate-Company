async function getPropertiesDetails(){
  try{
    // Resource Url
    const urlLink = "../javascript/propertiesInformation.json";
    const response = await fetch(urlLink);

    if(!response.ok){
      throw new Error(`The error status is ${response.status} and message is ${response.statusText}`);
    }
    const responseData = await response.json();
    return responseData;
  }catch(error){
    console.error(error.message);
  }
}

// export default getPropertiesDetails;

async function displayPropertiesDetails(){
  const properties = await getPropertiesDetails();
  const propertyCardsWrapper = document.querySelector(".js-featured-listing-cards");
  properties.forEach(function(property){
    const {property_id,property_name,property_price,property_address,property_features,property_image} = property;
    const propertyCardEl = document.createElement("div");
    propertyCardEl.className = "card";
    propertyCardEl.classList.add("featured_listing_card");
    propertyCardEl.setAttribute("data-id",property_id);
    propertyCardEl.innerHTML = `
      <div class="card-image-container">
        <img src="${property_image}" alt="image description">
      </div>
      <div class="card_description flex-container">
        <div class="card-title-price-container flex-container">
          <h3>
            ${property_name}
          </h3>
          <p class="property-price">
            $${property_price}
          </p>
        </div>
        <div class="card-features flex-container">
          <div class="card-address">
            <p class="location">
              ${property_address.location}
            </p>
            <p class="street">
              ${property_address.street}
            </p>
          </div>
          <ul class="card-key-info flex-container">
            <li class="key-info">
              ${property_features.bed} <i class="fa-solid fa-bed"></i>
            </li>
            <li class="key-info">
              ${property_features.bath} <i class="fa-solid fa-bath"></i>
            </li>
            <li class="key-info">
              ${property_features.garage} <i class="fa-solid fa-car"></i>
            </li>
          </ul>
        </div>
        <div class="card_button_container">
          <a href="" class="button button-tertiary">
            View More
          </a>
        </div>
      </div>
    `;
    propertyCardsWrapper.append(propertyCardEl);
    // console.log(propertyCardEl);
  });
}

displayPropertiesDetails();

// function createPropertyCard(property){
//   const {property_id,property_name,property_price,property_address,property_features} = property;

  
  
//   // const propertyCard = document.createElement
//   // propertyCardsWrapper.innerHTML = `
   
//   // `;

//   // console.log(propertyCardsWrapper);

//   // console.log(property_id);
//   // console.log(property_name);
//   // console.log(property_price);
//   // console.log(property_address.location);
//   // console.log(property_address.street);
//   // console.log(`${property_features.bed} bed`);
//   // console.log(`${property_features.bath} bath`);
//   // console.log(`${property_features.garage} garage`);
// }
