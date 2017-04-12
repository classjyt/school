$(function(){
	// 轮播图
	var swiper = new Swiper('.swiper-container', {
        		pagination: '.swiper-pagination',
       	 		nextButton: '.swiper-button-next',
        		prevButton: '.swiper-button-prev',
        		paginationClickable: true,
        		centeredSlides: true,
        		autoplay: 2500,
        		autoplayDisableOnInteraction: false
    });
	// 侧边栏
	var times=1;
	$("#more").click(function(){
		if(times==1){
			$(".nav").animate({"right":"0"},500);
			$("header,article").animate({"right":"2.54rem"},500);
			$(this).attr("src","img/ico_btn2.png");
			times=2;
		}else if(times==2){
			$(".nav").animate({"right":"-2.54rem"},500);
			$("header,article").animate({"right":"0"},500);
			$(this).attr("src","img/ico_btn2_hov.png");
			times=1;
			};
		});
	
	//上下滚动图
		function autoPlay() {
		var h1 = $(".myul").scrollTop();
		var h2 = $(".myul").height();
		if(h1 > h2) {
			$(".myul").scrollTop(0);
		} else {
			$(".myul").scrollTop(h1 + 3);
		}
	}
	setInterval(autoPlay, 500);
	
	//地区选择
	$("#beijing").click(function(){
		$("#huadong,#huanan,#xinan,#dongbei").css({"color":"black"});
		$("#beijing").css({"color":"red"});
		
	});
	$("#huadong").click(function(){
		$("#beijing,#huanan,#xinan,#dongbei").css({"color":"black"});
		$("#huadong").css({"color":"red"});
	});
	$("#huanan").click(function(){
		$("#huadong,#beijing,#xinan,#dongbei").css({"color":"black"});
		$("#huanan").css({"color":"red"});
	});
	$("#xinan").click(function(){
		$("#huadong,#huanan,#baijing,#dongbei").css({"color":"black"});
		$("#xinan").css({"color":"red"});
	});
	$("#dongbei").click(function(){
		$("#huadong,#huanan,#xinan,#beijing").css({"color":"black"});
		$("#dongbei").css({"color":"red"});
	});
	//加载更多
	var flag=1;
	$("#blank2").click(function(){
		if(flag==1){
		$("#school8,#school9,#school10").show();
		$(this).html("点击收起更多");
		flag=2;
		}else if(flag==2){
		$("#school8,#school9,#school10").hide();
		$(this).html("点击加载更多");
		flag=1;
		}
	});
	//下拉菜单
	$("#xiala").click(function(){
		if(flag==1){
			$(".spread").show();
			$(this).css("transform","rotate(180deg)");
			flag=2;
		}else if(flag){
			$(".spread").hide();
			$(this).css("transform","rotate(0deg)");
			flag=1;
		}
	});
	//左弹框
	$("#main_button").click(function() {
		if(flag == 1) {
			$(this).attr("src", "img/ico_btn23.png");
			$("#qq").animate({
				"left": "1.2rem"
			}, 500);
			$("#wecat").animate({
				"left": "2.1rem"
			}, 500);
			$("#message").animate({
				"left": "3rem"
			}, 500);
			$("#star").animate({
				"left": "3.94rem"
			}, 500);
			$("#goTop").animate({
				"left": "4.82rem"
			}, 500);
			flag = 2;
		} else if(flag == 2) {
			$(this).attr("src", "img/ico_btn22.png");
			$("#qq").animate({
				"left": "0.14rem"
			}, 500);
			$("#wecat").animate({
				"left": "0.14rem"
			}, 500);
			$("#message").animate({
				"left": "0.14rem"
			}, 500);
			$("#star").animate({
				"left": "0.14rem"
			}, 500);
			$("#goTop").animate({
				"left": "0.14rem"
			}, 500);
			flag = 1;
		}
	});
	//弹框
	$(".right_button").click(function() {
		$(".alert").show();
		$(this).hide();
		$(".back").show();
	});
	$("#alert_close").click(function() {
		$(".alert").hide();
		$(".right_button").show();
		$(".back").hide();
	});
	function alertShow() {
		$(".alert").show();
		$(".back").show();
	}
	// setInterval(alertShow, 5000);
	//回到顶部
	$("#goTop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
			});
	//底部
	$(".img1,.text1").click(function(){
		$(".img1").attr("src","img/ico-b-nav-1-on.png");
		$(".img2").attr("src","img/ico-b-nav-2.png");
		$(".img3").attr("src","img/ico-b-nav-3.png");
		$(".img4").attr("src","img/ico-b-nav-4.png");
		$(".text1").css({"color":"red"});
		$(".text2,.text3,.text4").css({"color":"black"});
	});
	$(".img2,.text2").click(function(){
		$(".img1").attr("src","img/ico-b-nav-1.png");
		$(".img2").attr("src","img/ico-b-nav-2-on.png");
		$(".img3").attr("src","img/ico-b-nav-3.png");
		$(".img4").attr("src","img/ico-b-nav-4.png");
		$(".text2").css({"color":"red"});
		$(".text1,.text3,.text4").css({"color":"black"});
	});
	$(".img3,.text3").click(function(){
		$(".img1").attr("src","img/ico-b-nav-1.png");
		$(".img2").attr("src","img/ico-b-nav-2.png");
		$(".img3").attr("src","img/ico-b-nav-3-on.png");
		$(".img4").attr("src","img/ico-b-nav-4.png");
		$(".text3").css({"color":"red"});
		$(".text2,.text1,.text4").css({"color":"black"});
	});
	$(".img4,.text4").click(function(){
		$(".img1").attr("src","img/ico-b-nav-1.png");
		$(".img2").attr("src","img/ico-b-nav-2.png");
		$(".img3").attr("src","img/ico-b-nav-3.png");
		$(this).attr("src","img/ico-b-nav-4-on.png");
		$(".text4").css({"color":"red"});
		$(".text2,.text3,.text1").css({"color":"black"});
	});


});



