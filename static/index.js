const form = document.getElementById("reg-form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const phone = document.getElementById("phone");
const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");
const district = document.getElementById("district");
const state = document.getElementById("state");
const nationality = document.getElementById("nationality");
const zipcode = document.getElementById("zipcode");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("SUBMITTING");

  let cond = false;

  // VALIDATIONS
  if (
    fname.value != "" ||
    lname.value != "" ||
    email.value != "" ||
    dob.value != "" ||
    gender.value != "" ||
    phone.value != "" ||
    address1.value != "" ||
    district.value != "" ||
    state.value != "" ||
    nationality.value != "" ||
    zipcode.value != ""
  ) {
    cond = true;
  } else {
    alert("ENTER ALL THE FIELDS");
  }

  const data = {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    dob: dob.value,
    gender: gender.value,
    phone: phone.value,
    address1: address1.value,
    address2: address2.value,
    district: district.value,
    state: state.value,
    nationality: nationality.value,
    zipcode: zipcode.value,
  };

  console.log(data);

  if (cond == true) {
    postData();
  }
});

async function postData() {
  const data = {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    dob: dob.value,
    gender: gender.value,
    phone: phone.value,
    address1: address1.value,
    address2: address2.value,
    district: district.value,
    state: state.value,
    nationality: nationality.value,
    zipcode: zipcode.value,
  };

  console.log(data);
  await axios
    .post("http://13.233.108.213:5000/post-data", data)
    .then((res) => {
      console.log(res.data);
      window.location.href = "/data.html";
    })
    .catch((err) => console.log(err));
}
