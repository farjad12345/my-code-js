
var showToDo = function (obj) {
    showLoading();
    var text = `http://jsonplaceholder.typicode.com/users/${obj}/todos`;
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
                    element += `id : ${i.id}<br>  userId : ${i.userId}<br>  title : ${i.title} completed : ${i.completed} <hr>`;
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
