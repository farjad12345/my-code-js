var closeDiv = function (obj) {
    var divElement = document.querySelector(`.div2-${obj}`)
    divElement.style.display = "none";
}
var closeDiv2 = function (obj) {
    var divElement = document.querySelector(`.div3-${obj}`)
    divElement.style.display = "none";
}
var showLoading = function () {
    document.querySelector('.loader').classList.remove('hide')

}
var hideLoading = function (x, y) {

    document.querySelector('.loader').classList.add('hide')
}
var showUsers = function () {

    var xhttp = new XMLHttpRequest();
    showLoading()
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.onreadystatechange = function () {
        try {
            if (xhttp.status != 200 && xhttp.readyState != 4) { throw (xhttp.status + "\n" + 'خطایی رخ داده') }
            if ((xhttp.readyState === 4) && (xhttp.status === 200)) {
                var x = []
                x = JSON.parse(xhttp.responseText);
                x.forEach(function (element) {
                    newElement = document.querySelector('.demo').innerHTML +=
                        `<div class="card" card-"${element.id}"  >
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
                  <div class="button-wrapper">
                   <button button onclick = "showPost(${element.id})" > Show Posts </button > 
                   <button onclick="showToDo(${element.id})">Show to dos </button> 
                   <button onclick="showAlbums(${element.id})">Show albums </button> 
                   </div> 
                  </br>
                   <div class="div2 div2-${element.id}"></div>

                  </div > 
                         </div > `
                        ;
                });

            }
        }
        catch (err) {
            alert(err);
        }
        finally {
            hideLoading();
        }
    }

    xhttp.send();

}

