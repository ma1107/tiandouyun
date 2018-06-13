let imgs=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
	let ord=0;
	let myTimer=null;
	function initUI(){
		$("#btns li:first").css({"background-color":"#e21085"});
		$("#box img").slice(1).css({"display":"none"});
	}
	function changeImg(){
		myTimer=setInterval(function(){
			let outOrd=ord;
			ord=ord+1;
			showImg(outOrd,ord);
		},2000);
	}
	function showImg(outOrd,transOrd){
		ord=transOrd;
		if(ord>imgs.length-1 || ord<0){
			ord=0;
		}
		fadeInOut(outOrd,ord);
		$("#btns li").css({"backgroundColor":"orange"});
		$("#btns li").eq(ord).css({"backgroundColor":"#e21085"});
	}

	function fadeInOut(outOrd,inOrd){
		if(outOrd==inOrd){
			return;
		}
		$("#box img").eq(outOrd).fadeOut(1000);
		$("#box img").eq(inOrd).fadeIn(1000);
	}
	window.onload=function(){
		initUI();
		$("#box img").click(function(){
			let index=$("#box img").index(this);
			window.location.href=hrefs[index];
		});
		changeImg();
		$("#box").mouseover(function(){
			clearInterval(myTimer);
		});
		$("#box").mouseout(function(){
			changeImg();
		});

		$("#btns li").click(function(){
			clearInterval(myTimer);
			$("#box img").eq(ord).stop(true,true);
			let index=$("#btns li").index(this);
			showImg(ord,index);
		});
	}