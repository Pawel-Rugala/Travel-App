const postData = async (url = 'http://localhost:8081/fetch', data) => {
  console.log(`postData param: ${data}`);
  console.log(`postData JSON:`, JSON.stringify(data));
  if (data) {
    const res = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    try {
      const newData = await res.json();
      return newData;
    } catch (err) {
      console.log('error', error);
    }
  } else {
    return console.log('error');
  }
  console.log(url, data);
};

export default postData;
