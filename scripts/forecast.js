let key = 'wnEkMyITXSGP3uwY3nkQVajr7BzcieD2';

//GET WEATHER INFO
const getWheather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/' ;
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

//GETS CITY INFO
let getCity = async (city) => {

let base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
let query = `?apikey=${key}&q=${city}`;

let response = await fetch(base + query);
let data = await response.json();

return data[0];

};