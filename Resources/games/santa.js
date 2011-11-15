var win = Ti.UI.currentWindow;

win.addEventListener('focus', function(){
	Titanium.UI.orientation = Titanium.UI.LANDSCAPE_RIGHT;
	var background = Ti.UI.createImageView({
		//image:'../images/christmas1.jpg',
		
	});

	win.add(background);
	
	var next = Ti.UI.createButton({
		title:'Next',
	});
	win.setRightNavButton(next);
	
	var santa = Ti.UI.createImageView({
		image:'../images/santa.png',
		height:20,
		width:20,
		top:30,
		left:30
	});

	var santa2 = Ti.UI.createImageView({
		image:'../images/santa.png',
		height:80,
		width:80,
		visible:false
	});
	if(Ti.Platform.osname == 'ipad'){
		santa2.image = '../images/santa@2x.png'
	}

	var touchView = Ti.UI.createView({
		width:80,
		height:80
		//backgroundColor:'red'
	});
	touchView.add(santa);
	touchView.add(santa2);
	win.add(touchView);
	setTimeout(function(){
		background.height=Ti.Platform.displayCaps.platformHeight,
		background.width=Ti.Platform.displayCaps.platformWidth
	}, 500);
	var center = {x:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformWidth-100))+40),y:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformHeight-100))+50)};
	var time = 0;
	var timer = setInterval(function(){time+=1;}, 1000);
	touchView.center=center
	
	function nextSanta(){
		if(num<3){
			center = {x:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformWidth-100))+40),y:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformHeight-100))+50)};
			num++;
			background.backgroundImage = '../images/christmas'+num+'.jpg'
			
			touchView.center=center;
			time=0;
			timer = setInterval(function(){time+=1;}, 1000);
		} else {
			center = {x:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformWidth-100))+40),y:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformHeight-100))+50)};
			num=1
			background.backgroundImage = '../images/christmas'+num+'.jpg'
			touchView.center=center;	
			time=0;
			timer = setInterval(function(){time+=1;}, 1000);
		}
	}
	var num = 1;
	background.backgroundImage = '../images/christmas1.jpg';
	next.addEventListener('click', function(){
		nextSanta();
	});
	
	
	touchView.addEventListener('touchstart', function(){
		santa2.show();
		Ti.Media.vibrate();
		clearInterval(timer);
		//santa.animate({height:80, width:80, duration:200});
		setTimeout(function(){
			santa2.visible = false;
			var alertD = Ti.UI.createAlertDialog({title:'You Found Him!', message:'You found Santa in '+time+' seconds!', buttonNames:['Done', 'Next']});
			alertD.show();
			alertD.addEventListener('click', function(e){
				if(e.index ===0){
					win.close();
				} else {
					nextSanta();
				}
			})
			},500);
			
	});
	
});

win.addEventListener('focus', function(){	
var start = Ti.UI.createAlertDialog({title:'Sneaky Santa', message:'Find Santa and tap on him as quick as you can.', buttonNames:['Start', 'Cancel']})
	start.show();
	start.addEventListener('click', function(e){
		if(e.index == 0){

		} else{
			win.close();
		}
});
});
