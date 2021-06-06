itemsArr = document.cookie.split('=')
itemsCookie = itemsArr[1]

if (itemsCookie != 0) {
    document.getElementById('badge').innerHTML = itemsCookie
}