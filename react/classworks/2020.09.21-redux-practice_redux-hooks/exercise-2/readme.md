### Авторизация на Redux

Возьмите решение из предыдущей задачи и дополните его таким функционалом:
- если в store пользователь не авторизирован, в компоненте `HomePage` 
вам  нужно выводить форму авторизации (Логин + Пароль + кнопка Вход), 
а в компоненте `NavbarUserProfile` просто кнопку Вход;
- после того, как пользователь введет свои данные в форму авторизации,
он видит приветствие как в exercise-1;
- при нажатии на кнопку "Вход" в компоненте `NavbarUserProfile` появляется  
всплывающее окно c формой авторизации. При успешной авторизации оно закрывается,
и пользователь видит приветствие на главной странице.