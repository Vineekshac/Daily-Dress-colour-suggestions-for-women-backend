//Question 2
//Use the rest countries api url and display all the country flag in console

/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags);   
}
}*/

// Function to create an image element for each flag
function createFlagElement(flagUrl, countryName) {
  const flagElement = document.createElement('img');
  flagElement.src = flagUrl;
  flagElement.alt = countryName;
  return flagElement;
}

// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
      const flagsContainer = document.getElementById('flags');
      // Iterate through the countries and display flags
      data.forEach(country => {
          const flagUrl = country.flags.svg;
          const countryName = country.name.common;
          const flagElement = createFlagElement(flagUrl, countryName);
          flagsContainer.appendChild(flagElement);
      });
  })
  .catch(error => console.error('Error fetching data:', error));

