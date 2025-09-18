async function getAboutUsInformation(){
  try{
    // let errors = null;
    const resourceURL = "../javascript/json/aboutus-information.json";
    const response = await fetch(resourceURL);
    if(!response.ok){
      let responseStatus = response.status;
      let responseMessage = '';

      switch(responseStatus){
        case 404:
          responseMessage = 'Page could not be found';
          break;
        case 401:
          responseMessage = 'Unauthorised access';
          break;
        case 500:
          responseMessage = 'Server encountered a problem';
          break;
        default:
          responseMessage = 'An error has occurred';
          break;
      }
      throw new Error(`Error status is ${responseStatus} and message is ${responseMessage}`);
    }
    const responseData = await response.json();
    return responseData;

  }catch(error){
    setErrors(error.message);
  }
}

async function displayAboutUsInfo(){
  const aboutInformation = await getAboutUsInformation();
  const aboutUsSectionWrapper = document.querySelector(".section-about-us .container");
  const cardsWrapper = createAboutUsCardsWrapper();
  aboutUsSectionWrapper.append(cardsWrapper);
  console.log(aboutInformation);
}
export default displayAboutUsInfo;

function createAboutUsCardsWrapper(){
  // const aboutUsCard = document.querySelector(".about-us-container");
  const aboutUsCardsWrapper = document.createElement("div");
  aboutUsCardsWrapper.className = "about-us-container";
  aboutUsCardsWrapper.classList.add("cards");
  aboutUsCardsWrapper.id = "about-us-container";

  aboutUsCardsWrapper.innerHTML = `
    <div class="card-image-container">
      <img src="" alt="About Us Image"/>
    </div>
    <div class="card-description">
      <p>
        
      </p>
      <h3>
        Why Choose Us
      </h3>
      <div class="about-us-choose-us">
        <div class="card">
          <h4>
            Local Expertise
          </h4>
        </div>
        <div class="card">
          <h4>
            Verified Listings
          </h4>
        </div>
        <div class="card">
          <h4>
            Personalized Service
          </h4>
        </div>
      </div>
    </div>
  `;

  return aboutUsCardsWrapper;
}

// console.log(createAboutUsCardsWrapper());

function setErrors(error){
  const errorDivEl = document.createElement("div");
  errorDivEl.className = "error-alert";
  errorDivEl.append(document.createTextNode(error));
  return errorDivEl;
}