// © 2013, 2020 Xah Lee, http://xahlee.info/
// create a tooltip

{
    const output58494 = document.getElementById("output58494");
    const footnote58494 = document.getElementById("footnote58494");

    // change the sytle → output58494
    output58494.style.color = "blue";
    // create tooltip element
    const ttBox = document.createElement("div");

    // set style
    ttBox.id = "tooltip88493";
    ttBox.style.visibility = "hidden"; // make it hidden till mouse over
    ttBox.style.position = "fixed";
    ttBox.style.top = "15px";
    ttBox.style.left = "15px";
    ttBox.style.padding = "8px";
    ttBox.style.maxWidth = "70ex";
    ttBox.style.borderRadius = "16px";
    ttBox.style.border = "solid thin grey";
    ttBox.style.boxShadow = "3px 3px 9px grey";
    ttBox.style.backgroundColor = "cornsilk";
    ttBox.style.color = "maroon";
    ttBox.style.zIndex = "341";

    // insert into DOM
    document.body.appendChild(ttBox);

    const f_TurnOn = ((evt) => {
	// get the position of the hover element
	// const boundBox = evt.target.getBoundingClientRect();
	// const coordX = boundBox.left;
	// const coordY = boundBox.top;

	const xBoundBox = evt.target.getBoundingClientRect();
	const xPosL = xBoundBox.left;
	const xPosR = xBoundBox.right;
	const xPosT = xBoundBox.top;
	const xPosB = xBoundBox.bottom;
	const xViewPortWidth = document.documentElement.clientWidth;
	const xViewPortHeight = document.documentElement.clientHeight;
	ttBox.style.visibility = "visible";
	ttBox.style.top = (xPosB + 10).toString() + "px";
	ttBox.style.left =
	    ((xViewPortWidth - xPosL - 200 > 0) ? xPosL : xPosL - xViewPortWidth / 2).toString() + "px";

	// adjust bubble position
	// ttBox.style.left = (coordX + 40).toString() + "px";
	// ttBox.style.top = (coordY + 40).toString() + "px";

	// add bubble content. Can include image or link
	ttBox.innerHTML = footnote58494.innerHTML;
	// make bubble VISIBLE
	ttBox.style.visibility = "visible";
    });

    const f_TurnOff = (() => {
	ttBox.style.visibility = "hidden";
    });

    output58494.addEventListener("mouseover", f_TurnOn, false);
    output58494.addEventListener("mouseout", f_TurnOff, false);
    document.getElementById("tooltip88493").addEventListener(
	"click",
	f_TurnOff,
	false,
    );
}
