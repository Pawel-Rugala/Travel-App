const saveTrip = (trip) => {
 const trips = JSON.parse(localStorage.getItem("trips"));
 console.log(trips);
 if (trips && trip) {
  trips.push(trip);
  localStorage.setItem("trips", JSON.stringify(trips));
 } else if (trip) {
  localStorage.setItem("trips", JSON.stringify([trip]));
 }
};

export default saveTrip;
