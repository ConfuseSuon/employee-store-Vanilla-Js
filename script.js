// // Create form data and upload it
// let createForm = document.getElementById("createForm");
// let cName = document.getElementById("cName");
// let cEmail = document.getElementById("cEmail");
// let cGender = document.getElementById("cGender");
// let cStatus;

// createForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   cStatus = document.querySelector('input[name="cStatus"]:checked');

//   var myHeaders = new Headers();
//   myHeaders.append(
//     "Authorization",
//     "Bearer 4ac51992bca8dbafd57a5cfc6d22aae0f76081e387ec5ed9e783cd73b2abe683"
//   );
//   myHeaders.append("Content-Type", "application/json");
//   var raw = JSON.stringify({
//     name: cName.value,
//     email: cEmail.value,
//     gender: cGender.value,
//     status: cStatus.value,
//   });

//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };

//   fetch("https://gorest.co.in/public/v2/users/", requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       console.log(result);
//       getData();
//     })
//     .catch((error) => console.log("error", error));

//   cName.value = "";
//   cEmail.value = "";
//   cGender.value = "";
//   cStatus.checked = false;
// });

// // Edit form data

// let eName = document.getElementById("eName");
// let eEmail = document.getElementById("eEmail");
// let eGender = document.getElementById("eGender");
// let editForm = document.getElementById("editForm");

// function editUser(id) {
//   // send particular data to form
//   const options = {
//     method: "GET",
//     headers: {
//       Authorization:
//         "Bearer 4ac51992bca8dbafd57a5cfc6d22aae0f76081e387ec5ed9e783cd73b2abe683",
//     },
//   };

//   fetch("https://gorest.co.in/public/v2/users/" + id, options)
//     .then((response) => response.json())
//     .then((result) => {
//       console.log(result);
//       eName.value = result.name;
//       eEmail.value = result.email;
//       eGender.value = result.gender;
//       if (result.status === "active") {
//         document.getElementById("eradio1").checked = true;
//       } else {
//         document.getElementById("eradio2").checked = true;
//       }
//     })
//     .catch((err) => console.error(err));

//   editForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let eStatus = document.querySelector('input[name="eStatus"]:checked');

//     var myHeaders = new Headers();
//     myHeaders.append(
//       "Authorization",
//       "Bearer 4ac51992bca8dbafd57a5cfc6d22aae0f76081e387ec5ed9e783cd73b2abe683"
//     );
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//       name: eName.value,
//       email: eEmail.value,
//       gender: eGender.value,
//       status: eStatus.value,
//     });

//     var requestOptions = {
//       method: "PATCH",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     fetch("https://gorest.co.in/public/v2/users/" + id, requestOptions)
//       .then((response) => response.text())
//       .then((result) => {
//         console.log(result);
//         eName.value = "";
//         eEmail.value = "";
//         eGender.value = "";
//         eStatus.checked = false;
//         getData();
//       })
//       .catch((error) => console.log("error", error));
//   });
// }

// // delete form data
// function deleteUser(id) {
//   let deleteData = document.getElementById("deleteData");
//   deleteData.addEventListener("click", (e) => {
//     e.preventDefault();
//     var myHeaders = new Headers();
//     myHeaders.append(
//       "Authorization",
//       "Bearer 4ac51992bca8dbafd57a5cfc6d22aae0f76081e387ec5ed9e783cd73b2abe683"
//     );

//     var requestOptions = {
//       method: "DELETE",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     fetch("https://gorest.co.in/public/v2/users/" + id, requestOptions)
//       .then((response) => response.text())
//       .then((result) => {
//         console.log(result);
//         getData();
//       })
//       .catch((error) => console.log("error", error));
//   });
// }

// // Get data
// const getData = () => {
//   let tableBody = document.getElementById("parentNode");
//   var myHeaders = new Headers();
//   myHeaders.append(
//     "Authorization",
//     "Bearer 4ac51992bca8dbafd57a5cfc6d22aae0f76081e387ec5ed9e783cd73b2abe683"
//   );
//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch("https://gorest.co.in/public/v2/users", requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       let tempData = "";
//       data.forEach((element) => {
//         let { id, name, email, gender, status } = element;
//         tempData += `<tr><td id = "ff">${id}</td>
//         <td>${name}</td>
//         <td>${email}</td>
//         <td>${gender}</td>
//         <td>${status}</td>
//         <td>
//           <a href="#editEmployeeModal" class="edit" onclick="editUser(${id})  " data-toggle="modal"
//             ><i
//               class=" f material-icons"
//               data-toggle="tooltip"
//               title="Edit"
//               >&#xE254;</i
//             ></a
//           >
//           <a
//             href="#deleteEmployeeModal"
//             class="delete"
//             data-toggle="modal"
//             onclick="deleteUser(${id})" ><i
//               class="material-icons"
//               data-toggle="tooltip"
//               title="Delete"
//               >&#xE872;</i
//             ></a
//           >
//         </td> </tr>`;
//         tableBody.innerHTML = tempData;
//       });
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
// };
// getData();
