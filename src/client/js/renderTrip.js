const renderTrip = (data) => {
 const checks = new Date(data.checkin).getTime();
 const now = new Date().getTime();
 const countdown = Math.floor((checks - now) / (1000 * 60 * 60 * 24));
 const element = `
<div class="card btn">
     <div
      class="card__img"
      style="
       background-image: url(${data.cityWeb ? data.cityWeb : data.countryWeb});
      "
     ></div>
     <div class="card__desc">
      <h4 class="card__title">${data.location}, ${data.countryName}</h4>
      <p class="card__p">${
       !!countdown
        ? "Your trip starts in " + countdown + " days"
        : "Trip starts someday"
      }</p>
     </div>
    </div>
    <!-- The Modal -->
    <div class="modal">
     <!-- Modal content -->
     <div class="modal-content">
      <div class="modal-header">
       <h2>${data.location}</h2>
       <div class="content">
        <p>Weather: ${data.temp}</p>
        <p>Sunrise: ${data.sunrise}</p>
        <p>Sunset: ${data.sunset}</p>
        <p>Wind speed: ${data.wind_spd}</p>
       </div>
       <span class="close">&times;</span>
      </div>
      <div class="modal-body">
       <div>
        <h3>${data.cityInfo ? "About the city" : "About the country"}</h3>
        <p>${data.cityInfo ? data.cityInfo : data.countryInfo}
        </p>
       </div>
       <div
        class="card__img"
        style="
         background-image: url(${
          data.cityLarge ? data.cityLarge : data.countryLarge
         });
         height: 40rem;
        "
       ></div>
      </div>
      <div class="modal-footer">
       <h3>${data.countryName}</h3>
       <img src=${data.flag} >
       <div class="content">
        <p>Population: ${
         data.population
          ? data.population.toLocaleString(undefined, {
             minimumFractionDigits: 0,
            })
          : "not available"
        }</p>
        <p>Capital city: ${data.capital}</p>
        <p>Language: ${data.languages[0].name}</p>
        <p>Currency: ${data.currencies[0].name}</p>
       </div>
      </div>
     </div>
    </div>
    `;
 const cards = document.getElementById("cards");
 const popular = document.querySelector(".popular");
 const yourTrip = document.querySelector(".yourTrip");
 popular.style.display = "none";
 yourTrip.style.display = "block";
 Client.checkModals();
 return cards.insertAdjacentHTML("beforeend", element);
};

module.exports = renderTrip;
