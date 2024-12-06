function get_sum(score: number[]): number {
    // 合計点を求める
    let sum = 0;
    for (let i=0; i<score.length; i++) {
        sum += score[i];
    }

    return sum;
}

//function get_avarage(score: number[]): number {
//    return get_sum(score) / score.length;
//}
const get_avarage = (score: number[]): number => get_sum(score) / score.length;


const score: number[] = [];
for (let i=2; i<process.argv.length; i++) {
    score.push(Number(process.argv[i]));
}

console.table(score);

console.log("人数: " + score.length);
console.log("最高点: " + Math.max(...score));
console.log("最低点: " + Math.min(...score));
console.log("合計: " + get_sum(score));
console.log("平均: " + get_avarage(score));