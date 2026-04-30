const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const addPostBtn = document.getElementById("addPost");
const postsContainer = document.getElementById("posts");

function getPosts() {
  return JSON.parse(localStorage.getItem("posts")) || [];
}

function parseMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/\*(.*?)\*/g, "<i>$1</i>");
}
<p>${parseMarkdown(post.content)}</p>
function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function displayPosts() {
  const posts = getPosts();
  postsContainer.innerHTML = "";

  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.classList.add("post");

    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <span class="delete" onclick="deletePost(${index})">Supprimer</span>
    `;

    postsContainer.appendChild(div);
  });
}

addPostBtn.addEventListener("click", () => {
  const title = titleInput.value;
  const content = contentInput.value;

  if (!title || !content) return;

  const posts = getPosts();

  posts.push({ title, content });

  savePosts(posts);
  displayPosts();

  titleInput.value = "";
  contentInput.value = "";
});

function deletePost(index) {
  const posts = getPosts();

  posts.splice(index, 1);

  savePosts(posts);
  displayPosts();
}

displayPosts();