
var showAlbums = function (obj) {
    showLoading();
    var text = `http://jsonplaceholder.typicode.com/users/${obj}/albums`;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", text, true);

    xhttp.onreadystatechange = function () {
        try {
            if (xhttp.status != 200 && xhttp.readyState != 4) {
                throw xhttp.status + "\n" + 'خطایی رخ داده';
            }

            if (xhttp.readyState === 4 && xhttp.status === 200) {
                var x = [];
                x = JSON.parse(xhttp.responseText);
                var element = '';

                for (const i of x) {
                    element += `id : ${i.id} <br> userId : ${i.userId} <br> title : ${i.title} 
                     <button onclick="showPhotos(${i.id} )"> photos </button><br> 
                <div class="div3 div3-${i.id}"> </div> <hr>`;
                }
            }
        } catch (err) {
            alert(err);
        } finally {
            hideLoading();
        }

        newElement = document.querySelector(`.div2-${obj}`);
        newElement.innerHTML = ` <button onclick=closeDiv(${obj}) class="btn-div2">  close 
                          </button> ${element}`;
        ;
        newElement.style.display = "block";
    };

    xhttp.send();
};
var showPhotos = function (obj) {
    showLoading();
    var text = `http://jsonplaceholder.typicode.com/albums/${obj}/photos`;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", text, true);

    xhttp.onreadystatechange = function () {
        var x = [];
        element = "";

        try {
            if (xhttp.status != 200 && xhttp.readyState != 4) {
                throw xhttp.status + "\n" + 'خطایی رخ داده';
            }

            if (xhttp.readyState === 4 && xhttp.status === 200) {
                x = JSON.parse(xhttp.responseText);

                for (const i of x) {
                    element += `albumId : ${i.albumId} <br> id : ${i.id} <br> title : ${i.title} <br>  url : <div class="div-img-url"><img src="${i.url}" alt="${i.id}"> </div></br> <div class="div-img-thumb">"thumbnailUrl : <img src="${i.thumbnailUrl}" alt : "${i.id}"> <br></div>  <hr/>`;
                }
            }
        } catch (err) {
            alert(err);
        } finally {
            hideLoading();
        }

        newElement = document.querySelector(`.div3-${obj}`);
        newElement.innerHTML = `<br>
        <button onclick=closeDiv2(${obj}) class="btn-div3">  close 
                          </button> 
                           ${element}`;
        newElement.style.display = "block";
    };

    xhttp.send();
};
