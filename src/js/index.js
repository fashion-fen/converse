 /*轮播图*/
var mySwiper = new Swiper ('.swiper-container', {
		 	//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
		    direction: 'horizontal', // 垂直切换选项
		    loop: true, // 循环模式选项
		    autoplay: {
    			delay: 3000,//1秒切换一次
  				},
  	//slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）	
  			effect : 'fade',
		    
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
		    },
		    
		    // 如果需要前进后退按钮
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		    
		    // 如果需要滚动条
		    scrollbar: {
		      el: '.swiper-scrollbar',
		    },
		  })  
/*轮播图*/



