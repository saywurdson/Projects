function ageInDays() {
  var birthYear = prompt('What Year Were You Born?');
  var theAgeInDays = (2020 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You Are ' + ageInDays + ' days old');
  h1.setAttribute('id', "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}