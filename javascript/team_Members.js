async function getTeamMembersDetails(){
  try{
    //Resource URL
    const resourceURL = "../javascript/json/team_Members_Information.json";
    const response = await fetch(resourceURL);

    if(!response.ok){
      throw new error(`The error status is ${response.status} and message is ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  }catch(error){
    console.error(error.message);
  }
}

async function displayTeamMembersDetails(){
  const teamMembers = await getTeamMembersDetails();
  const teamMembersWrapper = document.querySelector(".team_members_container");

  teamMembers.forEach((teamMember) => {
    const teamMemberCard = createTeamMemberCard(teamMember);
    teamMembersWrapper.append(teamMemberCard);
  });
}


function createTeamMemberCard(teamMember){
  const {team_id,team_first_name,team_last_name,team_position,team_phone_number,team_email_address,team_image} = teamMember;
  const teamFullname = team_first_name + ' ' + team_last_name;
  const divCardEl = document.createElement("div");
  divCardEl.className = "card";
  divCardEl.classList.add("team_member_card");
  divCardEl.setAttribute("data-id",team_id);
  divCardEl.innerHTML = `
    <div class="card-image-container">
      <img src="${team_image}" alt="${teamFullname}">
    </div>
    <div class="card_description flex-container">
      <div class="card-team-member-container">
        <h3>
          ${teamFullname}
        </h3>
      </div>
      
      <div class="card-team-info flex-container">
        <div class="card-bio-info">
          <h4>
            ${team_position}
          </h4>
        </div>
        <div class="card-contact-info">
          <p>
            <span>
              <i class="fa-solid fa-phone"></i>
            </span> +61 ${team_phone_number}.
          </p>
          <p>
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span> 
            <a href="mailto:${team_email_address}">${team_email_address}</a>
          </p>
        </div>
      </div>
    </div>
  `;
  return divCardEl;
}

export default displayTeamMembersDetails;

