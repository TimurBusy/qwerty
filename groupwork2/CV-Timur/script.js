$(document).ready(function() {
  // 
  $('table').click(function(){
    $(this).hide();
  });

  // Изменить стиль фона .header с плавным переходом
  $('.header').css('background-color', 'lightgray').slideUp(1000).slideDown(1000);

  // Скрыть элемент с классом "main" с эффектом скольжения
  $('.main').slideUp(1000);

  // Изменить текст кнопки ссылки с эффектом мигания
  setInterval(function() {
    $('a').fadeOut(500).fadeIn(500);
  }, 1000);

  // Показать скрытый элемент с классом "main" с эффектом развертывания
  $('.main').slideDown(1000);

  // Изменить цвет фона таблицы с плавным переходом
  $('table').css('background-color', 'lightblue');

  // Изменить цвет текста ссылки при наведении
  $('a').hover(function() {
    $(this).css('color', 'red');
  }, function() {
    $(this).css('color', 'blue');
  });

  // Изменить цвет текста всех заголовков h1 при наведении с эффектом затухания
  $('h1').hover(function() {
    $(this).fadeTo(500, 0.5);
  }, function() {
    $(this).fadeTo(500, 1);
  });
});
