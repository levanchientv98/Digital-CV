// View More/ Less for job-info
document.getElementById("btn-vm").onclick = function () {
  document.getElementById("experience").style.display = "grid";
};

document.getElementById("btn-vl").onclick = function () {
  document.getElementById("experience").style.display = "none";
};

// View More/ Less for education
document.getElementById("btn-vm1").onclick = function () {
  document.getElementById("education").style.display = "grid";
};

document.getElementById("btn-vl1").onclick = function () {
  document.getElementById("education").style.display = "none";
};

// View More/ Less for activity
document.getElementById("btn-vm2").onclick = function () {
  document.getElementById("activity").style.display = "grid";
};

document.getElementById("btn-vl2").onclick = function () {
  document.getElementById("activity").style.display = "none";
};

// View More/ Less for hobby
document.getElementById("btn-vm3").onclick = function () {
  document.getElementById("hobby").style.display = "grid";
};

document.getElementById("btn-vl3").onclick = function () {
  document.getElementById("hobby").style.display = "none";
};

// View More/ Less for language
document.getElementById("btn-vm4").onclick = function () {
  document.getElementById("language").style.display = "grid";
};

document.getElementById("btn-vl4").onclick = function () {
  document.getElementById("language").style.display = "none";
};

// View More/ Less for skill
document.getElementById("btn-vm5").onclick = function () {
  document.getElementById("skills").style.display = "grid";
};

document.getElementById("btn-vl5").onclick = function () {
  document.getElementById("skills").style.display = "none";
};

// Check Email and output information

const buttonSM = document.getElementById("btn-sm");
const formEmail = document.getElementById("your-email");
const personInfo = document.getElementById("per-info");
const email = document.getElementById("email");
const errorEmpty = document.getElementById("error");

buttonSM.addEventListener("click", function (e) {
  const emptyError = "";

  e.preventDefault();
  const text = email.value;
  const regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (text.match(regExp)) {
    console.log("email");
    personInfo.style.display = "block";
    formEmail.style.display = "none";
  } else if (text == "") {
    alert("Email not be empty");
  } else {
    alert("Email invalidate");
  }
  return true;
});
// document.getElementById("btn-sm").onclick = function (CheckEmail) {
//   var emptyError = "";
//   var emailFormat = "";
//   var email = document.getElementById("email");

// if (email.value == "") {
//   email.className = "emptyError";
//   emptyError += "Email không được bỏ trống.<br>";
//   document.getElementById("error").innerHTML =
//     "<span>" + emptyError + "</span>";
//   return false;
//   }
//   if (!email.value.match(regExp)) {
//     email.className = "emailFormat";
//     emailFormat += "Email không đúng định dạng.<br>";
//     document.getElementById("error").innerHTML =
//       "<span>" + emailFormat + "</span>";
//     return false;
//   }
//   document.getElementById("per-info").style.display = "grid";
//   document.getElementById("your-email").style.display = "none";
// };
