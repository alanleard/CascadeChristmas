var win = Ti.UI.currentWindow;

win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_RIGHT];

var scrollable = Ti.UI.createScrollableView({
	top:0,
	bottom:0,
	showPagingControl:true,
	pagingControlHeight:20,
	pagingControlColor:'#000',
	minZoomScale:1.0,
	maxZoomScale:3.0
});

var info = [{image:1, urlTop:'', urlBottom:''},
			{image:2, urlTop:'http://www.enjoymagazine.net', urlBottom:'http://www.enjoymagazine.net', nameTop:'Enjoy Magazine', nameBottom:'Enjoy Magazine'},
			{image:3, urlTop:'http://www.bestchoicehome.net/', urlBottom:'http://artbyarmando.com/', nameTop:'Best Choice', nameBottom:'Art by Armando' },
			{image:4, urlTop:'http://www.celebrationredding.com', urlBottom:'http://www.sydneyann.com', nameTop:'Celebration', nameBottom:'Sydney Ann'},
			{image:5, urlTop:'http://www.kendraviolin.com', urlBottom:'http://www.acehardware.com/', nameTop:'Kendra Violin', nameBottom:'Valley Ace', typeTop:'mail'},
			{image:6, urlTop:'http://www.westsideperforming.com', urlBottom:'http://www.riverfrontplayhouse.com', nameTop:'Westside Performing', nameBottom:'Riverfront'},
			{image:7, urlTop:'http://www.cascadetheatre.org', urlBottom:'http://www.frontandcenterdance-spotlight.com/', nameTop:'Cascade Theatre', nameBottom:'Front & Center'},
			{image:8, urlTop:'http://www.copperridgecarecenter.com', urlBottom:'http://www.darlingaccounting.com', nameTop:'Copper Ridge', nameBottom:'Darling Accounting', typeTop:'tel', typeBottom:'mail'},
			{image:9, urlTop:'http://www.cascadetheatre.org', urlBottom:'http://www.cascadetheatre.org', nameTop:'Cascade Theatre', nameBottom:'Cascade Theatre'},
			{image:10, urlTop:'http://www.cascadetheatre.org/Calendar.asp?View=EVENT&EventID=1938&Date=04/06/2012&SectionID=-1', urlBottom:'http://www.cascadetheatre.org/Calendar.asp?View=EVENT&EventID=1938&Date=04/06/2012&SectionID=-1', nameTop:'Hairspray', nameBottom:'Hairspray'}
];

var views =[];
for(var i = 0; i<10; i++){
	var view = Ti.UI.createImageView({
		image:'images/sponsors/'+info[i].image+'.jpg',
		urlTop:info[i].urlTop,
		urlBottom:info[i].urlBottom,
		nameTop:info[i].nameTop,
		nameBottom:info[i].nameBottom,
		canScale:true,
		width:Ti.Platform.displayCaps.platformWidth,
		height:'auto'
	});

	
	views.push(view);
}

scrollable.views = views;
win.add(scrollable);

scrollable.addEventListener('doubletap', function(e){

      var srcUrl;  
      var srcName;   
	if(e.y<e.source.height/2){
		srcUrl = e.source.urlTop;
		srcName = e.source.nameTop;
	} else{
		srcUrl = e.source.urlBottom;
		srcName = e.source.nameBottom;
	}
	
	 var win2 = Ti.UI.createWindow({navBarHidden:false, barColor:'#000', title: srcName, backButtonTitle:'Back'});
	 
	 win2.orientationModes=[Titanium.UI.PORTRAIT,Titanium.UI.LANDSCAPE_RIGHT]; 

    var webview = Ti.UI.createWebView({url:srcUrl});
    var safari = Ti.UI.createButton({title:'Web'});
    //var back = Ti.UI.createButton({title:'Back'})
    win2.rightNavButton = safari;

    safari.addEventListener ('click', function(){
        Ti.Platform.openURL(srcUrl);
    });
    win2.add(webview);
    Ti.UI.currentTab.open(win2,{animated:true});
});

if(Ti.Platform.osname =='android'){
	scrollable.addEventListener('click', function(e){

      var srcUrl;  
      var srcName;   
	if(e.y<e.source.height/2){
		srcUrl = e.source.urlTop;
		srcName = e.source.nameTop;
	} else{
		srcUrl = e.source.urlBottom;
		srcName = e.source.nameBottom;
	}
	
	 var win2 = Ti.UI.createWindow({navBarHidden:false, barColor:'#000', title: srcName, backButtonTitle:'Back'});
	 
	 win2.orientationModes=[Titanium.UI.PORTRAIT,Titanium.UI.LANDSCAPE_RIGHT]; 

    var webview = Ti.UI.createWebView({url:srcUrl});
    var safari = Ti.UI.createButton({title:'Web'});
    //var back = Ti.UI.createButton({title:'Back'})
    win2.rightNavButton = safari;

    safari.addEventListener ('click', function(){
        Ti.Platform.openURL(srcUrl);
    });
    win2.add(webview);
    win2.open();
});
}

