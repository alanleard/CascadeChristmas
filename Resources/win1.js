var win = Ti.UI.currentWindow;

var curtainTop = Ti.UI.createView({
	backgroundImage:'images/curtain-top.png',
	height:86,
	//width:320,
	top:0,
	zIndex:100
});

var curtainMain = Ti.UI.createView({
	backgroundImage:'images/curtain-main.png',
	//backgroundColor:'red',
	bottom:-20,
	height:Ti.Platform.displayCaps.platformHeight-70,
	top:0,
	left:0,
	right:0,
	zIndex:50
});
var sign = Titanium.UI.createImageView({
	image:'images/sign.png',
	top:-150,
	height:180,
	width:200,
	anchorPoint:{x:0.5,y:0},
	zIndex:75
});

win.add(curtainMain);
win.add(sign);
win.add(curtainTop);
var scrollable = Ti.UI.createScrollableView({
	top:0,
	bottom:0,
	left:0,
	right:0,
	showPagingControl:true,
	pagingControlHeight:10
});

var view1 = Ti.UI.createView({layout:'vertical'});
var header = Ti.UI.createImageView({
	image:"images/header.png",
	width:282,
	height:100,
	top:88
});
view1.add(header);

var act1Header = Ti.UI.createLabel({
	text:"Act 1",
	top:0,
	height:'auto',
	color:'#000',
	textAlign:'center',
	font:{fontSize:24, fontWeight:'bold'}
});
view1.add(act1Header);
var act1 = Ti.UI.createLabel({
	text:"Twas the night Before Christmas\nWhen Christmas Comes to Town\nSantas World\nPure Imagination\nIce Skating\nGingerbread Party\nGretchen's Dance\nBaby it's Cold Outside\nBelieve",
	top:10,
	height:'auto',
	color:'#000',
	textAlign:'center',
	font:{fontSize:14}
});
view1.add(act1);

var view2 = Ti.UI.createView({layout:'vertical'});
var header2 = Ti.UI.createImageView({
	image:"images/header.png",
	width:282,
	height:100,
	top:88
});
view2.add(header2);
var act2Header = Ti.UI.createLabel({
	text:"Act 2",
	top:0,
	height:'auto',
	color:'#000',
	textAlign:'center',
	font:{fontSize:24, fontWeight:'bold'}
});
view2.add(act2Header);
var act2 = Ti.UI.createLabel({
	text:"Tap Medley\nSneaky Santa\nI'll Be Home for Christmas\nSing, Swing, Sing\nSanta Baby\nSnowball Fight\n12 Days of a Country Christmas\nMost Wonderful Time to the Year\nThe Nativity\nSpirit of the Season",
	top:10,
	height:'auto',
	color:'#000',
	textAlign:'center',
	font:{fontSize:14}
});
view2.add(act2);
var view3 = Ti.UI.createView();
var directorImage = Ti.UI.createImageView({
	image:'images/jana.jpg',
	top:88,
	left:10,
	width:85,
	height:113,
	borderColor:'#000',
	borderWidth:2
});
view3.add(directorImage);

var directorTitle = Ti.UI.createLabel({
	text:"Director's Notes",
	font:{fontSize:20},
	left:95,
	top:130,
	color:'#cc0000',
	height:'auto',
	right:10,
	textAlign:'center',
	font:{fontSize:24, fontWeight:'bold'},
	shadowColor:'#000',
	shadowOffset:{x:1,y:1}
});
view3.add(directorTitle);
var directorsNotes = Ti.UI.createLabel({
	text:"Thank you for sharing your holiday with us, and keeping this annual tradition alive in downtown Redding. With the merging of this production and the historic Cascade Theatre, the show is completely fresh and new, and will be a treat for the entire family.\n\nIt has been my great privilege to create, develop and direct this show. I have been involved with this show since it’s inception, and I am proud to continue this tradition. Through the years I have been honored to grow as an artist, singer and dancer because of my involvement with this production.\n\nThis year you will see some new faces, as well as some familiar friends giving new life to the show. Each and every person involved has stepped outside of their comfort zone to challenge themselves as performers, artists, and leaders.\n\nI am looking forward to our next season with our upcoming production of “Hairspray”, which is opening in March, 2012. Many of the performers that you see today will be gracing the stage once again in hairdos that you won’t want to miss.\n\nNow, it’s time to unlock your imagination and join us on this adventure through Santa’s world, and the fantasy of this magical season through the eyes of our youth. We are honored and privileged to be expressing the joys and wonders of Christmas time for future generations.\n\nOn behalf of our cast and crew, we hope that this show brings a touch of magic as we kick off the 2011 holiday season.\n\nCheers to you, and thank you so much for supporting our holiday tradition at the historic Cascade Theater.\n\nJana Pulcini-Leard\nArtistic Director",
	top:0,
	left:10,
	right:10,
	height:'auto',
	color:'#000',
	font:{fontSize:16}
});

