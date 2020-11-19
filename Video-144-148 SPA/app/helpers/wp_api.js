const NAME = "malvestida",
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts?_embed`,
  POST = `${API_WP}/posts`,
  CATEGORIES = `${API_WP}/categories`,
  SEARCH = `${API_WP}/search?_embed&search=`;

// Como el nombre del parametro es igual al nombre del valor se puede simplificar name: NAME a solamente NAME.
export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  POSTS,
  POST,
  CATEGORIES,
  SEARCH,
};
