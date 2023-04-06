const div = document.getElementById("data-value");

async function data() {
  let out = [];
  out = await axios
    .get("http://13.233.108.213:5000/get-data")
    .then((res) => res.data)
    .catch((err) => console.log(err));

  console.log(out);

  out.forEach((val) => {
    div.innerHTML += `
    <div>
    <h1>${val.fname}</h1>
    <h2>${val.email}</h2>
    </div>`;
  });
}

data()
