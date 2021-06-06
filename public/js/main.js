itemsArr = document.cookie.split('=')
itemsCookie = itemsArr[1]

if (itemsCookie != 0 && itemsCookie != undefined) {
    document.getElementById('badge').innerHTML = itemsCookie
}