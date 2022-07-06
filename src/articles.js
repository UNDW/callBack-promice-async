import * as serverApi from "./db.js";

export function all() {
  return serverApi.all().then((response) => {
    return parseInfo(response);
  });
}
export function get(id) {
  return serverApi.get(id).then((response) => {
    return parseInfo(response);
  });
}
export function remove(id) {
  return serverApi.remove(id).then((response) => {
    return parseInfo(response);
  });
}
function parseInfo(response) {
  let info = JSON.parse(response);
  return info.code === 200 ? info.data : info.status;
}
