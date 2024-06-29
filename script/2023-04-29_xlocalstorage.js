const xterm = document.getElementById("term67152");
const xmeaning = document.getElementById("meaning04227");
const xexample = document.getElementById("example44991");
const xform = document.getElementById("form25413");

const f_getTextFieldInfo = () => {
  event.preventDefault();
  if (xterm.value && xmeaning.value && xexample.value) {
    // key: term
    // value: { meaning: a, example: b }
    const xv1 = {
      "meaning": xmeaning.value,
      "example": xexample.value,
    };
    xvalue = JSON.stringify(xv1);
    window.localStorage.setItem(xterm.value, xvalue);
    window.location.reload();
  } else {
    alert("すべての項目を入力してね！");
  }
};

xform.addEventListener("submit", f_getTextFieldInfo);

for (xkey in localStorage) {
  if (localStorage.hasOwnProperty(xkey)) {
    const xlocalStorageGet1 = window.localStorage.getItem(xkey);
    const xjson = JSON.parse(xlocalStorageGet1);

    const xnewNodeDiv = document.createElement("div");
    xnewNodeDiv.style.border = "solid 1px gray";
    document.body.insertAdjacentElement("beforeend", xnewNodeDiv);

    const xnewNodeTerm = document.createElement("p");
    xnewNodeTerm.style.color = "red";
    xnewNodeTerm.appendChild(document.createTextNode(xkey));
    xnewNodeDiv.insertAdjacentElement("beforeend", xnewNodeTerm);
    const xnewNodeMeaning = document.createElement("p");
    xnewNodeMeaning.style.color = "yellow";
    xnewNodeMeaning.appendChild(document.createTextNode(xjson.meaning));
    xnewNodeDiv.insertAdjacentElement("beforeend", xnewNodeMeaning);
    const xnewNodeExample = document.createElement("p");
    xnewNodeExample.style.color = "blue";
    xnewNodeExample.appendChild(document.createTextNode(xjson.example));
    xnewNodeDiv.insertAdjacentElement("beforeend", xnewNodeExample);
  }
}
