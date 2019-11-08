/*
{
  "id": 12,
  "firstName": "John",
  "lastName": "Doe",
  "age": 40,
  "comments": [
    { "id": 1, "body": "comment12345678", "postId": 12, "createdAt": "2019-10-05" },
    { "id": 2, "body": "comment12345678eeeee" },
    { "id": 3, "body": "comment12345678" }
  ]
}
*/
//{"id":12,"firstName": "John","lastName": "Doe",.....}
var data = '{'
  +'"id": 12,'
  +'"firstName": "John",'
  +'"lastName": "Doe",'
  +'"age": 40,'
  +'"comments": ['
    +'{ "id": 1, "body": "comment12345678", "postId": 12, "createdAt": "2019-10-05" },'
    +'{ "id": 2, "body": "comment12345678eeeee" },'
    +'{ "id": 3, "body": "comment12345678" }'
  +']'
+'}'
console.log('data = ', data)
var parsedData = JSON.parse(data)
console.log('parsedData = ', parsedData)

var ul = document.createElement('ul')
var li1 = document.createElement('li')
li1.innerHTML = 'id:'+parsedData.id
ul.appendChild(li1)
var li2 = document.createElement('li')
li2.innerHTML = 'firstName:'+parsedData.firstName
ul.appendChild(li2)
var li3 = document.createElement('li')
li3.innerHTML = 'lastName:'+parsedData.lastName
ul.appendChild(li3)
var li4 = document.createElement('li')
li4.innerHTML = 'age:'+parsedData.age
ul.appendChild(li4)
document.body.appendChild(ul)

/*
  HTTP -> stateless protocol -> it doesn't know the client
  Request to server
  HTTP Request -- headers
    Content-type
    Method -> GET, POST, PUT, DELETE

    GET:
      no body
      www.example.com?param=abc&another=werty
      ?
        param=abc
        &
        another=werty

    POST:
      request body


  server responds with a response
  - 
*/
