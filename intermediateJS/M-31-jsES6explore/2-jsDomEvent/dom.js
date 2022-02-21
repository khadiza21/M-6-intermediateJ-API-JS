document.getElementById("border").addEventListener("click", function () {
  const bk = document.getElementById("friend-container");
  bk.style.border = "3px solid black";
});

function addBackgroungColor() {
  const firends = document.getElementsByClassName("friend");
  for (const friend of firends) {
    friend.style.backgroundColor = "lightblue";
  }
}

document.getElementById("addFriend").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  const friendDiv = document.createElement("div");
  friendDiv.classList.add("friend");
  friendDiv.innerHTML = `
  <h3 class="friend-name">friend 4</h3>
  <p>Lorem ipsum dolor sit amet.</p>
  `;
  container.appendChild(friendDiv);
});
