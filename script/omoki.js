const xupdate = new Date(document.lastModified);
const xupdateYear = xupdate.getFullYear();
const xupdateMonth = xupdate.getMonth() + 1;
const xupdateDate = xupdate.getDate();
const xfullUpdate = [
  xupdateYear.toString(),
  xupdateMonth.toString().padStart(2, "0"),
  xupdateDate.toString().padStart(2, "0"),
].join("-");
