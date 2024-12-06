"use strict";
const area = {
    'hokkaido': ['北海道'],
    'tohoku': [
        '青森県',
        '岩手県',
        '宮城県',
        '秋田県',
        '山形県',
        '福島県'
    ]
};
for (let areaname in area) {
    console.log(areaname);
    for (let prefecture of area[areaname]) {
        console.log(" - " + prefecture);
    }
}
