window.onload = function(){
      // window.setInterval(AddBubble(), 600);
};

var myList = document.querySelector('#NewsGroup');

$.ajax({
    type: 'POST',
    url: 'https://api.applymagicsauce.com/auth',
    // dataType: 'json',
    headers: {
        // 'Content-type': 'json'
        // 'Accept': 'json'
    },
    body: {
        "customer_id": '3466',
        "api_key": "1ljon4nqhkfq7cp840cufh9qqq"
    },
    success: function () {
      alert(success);
    }
});

// function make_base_auth(user, password) {
//     var tok = user + ':' + password;
//     var hash = btoa(tok);
//     return 'Basic ' + hash;
// }

// var url = 'https://api.applymagicsauce.com/auth?customer_id=3466&'+
//           'apiKey=1ljon4nqhkfq7cp840cufh9qqq';

// var req = new Request(url);

// fetch(req)
// .then(function(response) { return response.json(); })
//   .then(function(data) {
//     alert(data);
// })