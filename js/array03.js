"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefecture = {
    hokkaidou: '北海道',
    aomoriken: '青森県',
    iwateken: '岩手県',
    miyagiken: '宮城県',
    akitaken: '秋田県',
    yamagataken: '山形県',
    fukushimaken: '福島県',
    ibaragiken: '茨城県',
    tochigiken: '栃木県',
    gunmaken: '群馬県',
    saitamaken: '埼玉県',
    chibaken: '千葉県',
    toukyouto: '東京都',
    kanagawaken: '神奈川県',
    niigataken: '新潟県',
    toyamaken: '富山県',
    ishikawaken: '石川県',
    fukuiken: '福井県',
    yamanashiken: '山梨県',
    naganoken: '長野県',
    gifuken: '岐阜県',
    shizuokaken: '静岡県',
    aichiken: '愛知県',
    mieken: '三重県',
    shigaken: '滋賀県',
    kyoutofu: '京都府',
    oosakafu: '大阪府',
    hyougoken: '兵庫県',
    naraken: '奈良県',
    wakayamaken: '和歌山県',
    tottoriken: '鳥取県',
    shimaneken: '島根県',
    okayamaken: '岡山県',
    hiroshimaken: '広島県',
    yamaguchiken: '山口県',
    tokushimaken: '徳島県',
    kagawaken: '香川県',
    ehimeken: '愛媛県',
    kochiken: '高知県',
    fukuokaken: '福岡県',
    sagaken: '佐賀県',
    nagasakiken: '長崎県',
    kumamotoken: '熊本県',
    oitaken: '大分県',
    miyazakiken: '宮崎県',
    kagoshimaken: '鹿児島県',
    okinawaken: '沖縄県',
};
console.log(prefecture['toukyouto']);
//キーの存在を確認
if ('chibaken' in prefecture) {
    console.log('千葉県は日本の県の一つです');
}
else {
    console.log('そんな県は存在しません');
}
