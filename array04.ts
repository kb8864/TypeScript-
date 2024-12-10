const area: { [key: string]: string[] } = {
  hokkaidou: ['北海道'],
  touhoku: ['青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
  kantou: [
    '茨城県',
    '栃木県',
    '群馬県',
    '埼玉県',
    '千葉県',
    '東京都',
    '神奈川県',
  ],
  cyuubu: [
    '新潟県',
    '富山県',
    '石川県',
    '福井県',
    '山梨県',
    '長野県',
    '岐阜県',
    '静岡県',
    '愛知県',
  ],
  kansai: [
    '三重県',
    '滋賀県',
    '京都府',
    '大阪府',
    '兵庫県',
    '奈良県',
    '和歌山県',
  ],
  cyuugoku: ['鳥取県', '島根県', '岡山県', '広島県', '山口県'],
  sikoku: ['徳島県', '香川県', '愛媛県', '高知県'],
  kyuusyuu: [
    '福岡県',
    '佐賀県',
    '長崎県',
    '熊本県',
    '大分県',
    '宮崎県',
    '鹿児島県',
    '沖縄県',
  ],
};
console.table(area);
// //2東北地方のみを出力（連想配列を、配列の要素として使う）
// for (let prefectre of area['touhoku']) {
//   console.log(prefectre);
// }
for (let areaname in area) {
  console.log(areaname);

  for (let prefectre of area[areaname]) {
    console.log('-' + prefectre);
  }
}
