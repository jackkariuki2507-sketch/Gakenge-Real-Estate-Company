async function getPropertyBuyingTipsInformation(){
  try{
    //Resource URL
    const resourceURL = "../javascript/property-Buying-TipsInformation.json";
    const response = await fetch(resourceURL);

    if(!response.ok){
      throw new error(`The Error status is ${response.status} and message is ${response.statusText}`);
    }
    const responseData = await response.json();
    return responseData;
  }catch(error){
    console.error(error.message);
  }
}

async function displayPropertyBuyingTips(){
  const propertyBuyingTips = await getPropertyBuyingTipsInformation();
  const propertyBuyingTipsWrapper = document.querySelector(".tips_features_container");
 
  propertyBuyingTips.forEach(function(propertyBuyingTip,index){
    let propertyBuyingTipCard = createPropertyBuyingTipsCard(propertyBuyingTip,index);
    propertyBuyingTipsWrapper.append(propertyBuyingTipCard);
  });
}

function createPropertyBuyingTipsCard(propertyBuyingTip,index){
  const {property_buying_tip_id,property_buying_tip,property_buying_tip_description} = propertyBuyingTip;
  const divCardEl = document.createElement("div");
  divCardEl.className = "card";
  divCardEl.classList.add("buying_tip_feature");
  divCardEl.setAttribute("data-id",property_buying_tip_id);
  divCardEl.innerHTML = `
    <div class="card-tip-header flex-container">
      <h3>
          <span>${index + 1}.</span> ${property_buying_tip}
      </h3>
      <button class="button">
        <i class="fa-solid fa-plus js-toggle-button"></i>
      </button>
    </div>
    <div class="card-tip-body hide-container">
      <p>
        ${property_buying_tip_description}
      </p>
    </div>
  `;

  return divCardEl;
}

export default displayPropertyBuyingTips;