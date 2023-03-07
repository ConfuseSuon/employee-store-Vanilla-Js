export const BASE_URL = "https://gorest.co.in/";
const myHeaders = new Headers();

myHeaders.append(
  "Authorization",
  "Bearer 4ac51992bca8dbafd57a5cfc6d22aae0f76081e387ec5ed9e783cd73b2abe683"
);
myHeaders.append("Content-Type", "application/json");

export const getOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

export const postOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow",
};

export const patchOptions = {
  method: "PATCH",
  headers: myHeaders,
  redirect: "follow",
};
export const deleteOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow",
};
