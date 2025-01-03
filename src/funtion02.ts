//関数宣言の書き方
function add1(a: number, b: number): number{
    return a + b;
}

console.log(add1(1, 2));

//アロー関数の学習(基本的に1行で終わってしまう処理を書くときに使う)
const add2 = (a: number, b: number): number => a + b;

console.log(add2(3, 5));

