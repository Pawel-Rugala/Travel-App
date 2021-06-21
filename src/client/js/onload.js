const onload = () => {
 const trips = JSON.parse(localStorage.getItem("trips"));
 if (!trips) {
  return localStorage.setItem("trips", JSON.stringify([]));
 }
 if (trips.length > 0) {
  return Client.renderTrips(trips);
 }
 Client.checkModals();
};

export default onload;
