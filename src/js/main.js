

const searchButton = document.getElementById('search-button')
const searchBox = document.getElementById('search-bar');

let searchBoxInput = null;
searchButton.addEventListener('click', ()=>{
    searchBoxInput = searchBox.value;
    console.log(getCountryData(searchBoxInput));
})

getCountryData = (countryName) =>{ 
    const apiLink = `https://restcountries.com/v3.1/name/${countryName}`;

    let JsonData;
    JsonData = fetch(apiLink)
    .then((response) => response.json())


    return JsonData
}   


//il continui dimineata ca sincer is prea obosit :)