var scroll = Ti.UI.createScrollView({
	top:205,
	contentHeight:'auto',
	contentWidth:'auto',
	bottom:0
});
scroll.add(directorsNotes);

view3.add(scroll);
if(Ti.Platform.osname == 'ipad'){
	act1.font={fontSize:22};
	act2.font={fontSize:22};
	act1.top=20;
	act2.top=20;
	act2.text="Tap Medley\n\nSneaky Santa\n\nI'll Be Home for Christmas\n\nSing, Swing, Sing\n\nSanta Baby\n\nSnowball Fight\n\n12 Days of a Country Christmas\n\nMost Wonderful Time to the Year\n\nThe Nativity\n\nSpirit of the Season";
	act1.text="Twas the night Before Christmas\n\nWhen Christmas Comes to Town\n\nSantas World\n\nPure Imagination\n\nIce Skating\n\nGingerbread Party\n\nGretchen's Dance\n\nBaby it's Cold Outside\n\nBelieve";
	header.image="images/header@2x.png";
	header2.image="images/header@2x.png";
	header.width=464;
	header.height=200;
	header2.width=464;
	header2.height=200;
	act1Header.font={fontSize:32, fontWeight:'bold'};
	act2Header.font={fontSize:32, fontWeight:'bold'};
	directorsNotes.font={fontSize:20};
	directorTitle.font={fontSize:28, fontWeight:'bold'};
}



var creditTitle = Ti.UI.createLabel({
	text:'Credits',
	top:10, textAlign:'center',height:'auto', font:{fontSize:24, fontWeight:'bold'}, color:'#000'});
	
var credits = Ti.UI.createLabel({
	//backgroundImage:'images/special.png',
	top:50,
	height:'auto',
	width:Ti.Platform.displayCaps.platformWidth-10,
	font:{fontSize:14},
	textAlign:'center',
	minFontSize:8,
	color:'#000',
	text:'~Artistic Director & Producer~\nJana Pulcini-Leard\n\n~Costume Designer~\nMolly Barber\n\n~Dance Captain~\nMichelle Marks\n\n~Choreographers~\nKristi Webber, Michelle Marks & Rhapsody Violetti\n\n~Vocal Director~\nTrish Harris\n\n~Costume Assistants~\nRobyn Tyler, Obioma Officer, Carolyn Placide, Tina Marty, Marti Leard\n\n~Costume Contributors~\nHumor Shop, Shasta College & Shasta High School\n\n~Production Assistant~\nLyn Regan\n\n~Lighting Design & Operator~\nBrandon Stewart\n\n~Technical Director~\nTodd Tracy\n\n~Stage Manager~\nDean Williams\n\n~Assistant Stage Managers~\nDaniel Darling & David Baker\n\n~Audio Technician~\nTodd Tracy\n\n~Box Office Supervisor~\nHaley Bagnaschi\n\n~House Manager~\nLyn Rosten\n\n~Print Design~\nInHouse Marketing\n\n~Program Sales~\nJulie DePrada & Your Girls Friday Marketing Solutions\n\n~Custom Backdrop Artist~\nDavid Fraser\n\n~Make-Up Designers & Hairstylists~\nCollette, Scott & Sydney Stanger\n\n~Set Design & Construction~\nBest Choice Home Improvement, David Fraser, Matt Goodman & Jerry Rice\n\n~Poster Distribution Coordinator~\nKim Acuna\n\n~Craft Services Manager~\nJennifer Marty\n\n~Youth & Student Manager~\nTina Arons\n\n~Props & Furniture~\nWestside Performing Arts Company, Alan Leard\n\n~Prop Coordinators~\nJana Pulcini-Leard, Kristi Webber, Richard Pulcini & Victoria Graham\n\n~Soundtrack Composer~\nTravis Micheal\n\n~Pre Show Cooridnator~\nJulie DePrada & Your Girl Friday Marketing Solutions\n\n~Production Photographer~\nMichael Burke\n\n~Program & Graphic Design~\nInHouse Marketing\n\n~Audition Team~\nJana Pulcini-Leard, Alan Leard, Michelle Marks, Kristi Webber, Trish Harris, Tina Marty, Peggy Baker, Tina Arons, Lyn Regan, Julie DePrada \n\n~Accompanist~\nJonathon Narducci\n\n~Set Construction Space provided by~\nRiverfront Playhouse, Downtown\n\n~Rehearsal Space provided by~\nCascade Theatre, Celebration Studios, Front & Center Dance Studio & Westside Performing Arts Company\n\n~Storage Space provided by~\nWard Gandy\n\n~Nativity Script Writers~\nCal Hunter & Jana Pulcini-Leard\n\n~Violinist~\nKendra Wieck'
});



