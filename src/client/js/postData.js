const postData = async (url = "http://localhost:8081/fetch", data) => {
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
