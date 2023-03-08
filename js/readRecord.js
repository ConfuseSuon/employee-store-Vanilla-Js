import { BASE_URL, getOptions } from "./apiInfo.js";
import { domSelection } from "./domSelection.js";
import { preLoader, stopPreLoader } from "./pageLoader.js";

const domSelector = new domSelection();

export const readRecordFetching = async () => {
  preLoader();
  let apiResponse = await fetch(BASE_URL + "public/v2/users/", getOptions);
  let apiResult = await apiResponse.json();
  console.log(apiResult);
  readRecord(apiResult);
  stopPreLoader();
};

export const readRecord = (apiResult) => {
  let tableBody = domSelector.tableBody;
  let tempData = "";
  apiResult.map((element) => {
    let { id, name, email, gender, status } = element;
    tempData += `<tr><td id = "ff">${id}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${
      gender == "male"
        ? '<i class="fa-solid fa-person"></i>'
        : '<i class="fa-sharp fa-solid fa-person-dress"></i>'
    }</td>
    <td>${
      status == "active"
        ? "<i class='bi bi-person-check'></i>"
        : '<i class="bi bi-person-x"></i>'
    }
   </td>
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
