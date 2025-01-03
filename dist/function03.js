"use strict";
// 関数シグネチャ部分
//実装部分
function print_name(name) {
    if (typeof name === 'string') {
        console.log(name + 'さん');
    }
    else {
        for (let n of name) {
            console.log(n + 'さん');
        }
    }
}
print_name('田中');
print_name(['佐藤', '小林', '高山']);
