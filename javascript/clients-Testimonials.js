async function getClientsTestimonialsInformation(){
  try{
    //Resource URL
    const resourceURL = "../javascript/json/client-TestimonialsInformation.json";
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
    console.log(error.message);
  }
}

async function displayClientsTestimonials(){
  const clientsTestimonials = await getClientsTestimonialsInformation();
  const clientReviewsWrapper = document.querySelector(".client-reviews-container");
  
  clientsTestimonials.forEach((clientTestimony) => {
    const clientTestimonyCard = createClientTestimonyCard(clientTestimony);
    clientReviewsWrapper.append(clientTestimonyCard);
  });
}

function createClientTestimonyCard(clientTestimony){
  const {client_review_id,client_review_image,client_review_firstname,client_review_lastname,client_rating,client_review_description} = clientTestimony;
  let client_Fullname = client_review_firstname + ' ' + client_review_lastname;
  const divCardEl = document.createElement("div");
  divCardEl.className = "card";
  divCardEl.classList.add("client-review-features");
  divCardEl.setAttribute("data-id",client_review_id);
  divCardEl.innerHTML = `
      <div class="card-image-container">
        <img src="${client_review_image}" alt="${client_Fullname}">
      </div>
      <div class="card-description">
        <h3 class="card-client-title">
          ${client_Fullname}
        </h3>
        <div class="star-rating">
          <i class="fa-solid fa-star star-checked"></i>
          <i class="fa-solid fa-star star-checked"></i>
          <i class="fa-solid fa-star star-checked"></i>
          <i class="fa-solid fa-star star-checked"></i>
          <i class="fa-solid fa-star star-checked"></i>
        </div>
        <p class="card-client-testimony">
          ${client_review_description}
        </p>
      </div>
  `;

  return divCardEl;
}

export default displayClientsTestimonials;