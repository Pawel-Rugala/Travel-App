const handleSubmit = (e) => {
 e.preventDefault();
 Client.loadAnimation(true);
 const location = document.getElementById("loc");
 const checkIn = document.getElementById("checkin");
 const modal = document.getElementById("addModal");
 //  const header = document.querySelector(".header");
 const reqData = {
  location: location.value,
  checkin: checkIn.value,
 };
 Client.postData("http://localhost:8081/fetch", reqData)
  .then((data) => {
   if (data.geo) {
    const errField = document.getElementById("err");
    errField.innerText = "BAD REQUEST. Choose different location";
    errField.style.display = "block";
    Client.loadAnimation(false);
    Client.checkModals();
   } else {
    console.log(data);
    Client.saveTrip(data);
    Client.renderTrip(data);
    Client.checkModals();
    Client.loadAnimation(false);
    modal.style.display = "none";
   }
  })
  .catch((err) => {
   console.log(err);
   const errField = document.getElementById("err");
   errField.innerText = "BAD REQUEST. Choose different location";
   errField.style.display = "block";
   Client.checkModals();
  });
 location.value = "";
 checkIn.value = "";
};

export default handleSubmit;
