// show post
var showPost = function (id) {
  showLoading();

  var showPostUrl = `http://jsonplaceholder.typicode.com/users/${id}/posts`;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", showPostUrl, true);
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
          element += ` id : ${i.id}<br> userId : ${i.userId} <br>  title : ${i.title} body :${i.body} 
           <br> <button class="btn btn-primary" onclick="showComments(${i.id})">show comments</button> 
            <br><div class="resultIteams resultIteams-${i.id}"> </div><hr/>`;
        }
      }
    } catch (err) {
      alert(err);
    } finally {
      hideLoading();
    }
    newElement = document.querySelector(`.result-${id}`);
    newElement.innerHTML = ` <button class="btn btn-primary mt-2 btn-closeResult btn-result" onclick=closeResult(${id}) >  close  </button> ${element}`;
    newElement.style.display = "block";
  };

  xhttp.send();
};
// show Comments
var showComments = function (id) {
  showLoading();

  var showCommentsUrl = `http://jsonplaceholder.typicode.com/posts/${id}/comments`;
  var element = "";
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", showCommentsUrl, true);
  xhttp.onreadystatechange = function () {
    var x = [];
    try {
      if (xhttp.status != 200 && xhttp.readyState != 4) {
        throw xhttp.status + "\n" + "خطایی رخ داده";
      }
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        x = JSON.parse(xhttp.responseText);
        element = "";
        for (const i of x) {
          element += `id : ${i.id}<br> postId :${i.postId} <br> name : ${i.name} <br> email : ${i.email} <br> body : ${i.body}
     <br>  <hr>`;
        }
      }
    } catch (err) {
      alert(err);
    } finally {
      hideLoading();
    }

    newElement = document.querySelector(`.resultIteams-${id} `);
    newElement.innerHTML = `<br>
        <button  class="btn btn-primary mt-2 btn-closeResult btn-resultIteams"  onclick="closeResultIteams(${id})">  close 
                          </button> 
                           ${element}`;
    newElement.style.display = "block";
  };
  xhttp.send();
};
