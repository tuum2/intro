window.addEventListener('DOMContentLoaded', function () {

	const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
	const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
	const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
	const header = document.querySelector('.header.container');


	var url = ['http://tuum2.dothome.co.kr/gsa/', 'http://tuum2.dothome.co.kr/sekaino/', 'http://tuum2.dothome.co.kr/com/', 'http://tuum2.dothome.co.kr/com/'];
	console.log(url);

	var tg = document.getElementsByClassName('project-item');

	var setUrl = function(i){
		return function(){
			location.href = url[i];
		};//// return //////////
		
	};/////// setURl ////////////
		for (var i = 0; i < 4; i++) {
			//console.log(i);
			//console.log(tg[i]);
			tg[i].onclick = setUrl(i);	
		};

	/*	tg.forEach((el, idx)) => ({el.addEventListener('click', function () {}))
	 */
	/*		tg.forEach(el, idx) => (){
				
				el.addEventListener('click', function(){
					location.href = url[idx]
				})
				
			};*/

	/*const url = ['http://tuum2.dothome.co.kr/gsa/', 'http://tuum2.dothome.co.kr/sekaino/', 'http://tuum2.dothome.co.kr/com/', 'http://tuum2.dothome.co.kr/com/'];
	const el = document.getElementsByClassName('project-item');
	for (let i = 0; i < 4; i++) {
		console.log(i);
		el[i].addEventListener('click', function () {
			console.log(i);
			//location.href = url[i];
		})
	}*/

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});

	document.addEventListener('scroll', () => {

		var scroll_position = window.scrollY;
		if (scroll_position > 250) {
			header.style.backgroundColor = "#29323c";
		} else {
			header.style.backgroundColor = "transparent";
		}

	});

	menu_item.forEach(item => {

		item.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			mobile_menu.classList.toggle('active');



		})
	})


});
