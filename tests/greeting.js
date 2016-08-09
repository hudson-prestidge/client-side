var test = require('tape')
var Handlebars = require('handlebars')
var fs = require('fs')
var path = require('path')
var cheerio = require('cheerio')

// test('greeting view', function(t) {
//   var templateText = fs.readFileSync(path.join(__dirname, 'views/greeting.hbs'), 'utf8')
//   var templateFunction = Handlebars.compile( templateText )
//
//   var exampleData = {name: 'MIXMIX'}
//
//   var renderedTemplate = templateFunction(exampleData)
//   var $ = cheerio.load(renderedTemplate)
//
//   t.equal($('h1').text(), "Hello MIXMIX!", 'template uses data in heading')
//
//   t.end()
// })

test('greeting view', function(t) {
  var templateText = fs.readFileSync(path.join(__dirname, '../views/greeting.hbs'), 'utf8')
  var templateFunction = Handlebars.compile( templateText )

  var exampleData = {latitude: 12, longitude: 3}

  var renderedTemplate = templateFunction(exampleData)
  var $ = cheerio.load(renderedTemplate)

  t.equal($('#latitude').text(), "\n  Latitude: 12\n", 'template uses data in latitude')
  t.equal($('#longitude').text(), "\n  Longitude: 3\n", 'template uses data in longitude')

  t.end()
})
