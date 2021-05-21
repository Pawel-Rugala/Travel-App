const handleSubmit = (e) => {
  e.preventDefault();
  const location = document.getElementById('loc');
  console.log(location.value);
  location.value = '';
  const checkIn = document.getElementById('checkin');
  console.log(checkIn.value);
  checkIn.value = '';
  const checkOut = document.getElementById('checkout');
  console.log(checkOut.value);
  checkOut.value = '';
};

export default handleSubmit;
