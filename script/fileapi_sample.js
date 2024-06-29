//Form要素を取得する
var form = document.forms.myform;

//ファイルが読み込まれた時の処理
form.myfile.addEventListener
('change',
 function(e) {
     var result = e.target.files[0];
     //FileReaderのインスタンスを作成する
     var reader = new FileReader();
     //読み込んだファイルの中身を取得する
     reader.readAsText( result );
     //ファイルの中身を取得後に処理を行う
     reader.addEventListener( 'load', function() {
	 //ファイルの中身をtextarea内に表示する
	 form.output.textContent = reader.result;
     });
 });

const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
      const blob = new Blob(['こんにちは'], { "type" : "text/plain" });

      btn.href = window.URL.createObjectURL(blob);
})
