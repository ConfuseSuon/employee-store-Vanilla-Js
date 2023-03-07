import { domSelection } from "./domSelection.js";
import { readRecordFetching } from "./readRecord.js";
import { BASE_URL, getOptions, patchOptions } from "./apiInfo.js";
const domSelector = new domSelection();

// displaying the particular record which had been clicked
// by putting onClick event on edit button ;

export const displayingClickedRecordDetails = (id) => {
  fetch(BASE_URL + "public/v2/users/" + id, getOptions)
    .then((response) => response.json())
    .then((result) => {
      domSelector.editName.value = result.name;
      domSelector.editEmail.value = result.email;
      domSelector.editGender.value = result.gender;
      if (result.status === "active") {
        document.getElementById("eradio1").checked = true;
      } else {
        document.getElementById("eradio2").checked = true;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  let passingId = id;
  submitEditedRecord(passingId);
};

export const submitEditedRecord = (passingId) => {
  domSelector.formForEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    let editStatus = document.querySelector('input[name="eStatus"]:checked');
    var raw = JSON.stringify({
      name: domSelector.editName.value,
      email: domSelector.editEmail.value,
      gender: domSelector.editGender.value,
      status: editStatus.value,
    });
    patchOptions.body = raw;

    fetch(BASE_URL + "public/v2/users/" + passingId, patchOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        domSelector.editName.value = "";
        domSelector.editEmail.value = "";
        domSelector.editGender.value = "";
        editStatus.checked = false;
        readRecordFetching();
      })
      .catch((error) => console.log("error", error));
  });
};
