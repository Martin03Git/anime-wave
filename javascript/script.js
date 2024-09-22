
  // search bar
  
  const icon = document.querySelector('.icon');
  const search = document.querySelector('.search');
  icon.onclick = function () {
    search.classList.toggle('active');
  }

  // dark mode

  const ubah = document.body;
  const toogle = document.querySelector(".toogle");

  let getTheme = localStorage.getItem("theme")

  if(getTheme && getTheme === "dark"){
    ubah.classList.add("darkmode");
    toogle.classList.add("active");
    toogle.checked = true;
  }

  function UbahMode() {
    ubah.classList.toggle("darkmode");
    toogle.classList.toggle("active");

    if(!document.body.classList.contains("darkmode")){
      return localStorage.removeItem("theme");
    }
    return localStorage.setItem("theme","dark");
  } 
    

  // login
  var attempt = 4; // Variable to count number of attempts.
  // Below function Executes on click of login button.

  const form = document.getElementById("form_id");

  form.onsubmit = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username == "" && password == "") {
      alert("username dan password Harus di isi!");
      return false;
    } else if ( username == "admin" && password == "admin"){
      alert ("Login Berhasil!");
      window.location = "index.html"; // Redirecting to other page.
      return false;
    } else {
      attempt --;// Decrementing by one.
      alert("Kamu punya "+attempt+" kesempatan lagi;");
      // Disabling fields after 3 attempts.
      if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;

        alert("Kamu sudah tidak bisa login!");
        return false;
      }
      return false;
    }
  }

