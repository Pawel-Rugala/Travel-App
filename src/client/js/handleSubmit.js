const handleSubmit = (e) => {
 e.preventDefault();
 const location = document.getElementById("loc");
 const checkIn = document.getElementById("checkin");
 const checkOut = document.getElementById("checkout");
 const cards = document.getElementById("cards");
 const popular = document.querySelector(".popular");
 console.log(popular);
 const modal = document.getElementById("addModal");
 //  const header = document.querySelector(".header");
 const reqData = {
  location: location.value,
  checkin: checkIn.value,
  checkout: checkOut.value,
 };
 Client.postData("http://localhost:8081/fetch", reqData).then((data) => {
  console.log(data);
  Client.saveTrip(data);
  const checks = new Date(data.checkin).getTime();
  const now = new Date().getTime();
  const countdown = Math.floor((checks - now) / (1000 * 60 * 60 * 24));
  const element = `
          <div class="card btn">
          <div class="card__img" style="background-image:
            url(
            ${data.webformatURL}
            )"></div>
          <div class="card__desc">
            <h4 class="card__title">${data.location}, ${data.countryName}</h4>
            <p class="card__p">Your trip in ${countdown} days</p>
          </div>
        </div>
                <!-- The Modal -->
        <div class="modal">
          <!-- Modal content -->
          <div class="modal-content">
            <div class="modal-header">
              <span class="close">&times;</span>
              <h2>Zakopane, Poland</h2>
            </div>
            <div class="modal-body">
              <p>Nonumy erat diam lorem ut accusam tempor. Amet accusam et
                gubergren vero. Stet labore erat sea et. Tempor sit erat.</p>
              <p>Nonumy erat diam lorem ut accusam tempor. Amet accusam et
                gubergren vero. Stet labore erat sea et. Tempor sit erat.</p>
              <p>Nonumy erat diam lorem ut accusam tempor. Amet accusam et
                gubergren vero. Stet labore erat sea et. Tempor sit erat.</p>
              <p>Nonumy erat diam lorem ut accusam tempor. Amet accusam et
                gubergren vero. Stet labore erat sea et. Tempor sit erat.</p>
              <div class="card__img" style="background-image:
                url(
                https://images.unsplash.com/photo-1607187227188-7e1e96961eaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
                ); height: 50rem;"></div>
            </div>
            <div class="modal-footer">
              <h3>See knight sleeping between the mountains</h3>
            </div>
          </div>
        </div>
    `;
  cards.insertAdjacentHTML("afterend", element);
  modal.style.display = "none";
  popular.style.display = "none";
  Client.checkModals();
 });
 location.value = "";
 checkIn.value = "";
 checkOut.value = "";
};

export default handleSubmit;
