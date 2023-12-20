$(document).ready(function(){
	$('.tab_con').length && tabContentSlideF(); //메인 탭 슬라이드
	$('.soln_list').length && solutionSlide(); //solnSlide
	$('.js-tab').length && tab(); //공통 탭
	$('.mo_map').length && storeTab(); //시설 탭
	$('.ticket_slide').length && tkSlide(); //ticket 슬라이드
	$('.kiosk_li').length && kioskSlide(); //kiosk 슬라이드
	$('.pos_slide').length && posSlide(); //POS 슬라이드
	$('.review_slide').length && rvSlide(); //리뷰 슬라이드
	$('.mobile_slide').length && mobSlide(); //큐라인 슬라이드
	$('.online').length && onlineSlide(); //온라인 대행판매
	$('.main_slide').length && mainSlide(); //main 슬라이드
	$('#fullpage').length && fullPage(); //main fullpage
	$('.biz_tab').length && bizTab(); //biz tab
	$('.acco_list').length && accodion(); //accodion

	// responsive event
	var wWidth = $(window).outerWidth();

	if(wWidth < 1200){
		// mob event
		$('.dept_01 > a').off('mouseover');
		$('nav').off('mouseleave');
		mobNav(); //mobile nav
	}else{
		// pc event
		headerBg(); //header bg
	}

	$(window).on('resize', function(){
		var wWidth = $(window).outerWidth();

		if(wWidth < 1200){
			// mob event
			$('.dept_01 > a').off('mouseover');
			$('nav').off('mouseleave');
			mobNav(); //mobile nav
		}else{
			// pc event
			headerBg(); //header bg
		}
	});
});
function tabContentSlideF() { //메인 탭 슬라이드
	var text = [
		'온라인 대행판매',
		'모바일 티켓',
		'시설 운영 솔루션',
		'픽업톡/큐라인',
		'CheckQ',
		'QAD(큐애드)'
	]
	var tabContentSlide = new Swiper('.tab_con', {
		slidesPerView : '1',
		effect : 'fade', fadeEffect: { crossFade: true },
		loop:true,
		loopAdditionalSlides : 1,
		speed:700,
		pagination: {
			el: '.tab_menus',
			clickable: true,
			renderBullet: function (index, className) {
				return '<button class="' + className + '">' + (text[index]) + '</button>';
			}
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
	});
}

function solutionSlide() {
	var ww = $(window).width();
	var solnSlide = undefined;

	function solnSwiper() {
		if(ww < 1201 && solnSlide == undefined) {
			solnSlide = new Swiper('.soln_list', {
				slidesPerView : 'auto',
				spaceBetween : 20,
				speed:1500,
			});
		}else if(ww >= 1201 && solnSlide != undefined){
			solnSlide.destroy();
			solnSlide = undefined;
		}
	}

	solnSwiper();

	$(window).on('resize', function () {
		ww = $(window).width();
		solnSwiper();
	});
}

function tab() { //공통 탭
	$('.js-tab a').on('click', function(e){
		e.preventDefault();
		var tab_data = $(this).parent().attr('data-tab');
		$(this).parent().siblings().removeClass('on')
		$(this).parent().addClass('on');
		$('.js-tab-content li').removeClass('on');
		$('.js-tab-content').find("[data-tab='" + tab_data + "']").addClass('on')
	})
}

function storeTab() { //보유시설 탭
	$('.mo_map .img_wrap button').on('click', function(e){
		e.preventDefault();
		var tab_data = $(this).parent().attr('data-tab');
		$(this).parent().siblings().removeClass('active')
		$(this).parent().addClass('active');
		$('.store_li .item').removeClass('active');
		$('.store_li').find("[data-tab='" + tab_data + "']").addClass('active')
	})
}

function bizTab() { //biz tab
	$('.biz_tab .tab_menu a').on('mouseenter', function(e){
		var tab_data = $(this).parent().attr('data-tab');
		$(this).parent().siblings().removeClass('on')
		$(this).parent().addClass('on');
		$('.biz_tab_con li').hide();
		$('.biz_tab_con').find("[data-tab='" + tab_data + "']").show();
	})
}

function tkSlide() { //ticket 슬라이드
	var tkSlide = new Swiper('.ticket_slide', {
		slidesPerView : 1,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1500,
		navigation : {
			prevEl : '.arr_prev', // 이번 버튼 클래스명
			nextEl : '.arr_next', // 다음 버튼 클래스명
		},
	});
}

function kioskSlide() {
	var ww = $(window).width();
	var userSlide = undefined;

	function userSwiper() {
		if(ww < 1201 && userSlide == undefined) {
			userSlide = new Swiper('.kiosk_li', {
				slidesPerView : 'auto',
				spaceBetween : 32,
				loop:true,
				loopAdditionalSlides : 1,
				speed:1500,
			});
		}else if(ww >= 1201 && userSlide != undefined){
			userSlide.destroy();
			userSlide = undefined;
		}
	}

	userSwiper();

	$(window).on('resize', function () {
		ww = $(window).width();
		userSwiper();
	});
}

function posSlide() { //POS 슬라이드
	var text_01 = [
		'레저포스',
		'숙박포스',
		'승선포스',
		'식음포스'
	]
	var text_02 = [
		'레저포스',
		'숙박포스',
		'승선포스',
		'식음포스'
	]
	var viewSlide = new Swiper('.view_slide', {
		slidesPerView : '1',
		spaceBetween : 16,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1500,
		observer: true, // display:none 오류
		observeParents: true,
		navigation : {
			prevEl : '.view_arr.arr_prev',
			nextEl : '.view_arr.arr_next',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '">' + (text_01[index]) + '</div>';
			}
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});
	var pagingView = new Swiper(".view_slide", {
		slidesPerView : '1',
		spaceBetween : 16,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1500,
		observer: true, // display:none 오류
		observeParents: true,

		pagination: {
			el: ".view_bullet",
			type : 'bullets',
			clickable: true,
		},
	});
	viewSlide.controller.control = pagingView;

	var cmsSlide = new Swiper('.cms_slide', {
		slidesPerView : '1',
		spaceBetween : 16,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1500,
		observer: true, // display:none 오류
		observeParents: true,
		navigation : {
			prevEl : '.cms_arr.arr_prev',
			nextEl : '.cms_arr.arr_next',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '">' + (text_02[index]) + '</div>';
			}
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});
	var pagingCms= new Swiper(".cms_slide", {
		slidesPerView : '1',
		spaceBetween : 16,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1500,
		observer: true, // display:none 오류
		observeParents: true,

		pagination: {
			el: ".cms_bullet",
			type : 'bullets',
			clickable: true,
		},
	});
	cmsSlide.controller.control = pagingCms;
}

function rvSlide() { //review 슬라이드
	var rvSlide = new Swiper('.review_slide', {
		slidesPerView : 'auto',
		spaceBetween : 20,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1500,
		breakpoints:{
			768: {
				spaceBetween: 40,
			},
		},
	});
}

function mobSlide() { //큐라인 슬라이드
	var mobSlide = new Swiper('.mobile_slide', {
		slidesPerView : '1',
		effect: 'fade',
		loop:true,
		loopAdditionalSlides : 1,
		speed:1500,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

	});
}

function onlineSlide() { //온라인 대행판매 슬라이드
	var text = [
		'상품협의(판매단가, 기간)',
		'판매채널협의',
		'홍보마케팅, 전략수립',
		'판매개시',
		'특판, SNS마케팅',
		'라이브쇼핑'
	]
	var onlineSlide = new Swiper('.gal_01', {
		slidesPerView : '1',
		effect: 'fade',
		spaceBetween : 14,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.gal_page',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '"><i></i><p>' + (text[index]) + '</p></div>';
			}
		},
	});

	$('.on_tab').on('mouseover', function(){
		onlineSlide.autoplay.stop();
		onlineSlideMo.autoplay.stop();
	})
	$('.on_tab').on('mouseout', function(){
		onlineSlide.autoplay.start();
		onlineSlideMo.autoplay.start();
	})

	var onlineSlideMo = new Swiper('.gal_02', {
		slidesPerView : 'auto',
		spaceBetween : 14,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".gal_bullets",
			type : 'bullets',
			clickable: true,
		},

	});
}

