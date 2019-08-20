export const BASE_URL = `${'http://localhost:9999'}/api`;

function getURL(path: string) {
  return `${BASE_URL}/${path.replace(/^\//, "")}`;
}

export const API_URL = {
  PAGE: getURL('/comments/page/:page'),
  COMMNET: getURL('/comments'),
  ADD_COMMNET: getURL('/comments'),
}
