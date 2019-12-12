//图片翻转




var list = []
$.ajax({
  type:'GET',
  url:'http://localhost/wrong_question/project/dist/list.json',
  dataType:'json',
  success:function(data){
   
   console.log(data);
   //console.log(data[0].img)
   list = data;
   createLi(data);
  }
})

function createLi(data) {
  list.map(function (item,index) {
      var str = "";
      /*渲染页面*/
      $("#list").append("<li >"
  			+"<a href='#' class='clearfix'>"+item.title
  			
  			+"</a>"
  			+"<a href='#' class='imgs'>"
  			+"<img src="+item.img+" class='rounded ' alt='...'>"
  			+"</a>"
  		+"</li>")
  })

}

var list1 = []
$.ajax({
type:'GET',
url:'http://localhost/wrong_question/project/dist/list1.json',
dataType:'json',
success:function(data){
   
   console.log(data);
   //console.log(data[0].img)
   list1 = data;
   createLiDl1(data);
}
})

function createLiDl1(data) {
list1.map(function (item,index) {
      var str1 = "";
      /*渲染页面*/
      $("#list1").append("<dl class='list-box'>"
	  			+"<dt>"
	  			+"<a href='#' class='img text-center '>"
	  			+"<img src="+item.img+" >"
	  			+"</a>"
	  			+"</dt>"
	  			+"<dd class='list-d1'>"+item.title+"</dd>"
	  			+"<dd class='list-d2'>"+item.prices+"</dd>"
	  			
	  		+"</dl>")
})

}






var list3 = []
$.ajax({
type:'GET',
url:'http://localhost/wrong_question/project/dist/list3.json',
dataType:'json',
success:function(data){
   
   console.log(data);
   //console.log(data[0].img)
   list3 = data;
   createLiDl3(data);
}
})

function createLiDl3(data) {
list3.map(function (item,index) {
      var str3 = "";
      /*渲染页面*/
      $("#list3").append(
      	
		 		
		 			"<li class='lis'>"
		 				+"<a href='#'>"
		 					+"<img src="+item.img+" />"
		 				+"</a>"
		 				+"<span class='span'>"+item.title+"</span>"
		 			+"</li>"
		 		
		
	  		)
})

}






var list2 = []
$.ajax({
  type:'GET',
  url:'http://localhost/wrong_question/project/dist/list2.json',
  dataType:'json',
  success:function(data){
   
   console.log(data);
   //console.log(data[0].img)
   list2 = data;
   createLiDl2(data);
  }
})

function createLiDl2(data) {
  list2.map(function (item,index) {
      var str1 = "";
      /*渲染页面*/
      $("#list2").append("<dl class='list-box'>"
  	  			+"<dt >"
  	  			+"<a href='#' class='img'>"
  	  			+"<img src="+item.img+">"
  	  			+"</a>"
  	  			+"</dt>"
  	  			+"<dd class='list-d1'>"+item.title+"</dd>"
  	  			+"<dd class='list-d2'>￥"+item.price+"</dd>"
  	  			+"<button onclick='box("+index+")'>加入购物车</button>"
  	  		+"</dl>")
  })

}


