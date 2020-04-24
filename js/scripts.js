window.onload = function(){
	/*Language selection*/
	var availableLang =  ['fr','en'];
	var lang=new URL(location.href).searchParams.get('lang');
	lang = ( availableLang.indexOf(lang) == -1 )?'en':lang;
	
	var elts = document.querySelectorAll('[lang]');
	for( var i=0; i<elts.length;i++){
		if(elts[i].lang !== lang ) elts[i].style.display='none';
	}

	document.title = 'Lucas LEBIELLE ('+lang+')';


	
	/*Scroll effect*/
	window.addEventListener('scroll', function(e){
		var sTop = document.documentElement.scrollTop ;
		
		if(sTop>20){
			var h = document.querySelectorAll('h1, #hamburger-menu');
			for( var i=0;i<h.length;i++){
				h[i].className='scrolled';
			}
		}else{
			var h = document.querySelectorAll('h1, #hamburger-menu');
			for( var i=0;i<h.length;i++){
				h[i].className='notscrolled';
			}
		}
		
	});
	
	var button = document.querySelectorAll('#hamburger-menu');
	button[0].onclick = function(){
		var menu = document.querySelectorAll('#left-menu')[0];
		if( menu.className !== "scrolledshown" ){
			menu.className =   "scrolledshown";
			this.className = "scrolled close"
		}
		else{
		menu.className =   "";
			this.className = "scrolled";
		}
	}
	
	var menu = document.querySelectorAll('#left-menu ul');
	menu[0].onclick = function(){
		var tohidemenu = document.querySelectorAll('#left-menu.scrolledshown')[0];
		tohidemenu .className = "";
	}
}