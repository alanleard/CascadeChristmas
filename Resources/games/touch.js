var win = Ti.UI.currentWindow;

win.orientationModes = [
	Titanium.UI.LANDSCAPE_RIGHT
]; 


var santa = Titanium.UI.createImageView({
	image:'../images/santaBig.png',
	canScale:true,
	height:100,
	width:100,
	hiRes:true,
	left:50,
	bottom:100
	//center:{x:50, y:50}
});

		win.add(santa);

santa.addEventListener('touchmove', function(e){
	
	santa.left = e.globalPoint.y-50;
		santa.bottom = e.globalPoint.x-50;
})