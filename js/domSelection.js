export class domSelection {
  constructor() {
    this.preLoader = document.querySelector(".preloader");
    this.tableBody = document.getElementById("parentNode");
    this.formForCreate = document.getElementById("createForm");
    this.createName = document.getElementById("cName");
    this.createEmail = document.getElementById("cEmail");
    this.createGender = document.getElementById("cGender");
    this.formForEdit = document.getElementById("editForm");
    this.editName = document.getElementById("eName");
    this.editEmail = document.getElementById("eEmail");
    this.editGender = document.getElementById("eGender");
    this.deleteButton = document.getElementById("deleteData");
    // this.formForCreate = document.getElementById("createForm");
  }
}
