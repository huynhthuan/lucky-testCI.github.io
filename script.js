// Bài 1.1
// function findOppositeNumber(n, input) {
//     oppositeSpace = 0;
//     oppositeSpace = n / 2;
//     if (input < oppositeSpace) {
//         return input + oppositeSpace;
//     } else {
//         return input - oppositeSpace;
//     }
// }

// findOppositeNumber(12, 11);

// Bài 1.2
// function merge2String(str1, str2) {
//     let arr1 = str1.split('');
//     let arr2 = str2.split('');
//     let maxLeng = arr1.length > arr2.length ? arr1.length : arr2.length;
//     let syncStr = '';
//     for (let i = 0; i <= maxLeng; i++) {
//         syncStr += arr1[i] ? arr1[i] : '';
//         syncStr += arr2[i] ? arr2[i] : '';
//     }

//     return syncStr;
// }

// console.log(merge2String('abc', '123'));

// Bài 2
let numberSelect = 0;
let btnSpin = document.querySelector('#spin');

function randomNumberArr(start, end) {
    return Math.floor(Math.random() * end) + start;
}

btnSpin.onclick = () => {
    let numberSelect = document.querySelector('#numberSelect');
    let numberShow = document.querySelector('#number');
    let randomNumber = randomNumberArr(0, 10);
    numberShow.innerHTML = randomNumber;

    if (Number(numberSelect.value) !== randomNumber) {
        Swal.fire({
            title: 'Số may mắn là: ' + randomNumber + '<br> Vận khí chưa đủ, hãy tu luyện thêm :>',
            text: 'Còn thở là còn thử :( Chơi tiếp khônggggg!',
            icon: 'error',
            confirmButtonText: 'Chơi, sợ gì chứ :>',
        }).then(function (result) {
            numberSelect.value = 0;
            numberShow.innerHTML = '-----';
        });
    } else {
        Swal.fire({
            title: 'Chúc mừng bạn là người may mắn, bạn đã đoán đúng số rùii !',
            text: 'Phần thưởng là một tràng vỗ tay :> He he',
            icon: 'success',
            confirmButtonText: 'Tuyệt quá',
        }).then(function (result) {
            console.log(numberSelect);
            numberSelect.value = 0;
            numberShow.innerHTML = '-----';
        });
    }
};
