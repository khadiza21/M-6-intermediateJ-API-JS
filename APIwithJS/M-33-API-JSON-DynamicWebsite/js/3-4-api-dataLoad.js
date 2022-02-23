function loadApiData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
function loadApiUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => displayusers(json));
}
function loadApiComments() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((pic) => pic.json())
    .then((picshow) => console.log(picshow));
}
function displayusers(data) {
  const ul = document.getElementById("users");
  for (const user of data) {
    // console.log(user.email);
    const li = document.createElement("li");
    li.innerText = `Name: ${user.name}     Email: ${user.email}`;
    ul.appendChild(li);
  }
}
