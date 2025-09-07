async function getPropertiesDetails(){
  try{
    // Resource Url
    const urlLink = "../javascript/json/propertiesInformation.json";
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

async function displayPropertiesDetails(){
  const properties = await getPropertiesDetails();
  const propertyCardsWrapper = document.querySelector(".js-featured-listing-cards");
  properties.forEach((property) => {
    let propertyDiv = createPropertyCard(property);
    propertyCardsWrapper.append(propertyDiv);
  });
}

function createPropertyCard(property){
    const {property_id,property_name,property_price,property_address,property_features,property_image} = property;
    const propertyCardEl = document.createElement("div");
    propertyCardEl.className = "card";
    propertyCardEl.classList.add("featured-listing-card");
    propertyCardEl.setAttribute("data-id",property_id);
    propertyCardEl.innerHTML = `
      <div class="card-image-container">
        <img src="${property_image}" alt="image description"${property_name}>
      </div>
      <div class="card-description flex-container">
        <div class="card-title-price-container flex-container">
          <h3>
            ${property_name}
          </h3>
          <p class="property-price">
            $${property_price}
          </p>
        </div>
        <div class="card-location-features flex-container">
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
              <span>
                ${property_features.bed}
              </span>
              <i class="fa-solid fa-bed"></i>
            </li>
            <li class="key-info">
              <span>
                ${property_features.bath}
              <span>
              <i class="fa-solid fa-bath"></i>
            </li>
            <li class="key-info">
              <span>
                ${property_features.garage}
              <span>
              <i class="fa-solid fa-car"></i>
            </li>
             <li class="key-info">
              <span>
                ${property_features.size}
              <span>
              <i class="fas fa-expand"></i>
            </li>
          </ul>
        </div>
        <div class="card-button-container">
          <a href="" class="button button-tertiary">
            View More
          </a>
        </div>
      </div>
    `;
    return propertyCardEl;
}

export default displayPropertiesDetails;
