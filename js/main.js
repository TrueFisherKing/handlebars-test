var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "js/animals.json");
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

Handlebars.registerHelper("calcAge", function(birthYear){
  var age = new Date().getFullYear() - birthYear;
  
  return age;
})

function createHTML(data){
  var rawTemplate = document.getElementById('petsTemplate').innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(data);

  var petsContainer = document.getElementById("pets-container");
  petsContainer.innerHTML = ourGeneratedHTML;
}
