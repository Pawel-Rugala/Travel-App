const handleSubmit = (e) => {
  e.preventDefault();
  const location = document.getElementById('loc');
  const checkIn = document.getElementById('checkin');
  const checkOut = document.getElementById('checkout');
  const reqData = {
    location: location.value,
    checkin: checkIn.value,
    checkout: checkOut.value,
  };
  Client.postData('http://localhost:8081/fetch', reqData);
  console.log(`handleSubmit: ${reqData}`);
  location.value = '';
  checkIn.value = '';
  checkOut.value = '';
};

export default handleSubmit;
