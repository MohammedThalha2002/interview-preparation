const div = document.getElementById("data-value");

let out = axios
  .get("http://localhost:5000/get-data", data)
  .then((res) => res.data)
  .catch((err) => console.log(err));

out.forEach((val) => {
  div.innerHTML += `
    <div>
    <h1>${val.fname}</h1>
    <h2>${val.email}</h2>
    </div>`;
});
