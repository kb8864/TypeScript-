"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pref1 = '北海道';
const pref2 = '青森県';
const pref3 = '岩手県';
const pref4 = '宮城県';
const pref5 = '秋田県';
const pref6 = '山形県';
const pref7 = '福島県';
const pref8 = '茨城県';
const pref9 = '栃木県';
const pref10 = '群馬県';
const pref11 = '埼玉県';
const pref12 = '千葉県';
const pref13 = '東京都';
const pref14 = '神奈川県';
const pref15 = '新潟県';
const pref16 = '富山県';
const pref17 = '石川県';
const pref18 = '福井県';
const pref19 = '山梨県';
const pref20 = '長野県';
const pref21 = '岐阜県';
const pref22 = '静岡県';
const pref23 = '愛知県';
const pref24 = '三重県';
const pref25 = '滋賀県';
const pref26 = '京都府';
const pref27 = '大阪府';
const pref28 = '兵庫県';
const pref29 = '奈良県';
const pref30 = '和歌山県';
const pref31 = '鳥取県';
const pref32 = '島根県';
const pref33 = '岡山県';
const pref34 = '広島県';
const pref35 = '山口県';
const pref36 = '徳島県';
const pref37 = '香川県';
const pref38 = '愛媛県';
const pref39 = '高知県';
const pref40 = '福岡県';
const pref41 = '佐賀県';
const pref42 = '長崎県';
const pref43 = '熊本県';
const pref44 = '大分県';
const pref45 = '宮崎県';
const pref46 = '鹿児島県';
const pref47 = '沖縄県';
const prefecture = [
    '北海道',
    '青森県',
    '岩手県',
    '宮城県',
    '秋田県',
    '山形県',
    '福島県',
    '茨城県',
    '栃木県',
    '群馬県',
    '埼玉県',
    '千葉県',
    '東京都',
    '神奈川県',
    '新潟県',
    '富山県',
    '石川県',
    '福井県',
    '山梨県',
    '長野県',
    '岐阜県',
    '静岡県',
    '愛知県',
    '三重県',
    '滋賀県',
    '京都府',
    '大阪府',
    '兵庫県',
    '奈良県',
    '和歌山県',
    '鳥取県',
    '島根県',
    '岡山県',
    '広島県',
    '山口県',
    '徳島県',
    '香川県',
    '愛媛県',
    '高知県',
    '福岡県',
    '佐賀県',
    '長崎県',
    '熊本県',
    '大分県',
    '宮崎県',
    '鹿児島県',
    '沖縄県',
];
//1都道府県の一覧表示
for (let i = 0; i < 47; i++) {
    console.log(prefecture[i]);
}
//2for of構文で配列を繰り返す
for (let name of prefecture) {
    console.log(name);
}
console.table(prefecture);
