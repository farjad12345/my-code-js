var showPost = function (obj) {
    showLoading()

    var text = `http://jsonplaceholder.typicode.com/users/${obj}/posts`
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", text, true);
    xhttp.onreadystatechange = function () {
        try {
            if (xhttp.status != 200 && xhttp.readyState != 4) { throw (xhttp.status + "\n" + 'خطایی رخ داده') }
            if ((xhttp.readyState === 4) && (xhttp.status === 200)) {
                var x = [];
                x = JSON.parse(xhttp.responseText);
                var element = '';
                for (const i of x) {
                    element += (` id : ${i.id}<br> userId : ${i.userId} <br>  title : ${i.title} body :${i.body} 
            <button onclick="showComments(${i.id})">show comments</button> <br/><div class="div3 div3-${i.id}"> </div><hr/>`);
                }
            }
        }
        catch (err) {
            alert(err);
        }
        finally {
            hideLoading()
        }
        newElement = document.querySelector(`.div2-${obj}`);
        newElement.innerHTML = ` <button onclick=closeDiv(${obj}) class="btn-div2">  close  </button> ${element}`;
        newElement.style.display = "block";
    }

    xhttp.send()
}
var showComments = function (obj) {
    showLoading()

    var text = `http://jsonplaceholder.typicode.com/posts/${obj}/comments`
    var element = '';
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", text, true)
    xhttp.onreadystatechange = function () {
        var x = [];
        try {
            if (xhttp.status != 200 && xhttp.readyState != 4) { throw (xhttp.status + "\n" + 'خطایی رخ داده') }
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                x = JSON.parse(xhttp.responseText)
                element = "";
                for (const i of x) {
                    element += (`id : ${i.id}<br> postId :${i.postId} <br> name : ${i.name} <br> email : ${i.email} <br> body : ${i.body}
     <br>  <hr>`);

                }

            }
        }
        catch (err) {
            alert(err);
        }
        finally {
            hideLoading()

        }

        newElement = document.querySelector(`.div3-${obj} `);
        newElement.innerHTML = `<br>
        <button onclick=closeDiv2(${obj}) class="btn-div3">  close 
                          </button> 
                           ${element}`;
        newElement.style.display = "block";

    }
    xhttp.send();
}