const num1: number = 7;
const num2: number = 3;
const text1: string = 'Hello, ';
const text2: string = 'World!';

// 足し算を行う関数
function addNumbers(a: number, b: number): number {
  return a + b;
}

// 文字列を連結する関数
function concatenateStrings(str1: string, str2: string): string {
  return str1 + str2;
}

const sum = addNumbers(num1, num2);
console.log(`足し算の式： ${num1} + ${num2} = ${sum}`);

const concatenatedString = concatenateStrings(text1, text2);
console.log(`文字列の連携: "${concatenatedString}"`);
