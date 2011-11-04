var win = Ti.UI.currentWindow;
var actInd = Ti.UI.createActivityIndicator({
	style: Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
	color:'#fff'
});
actInd.show();

var castInfo = [
	{name:'Amanda Bowman',role:'STUDENT DANCER',image:'AmandaBowman.jpg'},
	{name:'Angela Baumgardner',role:'SINGER & PARENT & TAP',image:'AngelaBaumgardner.jpg'},
	{name:'Annalise Dank',role:'YOUTH DANCER & GINGERBREAD',image:'AnnaliseDank.jpg'},
	{name:'Bailey Fator',role:'SINGER & PARENT ',image:'BaileyFator.jpg'},
	{name:'Bryan Storm',role:'SINGER & PARNT & SANTA DOUBLE',image:'BryanStorm.jpg'},
	{name:'Cal Hunter',role:'SANTA',image:'CalHunter.jpg'},
	{name:'Cameryn Tyler',role:'YOUTH DANCER & PUPPET',image:'CamerynTyler.jpg'},
	{name:'Gabrielle Dank',role:'YOUTH DANCER & GINGERBREAD',image:'GabrielleDank.jpg'},
	{name:'Jamie Severtson',role:'ADULT DANCER & TAP',image:'JamieSevertson.jpg'},
	{name:'Janelle Reynolds',role:'ADULT DANCER & TAP',image:'JanelleReynolds.jpg'},
	{name:'Jennifer Marty',role:'SINGER & PARENT & TAP',image:'JenniferMarty.jpg'},
	{name:'Joelee Arons',role:'STUDENT DANCER & TAP',image:'JoeleeArons.jpg'},
	{name:'Kaitlyn Broadway',role:'YOUTH DANCER',image:'KaitlynBroadway.jpg'},
	{name:'Kaitlyn Murphy',role:'YOUTH DANCER',image:'KaitlynMurphy.jpg'},
	{name:'Kami Regan',role:'YOUTH DANCER',image:'KamiRegan.jpg'},
	{name:'Kenna Franks',role:'ADULT DANCER & TAP',image:'KennaFranks.jpg'},
	{name:'Kim Acuña',role:'SINGER & PARENT ',image:'KimAcuna.jpg'},
	{name:'Kristi Webber',role:'ADULT DANCER & TAP',image:'KristiWebber.jpg'},
	{name:'Lindsay Baker',role:'YOUTH DANCER',image:'LindsayBaker.jpg'},
	{name:'Maddie Schuette',role:'STUDENT DANCER & ICE SKATER',image:'MaddieSchuette.jpg'},
	{name:'Madelynne West',role:'STUDENT DANCER',image:'MadelynneWest.jpg'},
	{name:'Matthew Goodman',role:'SINGER & PARENT & SANTA DOUBLE',image:'MatthewGoodman.jpg'},
	{name:'Meghan Cumming',role:'ADULT DANCER ',image:'MeghanCumming.jpg'},
	{name:'Natalie Baker',role:'YOUTH DANCER & Believe Dad',image:'NatalieBaker.jpg'},
	{name:'Nathan Saunders',role:'SINGER & PARENT & SANTA DOUBLE',image:'NathanSaunders.jpg'},
	{name:'Olivia Ramsour',role:'ADULT DANCER & TAP',image:'OliviaRamsour.jpg'},
	{name:'Robert Milhouse II',role:'ADULT DANCER',image:'RobertMilhouseII.jpg'},
	{name:'Spencer MacDowell',role:'ADULT DANCER',image:'SpencerMacDowell.jpg'},
	{name:'Stephanie Foos',role:'ADULT DANCER',image:'StephanieFoos.jpg'},
	{name:'Jana Leard',role:'DIRECTOR',image:'JanaLeard.jpg'},
	{name:'Trish Spinner',role:'VOCAL DIRECTOR',image:'TrishSpinner.jpg'}
];

var scrollView = Ti.UI.createScrollView({
	contentHeight:'auto',
	contentWidth:'auto',
	minZoomScale:1.0,
	maxZoomScale:3.0,
	zoomScale:1.0,
	top:50,
	bottom:0,
	left:0,
	right:0,
	height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth
});
win.add(scrollView);
var view = Ti.UI.createView({
	layout:'horizontal',
	height:'auto',
	width:Ti.Platform.displayCaps.platformWidth
});

scrollView.add(view);

if(Ti.Platform.osname != 'android'){
	win.add(actInd);
}

var length = castInfo.length;
for(var i=0; i<length; i++){
	var container = Ti.UI.createView({layout:'vertical', width:90, height:100, left:10, top:20, headshot:castInfo[i].image, name:castInfo[i].name, role:castInfo[i].role});
	var pic = Ti.UI.createImageView({
		image:'images/headshots/thumbnails/'+container.headshot,
		height:90,
		width:90,
		touchEnabled:false,
		hiRes:true
	});
	container.add(pic);
	var name = Ti.UI.createLabel({
		text:container.name,
		color:'#fff',
		font:{fontSize:10},
		height:20,
		width:90,
		textAlign:'center',
		touchEnabled:false,
		minimumFontSize:8
	});
	container.add(name);
	
	view.add(container);

}
actInd.hide();
	view.addEventListener('touchend', function(e){
		if(e.source.name){
			e.source.opacity = 0.5;
		setTimeout(function(){
			e.source.opacity = 1.0;
		}, 500);
		var flipWin = Ti.UI.createWindow({
			title:e.source.name,
			barColor:'#000',
			top:0,
			bottom:0,
			minimumFontSize:8
		});
		var mainImage = Ti.UI.createImageView({
			image:'images/headshots/'+e.source.headshot
		});
		flipWin.add(mainImage);
		var bio = Ti.UI.createLabel({
	    	text:e.source.name+"\n"+e.source.role,
	    	backgroundColor:'#fff',
	    	height:40,
	    	textAlign:'center',
	    	bottom:0,
	    	opacity:0.85,
	    	width:Ti.Platform.displayCaps.platformWidth,
	    	color:'#000'
	    });
	    
	    flipWin.add(bio);
	    
	    bio.addEventListener('touchend', function(){
	    	if(bio.height == 40){
	    		bio.animate({height:Ti.Platform.displayCaps.platformHeight, duration:300});
	    		setTimeout(function(){bio.height = Ti.Platform.displayCaps.platformHeight;;}, 500);
	    	} else {
	    		bio.animate({height:40, duration:300});
	    		setTimeout(function(){bio.height = 40;}, 500);
	    	}
	    });
		
		//flipWin.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT})
		Titanium.UI.currentTab.open(flipWin,{animated:true, transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
		}
	})








