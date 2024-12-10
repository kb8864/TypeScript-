const items: string = ['りんご', 'みかん', 'ブドウ'];
//1配列の要素の追加
items.push('洋梨');

//2表の一番前に値を入れる
items.unshift('ドリアン');
console.table(items);

//3内容の書き換え
items[2] = '変更された値';
console.table(items);

//4内容の削除
items.shift();
items.pop();
console.table(items);

//5配列の一部を取り出す(配列の1から3までを取ってくる)

console.log(items.slice(1, 3));
