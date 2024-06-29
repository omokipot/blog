md = window.markdownit();
let xcontent = document.querySelector( ".markdown" );
xinput = xcontent.innerHTML

document.querySelector( ".markdown" ).innerHTML = md.render(xinput)