function headerBg(){
	$(document).on('scroll', function(){
		var crtHeight = $('html').scrollTop();
		if(crtHeight == '0'){
			$('#header').removeClass('on')
		}else{
			$('#header').addClass('on')
		}
	})
	$('.dept_01 > a').on('mouseover', function(e){
		e.stopPropagation();
		e.preventDefault();
		$('.bg_nav').stop().slideDown(200)
		$('.dept_02').stop().slideDown(250)
		$('#header').addClass('nav_on')
	})
	$('nav').on('mouseleave', function(e){
		e.stopPropagation();
		e.preventDefault();
		$('.bg_nav').stop().slideUp(300)
		$('.dept_02').stop().slideUp(100)
		$('#header').removeClass('nav_on')
	})
}

function fullPage() { //fullpage 함수
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		responsiveWidth: 768,
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,
		'afterLoad': function (anchorLink, index) {
			if (index == 1){
				$('#fp-nav').addClass('wh');
			}else {
				$('#fp-nav').removeClass('wh');
			}
			if (index == 6 || index == 7){
				$('#fp-nav').css('display','none');
			}else {
				$('#fp-nav').css('display','block');
			}
		},
		'onLeave': function (anchorLink, index) {
			var ww = $(window).width();
			// header bg
			if (index == 1){
				$('#header').removeClass('on');
			}else{
				$('#header').addClass('on');
			}

			//성공사례 숫자 카운트
			if (index == 3){
				$('.sec_03 .num').each(function () {
					const $this = $(this),
						countTo = $this.attr('data-count');

					$({
						countNum: 0
					}).animate({
						countNum: countTo
					}, {
						duration: 3000,
						easing: 'linear',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
				});
			}
		},
	});
}

// accodion
function accodion(){
	$('.acco_list li:first-child .acco_con').show();
	$('.acco_btn').on('click', function(){

		if($(this).hasClass('on')){
			$('.acco_btn').removeClass('on')
		}else{
			$('.acco_btn').removeClass('on')
			$(this).addClass('on')
		}
		$('.acco_con').stop().slideUp();
		$(this).next('.acco_con').stop().slideToggle();
	})
}

// mob nav
function mobNav(){
	$('.btn_allmenu').off().on('click', function(){
		$('nav').stop().animate({
			'right' : 0
		},400);
		$('#header').addClass('nav_on');
	})

	$('.btn_allmenu_close').off().on('click', function(){
		$('nav').stop().animate({
			'right' : '-100%'
		},400);
		$('#header').removeClass('nav_on');
		$('.dept_01').removeClass('on');
		$('.dept_02').stop().slideUp();
	})

	$('.dept_01 > a').off().on('click', function(){
		$(this).parent('li').siblings().removeClass('on');
		$(this).parent('li').siblings().find('ul').stop().slideUp();

		if($(this).parent('li').hasClass('on')){
			$(this).parent('li').removeClass('on');
			$(this).next('ul').stop().slideUp();
		}else{
			$(this).parent('li').addClass('on');
			$(this).next('ul').stop().slideDown();
		}
	})
}