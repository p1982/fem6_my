/*

Для авторизации отправьте POST-запрос на адрес "http://danit.com.ua/login", в качестве аргументов передайте
объект вида: 
{
    login: "Логин",
    password: "Пароль"
}
  данные нужно передавать в формате JSON.
  
  Если пользователь ввел правильный логин и пароль - нужно вывести под формой сообщение "Вы авторизированы!".
  Если неправильный - вывести сообщение "Логин или пароль неверные,  попробуйте еще раз".
  
  Тестовые правильные данные:
      login: Mandor
      password: Savall
  
  
    В случае успешного ответа вы получите объект с полем status, равным "Success".
  В случае неуспешного ответа - с полем status, равным "Error".
  
  
  */

  $('#login-form').submit(function(e) {
      e.preventDefault();
      const login = $(this).find('#login').val();
      const password = $(this).find('#password').val();
    const request = new XMLHttpRequest();
    request.open('post', 'http://danit.com.ua/login');
    request.responseType = 'JSON';
    const body = JSON.stringify({
      login, password 
    });
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(body);
    request.onload = () => {
      if(request.status >= 300) {
        console.log('Error', request.statusText);
      } else if(request.response.status === 'Success') {
        $(this).after('<span>Success</span>')
      } else {
        $(this).after('<span>Не правильный логин и пароль</span>')
      }
    }
  });