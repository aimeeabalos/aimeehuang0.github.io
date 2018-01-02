window.onload = function(){
      // window.setInterval(AddBubble(), 600);
};


// var myList = document.querySelector('ul');
var myList = document.querySelector('#NewsGroup');


var url = 'https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&' +
          'sortBy=popularity&' +
          'language=en&'+
          'apiKey=7a9fafb663e14ec7811c46226367cf1e';

var req = new Request(url);

fetch(req)
.then(function(response) { return response.json(); })
  .then(function(data) {

    for (var i = 0; i < 9; i++) {
      var div = document.createElement('div');
      div.setAttribute('class', 'col span_1_of_3 newsItem');

      var subdiv = document.createElement('div');
      subdiv.setAttribute('class', 'newsImg');
      subdiv.innerHTML = '<img src="' + data.articles[i].urlToImage + '">';

      var subcontent = document.createElement('div');
      subcontent.setAttribute('class', 'newstitle');
      subcontent.innerHTML = '<a href="">' + data.articles[i].title + '</a>';

      div.appendChild(subdiv);
      div.appendChild(subcontent);

      // myList.appendChild(div);

      // listItem.innerHTML = ' Author: '+data.articles[i].author + '<br>';
      // listItem.innerHTML +=' Description: ' + data.articles[i].description + '<br>';
      // listItem.innerHTML +=' Source: ' + data.articles[i].source.id + '<br>';
      // listItem.innerHTML +=' Image: ' + data.articles[i].urlToImage + '<br>';
      myList.appendChild(div);
    }
})