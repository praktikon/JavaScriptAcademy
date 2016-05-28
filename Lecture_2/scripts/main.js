var Application = {};

(function(Application, $){
	var _document;

	Application.init = function(document){
		_document = document;

		var ulItems = $('ul.goods-list');
		
		// adding goods to list from main text-input form

		$("#goods-names-input").keypress(function(e) {
			var val = $(this).val();
			if(val!=''){
		    	if(e.which == 13) {
		    		ulItems.append('<li><input type="checkbox"><span>'+val+'</span><div class="cross"><img class="cross-img none" src="cross.png"></img><div></li>');
		        	$(this).val('');
		        	$("input:checkbox", ulItems).on("change",function(){
						var input = $(this).next('span');
		     			
		     			if($(this).prop('checked')){
		     				$(input).addClass("black");
		     			} else {
		     				$(input).removeClass('black');
		     			};
					});
		    	}
			}
		});
		
		
		// group of function whish is dealing with editing enties and cklicing enter and esc buttons (on blur also )	

		$(function () {
		    $(_document).on('dblclick', 'span', function () {
		        var input = $('<input />', {
		        	'class': 'temp',
		            'type': 'text',
		            'value': $(this).html()
		        });
		        $(this).parent().find('span').addClass('none');
		        $(this).parent().append(input);
		        input.focus();
		    });
		
		    $(_document).on('keyup','input.temp', function(evt) {
		        if(evt.which == 27){
		            if ($(this).parent().find('span').hasClass('none')){
		                $(this).parent().find('span').removeClass('none');
		                if($(this)){
		                 $(this).remove();
		               }
		            }
		        }
		    });
		
		    $(_document).on('blur', 'input.temp', function () {
		        if ($(this).parent().find('span').hasClass('none')){
		            $(this).parent().find('span').removeClass('none');
		            if($(this)){
		     	     $(this).remove();
		    	   }
		        }
		    });

		    $(_document).on('keypress', 'input.temp', function (e) {
		        if(e.which == 13) {
		            $(this).parent().find('span').removeClass('none').html($(this).val());
		            $(this).remove();
		        }
		    });
		});
		
		// checking all enties
		
		$('input:checkbox', '.check-all').on('change', function(){
		    var checkboxState = $(this).prop('checked');
		    $('ul.goods-list').find(':checkbox').each(function(){
		        var input = $(this).next('span');
		        if (checkboxState){
		           $(this).prop('checked', true);
		           $(input).addClass("black");
		       }else {
		            $(this).prop('checked', false);
		            $(input).removeClass("black");
		       }
		    });
		});
		
		// deleting entry by pushing cross image

		$(_document).on('click', 'img.cross-img', function () {
		    $(this).closest('li').remove();
		});
		
		// deleting all checked entries by pushing "delete checked" button

		$(_document).on('click', '.delete-button input:button', function () {
		    $('ul.goods-list').find(':checkbox').each(function(){
		        if($(this).prop('checked')) {
		            $(this).closest('li').remove();
		        }
		    });
		    if($('input:checkbox', '.check-all').prop('checked')){
		        $('input:checkbox', '.check-all').prop('checked', false);
		    }
		});
		
		
		// function wich dealing with poping up cross image
		$(_document).on('mouseover', 'ul.goods-list li', function () {
		        $(this).find('img.cross-img').removeClass('none');
		    }).mouseout(function(){
		        $(this).find('img.cross-img').addClass('none');
		    });
	};
})(Application, jQuery);