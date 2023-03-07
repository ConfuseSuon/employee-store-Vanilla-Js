import { BASE_URL, getOptions } from "./apiInfo.js";
import { domSelection } from "./domSelection.js";
const domSelector = new domSelection();

export const readRecordFetching = async () => {
  let apiResponse = await fetch(BASE_URL + "public/v2/users/", getOptions);
  let apiResult = await apiResponse.json();
  console.log(apiResult);
  readRecord(apiResult);
};

export const readRecord = (apiResult) => {
  let tableBody = domSelector.tableBody;
  let tempData = "";
  apiResult.map((element) => {
    let { id, name, email, gender, status } = element;
    tempData += `<tr><td id = "ff">${id}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${gender}</td>
    <td>${status}</td>
    <td>
      <a href="#editEmployeeModal" class="edit" onclick="displayingClickedRecordDetails(${id})" data-toggle="modal"
        ><i
          class=" f material-icons"
          data-toggle="tooltip"
          title="Edit"
          >&#xE254;</i
        ></a
      >
      <a
        href="#deleteEmployeeModal"
        class="delete"
        data-toggle="modal"
        onclick="deleteRecord(${id})" ><i
          class="material-icons"
          data-toggle="tooltip"
          title="Delete"
          >&#xE872;</i
        ></a
      >
    </td> </tr>`;
    tableBody.innerHTML = tempData;
  });
};
import { displayingClickedRecordDetails } from "./editRecord.js";
import { deleteRecord } from "./deleteRecord.js";
window.displayingClickedRecordDetails = displayingClickedRecordDetails;
window.deleteRecord = deleteRecord;
