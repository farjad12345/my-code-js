//   show todos
var showToDo = function (id) {
  showLoading();
  var showToDoUrl = `http://jsonplaceholder.typicode.com/users/${id}/todos`;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", showToDoUrl, true);

  xhttp.onreadystatechange = function () {
    try {
      if (xhttp.status != 200 && xhttp.readyState != 4) {
        throw xhttp.status + "\n" + "خطایی رخ داده";
      }

      if (xhttp.readyState === 4 && xhttp.status === 200) {
        var x = [];
        x = JSON.parse(xhttp.responseText);
        var element = "";

        for (const i of x) {
          element += `id : ${i.id}<br>  userId : ${i.userId}<br>  title : ${i.title} completed : ${i.completed} <hr>`;
        }
      }
    } catch (err) {
      alert(err);
    } finally {
      hideLoading();
    }

    newElement = document.querySelector(`.result-${id}`);
    newElement.innerHTML = ` <button onclick=closeResult(${id}) class="btn-result btn btn-primary mt-2 " >  close 
                          </button> ${element}`;
    newElement.style.display = "block";
  };

  xhttp.send();
};
