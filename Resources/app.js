// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

Ti.include('utils.js');
//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#000',
    navBarHidden:true,
    url:'win1.js'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'The Show',
    window:win1
});

var fb = Ti.UI.createButton({
	title:'Share'
	
});

fb.addEventListener('click', function(){
	
	Facebook.publish({data:{
			link: "http://www.cascadetheatre.org/Calendar.asp?View=EVENT&EventID=1926&Date=11/25/2011&SectionID=-1",
			name: "A Cascade Christmas at the Cascade Theatre",
			//caption: fiberString,
			picture: "https://tickets.cascadetheatre.org/ticketing/_media/image.php?type=show2&id=400"
		}
		});
})
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'The Cast',
 	backgroundColor:'#000',
    barColor:'#000',
    url:'win2.js',
    rightNavButton:fb
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'The Cast',
    window:win2
});

//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'Fun',
 	backgroundColor:'#000',
    barColor:'#000',
    url:'win3.js'
});
var tab3 = Titanium.UI.createTab({  
    icon:'images/gMan.png',
    title:'Fun',
    window:win3
});

//
// create controls tab and root window
//
var win4 = Titanium.UI.createWindow({  
    title:'Sponsors',
    backgroundColor:'#000',
    barColor:'#000',
    url:'win4.js'
});
var tab4 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Our Sponsors',
    window:win4
});

//
// create controls tab and root window
//
var win5 = Titanium.UI.createWindow({  
    title:'The Music',
    backgroundColor:'#000',
    barColor:'#000',
    url:'win5.js'
});
var tab5 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'The Music',
    window:win5
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);   
//tabGroup.addTab(tab4);  
//tabGroup.addTab(tab5);


// open tab group
tabGroup.open();
