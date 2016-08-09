const xhr = require('xhr')
const greeting = require('./views/greeting.hbs')
const visibility = require('./views/visibility.hbs')

const endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  const target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting(JSON.parse(data.body))
  document.getElementById('awesome-button')
    .addEventListener('click', getVisibility)
})

function getVisibility(){
  xhr.get(endpoint, function (err, data) {
    if (err) {
      console.error(err)
    }

    const target = document.getElementsByTagName('main')[0]
    target.innerHTML += visibility(JSON.parse(data.body))
  })
}
