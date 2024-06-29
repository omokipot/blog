const xinput = document.getElementById("input31760");
const xresult = document.getElementById("result39911");
const xtable = document.querySelector("#table72143");

let xobject = {
  "タイトル": "title",
  "著者": "author",
  "出版事項": "publisher",
  "出版年月日": "year",
  "資料種別": "図書",
  "索引": "index",
  "メモ": "memo",
  "件名": "subject",
  "ISBN": "isbn",
};

const f_makeJson = () => {
  let xarray = xinput.value.split("\n");

  xobject.タイトル = xarray[0];
  xobject.著者 = xarray[1];
  xobject.出版事項 = xarray[2];
  xobject.出版年月日 = xarray[3];
  xobject.索引 = xarray[4];
  xobject.メモ = xarray[5];
  xobject.件名 = xarray[6];
  xobject.ISBN = xarray[7];
};

const f_reflectInputToResult = () => {
  f_makeJson();
  let xjson = JSON.stringify(xobject);
  xresult.value = xjson;
};

const f_reflectInputToTable = () => {
  // <table> -->
  // <thead> -->
  // <tr><th>title</th> <th>author</th> <th>publisher</th> <th>year</th> <th>図書</th> <th>index</th> <th>memo</th> <th>subject</th> <th>isbn</th></tr> -->
  // </thead> -->
  // <tbody> -->
  // </tbody> -->
  // </table> -->

  let xtbody = document.querySelector("#table72143");

  f_makeJson();

  let xtableText = [
    xobject.タイトル,
    xobject.著者,
    xobject.出版事項,
    xobject.出版年月日,
    xobject.資料種別,
    xobject.索引,
    xobject.メモ,
    xobject.件名,
    xobject.ISBN,
  ];

  let xtr = document.createElement("tr");
  if (document.querySelector("#table72143")) {
    document.querySelector("#table72143").innerHTML = "";
  }

  const f_testing_makeNode = (Element) => {
    let xtd = document.createElement("td");
    xtd.appendChild(document.createTextNode(Element));
    xtr.insertAdjacentElement("beforeend", xtd);
  };

  xtableText.forEach(f_testing_makeNode);

  xtbody.insertAdjacentElement("beforeend", xtr);
};

xinput.addEventListener("input", f_reflectInputToResult);
xinput.addEventListener("input", f_reflectInputToTable);

// 初期状態
xresult.value = JSON.stringify(xobject);

// const f_testing = () => {
//   // testing
//   let xarray = [
//     "string",
//     123,
//     "日本語",
//   ];
//   let xtr = document.createElement("tr");

//   const f_testing_makeNode = (Element) => {
//     let xtd = document.createElement("td");
//     xtd.appendChild(document.createTextNode(Element));
//     xtr.insertAdjacentElement("beforeend", xtd);
//   };

//   xarray.forEach(f_testing_makeNode);

//   document.querySelector("#testing").insertAdjacentElement("beforeend", xtr);
// };

// f_testing();
