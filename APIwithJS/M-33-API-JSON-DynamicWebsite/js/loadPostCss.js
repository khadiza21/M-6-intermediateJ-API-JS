function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data = displayPosts(data)));
}

loadPosts();

function displayPosts(posts) {
  const postContainer = document.getElementById("Posts");
  for (const post of posts) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>New Title</h3>
    <p>New description </p>
    `;
    // console.log(post.title);
  }
}
