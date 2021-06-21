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
  Client.renderTrip(data);
  Client.checkModals();
  modal.style.display = "none";
 });
 location.value = "";
 checkIn.value = "";
 checkOut.value = "";
};

export default handleSubmit;