var creditScroll = Ti.UI.createScrollView({
	top:85,
	contentHeight:'auto',
	contentWidth:'auto',
	left:0,
	right:0,
	bottom:0,
	minZoomScale:1.0,
	maxZoomScale:3.0,
	zoomScale:1.0
});
creditScroll.add(creditTitle);
creditScroll.add(credits);
if(Ti.Platform.osname == 'ipad'){
	credits.backgroundImage = 'images/credits@2x.png';
	creditScroll.zoomScale = 1.0;
}

var thankTitle = Ti.UI.createLabel({
	text:'Special Thanks to:',
	color:'#000',
	top:10, textAlign:'center',height:'auto', font:{fontSize:24, fontWeight:'bold'}});

var thanks = Ti.UI.createLabel({
	//backgroundImage:'images/special.png',
	top:50,
	height:'auto',
	width:Ti.Platform.displayCaps.platformWidth-10,
	font:{fontSize:14},
	textAlign:'center',
	minFontSize:8,
	color:'#000',
	text:'Gary Desmond & Armando Mejorado\n\nPaige Allen & The Humor Shop\n\nJason & Peggy Baker with Celebration Studio\n\nRecord Searchlight\n\nAfter 5 Magazine\n\nEnjoy Magazine & InHouse Marketing\n\nBest Choice Home Improvement\n\nViva Downtown\n\nLisa Collins\n\nLinda Bott KCNR\n\nRobert Soffian & Shasta College\n\nWestside Performing Arts Company\n\nSoleus\n\nDan Kupsky & Riverfront Playhouse\n\nFront & Center Dance Studio\n\nAce Valley Hardware\n\nDebbie Johnson\n\nValerie Ing-Miller & Jefferson Public Radio\n\nMichael Burke Photography\n\nShasta Regional Medical Center\n\nLowe’s\n\nWard Gandy\n\nNaomi Yamamoto & Results Radio\n\nRandie Meyer & Redding Radio\n\nMariah & Jose at Mix 101\n\nDoni Chamberlain-Greenberg & ANewsCafe.com\n\nLorraine McGraw & Channel 7'
});
if(Ti.Platform.osname == 'ipad'){
	
	//thanks.backgroundImage='images/special@2x.png';
	//thanks.width = 500;
	//thanks.height = 1202;
}

if(Ti.Platform.osname == 'android'){
	credits.top= 125;
creditTitle.top = 85;
thanks.top = 85;
thanks.top = 125;}

var thanksScroll = Ti.UI.createScrollView({
	top:85,
	contentHeight:'auto',
	contentWidth:'auto',
	bottom:0,
	left:0,
	right:0,
	minZoomScale:1.0,
	maxZoomScale:3.0,
	
});
thanksScroll.add(thankTitle);
thanksScroll.add(thanks);

