//  show albums
var showAlbums = function (id) {
    showLoading();
    var showAlbumsUrl = `http://jsonplaceholder.typicode.com/users/${id}/albums`;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", showAlbumsUrl, true);

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
                <div class="resultIteams resultIteams-${i.id}"> </div> <hr>`;
                }
            }
        } catch (err) {
            alert(err);
        } finally {
            hideLoading();
        }

        newElement = document.querySelector(`.result-${id}`);
        newElement.innerHTML = ` <button onclick=closeResult(${id}) class="btn-result">  close 
                          </button> ${element}`;
        ;
        newElement.style.display = "block";
    };

    xhttp.send();
};
// show photos 
var showPhotos = function (id) {
    showLoading();
    var showPotosUrl = `http://jsonplaceholder.typicode.com/albums/${id}/photos`;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", showPotosUrl, true);

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

        newElement = document.querySelector(`.resultIteams-${id}`);
        newElement.innerHTML = `<br>
        <button onclick=closeResultIteams(${id}) class="btn-resultIteams">  close 
                          </button> 
                           ${element}`;
        newElement.style.display = "block";
    };

    xhttp.send();
};
