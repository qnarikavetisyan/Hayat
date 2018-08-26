var counter = 0;
function Enemies(){
	counter++;
	this.enemy = $("<div id='ant"+ counter + "' class='ants'></div>").appendTo(level);
	this.enemy = $("<div id='stone"+ counter + "' class='stones'></div>").appendTo(level);
	this.ball = $("<div id = 'ball'></div>").appendTo(level);
	
}