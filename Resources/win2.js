var win = Ti.UI.currentWindow;
win.backgroundColor = '#fff';

var scrollable = Ti.UI.createScrollableView({
	top:0,
	bottom:0,
	left:0,
	right:0,
	showPagingControl:true,
	pagingControlHeight:10
});
win.add(scrollable);
var castInfo = [
	{name:'Kim Acuña',role:'',image:'KimAcuna'},
	{name:'Mark Amacker', role:'', image:'MarkAmacker'},
	{name:'Angela Baumgardner',role:'',image:'AngelaBaumgardner'},
	{name:'Meghan Cumming',role:'',image:'MeghanCumming'},
	{name:'Bailey Fator',role:'',image:'BaileyFator'},
	{name:'Stephanie Foos',role:'',image:'StephanieFoos'},
	{name:'Jennifer Marty',role:'',image:'JenniferMarty'},
	{name:'Kenna Franks',role:'',image:'KennaFranks'},
	{name:'Matthew Goodman',role:'',image:'MatthewGoodman'},
	{name:'Victoria Graham', role:'', image:'VictoriaGraham'},
	{name:'Cal Hunter',role:'',image:'CalHunter'},
	{name:'Kristen Lawrence', role:'', image:'KristenLawrence'},
	{name:'Spencer MacDowell',role:'',image:'SpencerMacDowell'},
	{name:'Michelle Marks', role:'', image:'MichelleMarks'},
	{name:'Robert Milhouse II',role:'',image:'RobertMilhouseII'},
	{name:'Olivia Ramsour',role:'',image:'OliviaRamsour'},
	{name:'Janelle Reynolds',role:'',image:'JanelleReynolds'},
	{name:'Nathan Saunders',role:'',image:'NathanSaunders'},
	{name:'Jamie Severtson',role:'',image:'JamieSevertson'},
	{name:'Bryan Storm',role:'',image:'BryanStorm'},
	{name:'Kristi Webber',role:'',image:'KristiWebber'},
	{name:'Kendra Wieck', role:'', image:'KendraWieck'}
];
var students = [	
	{name:'Joelee Arons',role:'',image:'JoeleeArons'},
	{name:'Amanda Bowman',role:'',image:'AmandaBowman'},
	{name:'Samantha Burke', role:'', image:'SamanthaBurke'},
	{name:'Gracie Fagan', role:'', image:'GracieFagan'},
	{name:'Maddie Schuette',role:'',image:'MaddieSchuette'},
	{name:'Madelynne West',role:'',image:'MadelynneWest'}
];
var youth = [
	{name:'Lindsay Baker',role:'',image:'LindsayBaker'},
	{name:'Natalie Baker',role:'',image:'NatalieBaker'},
	{name:'Kaitlyn Broadway',role:'',image:'KaitlynBroadway'},
	{name:'Annalise Dank',role:'',image:'AnnaliseDank'},
	{name:'Gabrielle Dank',role:'',image:'GabrielleDank'},
	{name:'Kaitlyn Murphy',role:'',image:'KaitlynMurphy'},
	{name:'Kami Regan',role:'',image:'KamiRegan'},
	{name:'Cameryn Tyler',role:'',image:'CamerynTyler'}
];

var scrollView1 = Ti.UI.createScrollView({
	contentHeight:'auto',
	contentWidth:'auto',
	minZoomScale:1.0,
	maxZoomScale:3.0,
	zoomScale:1.0,
	top:0,
	bottom:0,
	left:0,
	right:0,
	//height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth
});
var view1title = Ti.UI.createLabel({
	text:'Adult Cast',
	top:5, textAlign:'center',height:'auto', font:{fontSize:24, fontWeight:'bold'}});

scrollView1.add(view1title);
var view1 = Ti.UI.createView({
	top:40,
	layout:'horizontal',
	height:'auto',
	width:Ti.Platform.displayCaps.platformWidth
});

if(Ti.Platform.osname == 'android'){
	view1.height = 1200;
}

