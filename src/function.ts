//可変長パラメータ（関数に渡す引数の数が事前に決まっていない場合に使用）

function getRandomChar(...chars: string[]): string{
    const index = Math.floor(Math.random() * chars.length);
    return chars[index]

}
console.log(getRandomChar('1', 'a', 'A', 'B', 'C'));