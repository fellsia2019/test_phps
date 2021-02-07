// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// })




send.onclick = function(event) {
    // event.preventDefault();
    var name = document.getElementById('name').value,
        tel = document.getElementById('tel').value,
        item = document.getElementById('item').value,
        discr = document.getElementById('discr').value;

    document.getElementById('test').innerHTML=`
        Ваше имя: <b>${name}</b>  
        <br>
        Ваш телефон: <b>${tel}</b>
        <br>
        Вы желаете купить: <b>${item}</b>
        <br>
        Доп описание к выборанному товару: <b>${discr}</b>
    `;
    
    var arr = {
        nameP: name,
        telP: tel,
        itemP: item,
        discrP: discr
    }
    
    for (var k in arr) {
        console.log(arr[k]);
    }
    
    // var JSON_arr = JSON.stringify(arr);
    // console.log(JSON.stringify(arr));


    // var a = document.createElement('a');
    // a.download = 'file_name.json';
    // var oUrl = URL.createObjectURL(new Blob([JSON.stringify(arr)], {type: 'application/octet-stream'}));
    // a.href = oUrl;
    // a.click();
    // delete a;
    // URL.revokeObjectURL(oUrl);
};


// for (var k in arr) {
//     console.log(k + arr + arr[k])
// }
// console.log(arr.ke)