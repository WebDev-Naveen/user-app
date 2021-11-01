import userApi from "../../api/userApi";

export async function getUser({ method, param }) {
  const response = await userApi(param, {
    method,
  }).catch((err) => console.log(err));
  return response;
}
