// close result
var closeResult = function (id) {
  var divElement = document.querySelector(`.result-${id}`);
  divElement.style.display = "none";
};
// close resultIteam

var closeResultIteams = function (id) {
  var divElement = document.querySelector(`.resultIteams-${id}`);
  divElement.style.display = "none";
};
// show loading
var showLoading = function () {
  document.querySelector(".loader").classList.remove("hide");
};
// hide loading

var hideLoading = function () {
  document.querySelector(".loader").classList.add("hide");
};
// active link selected and add class Active
var activeLink = function (para) {
  let x = document.querySelectorAll(".pagination li");
  x.forEach(function (elem) {
    elem.classList.remove("active");
  });
  let activeLink = document.querySelector(`.pagination .link-${para}`);
  activeLink.classList.add("active");
};

// show users
var showUsers = function (para) {
  activeLink(para);

  var xhttp = new XMLHttpRequest();
  showLoading();
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.onreadystatechange = function () {
    try {
      if (xhttp.status != 200 && xhttp.readyState != 4) {
        throw xhttp.status + "\n" + "خطایی رخ داده";
      }
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        var x = [];
        var x = JSON.parse(xhttp.responseText);

        x = pagination(x, 4);

        newElement = document.querySelector(".demo").innerHTML = "";
        x[para].forEach(function (element) {
          newElement = document.querySelector(".demo");
          newElement.innerHTML += `<div class="card" card-"${element.id}"  >
                        <div class="card-userlist" card-userlist"${element.id}"  >
                        name ${element.id} : ${element.name}<br>
                         email : ${element.email} <br>
                         username : ${element.username} <br>

                         address : ${element.address.street}  ${element.address.suite} 
                          ${element.address.city}${element.address.zipcode} 
                         
                         lat: ${element.address.geo.lat} lng:  ${element.address.geo.lng} 
                         phone : ${element.phone} <br>
                         website : ${element.website} <br>
                         company : ${element.company.name}  ${element.company.catchPhrase}  ${element.company.bs} <br>
                  <div class="button-wrapper d-flex justify-content-between align-items-center">
                   <button class="btn btn-primary" onclick = "showPost(${element.id})" > Show Posts </button > 
                   <button class="btn btn-primary" onclick="showToDo(${element.id})">Show to dos </button> 
                   <button class="btn btn-primary" onclick="showAlbums(${element.id})">Show albums </button> 
                   </div> 
                  </br>
                   <div class="result result-${element.id}"></div>

                  </div > 
                         </div > `;
        });
      }
    } catch (err) {
      alert(err);
    } finally {
      hideLoading();
    }
  };

  xhttp.send();
};
var searchUser = function () {
  var xhttp = new XMLHttpRequest();
  showLoading();
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.onreadystatechange = function () {
    try {
      if (xhttp.status != 200 && xhttp.readyState != 4) {
        throw xhttp.status + "\n" + "خطایی رخ داده";
      }
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        var x = [];
        var x = JSON.parse(xhttp.responseText);
        var serchValue = document.querySelector("#inp1").value;
        var filterData = x.filter(function (value) {
          return value.id == serchValue;
        });
        filterData.forEach(function (element) {
          newElement = document.querySelector(".demo");
          newElement.innerHTML = `<div class="card" card-"${element.id}"  >
                        <div class="card-userlist" card-userlist"${element.id}"  >
                        name ${element.id} : ${element.name}<br>
                         email : ${element.email} <br>
                         username : ${element.username} <br>
                         address : ${element.address.street}  ${element.address.suite}
                          ${element.address.city}${element.address.zipcode}

                         lat: ${element.address.geo.lat} lng:  ${element.address.geo.lng}
                         phone : ${element.phone} <br>
                         website : ${element.website} <br>
                         company : ${element.company.name}  ${element.company.catchPhrase}  ${element.company.bs} <br>
                  <div class="button-wrapper" d-flex justify-content-between align-items-center>
                   <button class="btn btn-primary" onclick = "showPost(${element.id})" > Show Posts </button >
                   <button class="btn btn-primary" onclick="showToDo(${element.id})">Show to dos </button>
                   <button class="btn btn-primary" onclick="showAlbums(${element.id})">Show albums </button>
                   </div>
                  </br>
                   <div class="result result-${element.id}"></div>

                  </div >
                         </div > `;
        });
      }
    } catch (err) {
      alert(err);
    } finally {
      hideLoading();
    }
  };

  xhttp.send();
};

function pagination(array, perPage) {
  let count = Math.floor(array.length / perPage);
  let dif = array.length % perPage;
  let res = [];
  for (let i = 1; i <= count; i++) {
    let data = array.filter(function (e) {
      return (
        array.indexOf(e) < i * perPage && array.indexOf(e) >= (i - 1) * perPage
      );
    });
    res.push(data);
  }
  if (dif != 0) {
    let data = array.filter(function (e) {
      return array.indexOf(e) >= array.length - dif;
    });
    res.push(data);
  }
  return res;
}
