
var win = Ti.UI.currentWindow;
win.navBarHidden=true;

var game = function(){
var score = 0;
var bgImage = Ti.UI.createView({
	backgroundImage:'../images/christmas.jpg',
	width:1024,
	bottom:0,
	left:0,
	top:0
});

win.add(bgImage);
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
var scoreView = Ti.UI.createView({bottom:0, height:25, backgroundColor:'#000', left:0, right:0, touchEnabled:false});
var scoreLabel = Ti.UI.createLabel({
   text:'Score: '+addCommas(score),
   bottom: 0,
    left: 0,
    color: '#fff',
    height:'auto',
    width:'auto',
    backgroundColor:'#000'
});
scoreView.add(scoreLabel);

var timeLabel = Ti.UI.createLabel({
	text:'60 Seconds',
	bottom:0,
	right:0,
	color:'#fff',
	height:'auto',
	width:'auto',
	backgroundColor:'#000'
});

scoreView.add(timeLabel);
var src = Ti.UI.createLabel({
	visible:false,
	backgroundColor:'red',
	height:25,
	width:50,
	color:'#fff',
	textAlign:'center'
});
scoreView.add(src);
win.add(scoreView)

var gManLrg = Ti.UI.createImageView({
    image: '../images/gManLrg.png',
    visible:false,
    opacity:0.01,
    point: 100
});
win.add(gManLrg);
gManLrg.addEventListener('click', function(){
	
	win.close();
});

bgImage.animate({left:-(1024-Ti.Platform.displayCaps.platformWidth), curve:Ti.UI.ANIMATION_CURVE_LINEAR, duration:60000});
var count = 60;
var time = setInterval(function(){
	
	if(count>0){
		count--;
		timeLabel.text = count+' seconds';
	} else {
		count = 60;
		timeLabel.text = count+' seconds';
		clearInterval(time);
		clearInterval(pop);
		clearInterval(pop2);
		clearInterval(pop3);
		gManLrg.show();
		gManLrg.animate({opacity:1.0, duration:2000});
		var confirm = Ti.UI.createAlertDialog({title:'Good Job!', message:'You got a score of '+addCommas(score)+'.\n Do you want to play again?', buttonNames:['Yes', 'No']})
	confirm.show();
	confirm.addEventListener('click', function(e){
		if(e.index == 0){
			game();
		} else{
			win.close();
		}
	})
		
}}, 1000);



function gManFactory(time, length, size, pts){

var gMan = Ti.UI.createImageView({
    image: '../images/gMan.png',
    height:size,
    width:size,
    visible:false,
    point: pts
});
win.add(gMan);

var multiplier = pts;

var pop = setInterval(function(){
    multiplier = pts;
    gMan.center={x:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformWidth-(size*2)))),y:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformHeight-(size*2)+30)))};

	gMan.show();
	var pIntval =setInterval(function(){
       if(multiplier >1){
             multiplier-=pts/10;
       }else{multiplier = pts+10}} ,(length/10));
    setTimeout(function(){gMan.hide();clearInterval(pIntval);},length);
}, time);

gMan.addEventListener('touchstart', function(e){
	
	src.text = addCommas(gMan.point* multiplier);
	src.center = gMan.center;
	src.show();
	setTimeout(function(){src.hide();},1000);
	//Ti.API.info(gMan.point);
	score+=gMan.point* multiplier;
	scoreLabel.text='Score: '+addCommas(score);
	gMan.hide();
});

return pop;

};
setTimeout(function(){
	pop = gManFactory(4500, 750, 20, 100);
}, Math.floor(Math.random()*5000));

setTimeout(function(){
	pop2 = gManFactory(3500, 1000, 30, 50);
}, Math.floor(Math.random()*1000));

pop3 = gManFactory(2500, 1500, 50, 10);

/*setInterval(function(){   
    gMan2.point=100;
    var pIntval2 =setInterval(function(){
       if(gMan2.point >0){
             gMan2.point--;
       }else{clearInterval(pIntval2);}} ,30);
    
    gMan2.center={x:Math.floor(Math.random()*(Ti.Platform.displayCaps.platformWidth-50)),y:Math.floor(Math.random()*(Ti.Platform.displayCaps.platformHeight-100))};

	gMan2.show();

    setTimeout(function(){gMan2.hide()},1500);

}, 3000);
*/
}
win.addEventListener('focus', function(){	
var start = Ti.UI.createAlertDialog({title:'Baking Gingerbread Men', message:'Tap the Gingerbread Men as fast as you can for the highest score.', buttonNames:['Start', 'Cancel']})
	start.show();
	start.addEventListener('click', function(e){
		if(e.index == 0){
			game();
		} else{
			win.close();
		}
});
});
