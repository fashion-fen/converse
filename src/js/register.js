/*登录*/
 $(function(){
   	$('.denglv').on('click',function(){
   		$('.dlkuang').fadeToggle({
   			 height:'toggle'
   		},'slow')
   		$('.zhuchek')[0].style.display='none'
   		
   	})
   	
   	$('.zhuche').on('click',function(){
   		$('.zhuchek').fadeToggle({
   			 height:'toggle'
   		},'slow')
   		$('.dlkuang')[0].style.display='none'
   	})
   	
   	
   	
   	//通过获取表单输入用户名和密码可以实现登录功能
   	 var unameInp=$('.zhanghao') //登录
   	 var pwInp=$('.mima') //密码
   	 var show=$('.show')
   	 console.log(unameInp)
   	 var loginBtn=$('.denglv-btn')
   	 var timer;
   	loginBtn.on('click',function(){
   		var uname=unameInp.val()
   		var pw=pwInp[0].value
   		
   		var xhr=new XMLHttpRequest;
   		xhr.open('post','http://localhost/wrong_question/project/dist/server.php');
   		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
   		xhr.send(`username=${uname}&password=${pw}`);
   		
   		xhr.onreadystatechange=function(){
   			if(xhr.status==200&&xhr.readyState==4){
   				if(xhr.responseText==1){
   					show[0].style.width=200;
   					show[0].style.height=30;
   					show[0].innerHTML=`欢迎您${name}`;
   					$('.memberloginDl')[0].style.display='none';
   					$('.tuichu')[0].style.display='block';
   					$('.dlkuang').fadeToggle({
   			 				height:0
   						},2000)
   					 $('.names')[0].style.display='none';
   					$('.yonghu')[0].innerHTML=decodeURIComponent(getCookie('name'));
   					
   				}else{
   					show[0].innerHTML="用户名或者密码错误,请重新登陆";
   					$('.memberloginDl')[0].style.display='block';
   				}
   			}
   		}
   		
   	})
   	//2 如果该浏览器曾经登陆过,那么下次就可以不用输入用户名和密码直接通过cookie登陆	
   	var xhr =new XMLHttpRequest;
   	xhr.open('get','http://localhost/wrong_question/project/dist/server.php');
   	xhr.send(null);
   	
   	xhr.onreadystatechange=function(){
   		if(xhr.status==200&& xhr.readyState==4){
   			if(xhr.responseText==1){
   					$('.memberloginDl')[0].style.display='none';
   					$('.tuichu')[0].style.display='block';
   					$('.names')[0].style.display='none';
   					$('.yonghu')[0].innerHTML=decodeURIComponent(getCookie('name'));
   					
   			}
   		}
   	}
   	
   	
   	//退出
   	 $('.tuichu').on('click',function(){
   	 		 removeCookie('name')
   	 	     removeCookie('password')
   	 	   show[0].style.display='none';
   			$('.memberloginDl')[0].style.display='block';
   			$('.tuichu')[0].style.display='none';
   			$('.names')[0].style.display='block';
   			$('.yonghu')[0].style.display='none';
   	 	   
   	 	   
   	 })
   	 
   	 
   	 
   	 $('.list-box').on('mouseenter','mousemove',function(){
   	 	 $(this).fadeIn({
   	 	 	
   	 	 })
   	 })
   	
   	
   	
   	
   	/* 注册*/
   	function zhuche(){
				
				var flag = 1;
				$('#yonghu').blur(function(){
					flag = 1;
					var reg = /^[a-z]\w{5,9}$/i;
					$('#pand').html('')
					
					var str=$('#yonghu').val()
					if(reg.test(str)){
						$('#pand').html('可以注册')
						
					}else{
						$('#pand').html(' - 用户名长度不能少于 6 个字符。')
						flag = 0;
					}	
				})
				
				$('#email').blur(function(){
					 flag = 1;
					var reg = /^\w+@\w+.\w+/;
					$('#pandEmail').html('')
				
					var str=$('#email').val()
					if(reg.test(str)){
						$('#pandEmail').html('可以注册')
						
					}else{
						$('#pandEmail').html(' * 邮件地址不合法')
						flag = 0;
					}
				})
				
				$('#password1').blur(function(){
					 flag = 1;
					var reg = /^\w{6,18}$/;
					$('#pandPass').html('')
					
					var str=$('#password1').val()
					if(reg.test(str)){
						$('#pandPass').html('可以注册')
					}else{
						$('#pandPass').html(' - 密码长度不能少于 6 个字符。')
						flag = 0;
					}
				})
				
				$('#password2').blur(function(){
					 flag = 1;
					$('#pandPass2').html('')
					
					var str=$('#password2').val()
					var reg = new RegExp($('#password1').val());
					if(reg.test(str)&&str!=0){
						$('#pandPass2').html('可以注册')
					}else{
						$('#pandPass2').html('- 两次输入密码不一致')
						flag = 0;
					}
				})
				
				
					
			
				$('#button').click(function(){
					flag = 1;
					if(!$('#checkbox').prop('checked')){
						flag = 0;
						return alert('是否同意注册')
					}
					if(flag){
						var uname = $('#yonghu').val();
						var pw = $('#password1').val();
						var xhr = new XMLHttpRequest;
						xhr.open('post','http://localhost/wrong_question/project/dist/zhuche.php')
						xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
						xhr.send(`name=${uname}&password=${pw}`);
						xhr.onreadystatechange = function(){
							if(xhr.readyState==4&&xhr.status==200){
								if(xhr.responseText==1){
									$('.bbb')[0].style.display='block'
									$('.bbb').html(name+"注册成功")
									$('#zhuce')[0].style.display = "none";
								}else{
									$('.bbb').html("注册失败")
									$('#zhuce')[0].style.display = "block";
								}
							}
						}
					}
				})
				
			}
			zhuche();
   	
   })