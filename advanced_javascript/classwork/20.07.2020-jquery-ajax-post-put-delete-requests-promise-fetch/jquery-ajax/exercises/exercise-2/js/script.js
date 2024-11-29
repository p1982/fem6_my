/*
Напишите код, который работает так:
1. Пользователь вводит в форму количестве Великих домов, которые он хочет видеть, и
 нажимает на кнопку "Показать".
2. После чего отправляется GET запрос с параметром count=количествоДомов по адресу 
"http://danit.com.ua/westeros-great-houses-json".
Ответ должен быть в виде массива объектов вида: 
{
    "name": "Ланнистеры",
    "words": "Услышь мой рёв!",
    "head": "Тайвин Ланнистер",
    "heir": "Джейме Ланнистер",
    "place": "Утес Кастерли"
}

Используя полученный ответ, ведите внутри ul с id="greate-houses"
 список первых Великих домов Вестероса с данными о них: Глава, наследник, девиз,
  резиденция - в виде вложеного списка. Пример вывода:
<li>Ланнистеры:
    <ul>
        <li>Глава: Тайвин Ланнистер.</li>
        <li>Наследник: Джейме Ланнистер.</li>
        <li>Девиз: Услышь мой рёв!</li>
        <li>Резиденция: Утес Кастерли.</li>
    </ul>
</li>        
Используйте сокращенный синтаксис для GET-запросов
*/
$("#greate-house-count").on('submit',function(e){
    e.preventDefault();
    const countField = $(this).find('[name=count]');
    const count = $(countField).val();
    $.getJSON(`http://danit.com.ua/westeros-great-houses-json?count=${count}`, function(data) {
    const peoples = data.map(el => {
        const {name,head,heir,words,place} = el;
        const elem = `<li>${name}:
                        <ul>
                            <li>Глава: ${head}</li>
                            <li>Наследник: ${heir}.</li>
                            <li>Девиз: ${words}</li>
                            <li>Резиденция: ${place}.</li>
                        </ul>
                      </li>`;
        return elem;
    }).join('');
    $('#greate-houses').html(peoples);
    $(countField).val("");
}); 
} )
