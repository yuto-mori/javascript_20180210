let d = new Date();
const PORT = 8888;

let fs = require('fs');
let path = require('path');
let http = require('http');
let monthsAndYears = require('./months_and_years.json');
let server = http.createServer();

console.log(monthsAndYears.now_year);

server.on('request', (request, response) => {
    // 開くファイルのパスを生成
    let pathString = path.join(__dirname, 'index.html');

    // パスの指定に従ってファイルを開く
    // 第一引数がファイルのパス、第二引数は文字コード、
    // 第三引数がファイルを開いた後に呼ばれるコールバック関数
    let html = fs.readFile(pathString, 'utf-8', (error, data) => {
        if(error){
            // エラーが起こった場合はレスポンスヘッダに 404 ステータスを
            // 設定し、プレーンなテキストとしてファイルが存在しないことを示す
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write('404: not Found');
            response.end();
            return;
        }

        let source = `${data} <dl><dt>今年：</dt><dd>${ d[monthsAndYears.now_year]()}年</dd></dl><dl><dt>今月：</dt><dd>${d[monthsAndYears.now_month]()}月</dd></dl>`

        // 無事にファイルを開くことができた場合は 200 ステータスを設定し
        // ファイルの中身の HTML を返す
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(source);
        response.end();
    });
});

server.listen(PORT);
console.log('server running!');
console.log('http://localhost:' + PORT);


