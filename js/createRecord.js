import { domSelection } from "./domSelection.js";
import { readRecordFetching } from "./readRecord.js";
import { BASE_URL, postOptions } from "./apiInfo.js";

const domSelector = new domSelection();

export const createRecord = () => {
  domSelector.formForCreate.addEventListener("submit", (e) => {
    e.preventDefault();

    let createStatus = document.querySelector('input[name="cStatus"]:checked');
    let raw = JSON.stringify({
      name: domSelector.createName.value,
      email: domSelector.createEmail.value,
      gender: domSelector.createGender.value,
      status: createStatus.value,
    });
    postOptions.body = raw;

    createRecordFetching();

    domSelector.createName.value = "";
    domSelector.createEmail.value = "";
    domSelector.createGender.value = "";
    createStatus.checked = false;
  });
};

const createRecordFetching = () => {
  fetch(BASE_URL + "public/v2/users/", postOptions)
    .then((response) => response.json())
    .then((result) => {
      readRecordFetching();
    })
    .catch((error) => console.log("error", error));
};
