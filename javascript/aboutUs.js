function createAboutUsCard(){
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card-image-container">
      <img src="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg" alt="About Us Image"/>
    </div>
    <div class="card-description">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta hic, quam necessitatibus sapiente illum, iusto nulla officia 
        perferendis enim vel a. Voluptatibus atque nihil alias, aliquid reiciendis earum ducimus, natus dolore, eaque iste voluptatem 
        dolores mollitia sequi nobis veniam unde totam facere quis aut fuga magni nam et. Debitis in libero odio porro corporis numquam 
        itaque totam, laudantium, sequi saepe dicta quod, perferendis dignissimos? Incidunt maiores hic corrupti facere, quos dicta
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
}

createAboutUsCard();