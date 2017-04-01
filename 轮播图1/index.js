$(function(){
	var $bigImgDiv = $('#big-img');
	var $bigImgs = $('#big-img img');
	var $smallImgDiv = $('#small-img');
	var $smallImgs = $('img', $smallImgDiv);
	var bigImgWidth =  $bigImgs.first().outerWidth();
	var $prev = $('#prev');
	var $next = $('#next');
	var distance = 0;
	var nowIdx = 0;
	var $bg1 = $('.bg1');
	var $bg2 = $('.bg2');
	var $bg3 = $('.bg3');
	var $bg = $('.bg');

	$(window).on('resize', function(){
		resizeHandler();
	});
	resizeHandler();

	$next.on('click', function(){
		nowIdx++;
		if(nowIdx == $bigImgs.length){
			nowIdx = 0;
		}
		changeImage();
	});
	$prev.on('click', function(){
		nowIdx--;
		if(nowIdx == -1){
			nowIdx = $bigImgs.length - 1;
		}
		changeImage();
	});
	$smallImgs.on('click', function(){
		nowIdx = $(this).index();
		changeImage();
	});
	function changeImage(){
		var leftVal =  -nowIdx * (bigImgWidth + 2 * distance);
		$bigImgDiv.stop().animate({
			left:leftVal
		});
		$smallImgs.eq(nowIdx).addClass('selected').siblings().removeClass('selected');
		$bg1.stop().animate({
			left: leftVal / 8
		});
		$bg2.stop().animate({
			left: leftVal / 4
		});
		$bg3.stop().animate({
			left: leftVal / 2
		});
	}


	function resizeHandler(){
		distance = ($('body').width() - bigImgWidth) / 2;
		if(distance < 0){
			distance = 0;
		}
		$bigImgDiv.width($(window).width() * $bigImgs.length);
		$bg.width($(window).width() * $bigImgs.length);

		$bigImgs.css({
			marginLeft : distance,
			marginRight : distance
		});
		$bigImgDiv.css({
			left : -($(window).width()) * nowIdx
		});


		$smallImgDiv.css({
			marginLeft : distance + 20
		});
		$prev.css({
			left : distance + 10
		});
		$next.css({
			left : distance + bigImgWidth - 30 - 10
		});
	}



















});