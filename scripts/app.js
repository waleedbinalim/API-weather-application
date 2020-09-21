const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    console.log(data);
    const cityDetails = data.cityDetails;
    const weather = data.weather;

    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&degC</span>
    </div>
    `; 

    //UPDATING THE NIGHT/DAY & ICON IMAGES
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    }
    else{
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);

    //REMOVE THE d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}


const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWheather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    };

}

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    //GETS CITY VALUE
    const city = cityForm.city.value.trim();
    cityForm.reset() 
    //UPDATE UI WITH NEW CITY
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

})