var bios = [
{	name:'MOLLY BARBER, \nCostume Designer',
	text:'Molly attended Oregon State University’s Apparel Design program and graduated Cum Laude in June 2010 with two bachelor’s degrees in Merchandising Management and Apparel Design. She also took home the senior fashion show award for Overall Best Senior Collection. During school, she worked for the university, sewing and designing costumes for their shows. Her husband’s job brought her to Redding after graduation and she was chosen to do the costumes for the Cascade Theatre’s A Cascade Christmas as well as its spring show, Hairspray. Ultimately, she would love to design costumes that are original and exciting enough to build some notoriety and eventually lead to a position designing for the Oregon Shakespeare Festival in Ashland.'
},
{	name:'TRISH HARRIS, \nMusic Director',
	text:'Trish is proud to say she is a Redding native. She graduated from Shasta High School and Shasta College before going to the HARTT School of Music in Hartford, Conn., to pursue her studies in vocal performance. Trish is currently the Artistic and Music Director for the Westside Performing Arts Company, and has been the music director for The Dance Project for the last four years. Trish feels very blessed to be able to fulfill her dreams in her hometown as a full-time private voice instructor, performing arts advocate and professional theatre performer. Her most recent theatrical performance was starring as Maria in The Dance Project’s The Sound of Music. She looks forward to directing the music for the Cascade Theater’s upcoming production of Hairspray in 2012.'
},
{	name:'MICHELLE MARKS, \nDance Captain & Singers’ Choreographer',
	text:'Michelle began dancing at 5 years old, and by the age of 10, her love of ice skating became her competitive and artistic focus. As a cheerleader and member of the school’s elite dance team in high school, Michelle acquired the skills needed during college to be a cheer/dance instructor and choreographer for summer camps. After graduating from Sacramento State University, Michelle became a professional cheerleader for the NFL’s Oakland Raiders. She spent four seasons as a Raiderette, and was awarded Dancer of the Year. Michelle had the opportunity to be a dancer in A Cascade Christmas last year, which sparked her newfound love of theatrical productions. Michelle is thrilled to work under the direction of Jana Pulcini-Leard, and is very thankful she can share in this season’s new and amazing production, alongside the incredibly talented cast and Cascade Theatre family.'
},
{	name:'KRISTI WEBBER, \nYouth & Student Choreographer',
	text:'Kristi grew up dancing at a number of local studios in the Redding area. After graduation, she opened Front and Center Dance Studio and her non-profit dance team Spotlight Company Dancers. Front and Center is now celebrating its 10th year in business and just moved to a new location on Cypress Avenue. She has choreographed for many shows, including Summer Theatre Academy (2009,2010 and 2011), A Grand Night for Singing, Happy Days The Musical, Club Dead and Masquerade Murders. She also choreographs for Anderson High School’s dance team. This is Kristi’s seventh year dancing in A Cascade Christmas and she has thoroughly enjoyed choreographing and being more involved this season. She is also working on You’re a Good Man, Charlie Brown, which opens in January. When Kristi isn’t working at her studio, she stays busy raising her 19-month-old daughter.'
},
{	name:'RHAPSODY VIOLETTI, \nGuest Choreographer',
	text:'Rhapsody grew up in Northern California, where she found her love and passion for dance at a young age. Having followed her dreams, Rhapsody has worked as a professional dancer in Los Angeles for the past 10 years and has danced alongside artists including Ricky Martin, Gloria Estefan, Christina Aguilera, Pink, Mya, Anastacia, Britney Spears and Jay-Z. She has performed on the Grammy Awards, MTV Music Video Awards, ACMAs and TV Land Awards. Her television credits include Dancing with the Stars, Scrubs, House, Cold Case, Nip Tuck, Passions, 7th Heaven and Ron Benise’s Nights of Fire and Spanish Guitar on PBS, to name a few. Some of Rhapsody’s commercial credits include iPod, GAP, Chevy, Visa, Pepsi, McDonald’s, and Fruit of the Loom. You can see Rhapsody in Zach Efron’s 17 Again and Spring Break Down with Saturday Night Live’s Amy Poehler.'
}];

var bioScroll = Ti.UI.createScrollView({top:85, bottom:0, left:0, right:0,contentHeight:'auto',
	contentWidth:'auto', });
var bioView = Ti.UI.createView({layout:'vertical', height:'auto'});
var staffLabel = Ti.UI.createLabel({text:'Staff Bios', top:10, textAlign:'center', 	height:'auto', font:{fontSize:24, fontWeight:'bold'}});

bioView.add(staffLabel);

if(Ti.Platform.osname == 'android'){
	credits.top= 125;
creditTitle.top = 85;
thankTitle.top = 85;
thanks.top = 125;
bioView.top = 85;}

for (var i = 0; i<5; i++){
	
	var nameLabel = Ti.UI.createLabel({text:bios[i].name, top:20,bottom:5, left:10, right:10, height:'auto', color:'#000', font:{fontSize:16, fontWeight:'bold'}});
	var bioLabel = Ti.UI.createLabel({text: bios[i].text, top:5, bottom:10, left:10, right:10, height:'auto', color:'#000', font:{fontSize:14}});
	bioView.add(nameLabel);
	bioView.add(bioLabel);
}

bioScroll.add(bioView);
scrollable.views = [view1, view2, view3, bioScroll, thanksScroll, creditScroll];

win.add(scrollable);

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

if(Ti.Platform.osname == 'ipad'){
	c.top = -360;
	sign.top=-360;
	sign.image = 'images/sign@2x.png';
	sign.height = 360;
	sign.width = 400;
}

var count = 5;
d.addEventListener('complete', function(){
	sign.top=80;
});

c.addEventListener('complete', function(){
	sign.top=-150;
	if(Ti.Platform.osname == 'ipad'){
	sign.top=-360;
	}
});

win.addEventListener('open', function(){
	setTimeout(function(){
		sign.animate(d);
	}, 1000);
});

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


