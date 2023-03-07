import { BASE_URL, deleteOptions } from "./apiInfo.js";
import { domSelection } from "./domSelection.js";
import { readRecordFetching } from "./readRecord.js";

const domSelector = new domSelection();

export const deleteRecord = (id) => {
  domSelector.deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(BASE_URL + "public/v2/users/" + id, deleteOptions)
      .then((response) => response.text())
      .then((result) => {
        readRecordFetching();
      })
      .catch((error) => console.log("error", error));
  });
};
