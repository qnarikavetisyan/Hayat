$(document).ready(function() {
	$("body").append($("<div class = 'about'>"));
	$(".about").append($("<h1 class = 'text'>Բարի գալուստ հայաթ: Այստեղ դուք կարող եք գտնել ձեր մանկության խաղերը: Սկսե՞նք:</h1>"));
	$(".about").append($("<button class = 'btn'>Սկսել</button>"));
	$('.btn').click(function() {
		$(".about").remove();
		$(".text").remove();
		$("body").append($("<button class = 'btn1'>Լավ</button>"));
		$("body").append($("<div class = 'about'>").append($("<h3>Ծանոթացա՞ր կանոններին: Կարող ես սկսել:</h3>")).append($("<img src='images/h.png' class = 'h'>")).append($("<h2 class = 'arrow'>__</h2>")).append($("<img src='images/home.png' class = 'home1'>")).append($("<img src='images/r.png' class = 'r'>")).append($("<h2 class = 'arrow1'>__</h2>")).append($("<img src='images/sound.png' class = 'sound1'>")).append($("<img src='images/s.png' class = 's'>")).append($("<h2 class = 'arrow2'>__</h2>")).append($("<img src='images/restart.png' class = 'rest'>")).append($("<h4>Երգերը freesound.org-ից, մնացածը՝ հեղինակային:</h4>")));
		
			$('.btn1').click(function() {
				location.href = '../menu/index.html';
					});
				});
	});
		

		
