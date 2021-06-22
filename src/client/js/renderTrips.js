const renderTrips = () => {
 const trips = JSON.parse(localStorage.getItem("trips"));

 if (trips.length > 0) {
  trips.forEach((trip) => {
   return Client.renderTrip(trip);
  });
 }
};

module.exports = renderTrips;
