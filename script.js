/// 1 ////
  const get = fetch('https://jsonplaceholder.typicode.com/posts/1',{
  method: 'GET'
})

get
.then((response) => {
   if (response) {
   return response.json()
 }else{
   throw new Error("Ошибка запроса");
 }
})
.then((json) => {
console.log(json.title)
return  fetch('https://jsonplaceholder.typicode.com/posts',{
  method: 'POST',
  body:JSON.stringify({
    title: "My homework post",
    body: "This is a test post",
    userId: 1
  })
})
})
.then((response) => {
  if (response.ok) {
     return response.json()
  }else{
    throw new Error("Ошибка создания поста");
  }
})
.then((json) => {
console.log(json.id)
return  fetch('https://jsonplaceholder.typicode.com/posts/1',{
  method: 'PUT',
  headers: {'Content-Type': 'application/json; charset=UTF-8'},
  body: JSON.stringify({
  id: 1,
  title: "Updated title",
  body: "Updated body",
  userId: 1
})
})
})
.then((response) => {
  if (response.ok) {
    return response.json()
  }else{
    throw new Error("Ошибка обновления поста");
  }
})
.then((json) => {
 console.log(json.title)
 console.log(json.body)
 return    fetch('https://jsonplaceholder.typicode.com/posts/1',{
  method: 'PATCH',
  headers: {'Content-Type': 'application/json; charset=UTF-8'},
  body: JSON.stringify({
  title: "PATCHED title",
})
})
})
.then((response) => {
  if (response.ok) {
    return response.json()
  }else{
    throw new Error("Ошибка изменения поста");
  }
})
.then((json) => {
 console.log(json.title)
 return  fetch('https://jsonplaceholder.typicode.com/posts/1',{
   method: 'DELETE',
})
})
.then((response) => {
  if (response.ok) {
    console.log("Пост удалён")
  }else{
    throw new Error("Ошибка удаления поста");
  }
})
.catch((err) => {
   console.log(err);
})
  



