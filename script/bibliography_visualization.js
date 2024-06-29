// 表形式
// $(document).ready(function () {
//     $.getJSON("misc/bibliography.json", function(data){
//         for(var i in data){
//             $("#contents_table2").append(
// 		"<tr><td>" + data[i].タイトル + "</td>"
// 		    + "<td>" + data[i].出版年月日 + "</td>"
// 		    + "<td>" + data[i].ISBN + "</td></tr>");
//         }
//     });
// });

// ①　一番シンプルなデザイン
// $(document).ready(function () {
//     $.getJSON("misc/bibliography.json", function(data){
//         for(var i in data){
//             $("body").
// 		append("<section>" +
// 		       "<h2>" + data[i].タイトル + "（" + data[i].出版年月日 + "）" + "</h2>" +
// 		       "<ul>" + data[i].索引.
// 		       replace(/([^\n]+p. \d[^\n]+)/g, '<li>$1</li>') + "</ul>" +
// 		       "</section>");
//         }
//     });
// });

// ②　カードに近づけたデザイン
$(document).ready(function () {
    $.getJSON("misc/bibliography.json", function(data){
        for(var i in data){
            $("body").
		append("<section class=\"card close\">" +
		       "<details>" +
		       "<summary>" +
		       "<h2>" + data[i].タイトル + "（" + data[i].出版年月日 + "）" + "</h2>" +
		       "</summary>" +
		       "<ul>" + data[i].索引.
		       replace(/([^\n]+)(p. \d[^\n]+)/g, '<li>$1<span class=\"page\">$2</span></li>') + "</ul>" +
		       "</details>" +
		       "</section>");
        }
    });
});

setTimeout(function() {
    const card_close = document.querySelectorAll(".close");
    for (let i = 0; i < card_close.length; i++) {
	function xfunction () {
	    if (card_close[i].className === "card close") card_close[i].className = "card open";
	    else card_close[i].className = "card close";
	}

	card_close[i] . addEventListener ("click",
					  // () => (card_close[i].className = "card open"),
					  xfunction,
					  false);
	console.log(card_close);
    };
} , 500);

