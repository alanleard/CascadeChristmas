var win = Ti.UI.currentWindow;

var table = Ti.UI.createTableView({

	data:[{title:'Baking Gingerbread Men', url:'games/popup.js', hide:true},
	{title:'Decorating Cookies', url:'games/draw.js', hide:true}, 
	{title:'Searching for Santa', url:'games/santa.js', hide:false},
	{title:'Picture with Santa', url:'games/santaPic.js', hide:true},
	{title:'Make it Snow', url:'games/makeSnow.js', hide:false},
	]
});


table.addEventListener('click', function(e){
	
	var win = Ti.UI.createWindow({url:e.rowData.url,
		tabBarHidden:true, fullscreen:true, barColor:'#000', navBarHidden:e.rowData.hide});
	Titanium.UI.currentTab.open(win,{animated:true});
})

win.add(table);

win.addEventListener('focus', function(){
	win.navBarHidden=false;
	Titanium.UI.orientation = Titanium.UI.PORTRAIT;
})
