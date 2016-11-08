$(document).ready(function(){

$(".findmu-eve").hover(function(){
	var index=$(".findmu-eve").index($(this))
		$(".find-sect2").eq(index).slideDown("fast");
		
	},function(){
		var index=$(".findmu-eve").index($(this))
		$(".find-sect2").eq(index).slideUp("fast");
	})

$(".senvermu").hover(function(){
	var index=$(".senvermu").index($(this))
		$(".find-sect1").eq(index-1).slideDown("fast");
		
	},function(){
		var index=$(".senvermu").index($(this))
		$(".find-sect1").eq(index-1).slideUp("fast");
	})

$(".lis img").hover(function(){
	var index=$(".lis img").index($(this))
		$(".lis b").eq(index).addClass("active")
		
	},function(){
		var index=$(".lis img").index($(this))
		$(".lis b").eq(index).removeClass("active").addClass("active2")
	})
$(".lis").hover(function(){
	$(this).css("border-bottom-color","#79BE0B")
		
	},function(){
		$(this).css("border-bottom-color","#EBEBEB")
	})
$(".four").hover(function(){
	var index=$(".four").index($(this))
		$(".four .zhe").eq(index).removeClass("active2").addClass("active")
		$(".four .ff1").eq(index).removeClass("active4").addClass("active3")
		
	},function(){
		var index=$(".four").index($(this))
		$(".four .zhe").eq(index).removeClass("active").addClass("active2")
		$(".four .ff1").eq(index).removeClass("active3").addClass("active4")
	})


//three选项卡

$(".three-choose").click(function(){
	$(".three-choose").css("border-top-color","#EBEBEB")
	$(this).css("border-top-color","#79BE0B")
	var index=$(".three-choose").index($(this))
		$(".three-box").css("display","none")
		$(".three-box").eq(index).css("display","block")
		
})
})
$(document).ready(function(){
	$(".shang").click(function(){
	 $("body,html").animate({scrollTop:0},500);
	  })
})
$(document).ready(function(){
		// bannerwheel
	var n=0;
	var next=0;
	var flag2=true;
		if(!flag2){
				return;
			};
			flag2=false;
	var t=setInterval(move,4000);
	function move(){
		next=n+1;
		if(next>=$(".ban-imgs").length){
			next=0;
		}; 
		$(".ban-imgs").eq(n).removeClass("dong1").removeClass("dong").addClass("dong1").animate({zLndex:11},function(){
			flag2=true
		})
		$(".ban-imgs").eq(next).removeClass("dong1").removeClass("dong").addClass("dong").animate({zLndex:1},function(){
			flag2=true
		})
		n=next
		
	}
	
	$(".banner-left").click(function(){
			if(!flag2){
				return;
			};
			flag2=false;
		next=n-1;
		if(next<0){
		next=$(".ban-imgs").length-1;
		}
		$(".ban-imgs").eq(n).removeClass("dong").addClass("dong1").animate({zLndex:11},10,function(){
			flag2=true
		})
		$(".ban-imgs").eq(next).removeClass("dong1").addClass("dong").animate({zLndex:12},10,function(){
			flag2=true
		})
		n=next
	
	
	})
	$(".banner-right").click(function(){

		move(t);
	})
//	$(".banner").mouseover(function(){
//		clearInterval(t)	
//	})
//	$(".banner").mouseout(function(){
//		t=setInterval(move,4000)	
//	})
	
		
})
//四个轮播
$(document).ready(function(){
	var left=0;
	var width=$(".lis").width()+20
	var  width2=$(".list").outerWidth()
	var time=setInterval(go,1000);
	var flag3=true;
	function go(){
		if(!flag3){
				return;
			};
			flag3=false;
		left+=width
		if(left>=width2/2){
			left=0
		}
		$(".list").animate({marginLeft:-left},1000,function(){
			flag3=true;
		})
	}
	$(".list-right").click(function(){
		go(time)
	})
	$(".list-left").click(function(){
		if(!flag3){
				return;
			};
			flag3=false;
		left-=width
		if(left>=width2/2){
			left=0
		}
		if(left<=0){
			left=0
		}
		$(".list").animate({marginLeft:-left},1000,function(){
			flag3=true;
		})
	})
	
})