// Синтаксис простого GET-запроса с конвернтацией ответа сразу в объект/массив
$.ajax({
    url: "http://danit.com.ua/dragons-list-json",
    dataType: "json", // Если указать dataType: json, полученные даные сразу пройдут процедуру JSON.parse()
    success: function(data) { // функция, срабатывающая при успешной отправки и получении ответа
        console.log(data);
    },
    error: function(data) { // функция, срабатывающая при ошибке - например, при отсутствии интернет-соединения
        console.log(data)
    }
});