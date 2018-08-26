var level;
$(document).ready(function(){
	var sound = true;
 	window.level = $("<div id='world'></div>");
 						var txt=$("<div class='firsttxt'>Փորձիր գտնել ընկերներիդ: </br></br><button class = 'btn'>Սկսել</button></div>").appendTo("body");
						$(document).bind('keypress', function(e) {
						if(e.keyCode==13){
		                 $('.btn').trigger('click');
							}
								});
						$('.btn').click(function() {
						txt.detach();	
						var background=$("<img class='pic' src='images/wallfinal.png'>").appendTo(level);
						var thoughtCloud=$("<img class='thoughtCloud' src='images/thoughtCloud.png'>").appendTo(level);
						var boy = $("<img class = 'boy' src= 'images/boy.png'>").appendTo(level);
	           			var time = $("<div id = '1' class = 'c'></div>").appendTo(level);
	         			if(sound == true) {		
						$("<audio></audio>").attr({
							'id':'timer',
					    'src':'sounds/music.mp3',
					    'volume':0.1,
					    'autoplay':'autoplay',
						'loop':'loop'
						}).appendTo("body");
						}
			else {
				$('audio').prop("volume", 0);
			}
	           			level.appendTo("body");
	           			function c(){
						var n=$('.c').attr('id');
					    var c=n;
						$('.c').text(c);
						setInterval(function(){
							c++;
							if(c>=0){
								$('.c').text(c);
							}
					        if(c==11){	
					        	$("<audio></audio>").attr({
					    'src':'sounds/children.mp3',
					    'volume':0.1,
					    'autoplay':'autoplay',
						'loop':'loop'
						}).appendTo("body");	
						$('#timer').prop("volume", 0);			        	
					            $('.c').remove();
					           	$(".pic").remove();
					            $('.boy').remove();
					           	$('.thoughtCloud').remove();

					           	var playerscore = 0;
								var score = 4;
			           			var levelTime = 60;
			           			var interval = setInterval(function() {
								    levelTime--;
								    if (levelTime <= 0) {
								    	$('audio').prop("volume", 0);
								     		clearInterval(interval);
								      	$("body").append("<div class = 'lose'></div>");
								      	$(".lose").append($("<img src = 'images/lose.png' class = 'txt'>")).append($("<img src='images/restart.png' class = '.restart ic' id = 'res'>"))
					           											                                   .append($("<img src='images/home.png' class = 'home ic' id = 'home'>"));
					           			
					           			
										$('#home').click(function(){
											location.href = '../menu/index.html'
										})								                                   	

					           			if(sound == true) {
											 $("<audio></audio> controls").attr({
												    'src':'sounds/lose.mp3',
												    'autoplay':'autoplay'
												}).appendTo(level);
											 }
										else {
											$('audio').prop("volume", 0);
										}
											$(document).on('click', '#res', function() {
													    location.reload();
													});
								        $(level).css('opacity', '0.3');
								        $(".player1").css("opacity","0");
								        $(".player2").css("opacity","0");
								        $(".player3").css("opacity","0");
								        $(".player4").css("opacity","0");
								        return;
								    }

								    else{
								    	$(".lvlTime").text("0 : " + levelTime);
								    }
								}, 1000);

					           	$(level).append("<img class = 'pbg' src = 'images/pbgg.png'>");
					           	$(level).append("<div class = 'score'></div>");
					           	$(level).append("<div class = 'lvlTime'>");
					           	$(level).append($("<div class='settings'>").append($("<img src='images/restart.png' class = 'restart'>"))
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
					           		$(".sound").on('click', function(){
										if(sound == true) {
										sound = false;
										$('audio').prop("volume", 0);
										$(".sound").css("opacity","0.3");
									}
									else {
										sound = true;
										$(".sound").css("opacity","1");
										$('audio').prop("volume", 0.1);
									}
									});
								$(".score").text(playerscore + "/" + score);
					           	$("body").css("background-color",'white');
					           	$(level).append("<img class = 'player3' id= 'hero' src = 'images/player3.png'>");
					           	$(level).append("<img class = 'player4' id= 'hero' src = 'images/player4.png'>");
					           	$(level).append("<img class = 'player2' id= 'hero' src = 'images/player2.png'>");
					           	$(level).append("<img class = 'player1' id= 'hero' src = 'images/player1.png'>");

					           		$( ".player1").one( "click", function() {
									$(".player1").css("opacity","1");
									playerscore++;
									$(".score").text(playerscore + "/" + score);
										if(sound == true) {
											 $("<audio></audio> controls").attr({
												    'src':'sounds/done.wav',
												    'autoplay':'autoplay'
												}).appendTo(level);
											 }
										else {
											$('audio').prop("volume", 0);
										}
									if(playerscore == 4) {
										$('audio').prop("volume", 0);
										$("body").append("<div class = 'final'></div>");
										$(".final").append($("<img src = 'images/win.png' class = 'txt'>")).append($("<img src = 'images/home.png' class = 'ic home' id = 'home'>"));
										$(level).css('opacity', '0.3');
										clearInterval(interval);
											if(sound == true) {
											 $("<audio></audio> controls").attr({
												    'src':'sounds/win.wav',
												    'autoplay':'autoplay'
												}).appendTo(level);
											 }
										else {
											$('audio').prop("volume", 0);
										}


										$('#home').click(function(){
											location.href = '../menu/index.html'
										})
									}
									});

					           		$( ".player3" ).one( "click", function() {
									$(".player3").css("opacity","1");
									playerscore++;
									if(sound == true) {
											 $("<audio></audio> controls").attr({
												    'src':'sounds/done.wav',
												    'autoplay':'autoplay'
												}).appendTo(level);
											 }
										else {
											$('audio').prop("volume", 0);
										}
									$(".score").text(playerscore + "/" + score);
									if(playerscore == 4) {
										$('audio').prop("volume", 0);
										$("body").append("<div class = 'final'></div>");
										$(".final").append($("<img src = 'images/win.png' class = 'txt'>")).append($("<img src = 'images/home.png' class = 'ic home' id = 'home'>"));
										$(level).css('opacity', '0.3');
										clearInterval(interval);
											if(sound == true) {
											 $("<audio></audio> controls").attr({
												    'src':'sounds/win.wav',
												    'autoplay':'autoplay'
												}).appendTo(level);
											 }
										else {
											$('audio').prop("volume", 0);
										}

										$('#home').click(function(){
											location.href = '../menu/index.html'
										})
									}
									});

					           	 	$( ".player4" ).one( "click", function() {
									$(".player4").css("opacity","1");
									$(".player4").css("z-index","2");
									playerscore++;
									 if(sound == true) {
											 $("<audio></audio> controls").attr({
												    'src':'sounds/done.wav',
												    'autoplay':'autoplay'
												}).appendTo(level);
											 }
										else {
											$('audio').prop("volume", 0);
										}
									$(".score").text(playerscore + "/" + score);
									if(playerscore == 4) {
										$('audio').prop("volume", 0);
										$("body").append("<div class = 'final'></div>");
										$(".final").append($("<img src = 'images/win.png' class = 'txt'>")).append($("<img src = 'images/home.png' class = 'ic home' id = 'home'>"));
										$(level).css('opacity', '0.3');
										clearInterval(interval);
											if(sound == true) {
											 $("<audio></audio> controls").attr({
												    'src':'sounds/win.wav',
												    'autoplay':'autoplay'
												}).appendTo(level);
											 }
										else {
											$('audio').prop("volume", 0);
										}


										$('#home').click(function(){
											location.href = '../menu/index.html'
										})
									}
									});

									$( ".player2").one( "click", function() {
									$(".player2").css("opacity","1");
									$(".player2").css("z-index","2");
									playerscore++;
									if(sound == true) {
											 $("<audio></audio> controls").attr({
												    'src':'sounds/done.wav',
												    'autoplay':'autoplay'
												}).appendTo(level);
											 }
										else {
											$('audio').prop("volume", 0);
										}
									$(".score").text(playerscore + "/" + score);
									if(playerscore == 4) {
										$('audio').prop("volume", 0);
										$("body").append("<div class = 'final'></div>");
										$(".final").append($("<img src = 'images/win.png' class = 'txt'>")).append($("<img src = 'images/home.png' class = 'ic home' id = 'home'>"));
										$(level).css('opacity', '0.3');
										clearInterval(interval);
											if(sound == true) {
											 $("<audio></audio> controls").attr({
												    'src':'sounds/win.wav',
												    'autoplay':'autoplay'
												}).appendTo(level);
											 }
										else {
											$('audio').prop("volume", 0);
										}


										$('#home').click(function(){
											location.href = '../menu/index.html'
										})
									}
									});

									$(".score").text(playerscore + "/" + score);

									$(".restart").click(function(){
										location.reload();
									});

									$('.home').click(function(){
										location.href = '../menu/index.html';
									})
					        }
						},1000);
					}
					c();
					setInterval(function(){
						c();
					},11000);
						           

	});
});

