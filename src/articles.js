import * as serverApi from "./db.js";

export async function all() {
  const response = await serverApi.all();
  return parseInfo(response);
}
export async function get(id) {
  const response = await serverApi.get(id);
  return parseInfo(response);
}
export async function remove(id) {
  const response = await serverApi.remove(id);
  return parseInfo(response);
}
function parseInfo(response) {
  let info = JSON.parse(response);
  return info.code === 200 ? info.data : info.status;
}
