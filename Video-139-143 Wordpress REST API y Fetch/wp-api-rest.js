const d = document,
  $site = d.getElementById("site"),
  $posts = d.getElementById("posts"),
  $loader = d.querySelector("loader"),
  $template = d.getElementById("post-template").content,
  $fragment = d.createDocumentFragment(),
  DOMAIN = "https://malvestida.com",
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts`,
  PAGES = `${API_WP}/pages`,
  CATEGORIES = `${API_WP}/categories`;

function getSiteData() {
  fetch(SITE)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      $site.innerHTML = `
      <h3>Sitio Web</h3>
      <h2>
        <a href="${json.url}" target="_blank">${json.name} </a>
      </h2>
      <p> ${json.description} </p>
      <p> ${json.timezone_string} </p>
      `;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un problema";
      $site.innerHTML = `<p> Error ${err.status}: ${message} </p>`;
    });
}

function getPosts() {
  fetch(POSTS)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un problema";
      $posts.innerHTML = `<p> Error ${err.status}: ${message} </p>`;
      $loader.style.display = "none";
    });
}

d.addEventListener("DOMContentLoaded", (e) => {
  getSiteData();
  getPosts();
});
