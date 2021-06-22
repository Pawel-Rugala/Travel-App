const handleSubmit = (e) => {
 e.preventDefault();
 Client.loadAnimation(true);
 const location = document.getElementById("loc");
 const checkIn = document.getElementById("checkin");
 const cards = document.getElementById("cards");
 const popular = document.querySelector(".popular");
 console.log(popular);
 const modal = document.getElementById("addModal");
 //  const header = document.querySelector(".header");
 const reqData = {
  location: location.value,
  checkin: checkIn.value,
 };
 Client.postData("http://localhost:8081/fetch", reqData).then((data) => {
  console.log(data);
  Client.saveTrip(data);
  Client.renderTrip(data);
  Client.checkModals();
  Client.loadAnimation(false);
  modal.style.display = "none";
 });
 location.value = "";
 checkIn.value = "";
 checkOut.value = "";
};

export default handleSubmit;
