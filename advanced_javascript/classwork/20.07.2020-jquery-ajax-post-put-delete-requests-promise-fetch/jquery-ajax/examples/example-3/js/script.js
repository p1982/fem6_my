// сокращенный синтаксис GET-запроса с помощью AJAX. 
$.get('http://danit.com.ua/dragons-list-json', "json", function(data) {
    console.log(data);
});

// еще более сокращенный синтаксис GET-запроса, когда вы точно знаете, что получите данные в формате JSON
$.getJSON('http://danit.com.ua/dragons-list-json', function(data) {
    console.log(data);
}); 