window.addEventListener('scroll', function(e){
		var sTop = document.documentElement.scrollTop ;
		
		if(sTop>20){
			var h = document.querySelectorAll('h1');
			h[0].className='scrolled';
			console.log(h[0]);
		}else{
			var h = document.querySelectorAll('h1');
			h[0].className='notscrolled';
		}
		
	});