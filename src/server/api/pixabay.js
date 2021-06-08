const fetch = require('node-fetch');

const pixabay = async (key, location) => {
  const res = await fetch(
    `https://pixabay.com/api/?key=${key}&q=${location}&image_type=photo&pretty=true`
  );
  try {
    const newData = await res.json();
    if (newData.total > 0) {
      const { webformatURL, largeImageURL, previewURL } = newData.hits[0];
      return { webformatURL, largeImageURL, previewURL };
    }
    throw 'no data';
  } catch (err) {
    console.log('error', err);
  }
};

module.exports = pixabay;
