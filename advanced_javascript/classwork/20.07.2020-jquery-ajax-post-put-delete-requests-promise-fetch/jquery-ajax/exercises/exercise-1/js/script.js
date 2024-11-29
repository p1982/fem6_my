/*
Отправьте AJAX-запрос с помощью JQuery на адрес "http://danit.com.ua/free-towns-list-json". 
Ответ должен быть в виде массива строк. Пример: ["Браавос", "Волантис", "Квохор", "Лис", "Лорат", "Мир", "Норвос", "Пентос", "Тирош"]ж

Используя полученный ответ в формате JSON, выведите внутри ul с id="free-towns" список всех Вольных городов Эссоса
*/

$.ajax({
    url : "http://danit.com.ua/free-towns-list-json",
    dataType : "JSON",
    method: "GET",
    success (data){
       const townList = data.map(el => `<li>${el}</li>`).join("");
       console.log(townList) 
       $("#free-towns").html(townList);
    }
})
