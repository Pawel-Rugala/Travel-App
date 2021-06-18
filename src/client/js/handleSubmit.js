const handleSubmit = (e) => {
  e.preventDefault();
  const location = document.getElementById('loc');
  const checkIn = document.getElementById('checkin');
  const checkOut = document.getElementById('checkout');
  const header = document.querySelector('.header');
  const reqData = {
    location: location.value,
    checkin: checkIn.value,
    checkout: checkOut.value,
  };
  Client.postData('http://localhost:8081/fetch', reqData).then((data) => {
    console.log(data);
    const element = `
      <section class="section">
        <h2>City: ${data.location}</h2>
        <p>Country: ${data.countryName}</h2>
        <hr></hr>
        <p>Current weather: ${data.temp} | Wind: ${data.wind_spd}</p>
        <p>Sunrise at: ${data.sunrise} | sunset: ${data.sunset}</p>
        <hr></hr>
        <h2>About the city</h2>
        <p>${data.cityInfo}</p>
      </div>
    `;
    header.insertAdjacentHTML('afterend', element);
  });
  location.value = '';
  checkIn.value = '';
  checkOut.value = '';
};

export default handleSubmit;
