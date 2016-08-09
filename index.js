var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var visibility = require('./views/visibility.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting(JSON.parse(data.body))
  document.getElementById('awesome-button')
    .addEventListener('click', getVisibility)
})

function getVisibility(){
  xhr.get(endpoint, function (err, data) {
    if (err) {
      console.error(err)
    }

    var target = document.getElementsByTagName('main')[0]
    target.innerHTML += visibility(JSON.parse(data.body))
  })
}
