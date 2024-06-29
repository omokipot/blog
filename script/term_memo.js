const xtermMemoPrefix = "term_memo_";
const xterm = document.getElementById("term51505");
const xmeaning = document.getElementById("meaning84854");
const xexample = document.getElementById("example50749");
const xformTerm = document.getElementById("form96221");
const xformPage = document.getElementById("form32453");
const xradioPages = document.querySelectorAll('input[name="radioPages"]');
const xpageName = document.getElementById("page33282");
const xselect_pages = document.getElementById("select_pages50323");

let xselectedValue;
let xcurrentPage;
let xnewNodeDl;

const f_clearContent = (Node) => {
  Node.value = "";
};

const f_updateTerm = () => {
  xselectedValue =
    document.querySelector('input[name="radioPages"]:checked').value;
  xcurrentPage = xtermMemoPrefix + xselectedValue + "_";

  if (xnewNodeDl) {
    xnewNodeDl.parentNode.removeChild(xnewNodeDl);
  }

  xnewNodeDl = document.createElement("dl");
  document.querySelector("#wrapper25558").insertAdjacentElement(
    "beforeend",
    xnewNodeDl,
  );

  for (xkey in localStorage) {
    if (
      localStorage.hasOwnProperty(xkey) && xkey.indexOf(xcurrentPage) !== -1
    ) {
      let xlocalStorageGet1 = window.localStorage.getItem(xkey);
      let xjson = JSON.parse(xlocalStorageGet1);

      // <dl>
      // <dt>term</dt>
      // <dd>meaning</dd>
      // <dd>example</dd>
      // </dl>

      const xnewNodeTerm = document.createElement("dt");
      let xtext = xkey.replace(xcurrentPage, "");
      xnewNodeTerm.appendChild(document.createTextNode(xtext));
      xnewNodeDl.insertAdjacentElement("beforeend", xnewNodeTerm);
      const xnewNodeMeaning = document.createElement("dd");
      xnewNodeMeaning.appendChild(document.createTextNode(xjson.meaning));
      xnewNodeDl.insertAdjacentElement("beforeend", xnewNodeMeaning);
      const xnewNodeExample = document.createElement("dd");
      xnewNodeExample.appendChild(document.createTextNode(xjson.example));
      xnewNodeDl.insertAdjacentElement("beforeend", xnewNodeExample);
    }
  }
};

Array.from(xradioPages).forEach(
  (x) => {
    x.addEventListener("input", f_updateTerm, false);
  },
);

f_updateTerm();

const f_updateTerm2 = () => {
  xselectedValue =
    document.querySelector('input[name="radioPages"]:checked').value;
  xcurrentPage = xtermMemoPrefix + xselectedValue + "_";

  if (xnewNodeDl) {
    xnewNodeDl.parentNode.removeChild(xnewNodeDl);
  }

  xnewNodeDl = document.createElement("dl");
  document.querySelector("#wrapper25558").insertAdjacentElement(
    "beforeend",
    xnewNodeDl,
  );

  for (xkey in localStorage) {
    if (
      localStorage.hasOwnProperty(xkey) && xkey.indexOf(xcurrentPage) !== -1
    ) {
      let xlocalStorageGet1 = window.localStorage.getItem(xkey);
      let xjson = JSON.parse(xlocalStorageGet1);

// example:
// <div id="testing">
// <div id="left">
// <p>term</p>
// <p>meaning</p>
// </div>
// <div id="right">
// <p>example</p>
// <p>something</p>
// </div>
// </div>

      const xnewNodeTerm = document.createElement("dt");
      let xtext = xkey.replace(xcurrentPage, "");
      xnewNodeTerm.appendChild(document.createTextNode(xtext));
      xnewNodeDl.insertAdjacentElement("beforeend", xnewNodeTerm);
      const xnewNodeMeaning = document.createElement("dd");
      xnewNodeMeaning.appendChild(document.createTextNode(xjson.meaning));
      xnewNodeDl.insertAdjacentElement("beforeend", xnewNodeMeaning);
      const xnewNodeExample = document.createElement("dd");
      xnewNodeExample.appendChild(document.createTextNode(xjson.example));
      xnewNodeDl.insertAdjacentElement("beforeend", xnewNodeExample);
    }
  }
};

const f_registerTerm = () => {
  event.preventDefault();
  if (xterm.value && xmeaning.value && xexample.value) {
    // key: term
    // value: { meaning: a, example: b }
    const xv1 = {
      "meaning": xmeaning.value,
      "example": xexample.value,
    };
    xvalue = JSON.stringify(xv1);
    window.localStorage.setItem(xcurrentPage + xterm.value, xvalue);
    f_updateTerm();
    [xterm, xmeaning, xexample].forEach(f_clearContent);
  } else {
    alert("すべての項目を入力してね！");
  }
};

xformTerm.addEventListener("submit", () => {
  // event.preventDefault();
  f_registerTerm();
});

const f_createPage = (Value) => {
  if (Value) {
    // ><input type="radio" name="radioPages" value="Page">Page</
    const xpageLabelNode = document.createElement("label");
    const xpageInputNode = document.createElement("input");
    xselect_pages.insertAdjacentElement("beforeend", xpageLabelNode);
    xpageLabelNode.insertAdjacentElement("beforeend", xpageInputNode);
    xpageInputNode.type = "radio";
    xpageInputNode.name = "radioPages";
    xpageInputNode.value = Value;
    xpageLabelNode.appendChild(document.createTextNode(Value));
    let xp1 = xtermMemoPrefix + "radioPages_" + Value;
    window.localStorage.setItem(xp1, Value);
    xpageInputNode.addEventListener("input", f_updateTerm, false);
  } else {
    alert("ページ名を入力してね！");
  }
};

xformPage.addEventListener("submit", () => {
  event.preventDefault();
  f_createPage(xpageName.value);
  f_clearContent(xpageName);
});

// key: xnewPage
// value: pageName
for (xkey in localStorage) {
  if (
    localStorage.hasOwnProperty(xkey) &&
    xkey.indexOf(xtermMemoPrefix + "radioPages_") !== -1
  ) {
    let xlocalStorageGet1 = window.localStorage.getItem(xkey);
    f_createPage(xlocalStorageGet1);
  }
}

const f_removePages = () => {
  for (xkey in localStorage) {
    if (
      localStorage.hasOwnProperty(xkey) &&
      xkey.indexOf(xtermMemoPrefix + "radioPages_") !== -1
    ) {
      window.localStorage.removeItem(xkey);
    }
  }
  window.location.reload();
};

const f_removeTerms = () => {
  for (xkey in localStorage) {
    if (
      localStorage.hasOwnProperty(xkey) &&
      xkey.indexOf(xtermMemoPrefix) !== -1
    ) {
      window.localStorage.removeItem(xkey);
    }
  }
  window.location.reload();
};

const xbtn1 = document.getElementById("btn90415");

xbtn1.addEventListener("dblclick", f_removePages);

const xbtn2 = document.getElementById("btn20643");

xbtn2.addEventListener("dblclick", f_removeTerms);
