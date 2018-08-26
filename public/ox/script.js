$(document).ready(function(){
    var txt=$("<div class='firsttxt'> Գնացինք: </br></br><button class = 'btn'>Սկսել</button></div>").appendTo("body");
                        $(document).bind('keypress', function(e) {
                        if(e.keyCode==13){
                         $('.btn').trigger('click');
                            }
                                });
                        $('.btn').click(function() {
                        txt.detach();  
                        $("<audio></audio>").attr({
                        'src':'sounds/music.mp3',
                        'volume':0.1,
                        'autoplay':'autoplay',
                        'loop':'loop'
                        }).appendTo("body"); 
    $("body").append($('<div class="cont"><div class="boxes"><div class="box c1"></div><div class="box c2"></div> <div class="box c3"></div><div class="box c4"></div><div class="box c5"></div><div class="box c6"></div><div class="box c7"></div> <div class="box c8"></div><div class="box c9"></div>    </div>     </div>'));
    $("body").append($("<div class='settings'>").append($("<img src='images/restart.png' class = 'restart'>"))
											    .append($("<img src='images/home.png' class = 'home'>"))
											    .append($("<img src='images/sound.png' class = 'sound'>")));

     $(document).keydown(function(e) {
                                if (e.keyCode == 82) {
                                    $('.restart').trigger('click');
                                            }
                                        });

                                 $(document).keydown(function(e) {
                                if (e.keyCode == 72) {
                                    $('.home').trigger('click');
                                            }
                                        });

                                  $(document).keydown(function(e) {
                                if (e.keyCode == 83) {
                                    $('.sound').trigger('click');
                                            }
                                        });
    var sound = true;
	var computer = 'O';
    var player = 'X';    
    var randomNumber = Math.floor(Math.random() * 10);
    
    if(randomNumber > 6){
        var computer = 'X';
        var player = 'O';
        $('.c'+randomNumber).text(computer);
    }	
    var winVariants = ['123','147','159','456','258','357','789','369'];
    var exit = false;
	
	$('.restart').click(function(){
		location.reload();
	});
	
	$('.home').click(function(){
		location.href = '../menu/index.html';
	});

	$(".sound").on('click', function(){
                if(sound == true) {
                sound = false;
                $(".sound").css("opacity","0.3");
                $('audio').prop("volume", 0);
            }
            else {
                sound = true;
                $(".sound").css("opacity","1");
                $('audio').prop("volume", 1);
            }
            });

    //win
    function playercheck(sign){
        for(var i = 0; i < 8; i++){         
            var v1 = 'c' + winVariants[i].substr(0,1);
            var v2 = 'c' + winVariants[i].substr(1,1);
            var v3 = 'c' + winVariants[i].substr(2,1);
             
            if($('.'+v1).text() == sign && $('.'+v2).text() == sign && $('.'+v3).text() == sign ){
                $('.'+v1+',.'+v2+',.'+v3).css("color", "#83E2C3");
                $('.cont .box').unbind('click');
                 $('audio').prop("volume", 0);
                     $("<audio></audio>").attr({
                        'id':'song',
                        'src':'sounds/win.wav',
                        'volume':0.5,
                        'autoplay':'autoplay',
                        }).appendTo("body");   
                exit = true; }    
        }
    }   

    //lose
    function computercheck(sign){
        for(var i = 0; i < 8; i++){       
            var v1 = 'c' + winVariants[i].substr(0,1);
            var v2 = 'c' + winVariants[i].substr(1,1);
            var v3 = 'c' + winVariants[i].substr(2,1);
             
            if($('.'+v1).text() == sign && $('.'+v2).text() == sign && $('.'+v3).text() == '' && exit == false ){
                $('.'+v3).text(sign);
                $('.'+v1+',.'+v2+',.'+v3).css("color", "#DF4343");
                exit = true;
                 $('audio').prop("volume", 0);
                     $("<audio></audio>").attr({
                        'id':'song',
                        'src':'sounds/lose.wav',
                        'volume':0.5,
                        'autoplay':'autoplay',
                        }).appendTo("body");   
                $('.cont .box').unbind('click'); }                 
            if($('.'+v1).text() == sign && $('.'+v2).text() == '' && $('.'+v3).text() == sign && exit == false ){
                $('.'+v2).text(sign);
                $('.'+v1+',.'+v2+',.'+v3).css("color", "#DF4343");
                $('.cont .box').unbind('click');
                exit = true;
                 $('audio').prop("volume", 0);
                $("<audio></audio>").attr({
                        'id':'song',
                        'src':'sounds/lose.wav',
                        'volume':0.5,
                        'autoplay':'autoplay',
                        }).appendTo("body");}                 
            if($('.'+v1).text() == '' && $('.'+v2).text() == sign && $('.'+v3).text() == sign && exit == false ){
                $('.'+v1).text(sign);
                $('.'+v1+',.'+v2+',.'+v3).css("color", "#DF4343");
                $('.cont .box').unbind('click');
                exit = true;
                 $('audio').prop("volume", 0);
                $("<audio></audio>").attr({
                        'id':'song',
                        'src':'sounds/lose.wav',
                        'volume':0.5,
                        'autoplay':'autoplay',
                        }).appendTo("body"); }    
        }
    }    
    function playercheck2(sign){
        for(var i = 0; i < 8; i++) {        
            var v1 = 'c' + winVariants[i].substr(0,1);
            var v2 = 'c' + winVariants[i].substr(1,1);
            var v3 = 'c' + winVariants[i].substr(2,1);
           
            if(exit == false ){
                if( $('.'+v1).text() == sign && $('.'+v2).text() == sign && $('.'+v3).text() == '' ){
                    $('.'+v3).text(computer);
                    exit = true; }
            }                         
            if(exit == false ){
                if( $('.'+v1).text() == sign && $('.'+v2).text() == '' && $('.'+v3).text() == sign ){
                    $('.'+v2).text(computer);
                    exit = true; }    

            }                 
            if($('.'+v1).text() == '' && $('.'+v2).text() == sign && $('.'+v3).text() == sign ){
                $('.'+v1).text(computer);
                exit = true;    
                 }

            if(exit) break;
		}
	}    
    $('.cont .box').click(function(){
       if($(this).text() == ''){
        $(this).text(player);    
        playercheck(player);
        computercheck(computer);
        playercheck2(player);
        if(sound == true) {
         $("<audio></audio>").attr({
                        'id':'song',
                        'src':'sounds/writing.mp3',
                        'volume':0.5,
                        'autoplay':'autoplay',
                        }).appendTo("body");  
     }
     else {
                $('audio').prop("volume", 0);
            }
			if(exit == false ){
                for(var i = 1; i < 10; i++) {    
					if($('.c'+i).text() == '' ){
                    $('.c'+i).text(computer);
                    break; }    
                }
            } else exit = false; }

        });
    });
});