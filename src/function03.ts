// 関数シグネチャ部分

function print_name(name: string): void;
function print_name(name: string[]): void;

//実装部分
function print_name(name: string | string[]): void{
    if(typeof name === 'string'){
        console.log(name + 'さん')
    }else {
        for (let n of name){
            console.log(n + 'さん')
        }
    }

}

print_name('田中');
print_name(['佐藤', '小林', '高山']);