var length = castInfo.length;
for(var i=0; i<length; i++){
	var container = Ti.UI.createView({layout:'vertical', width:90, height:104, left:10, top:5, bottom:5, headshot:castInfo[i].image, name:castInfo[i].name, role:castInfo[i].role});
	var pic = Ti.UI.createImageView({
		image:'images/headshots/thumbnails/'+container.headshot+'.jpg',
		height:90,
		width:60,
		touchEnabled:false,
		borderWidth:2, 
		borderColor:'#000' 
		//hiRes:true
	});
	container.add(pic);
	var name = Ti.UI.createLabel({
		text:container.name,
		color:'#000',
		font:{fontSize:10},
		top:3,
		height:10,
		width:90,
		textAlign:'center',
		touchEnabled:false,
		minimumFontSize:8
	});
	container.add(name);
	if(Ti.Platform.osname == 'ipad'){
		container.height = 230;
		container.width = 180;
		container.left = 5;
		container.right = 5;
		pic.height=180;
		name.height = 20;
		pic.width=120;
		name.width=120;
		name.font={fontSize:16};
		name.minimumFontSize=12;
		pic.image='images/headshots/thumbnails/'+container.headshot+'@2x.jpg';
		}
	
	view1.add(container);

}

scrollView1.add(view1);
scrollable.views = [scrollView1];
	view1.addEventListener('touchend', function(e){
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
			minimumFontSize:8,
			backButtonTitle:'Cast'
		});
		var mainImage = Ti.UI.createImageView({
			image:'images/headshots/'+e.source.headshot+'.jpg'
		});
		flipWin.add(mainImage);
		// var bio = Ti.UI.createLabel({
	    	// text:e.source.name+"\n"+e.source.role,
	    	// height:40,
	    	// textAlign:'center',
	    	// top:0,
	    	// width:Ti.Platform.displayCaps.platformWidth,
	    	// color:'#000'
	    // });
// 	    
	    // flipWin.add(bio);
// 	    
	    // bio.addEventListener('touchend', function(){
	    	// if(bio.height == 40){
	    		// bio.animate({height:Ti.Platform.displayCaps.platformHeight, duration:300});
	    		// setTimeout(function(){bio.height = Ti.Platform.displayCaps.platformHeight;;}, 500);
	    	// } else {
	    		// bio.animate({height:40, duration:300});
	    		// setTimeout(function(){bio.height = 40;}, 500);
	    	// }
	    // });
		
		//flipWin.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT})
		Titanium.UI.currentTab.open(flipWin,{animated:true, transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
		}
	});

	
var scrollView2 = Ti.UI.createScrollView({
	contentHeight:'auto',
	contentWidth:'auto',
	minZoomScale:1.0,
	maxZoomScale:3.0,
	zoomScale:1.0,
	top:0,
	bottom:0,
	left:0,
	right:0,
	//height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth
});

var view2title = Ti.UI.createLabel({
	text:'Student Cast',
	top:5, textAlign:'center',height:'auto', font:{fontSize:24, fontWeight:'bold'}});


scrollView2.add(view2title);
var view2 = Ti.UI.createView({
	top:40,
	layout:'horizontal',
	height:'auto',
	width:Ti.Platform.displayCaps.platformWidth
});

if(Ti.Platform.osname == 'android'){
	view2.height = 1200;
}

var length = students.length;
for(var i=0; i<length; i++){
	var container = Ti.UI.createView({layout:'vertical', width:90, height:104, left:10, top:5, bottom:5, headshot:students[i].image, name:students[i].name, role:students[i].role});
	var pic = Ti.UI.createImageView({
		image:'images/headshots/thumbnails/'+container.headshot+'.jpg',
		height:90,
		width:60,
		touchEnabled:false,
		borderWidth:2, 
		borderColor:'#000' 
		//hiRes:true
	});
	container.add(pic);
	var name = Ti.UI.createLabel({
		text:container.name,
		color:'#000',
		font:{fontSize:10},
		top:4,
		height:10,
		width:90,
		textAlign:'center',
		touchEnabled:false,
		minimumFontSize:8
	});
	container.add(name);
	if(Ti.Platform.osname == 'ipad'){
		container.height = 230;
		container.width = 180;
		container.left = 5;
		container.right = 5;
		pic.height=180;
		pic.width=120;
		name.height = 20;
		name.width=120;
		name.font={fontSize:16};
		name.minimumFontSize=12;
		pic.image='images/headshots/thumbnails/'+container.headshot+'@2x.jpg';
		}
	
	view2.add(container);

}

scrollView2.add(view2);
scrollable.views = [scrollView1, scrollView2];
	view2.addEventListener('touchend', function(e){
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
			minimumFontSize:8,
			backButtonTitle:'Cast'
		});
		var mainImage = Ti.UI.createImageView({
			image:'images/headshots/'+e.source.headshot+'.jpg'
		});
		flipWin.add(mainImage);
		// var bio = Ti.UI.createLabel({
	    	// text:e.source.name+"\n"+e.source.role,
	    	// height:40,
	    	// textAlign:'center',
	    	// top:0,
	    	// width:Ti.Platform.displayCaps.platformWidth,
	    	// color:'#000'
	    // });
