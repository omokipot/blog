const xinput = document.getElementById("input28174");
const xform = document.getElementById("form38176");
const xdialogueUl = document.querySelector(".dialogue-ul");
const xinput_label = document.querySelector("#input_label");

//  sortが[1, 10, 11, 2]となってしまう問題を解決した。
//  Omoki, 2023-12-02
const collection = () => {
  Object.keys(localStorage).sort((a, b) => a - b).map((value) => {
    const xlocalStorageGet1 = window.localStorage.getItem(value);
    const xjson = JSON.parse(xlocalStorageGet1);
    if (xjson.value === undefined) {
    } else {
      //  +=で既存の要素を変更せずに追加できる。
      //  Omoki, 2023-12-02
      xdialogueUl.innerHTML += `<li class="dialogue">${xjson.value}</li>`;
    }
  });
};

collection();

let liElements = document.querySelectorAll(".dialogue");
let liCount = liElements.length;

const f_change_input_label = () => {
  if ((liCount % 2) == 1) {
    xinput_label.style.color = "blue";
    xinput_label.textContent = "A";
  } else if ((liCount % 2) == 0) {
    xinput_label.style.color = "red";
    xinput_label.textContent = "?";
  }
};

f_change_input_label();

const f_getTextFieldInfo = () => {
  event.preventDefault();
  if (xinput.value) {
    const xv1 = {
      value: xinput.value,
    };

    xvalue = JSON.stringify(xv1);
    liElements = document.getElementsByClassName("dialogue");
    liCount = liElements.length;
    window.localStorage.setItem(liCount, xvalue);
    window.location.reload();
  } else {
    alert("すべての項目を入力してね！");
  }
};

xform.addEventListener("submit", () => {
  f_getTextFieldInfo();
});

const nodes = document.querySelectorAll(".dialogue");
const lastDialogueNode = nodes[nodes.length - 1];
const xclearBtn = document.querySelector("#clear_btn");
const xallClearBtn = document.querySelector("#all_clear_btn");

xallClearBtn.addEventListener("click", () => {
  window.localStorage.clear();
  xdialogueUl.innerHTML =
    ` <li class="dialogue">何について話し合いますか？</li> `;
  liElements = document.getElementsByClassName("dialogue");
  liCount = liElements.length;
  f_change_input_label();
});
xclearBtn.addEventListener(
  "click",
  () => {
    window.localStorage.removeItem(liCount - 1);
    xdialogueUl.innerHTML =
      ` <li class="dialogue">何について話し合いますか？</li> `;
    collection();
    liElements = document.getElementsByClassName("dialogue");
    liCount = liElements.length;
    f_change_input_label();
  },
);
