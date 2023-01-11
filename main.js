const eL = document.querySelectorAll('.form-control')
const btn = document.querySelectorAll('.btn')


function start() {
    btn[0].addEventListener('click', function () {
        alert(eL[0].value)
    })

    btn[1].addEventListener('click', function () {
        confirm(eL[1].value)
    })

    btn[2].addEventListener('click', function () {
        console.log(eL[2].value)
        console.warn(eL[2].value)
        console.error(eL[2].value)
    })

    btn[3].addEventListener('click', function () {
        alert(`Giá trị vừa nhập: ${prompt(eL[3].value)}`)
    })

    btn[4].addEventListener('click', function () {
        setTimeout(function () {
            alert(` Giá trị vừa nhập: ${eL[4].value}
            > Thông báo này được thực hiện sau khi chờ 2 giây!`)
        }, 2000)
    })

    btn[5].addEventListener('click', function () {
        setInterval(function () {
            alert(` Giá trị vừa nhập: ${eL[5].value}
            > Thông báo này được thực hiện sau khi chờ 2 giây và thực hiện liên tục !
            > Reload lại trang để dừng!`)
        }, 2000)
    })

    btn[6].addEventListener('click', function () {
        alert(`Chuỗi vừa nhập có [${eL[6].value.length}] ký tự!`)
    })

    btn[7].addEventListener('click', function () {
        var newArr = eL[7].value.trim().split(',')
        alert(`Mảng vừa nhập có [${newArr.length}] phần tử!`)
    })

    btn[8].addEventListener('click', function () {
        var newNumber = eL[8].value.indexOf(`${eL[9].value}`, eL[10].value)
        if (newNumber >= 0) {
            alert(`Ký tự vừa nhập ở vị trí [${newNumber}] của chuỗi!`)
        } else {
            alert('Không tìm thấy ký tự vừa nhập trong chuỗi!')
        }
    })

    btn[9].addEventListener('click', function () {
        var newString = eL[11].value.slice(eL[12].value, eL[13].value)
        if (newString != '') {
            alert(newString)
        } else {
            alert('Vui lòng kiểm tra lại!')
        }
    })

    btn[10].addEventListener('click', function () {
        var newString = eL[14].value.replace(eL[15].value, eL[16].value)
        alert(newString)
    })

    btn[11].addEventListener('click', function () {
        var newString = eL[17].value.toUpperCase()
        alert(newString)
    })

    btn[12].addEventListener('click', function () {
        var newString = eL[18].value.toLowerCase()
        alert(newString)
    })

    btn[13].addEventListener('click', function () {
        var newString = eL[19].value.trim()
        alert(`            > Độ dài chuỗi vừa nhập: ${eL[19].value.length}
            > Sau khi bỏ khoảng trắng: ${newString.length}`)
    })

    btn[14].addEventListener('click', function () {
        var newString = eL[20].value.split('')
        alert(`Mảng : [${newString}]`)
    })

    btn[15].addEventListener('click', function () {
        var newChar = eL[21].value.charAt(eL[22].value)
        if (newChar != '') {
            alert(`Ký tự tại vị trí [${eL[22].value}] là:  ${newChar}`)
        } else {
            alert('Vui lòng kiểm tra lại!')
        }
    })

    btn[16].addEventListener('click', function () {
        var newNumber = Number(eL[23].value).toFixed(2)
        alert(newNumber)
    })

    btn[17].addEventListener('click', function () {
        var newString = Number(eL[24].value).toString()
        alert(`Chuỗi : '${newString}'`)
    })

    btn[18].addEventListener('click', function () {
        var newString = eL[25].value.trim().split(',').toString()
        alert(`Mảng vừa nhập : [${eL[25].value.trim().split(',')}]
Chuyển thành chuỗi : ${newString}`)
    })

    btn[19].addEventListener('click', function () {
        var newString = eL[26].value.trim().split(',').join(`${eL[27].value}`)
        alert(`Mảng vừa nhập : [${eL[26].value.trim().split(',')}]
Sau khi nối : ${newString}`)
    })

    btn[20].addEventListener('click', function () {
        var arr = eL[28].value.trim().split(',')
        var newEl = arr.pop()
        alert(`> Mảng vừa nhập : [${eL[28].value.trim().split(',')}]
> Sau khi xóa phần tử cuối cùng của mảng : [${arr}]
> Hàm pop() trả về phần tử đã xóa là: ${newEl}`)
    })

    btn[21].addEventListener('click', function () {
        var arr = eL[29].value.trim().split(',')
        var newEl = arr.shift()
        alert(`> Mảng vừa nhập : [${eL[29].value.trim().split(',')}]
> Sau khi xóa phần tử đầu tiên của mảng : [${arr}]
> Hàm shift() trả về phần tử đã xóa là: ${newEl}`)
    })

    btn[22].addEventListener('click', function () {
        var myArr = eL[30].value.trim().split(',')
        var pushItem = eL[31].value.trim().split(',')
        pushItem.forEach(function (item) {
            myArr.push(item)
        })
        alert(`> Mảng vừa nhập : [${eL[30].value.trim().split(',')}]
> Sau khi push thêm phần tử : [${myArr}]
> Độ dài mảng mới: ${myArr.length}`)
    })

    btn[23].addEventListener('click', function () {
        var myArr = eL[32].value.trim().split(',')
        var pushItem = eL[33].value.trim().split(',')
        pushItem.forEach(function (item) {
            myArr.unshift(item)
        })
        alert(`> Mảng vừa nhập : [${eL[32].value.trim().split(',')}]
> Sau khi unshift thêm phần tử : [${myArr}]
> Độ dài mảng mới: ${myArr.length}`)
    })

    btn[24].addEventListener('click', function () {
        var myArr = eL[34].value.trim().split(',')
        var pushItem = eL[37].value.trim().split(',')
        myArr.splice(Number(eL[35].value), Number(eL[36].value), ...pushItem)
        alert(`> Mảng vừa nhập : [${eL[34].value.trim().split(',')}]
> Từ vị trí index [${Number(eL[35].value)}], xóa đi ${Number(eL[36].value)} phần tử, và thêm ${pushItem.length} phần tử [${pushItem}] vào mảng ta được kết quả: [${myArr}]
> Độ dài mảng mới: ${myArr.length}`)
    })

    btn[25].addEventListener('click', function () {
        var myArr = eL[38].value.trim().split(',')
        var newArr = myArr.slice(Number(eL[39].value), Number(eL[40].value))
        alert(`> Mảng vừa nhập : [${eL[38].value.trim().split(',')}]
> Từ vị trí index [${Number(eL[39].value)}] cắt tới vị trí index [${Number(eL[40].value)}] ta được kết quả: [${newArr}]
> Độ dài mảng mới: ${newArr.length}`)
    })

    btn[26].addEventListener('click', function () {
        var arr1 = eL[41].value.trim().split(',')
        var arr2 = eL[42].value.trim().split(',')
        var arr = arr1.concat(arr2)
        alert(`> Mảng M1 : [${eL[41].value.trim().split(',')}]
> Mảng M2 : [${eL[42].value.trim().split(',')}]
> Sau khi nối M2 vào M1: [${arr}]`)
    })

    btn[27].addEventListener('click', function () {
        var myArr = eL[43].value.trim().split(',')
        myArr.forEach(function (item, index) {
            alert(`> Mảng vừa nhập : [${eL[43].value.trim().split(',')}]
> Lặp qua từng phần tử : [Index: ${index}, Giá trị: ${item}]`)
        })
    })

    btn[28].addEventListener('click', function () {
        var myArr = eL[44].value.trim().split(',')
        var flag = myArr.every(function (item, index) {
            return  item > 0
        })
        alert(flag)
    })

    btn[29].addEventListener('click', function () {
        var myArr = eL[44].value.trim().split(',')
        var flag = myArr.every(function (item, index) {
            return  item > 1
        })
        alert(flag)
    })

    btn[30].addEventListener('click', function () {
        var myArr = eL[47].value.trim().split(',')
        var flag = myArr.some(function (item, index) {
            return  item < 0
        })
        alert(flag)
    })

    btn[31].addEventListener('click', function () {
        var myArr = eL[47].value.trim().split(',')
        var flag = myArr.some(function (item, index) {
            return  item = 1
        })
        alert(flag)
    })

    btn[32].addEventListener('click', function () {
        var myArr = eL[50].value.trim().split(',')
        var flag = myArr.find(function (item, index) {
            return  item === eL[51].value.trim()
        })
        alert(flag)
    })

    btn[33].addEventListener('click', function () {
        var myArr = eL[52].value.trim().split(',')
        var flag = myArr.filter(function (item, index) {
            return  item === eL[53].value.trim()
        })
        alert(`[${flag}]`)
    })


}

start()

