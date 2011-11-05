var win = Ti.UI.currentWindow;

var curtainTop = Ti.UI.createView({
	backgroundImage:'images/curtain-top.png',
	height:86,
	//width:320,
	top:0
});

var curtainMain = Ti.UI.createView({
	backgroundImage:'images/curtain-main.png',
	//backgroundColor:'red',
	bottom:-20,
	height:Ti.Platform.displayCaps.platformHeight-70,
	top:0,
	left:0,
	right:0
});
var scrollable = Ti.UI.createScrollableView({
	top:0,
	bottom:0,
	left:0,
	right:0,
	showPagingControl:true,
	pagingControlHeight:10
});

var view1 = Ti.UI.createView();
var program = Ti.UI.createLabel({
	text:"Act 1: When Christmas Comes to Town\n  Scene 1\n  Scene 2\n  Scene 3\n\nAct 2: It's Christmas Time\n  Scene 1\n  Scene 2\n  Scene 3",
	top:100,
	left:10,
	height:'auto',
	color:'#fff',
	font:{fontFamily:'Times New Roman', fontSize:16}
});
view1.add(program);

var view2 = Ti.UI.createView();
var directorImage = Ti.UI.createImageView({
	image:'images/headshots/thumbnails/JanaLeard.jpg',
	top:100,
	left:10,
	width:100,
	height:150
});
view2.add(directorImage);
var directorTitle = Ti.UI.createLabel({
	text:"Director's Notes",
	font:{fontSize:20},
	left:160,
	top:160,
	color:'#fff',
	height:'auto',
	right:10,
	textAlign:'center'
});
view2.add(directorTitle);
var directorsNotes = Ti.UI.createLabel({
	text:"Thank you for sharing your holiday with us and keeping this annual tradition alive in downtown.  With the merging of this production and the Cascade Theatre, the show has taken on a life of it's own and will truly be established as a family tradition for us all.  The support of the theatre, their staff and our community has helped create the most encompassing show to date and we are excited to share it with you.  It has been a great privilege to create, develop and direct this show.  Each and every person involved has gone beyond their comfort zone to challenge themselves as performers, artists and leaders.  Many new faces have stepped forward to help in making this show possible. We also have many familiar faces who helped create this years show and give new life to this experience.  I am proud to continue on this tradition that I have personally been a part of since it's inception. It's been an honor to grow as an artist, singer, dancer and performer through the years.  I am very excited to take on the role of director for the 2011 A Cascade Christmas show.  I am also excited for the next season with our upcoming production of Hairspray which is  opening in March 2012. Many of the performers you see here today will be gracing the stage once again in hairdo's you won't want to miss.  I now invite you to unlock your imagination and join us on this adventure through Santas world and the fantasy of this magical season through the eyes of our youth.  We are honored and privileged to be expressing the joys and wonders of Christmas time for our future generations to enjoy.  I hope you find a part in tonight's show that connects with you and your holiday traditions.  As a cast and crew, we can only hope that this show helps bring a little touch of magic to you and your family as we kick off the 2011 holiday season.  Cheers to you and yours & thank you so much for supporting our holiday tradition at the historic Cascade Theatre.",
	top:0,
	left:10,
	right:10,
	height:'auto',
	color:'#fff',
	font:{fontFamily:'Times New Roman', fontSize:16}
});

var scroll = Ti.UI.createScrollView({
	top:260,
	contentHeight:'auto',
	contentWidth:'auto',
	bottom:0
});
scroll.add(directorsNotes);

view2.add(scroll);

scrollable.views = [view1, view2];

win.add(scrollable);


win.add(curtainMain);

var c = Titanium.UI.createAnimation();
c.top = -150;
c.duration = 1000;
c.curve = Ti.UI.ANIMATION_CURVE_EASE_IN;

var d = Titanium.UI.createAnimation();
d.top = 80;
d.duration = 1000;
d.curve = Ti.UI.ANIMATION_CURVE_EASE_OUT;
//
// TOP LEFT
//
var sign = Titanium.UI.createImageView({
	image:'images/sign.png',
	top:-150,
	height:180,
	width:200,
	anchorPoint:{x:0.5,y:0}
});
win.add(sign);

var count = 5;
d.addEventListener('complete', function(){
	sign.top=80;
});

c.addEventListener('complete', function(){
	sign.top=-150;
})

win.addEventListener('open', function(){
	sign.animate(d);
});

win.add(curtainTop);

win.addEventListener('touchend', function(){
	if(curtainMain.bottom == -20){
		
		curtainMain.animate({ bottom:(Ti.Platform.displayCaps.platformHeight*2), duration:1500});
		sign.animate(c);
		
		setTimeout(function(){curtainMain.bottom = (Ti.Platform.displayCaps.platformHeight*2);}, 1500);
		
		
	} else {
		var curtainAnimation = Titanium.UI.createAnimation();
			curtainAnimation.duration = 1000;
			curtainAnimation.curve = Ti.UI.ANIMATION_CURVE_EASE_OUT;
			curtainAnimation.bottom = -20;
			curtainAnimation.top = 0;
		curtainMain.animate(curtainAnimation);
		
		setTimeout(function(){curtainMain.bottom = -20; curtainMain.top = 0;},1000);
		
		curtainAnimation.addEventListener('complete', function(){
			sign.animate(d);
		});
	}
	
});


