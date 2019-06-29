//JQuery
$(document).ready(function() {
   //Всплывающие подсказки 
   $('[data-toggle="tooltip"]').tooltip (); 
    
   //E-mail Ajax Send
	$(".btn_").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
            //Swal.fire(
			//html: '<p class="swal-title1">Заявка принята!<span class="swal-tit1">Свяжемся с вами в ближайшее время</span></p>',
            //s'success');
            Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	}); 
});



    
//JavaScript
var button = document.body.querySelector('.btn');
button.addEventListener('click', function (){
    swal({
  html:
            '<h1 class="swal-title">Хотите купить Iphone X?</h1>' + '<p class="swal-par">Напишите свое имя и номер телефона. Мы свяжимся с вами и уточним детали.</p>' + '<form><!-- Hidden Required Fields Данные администратора--><input type="hidden" name="project_name" value="Site Name"><input type="hidden" name="admin_email" value="admin@mail.com"><input type="hidden" name="form_subject" value="Form Subject"><input type="text" name="Name" id="swal-input" class="swal-input" placeholder="Ваше имя" required><input type="text" name="Phone" id="swal-input1" class="swal1-input" placeholder="Ваш телефон" required><textarea type="text" name="Text" id="swal-textarea" class="swal-textarea" placeholder="Введите текст сообщения..." required style="display: flex;"></textarea><button class="btn_">Send</button></form>',
        
  showConfirmButton: false 
    
  
})
    /*swal("Хотите купить Iphone X?", "Напишите свое имя и номер телефона. Мы свяжимся с вами и уточним детали.", input: 'text',); //См библиотеку Sweet Alert*/
});