// 	    
	    // flipWin.add(bio);
// 	    
	    // bio.addEventListener('touchend', function(){
	    	// if(bio.height == 40){
	    		// bio.animate({height:Ti.Platform.displayCaps.platformHeight, duration:300});
	    		// setTimeout(function(){bio.height = Ti.Platform.displayCaps.platformHeight;;}, 500);
	    	// } else {
	    		// bio.animate({height:40, duration:300});
	    		// setTimeout(function(){bio.height = 40;}, 500);
	    	// }
	    // });
		
		//flipWin.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT})
		Titanium.UI.currentTab.open(flipWin,{animated:true, transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
		}
	});
var scrollView3 = Ti.UI.createScrollView({
	contentHeight:'auto',
	contentWidth:'auto',
	minZoomScale:1.0,
	maxZoomScale:3.0,
	zoomScale:1.0,
	top:0,
	bottom:0,
	left:0,
	right:0,
	//height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth
});

var view3title = Ti.UI.createLabel({
	text:'Youth Cast',
	top:5, textAlign:'center',height:'auto', font:{fontSize:24, fontWeight:'bold'}});

scrollView3.add(view3title);
var view3 = Ti.UI.createView({
	top:40,
	layout:'horizontal',
	height:'auto',
	width:Ti.Platform.displayCaps.platformWidth
});

if(Ti.Platform.osname == 'android'){
	view3.height = 1200;
}

var length = youth.length;
for(var i=0; i<length; i++){
	var container = Ti.UI.createView({layout:'vertical', width:90, height:104, left:10, top:5, bottom:5, headshot:youth[i].image, name:youth[i].name, role:youth[i].role});
	var pic = Ti.UI.createImageView({
		image:'images/headshots/thumbnails/'+container.headshot+'.jpg',
		height:90,
		width:60,
		touchEnabled:false,
		borderWidth:2, 
		borderColor:'#000' 
		//hiRes:true
	});
	container.add(pic);
	var name = Ti.UI.createLabel({
		text:container.name,
		color:'#000',
		font:{fontSize:10},
		top:4,
		height:10,
		width:90,
		textAlign:'center',
		touchEnabled:false,
		minimumFontSize:8
	});
	container.add(name);
	if(Ti.Platform.osname == 'ipad'){
		container.height = 230;
		container.width = 180;
		container.left = 5;
		container.right = 5;
		pic.height=180;
		pic.width=120;
		name.height=20;
		name.width=120;
		name.font={fontSize:16};
		name.minimumFontSize=12;
		pic.image='images/headshots/thumbnails/'+container.headshot+'@2x.jpg';
		}
	
	view3.add(container);

}

scrollView3.add(view3);
scrollable.views = [scrollView1, scrollView2, scrollView3];
	view3.addEventListener('touchend', function(e){
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
			minimumFontSize:8,
			backButtonTitle:'Cast'
		});
		var mainImage = Ti.UI.createImageView({
			image:'images/headshots/'+e.source.headshot+'.jpg'
		});
		flipWin.add(mainImage);
		// var bio = Ti.UI.createLabel({
	    	// text:e.source.name+"\n"+e.source.role,
	    	// height:40,
	    	// textAlign:'center',
	    	// top:0,
	    	// width:Ti.Platform.displayCaps.platformWidth,
	    	// color:'#000'
	    // });
// 	    
	    // flipWin.add(bio);
// 	    
	    // bio.addEventListener('touchend', function(){
	    	// if(bio.height == 40){
	    		// bio.animate({height:Ti.Platform.displayCaps.platformHeight, duration:300});
	    		// setTimeout(function(){bio.height = Ti.Platform.displayCaps.platformHeight;;}, 500);
	    	// } else {
	    		// bio.animate({height:40, duration:300});
	    		// setTimeout(function(){bio.height = 40;}, 500);
	    	// }
	    // });
		
		//flipWin.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT})
		Titanium.UI.currentTab.open(flipWin,{animated:true, transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
		}
	});
var hideView = Ti.UI.createView({top:0, left:0, right:0, bottom:0, opacity:0.8, zIndex:100, backgroundColor:'#000'});
var actInd = Ti.UI.createActivityIndicator({
	color:'#fff',
	//message:'Grabbing the Cast...',
	height:'auto',
	style: Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
});
hideView.add(actInd);
actInd.show();
win.add(hideView);
setTimeout(function(){
hideView.hide();
},1000);

