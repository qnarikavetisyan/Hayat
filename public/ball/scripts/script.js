var level;
$(document).ready(function() {
var sound = true;

window.level = $("<div id='world'></div>");
						var txt=$("<div class='firsttxt'>Վաաա՜յ, գնդակը կտուրում է: Փորձիր հաղթահարել արգելքներն ու գնդակը վերադարձնել ընկներիդ:</br></br><button class = 'btn'>Սկսել</button></div>").appendTo("body");
						$(document).bind('keypress', function(e) {
						if(e.keyCode==13){
		                 $('.btn').trigger('click');
							}
								});
						$('.btn').click(function() {	
						txt.detach();	
						var background=$("<img id='pic' src='gifs/bgfinal.png'>").appendTo(level);
	           			level.appendTo("body");
						window.person = new Player();	
						window.floor=$("<div  id='floor'></div>").appendTo(level);
						window.STATIC_HORIZONTAL_CENTER;
						window.STATIC_VERTICAL_CENTER
						window.m1 = new Enemies();
						window.m2= new Enemies();
						window.m3 = new Enemies();
						window.m4 = new Enemies();
						window.WIDTH_DIFFERENCE;
						window.HEIGHT_DIFFERENCE;
						window.DYNAMIC_HORIZONTAL_CENTER;
						window.DYNAMIC_VERTICAL_CENTER;
			moveWorld();

				$("#world").append($("<div class='settings'>").append($("<img src='gifs/restart.png' class = 'restart'>"))
	           											      .append($("<img src='gifs/home.png' class = 'home'>"))
	           											      .append($("<img src='gifs/sound.png' class = 'sound'>")));

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
			if(sound == true) {		
						$("<audio></audio>").attr({
					    'src':'music/music.mp3',
					    'volume':0.4,
					    'autoplay':'autoplay',
						'loop':'loop'
						}).appendTo("body");
						}
			else {
				$('audio').prop("volume", 0);
			}

		$('.restart').click(function(){
			location.reload();
		});


		$('.home').click(function() {
			location.href = '../menu/index.html'
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
			$('audio').prop("volume", 0.4);
		}
		});


function moveWorld()
{	
	$("html").keydown(addKey).keyup(removeKey);
	var gravity = 0.2;
	
	function addKey(e)
	{
		person.directions[e.which] = true;
	}

	function removeKey(e)
	{
		if (e.which == 37)
			person.image.css("background-image","url('gifs/rotate.gif')");
		
		if (e.which == 39)  
			person.image.css("background-image","url(gifs/1.gif')");
			
		delete person.directions[e.which];
	}
		
	function update()
	{
		window.walls=[floor];
		for(var i in person.directions)
		{
			if(!person.directions.hasOwnProperty(i)) continue;
			
			if(i == 39) 
			{
				person.image.css("background-image","url('gifs/1.gif')");
				
				if(person.image.position().left < $('#world').width()/3)
				{
					person.image.css("left", (person.image.position().left + person.speedX) + "px");
				}
				else
				{
					$('#pic').css("left", ($('#pic').position().left - person.speedX) + "px");
					$('#floor').css("left", ($('#floor').position().left - person.speedX) + "px");
					$('#ant1').css("left", ($('#ant1').position().left - person.speedX) + "px");
					$('#ant2').css("left", ($('#ant2').position().left - person.speedX) + "px");
					$('#ant3').css("left", ($('#ant3').position().left - person.speedX) + "px");
					$('#ant4').css("left", ($('#ant4').position().left - person.speedX) + "px");
					$('#stone1').css("left", ($('#stone1').position().left - person.speedX) + "px");
					$('#stone2').css("left", ($('#stone2').position().left - person.speedX) + "px");
					$('#stone3').css("left", ($('#stone3').position().left - person.speedX) + "px");
					$('#stone4').css("left", ($('#stone4').position().left - person.speedX) + "px");
					$('#ball').css("left", ($('#ball').position().left - person.speedX) + "px");
				}
				
			}
			if(person.image.position().top > 0 && i == 38 && person.jumpState == false)
			{
				person.image.css("background-image","url('gifs/1.gif')");
				person.epsilon = 5;
				person.jumpState = true;
				person.image.css("top", person.image.position().top - 6);
				if(sound == true) {
			$("<audio></audio>").attr({
	                        'id':'song',
	                        'src':'music/jump.mp3',
	                        'volume':0.5,
	                        'autoplay':'autoplay',
	                        }).appendTo("body"); 
			}
			else {
				$('audio').prop("volume", 0);
			}
				
			}			

			if(i == 37) 
			{
				person.image.css("background-image","url('gifs/1.gif')");
				
				if(person.image.position().left > 0)
				{
					person.image.css("left", (person.image.position().left - person.speedX) + "px");
				}
			}
		}

		checkCollision();
		playerCollisionDetectionenemy();
		jump();
	}

	function checkCollision()
    {	
		for(var i in walls)
		{			
			if(isNaN(i)) continue;
			WIDTH_DIFFERENCE = person.image.width()/2 + walls[i].width()/2;
			
			STATIC_HORIZONTAL_CENTER = walls[i].position().left + walls[i].width()/2;
			STATIC_VERTICAL_CENTER = walls[i].position().top;
			
			DYNAMIC_HORIZONTAL_CENTER = person.image.position().left + person.image.width()/2;
			DYNAMIC_VERTICAL_CENTER = person.image.position().top + person.image.height();
			
			if( Math.abs(DYNAMIC_HORIZONTAL_CENTER - STATIC_HORIZONTAL_CENTER) < WIDTH_DIFFERENCE &&
				Math.abs(DYNAMIC_VERTICAL_CENTER - STATIC_VERTICAL_CENTER) <= 0 + person.epsilon)
			{
				person.epsilon = 0;
				person.jumpState = false;
				person.image.css("top", walls[i].position().top - person.image.height());
				person.speedY = 6;
				break;
			}
			else
			{
				if(person.jumpState == false)
				{
					person.speedY = 0;
					person.epsilon = 5;
					person.jumpState = true;
					person.image.css("top", person.image.position().top + person.gravity);
				}
			}
		}
    }
	var int = setInterval(update,20)
	
	function jump()
	{
		if(person.jumpState)
		{
			person.speedY -= person.gravity;
			person.image.css("top", person.image.position().top - person.speedY);
		}
	}
		
		var m = [$("#stone1"), $("#ant1"),$("#ant2"),$("#ant3"),$("#ant4"),$("#stone2"),$("#stone3"),$("#stone4")];
	
	function playerCollisionDetectionenemy()
	{
		for (var i in m) {
			var playerXcenter = person.image.position().left + person.image.width()/2;
			var playerYcenter = person.image.position().top + person.image.height()/2;

			var objectXcenter = m[i].position().left + m[i].width()/2;
			var objectYcenter = m[i].position().top + m[i].height()/2;

			var horizontalCenterDistance = Math.abs(playerXcenter - objectXcenter);
			var verticalCenterDistance = Math.abs(playerYcenter - objectYcenter);

			var totalWidth = person.image.width()/2 + m[i].width()/2;
			var totalHeight = person.image.height()/2 + m[i].height()/2;
			
			if( horizontalCenterDistance <= totalWidth && verticalCenterDistance <= totalHeight ){
				
				person.image.css("top",(person.image.position().top -60)+'px');
				person.image.css("left",(person.image.position().left -2)+'px');
				person.image.css("top",(person.image.position().top + 40)+'px');
				$("#character").detach();
				$("body").append("<div class = 'lose'></div>");
				$('audio').prop("volume", 0);
		      	$(".lose").append($("<img src = 'gifs/lose.png' class = 'txt'>")).append($("<img src='gifs/restart.png' class = '.restart ic' id='res'>"))
							           											 .append($("<img src='gifs/home.png' class = 'home ic' id = 'home'>"));
		        $("#world").css('opacity', '0.3');
		        $('#res').click(function(){
					location.reload();
				});
		        $('#home').click(function() {
					location.href = '../menu/index.html'
				});
		        	if(sound == true) {
						$("<audio></audio>").attr({
	                        'id':'song',
	                        'src':'music/lose.mp3',
	                        'volume':0.5,
	                        'autoplay':'autoplay',
                        }).appendTo("body"); 
					}
					else {
						$('audio').prop("volume", 0);
					}
											
			}
		}	

		//ball
		var playerXcenter = person.image.position().left + person.image.width()/2;
		var playerYcenter = person.image.position().top + person.image.height()/2;

		var objectXcenter = $("#ball").position().left + $("#ball").width()/2;
		var objectYcenter = $("#ball").position().top + $("#ball").height()/2;

		var horizontalCenterDistance = Math.abs(playerXcenter - objectXcenter);
		var verticalCenterDistance = Math.abs(playerYcenter - objectYcenter);

		var totalWidth = person.image.width()/2 + m[i].width()/2;
		var totalHeight = person.image.height()/2 + m[i].height()/2;
		
		if( horizontalCenterDistance <= totalWidth && verticalCenterDistance <= totalHeight ){
			
			person.image.css("top",(person.image.position().top -60)+'px');
			person.image.css("left",(person.image.position().left -2)+'px');
			person.image.css("top",(person.image.position().top + 40)+'px');
			$("#character").detach();
			$("body").append("<div class = 'final'></div>");
			$('audio').prop("volume", 0);
			$(".final").append($("<img src = 'gifs/win.png' class = 'txt'>")).append($("<img src = 'gifs/home.png' class = 'ic home' id = 'home'>"));
			$("#world").css('opacity', '0.3');
			if(sound == true) {
			$("<audio></audio>").attr({
	                        'id':'song',
	                        'src':'music/win.wav',
	                        'volume':0.5,
	                        'autoplay':'autoplay',
	                        }).appendTo("body"); 
			}
			else {
				$('audio').prop("volume", 0);
			}

			$('#home').click(function() {
				location.href = '../menu/index.html'
			});
								
		}

	}		
}	
});
});



