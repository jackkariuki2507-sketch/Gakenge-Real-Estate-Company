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

export default getPropertiesDetails;