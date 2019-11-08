function parser(data) {
  return JSON.parse(data)
}

function createItems(obj) {
  // obj
  var li = document.createElement('li')
  li.innerText = obj.name
  return li
}

function showData(dataObj) {
  var cities = dataObj.location_suggestions // array of objects
  // elements
  // 0 1 .... n
  /*
    {
      name: 'mumbai',
      id: 12,
      country_name: 'india',
      country_code: 1,
      .......
    }

    obj.name
  */
  var ul = document.createElement('ul')
  // for loop -> 0 --- lenght-1
  // map & forEach
  cities.forEach(/*callback function*/)
}

var xhr = new XMLHttpRequest();
console.log('initially xhr.readyState', xhr.readyState)
// xhr.withCredentials = true;

// readyState -> 0 1 2 3 4

// function readyStateChangeHandler(event) {
//   console.log('this.readyState', this.readyState)
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// }

xhr.addEventListener("readystatechange", function (event) {
  console.log('from inside handler this.readyState', this.readyState)
  if (this.readyState === 4) {
    console.log('readystate is 4 now', this.responseText);
    var dataObj = parser(this.responseText)
    console.log('dataObj', dataObj)
  }
});

/*
  '4' == 4 // true
  '4' === 4 // false
*/

xhr.open("GET", "https://developers.zomato.com/api/v2.1/cities?city_ids=3,4,1,3514");
console.log('after configuration using open()', xhr.readyState)
xhr.setRequestHeader("user-key", "4a0c39d878446666a8f61a0f65d2a0f3");
xhr.send(null);
console.log('after send', xhr.readyState)
