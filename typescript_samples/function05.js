"use strict";
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
print_name(['田中', '鈴木', '高橋']);
