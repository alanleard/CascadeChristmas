var win = Ti.UI.currentWindow;
win.orientationModes = [
	Titanium.UI.LANDSCAPE_RIGHT

]; 

win.addEventListener('focus', function(){
var background = Ti.UI.createImageView({
	image:'../images/christmas1.jpg',
	//height:Ti.Platform.displayCaps.platformHeight,
	//width:Ti.Platform.displayCaps.platformWidth,
	left:0,
	right:0,
	top:0,
	bottom:0
});

win.add(background);



var done = Ti.UI.createButton({
	title:'Done',
	width:'40',
	height:'20',
	top:2,
	left:2
});
win.add(done);
var next = Ti.UI.createButton({
	title:'Next',
	width:'40',
	height:'20',
	top:2,
	right:2
});
win.add(next);

var santa = Ti.UI.createImageView({
	image:'../images/santa.png',
	height:20,
	width:20
	
});

var santa2 = Ti.UI.createImageView({
	image:'../images/santa.png',
	height:80,
	width:80,
	visible:false
});

win.add(santa);
win.add(santa2);
var center = {x:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformWidth-50))),y:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformHeight-50)))};
var time = 0;
var timer = setInterval(function(){time+=1;}, 1000);
santa.center=center
santa2.center = center;
santa.addEventListener('click', function(){
		clearInterval(timer);
	santa2.show();
	//santa.animate({height:80, width:80, duration:200});
	setTimeout(function(){santa2.hide();
		alert('You found Santa in '+time+' seconds');
		},500);

})

done.addEventListener('click', function(){
	win.close();
});
var num = 1;
next.addEventListener('click', function(){
	if(num<3){
		center = {x:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformWidth-50))),y:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformHeight-50)))};
		num++;
		background.image = '../images/christmas'+num+'.jpg'
		santa.center=center;
		santa2.center = center;
		time=0;
		timer = setInterval(function(){time+=1;}, 1000);
	} else {
		center = {x:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformWidth-50))),y:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformHeight-50)))};
		num=1
		background.image = '../images/christmas'+num+'.jpg'
		santa.center=center;	
		santa2.center = center;
		time=0;
		timer = setInterval(function(){time+=1;}, 1000);
	}
});
});
