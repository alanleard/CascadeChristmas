
var win = Ti.UI.currentWindow;
//win.navBarHidden=true;

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
var scoreView = Ti.UI.createView({bottom:0, height:30, width:60, backgroundColor:'transparent', touchEnabled:false});

var scoreLabel = Ti.UI.createLabel({
   text:addCommas(score),
   width:60,
    color: '#fff',
    textAlign:'right'
});
scoreView.add(scoreLabel);


var src = Ti.UI.createLabel({
	visible:false,
	backgroundColor:'red',
	height:25,
	width:60,
	color:'#fff',
	textAlign:'center',
	bottom:0,
	borderRadius:3,
	right:0
});
scoreView.add(src);
if(Ti.Platform.osname != 'android'){
	
	win.rightNavButton = scoreView;
	win.title = '60 seconds';
} else {
	
var timeLabel = Ti.UI.createLabel({
	text:'60 Seconds',
	bottom:0,
	right:0,
	color:'#fff',
	height:'auto',
	width:'auto',
	backgroundColor:'#000'
 });


//scoreView.add(timeLabel);
	win.add(scoreView)
}
//win.add(scoreView)

//win.rightNavButton = src;

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

bgImage.animate({left:-(1024-Ti.Platform.displayCaps.platformWidth), curve:Ti.UI.ANIMATION_CURVE_LINEAR, duration:62000});
var count = 60;
setTimeout(function(){
var time = setInterval(function(){
	
	if(count>0){
		count--;
		win.title = count+' seconds'; 
		//timeLabel.text = count+' seconds';
	} else {
		count = 60;
		win.title =  count+' seconds';
		clearInterval(time);
		clearInterval(pop);
		clearInterval(pop2);
		clearInterval(pop3);
		gManLrg.show();
		gManLrg.animate({opacity:1.0, duration:2000});
		//var fbconfirm = Ti.UI.createAlertDialog({title:'Good Job!', message:'You got a score of '+addCommas(score)+'.  The current high score is '+addCommas(Ti.App.Properties.getInt('popscore'))+'\n Do you want post your score to Facebook?', buttonNames:['Yes', 'No']})
	
		
		//fbconfirm.show();
		
		// fbconfirm.addEventListener('click', function(e){
// 			
			// Titanium.Facebook.permissions = ['publish_stream'];
		// if(e.index === 0){
			// var data = {
				// link: "http://www.cascadetheatre.org/Calendar.asp?View=EVENT&EventID=1926&Date=11/25/2011&SectionID=-1",
				// name: "A Cascade Christmas at the Cascade Theatre",
				// caption: "I just got "+addCommas(score)+" points while playing Gingerbreadmen in the Cascade Christmas App!",
				// picture: "http://profile.ak.fbcdn.net/hprofile-ak-ash2/373326_102895329825034_227703005_s.jpg"
			// }
// 			
			// if(Ti.Facebook.loggedIn==true){
				// Titanium.Facebook.requestWithGraphPath('me/feed', data, 'POST', function(x) {
				    // if (x.success) {
// 
				        // Ti.UI.createAlertDialog({title:'You posted your score!',message:"Thanks for sharing your score!"}).show();
// 				        
				    // } 
				    // else {
				        // if (x.error) {
				        	// //popwin.close();
				            // alert("Uh Oh!\n"+x.error);
				        // } else {
				        	// //popwin.close();
				            // //alert("Unkown result");
				        // }
				    // }
				    // });
			// } else {
				// Titanium.Facebook.authorize();
				// Titanium.Facebook.addEventListener('login', function() {
					// Titanium.Facebook.requestWithGraphPath('me/feed', data, 'POST', function(x) {
				    // if (x.success) {
// 
				        // Ti.UI.createAlertDialog({title:'You posted your score!',message:"Thanks for sharing your score!"}).show();
// 				        
				    // } 
				    // else {
				        // if (x.error) {
				        	// //popwin.close();
				            // alert("Uh Oh!\n"+x.error);
				        // } else {
				        	// //popwin.close();
				            // //alert("Unkown result");
				        // }
				    // }
// 			 	
				// });
			// });
		// }			
// 		
		// } else{
			var confirm = Ti.UI.createAlertDialog({title:'Play Again?', message:'You can beat your score of '+addCommas(score)+'.\n The current high score is '+addCommas(Ti.App.Properties.getInt('popscore'))+'.\nDo you want to play again?', buttonNames:['Yes', 'No']});
			if(score>Ti.App.Properties.getInt('popscore')){
			confirm.title = 'High Score!';
			confirm.message='You just achieved a high score!  Your new high score is '+addCommas(score)+', the previous high score was '+addCommas(Ti.App.Properties.getInt('popscore'))+'.\n Do you want to play again?'
			Ti.App.Properties.setInt('popscore', score)
		}
		
			confirm.show();
			confirm.addEventListener('click', function(x){
				if(x.index=== 0){
					game();
				} else{
					win.close();
				}
			});
		}
	//});
//}	
}, 1000);
}, 2500);


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
    gMan.center={x:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformWidth-(size*2)))+(size*2)),y:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformHeight-(size*2)-84))+44)};

	gMan.show();
	var pIntval =setInterval(function(){
       if(multiplier >1){
             multiplier-=pts/10;
       }else{multiplier = pts+10}} ,(length/10));
    setTimeout(function(){gMan.hide();clearInterval(pIntval);},length);
}, time);

gMan.addEventListener('touchstart', function(e){
	Ti.Media.vibrate();
	src.text = addCommas(gMan.point* multiplier);
	//src.center = gMan.center;
	src.show();
	setTimeout(function(){src.hide();},500);
	//Ti.API.info(gMan.point);
	score+=gMan.point* multiplier;
	scoreLabel.text=addCommas(score);
	gMan.hide();
});

return pop;

};
setTimeout(function(){
	pop = gManFactory(4500, 750, 30, 100);
}, Math.floor(Math.random()*5000));

setTimeout(function(){
	pop2 = gManFactory(3500, 1000, 40, 50);
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
var start = Ti.UI.createAlertDialog({title:'Gingerbread Party', message:'Tap the Gingerbread Men as fast as you can for the highest score.', buttonNames:['Start', 'Cancel']})
	start.show();
	start.addEventListener('click', function(e){
		if(e.index == 0){
			game();
		} else{
			win.close();
		}
});
});
