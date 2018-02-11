
// require を使ってモジュールをインポート
// fs モジュールはファイルの入出力を行うモジュール
//外部ライブラリを参照する方法が、各JSファイルをモジュール化しておいて、使うときはrequire()で読み込むやりかた。
//参考 https://qiita.com/uryyyyyyy/items/b10b012703b5396ded5a
let fs = require('fs');

let d = new Date();
let f = formatDate(d);

// ファイルにフォーマット済み文字列を出力する
// 第一引数に出力するパス、第二引数に書き込む内容、
// 第三引数に処理終了後に呼ばれるコールバック関数を渡す
fs.writeFile('./out.txt', f, (error) => {//fs.writeFileメソッド 第一引数が対象となるファイルのパス、第二引数が出力する内容、第三引数に処理を行ったあとに呼ばれるコールバック関数
    if(error){
        // なんらかのエラーが起きている場合は例外をスロー
        //fs.writeFileはコールバックと言われる関数を用意する必要があるのですが、その関数でerrorという引数を受けることができます。
        //error には書き込みに問題が発生した時 エラーメッセージが入っています。書き込みが成功した時 内容はnull(空)です。
        throw error;
    }
    // エラーが起こらなかった場合は成功した旨をメッセージで出力
    console.log('output success!');
});

/**
 * Date 型のデータをフォーマットして返す
 * @param {Date} date - フォーマットする Date 型のデータ
 * @param {string} [delimiter='/'] - 年月日の区切り文字
 */
function formatDate(date, delimiter = '/'){
    let y = date.getFullYear();  // 四桁の年
    let m = date.getMonth() + 1; // 月（０始まり）
    let d = date.getDate();      // 日
    let h = date.getHours();     // 時
    let i = date.getMinutes();   // 分
    let s = date.getSeconds();   // 秒
    return y + delimiter + m + delimiter + d + ' ' + h + ':' + i + ':' + s;
}

