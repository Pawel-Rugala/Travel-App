const URL = () => {
 window.location.href.includes("localhost");
};

const postData = async (
 //This is necessary in orer to work in Heroku & Dev env
 url = window.location.href.includes("localhost")
  ? "http://localhost:8081/fetch"
  : "/fetch",
 data
) => {
 const res = await fetch(url, {
  method: "POST",
  credentials: "same-origin",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
 });
 try {
  const newData = await res.json();
  return newData;
 } catch (err) {
  console.log("ERROR CLIENT::: ", error);
 }
};

module.exports = postData;
