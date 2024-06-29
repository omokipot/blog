const xp = document.createElement("p");
xp.style = "color:red;";
xp.appendChild(document.createTextNode("JavaScriptで動的につくりました"));
document.body.appendChild(xp);

const button69908 = document.getElementById("button69908");

const ff = (() => {
    let xol = document.createElement("ol");
    let xli = document.createElement("li");
    xli.appendChild(document.createTextNode("押したね！"));
    document.body.appendChild(xol);
    xol.appendChild(xli);
});

button69908 . addEventListener ("click", ff , false);
