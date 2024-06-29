let xinput = document.querySelector("#input63140");
let xresult = document.querySelector("#result67031");
let xnodeUl;

const f_toFullWidth = (value) => {
  if (typeof value !== "string") return value;

  return String(value).replace(/[!-~]/g, function (all) {
    return String.fromCharCode(all.charCodeAt(0) + 0xFEE0);
  });
};

const f_createCountInfo = () => {
  let xallCount = xinput.value.replace(/\n/g, "").length;
  let xarray = xinput.value.split("\n");

  if (xnodeUl) {
    xnodeUl.parentNode.removeChild(xnodeUl);
  }

  let x16divide = Math.ceil(xallCount / 400);

  xnodeUl = document.createElement("ul");
  xnodeUl.innerHTML = '<li>全文字数<span class="full-count">' + xallCount +
    "</span>" + "　原稿用紙（400字）" + x16divide + "枚目</li>";

  for (let i = 0; i < xarray.length; i++) {
    let xcount = xarray[i].length;
    let xnodeCountHighlight = document.createElement("span");
    xnodeCountHighlight.classList.add("count");
    xnodeCountHighlight.appendChild(document.createTextNode(xcount));
    let xparagraph = i + 1 + "段落目";
    xparagraph = f_toFullWidth(xparagraph);

    let xnodeLi = document.createElement("li");
    xnodeLi.style.marginRight = "1rem";

    xnodeLi.appendChild(
      document.createTextNode(xparagraph),
    );

    xnodeUl.insertAdjacentElement("beforeend", xnodeLi);
    xnodeLi.insertAdjacentElement("beforeend", xnodeCountHighlight);
  }
  xresult.insertAdjacentElement("beforeend", xnodeUl);
};

xinput.addEventListener("input", f_createCountInfo);

// 初期状態
f_createCountInfo();
