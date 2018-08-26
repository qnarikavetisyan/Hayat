$(document).ready(function(){
	var sound = true;
	var txt=$("<div class='firsttxt'>Հիմա պետք է փորձես ուժերդ չինգաչունգի առաջնությունում: Հաջողություն: </br></br><button class = 'btn'>Սկսել</button></div>").appendTo(".container");
						$(document).bind('keypress', function(e) {
						if(e.keyCode==13){
		                 $('.btn').trigger('click');
							}
								});

						$('.btn').click(function() {	
						txt.detach();	
						$("<audio></audio>").attr({
					    'src':'children.mp3',
					    'volume':0.1,
					    'autoplay':'autoplay',
					    'loop':'loop'
						}).appendTo("body");
	$(".container").append($("<div class='score'></div>"));		
	$(".container").append($("<div class='player1 player'><img class = 'a' src='images/rock.png'></div>"));		
	$(".container").append($("<div class='player2 player'><img class = 'a' src='images/rock.png'></div></br>"));	
	$(".container").append($("<div class='variations'><div class='variation' id='rock'><img src='images/rockIcon.png'><div class='overlay'><div class='rck'>Քար</div></div></div>"));	
	$(".variations").append($('<div class="variation" id="scissors"><img src="images/scissorsIcon.png"><div class="overlay"><div class="text">Մկրատ</div></div></div>'));	
	$(".variations").append($('<div class="variation" id="paper"><img src="images/paperIcon.png"><div class="overlay"><div class="text">Թուղթ</div></div></div></div>'));				
	$(".container").append($("<div class='settings'>").append($("<img src='images/restart.png' class = 'restart' id = 'res'>"))
           											  .append($("<img src='images/home.png' class = 'home' id = 'home'>"))
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
	var player1Score = 0;
	var player2Score = 0;
	$(".score").text(player1Score + " : " + player2Score);
   
	var variations = ["rock", "scissors", "paper"];
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
		$(".variation").on('click', function(){
			if(sound == true) {
			$("<audio></audio>").attr({
	                        'id':'song',
	                        'src':'ching.mp3',
	                        'volume':0.5,
	                        'autoplay':'autoplay',
	                        }).appendTo("body"); 
			}
			else {
				$('audio').prop("volume", 0);
			}
		var player1Motion = variations[Math.floor(Math.random() * 3)];
		$(".player1").empty().append($("<img>").attr("src","images/" + player1Motion + ".gif" + "?a=" + Math.random()));

		var player2Motion = $(this).attr("id");
		console.log(player2Motion);
		$(".player2").empty().append($("<img>").attr("src", "images/" + player2Motion + ".gif" + "?a=" + Math.random()));

		if(player1Motion == "rock" && player2Motion == "scissors" ||
		   player1Motion == "scissors" && player2Motion == "paper"||
		   player1Motion == "paper" && player2Motion == "rock") {	
			setTimeout(function(){ player1Score++; 			
										}, 1000);
		}

		else if (player2Motion == "rock" && player1Motion == "scissors" ||
			     player2Motion == "scissors" && player1Motion == "paper"||
			     player2Motion == "paper" && player1Motion == "rock") {
			setTimeout(function(){ player2Score++; 		
										}, 1000);						
			
		}		
		$(".score").text(player1Score + " : " + player2Score);
		
		

		});

		$('#res').click(function(){ 
			location.reload(); 
		});

		$('#home').click(function(){
			location.href = '../menu/index.html';
		});

});
	});