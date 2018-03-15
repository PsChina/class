<style>
	.mainView{
		width: 1rem;
		height: 1rem;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		border-radius: 50%;
	}
	@-moz-keyframes await{
		0% {
			width: 0.14rem;
			height: 0.14rem;			
			opacity:1;
			-moz-opacity:1;   			
		}
		25% {
			width: 0.13rem;
			height: 0.13rem;			
			opacity:0.75;
			-moz-opacity:0.75;    			
		}
		50%{
			width: 0.12rem;
			height: 0.12rem;			
			opacity:0.50;
			-moz-opacity:0.5;    
		}
		75%{
			width: 0.11rem;
			height: 0.11rem;			
			opacity:0.25;
			-moz-opacity:0.25;    		
		}
		100%{
			width: 0.10rem;
			height: 0.10rem;			
			opacity:0;
			-moz-opacity:0;    			
		}
	}
	@-ms-keyframes await{
		0% {
			width: 0.14rem;
			height: 0.14rem;			
			opacity:1;
			-moz-opacity:1;    
    		-khtml-opacity: 1; 			
		}
		25% {
			width: 0.13rem;
			height: 0.13rem;			
			opacity:0.75;
			-moz-opacity:0.75;    
    		-khtml-opacity: 0.75; 			
		}
		50%{
			width: 0.12rem;
			height: 0.12rem;			
			opacity:0.50;
			-moz-opacity:0.5;    
    		-khtml-opacity: 0.5; 
		}
		75%{
			width: 0.11rem;
			height: 0.11rem;			
			opacity:0.25;
			-moz-opacity:0.25;    
    		-khtml-opacity: 0.25; 			
		}
		100%{
			width: 0.10rem;
			height: 0.10rem;			
			opacity:0;
			-moz-opacity:0;    
    		-khtml-opacity: 0;  			
		}
	}
	@-webkit-keyframes await{
		0% {
			width: 0.14rem;
			height: 0.14rem;			
			opacity:1;	
		}
		25% {
			width: 0.13rem;
			height: 0.13rem;			
			opacity:0.75;			
		}
		50%{
			width: 0.12rem;
			height: 0.12rem;			
			opacity:0.50;
		}
		75%{
			width: 0.11rem;
			height: 0.11rem;			
			opacity:0.25;			
		}
		100%{
			width: 0.10rem;
			height: 0.10rem;			
			opacity:0;			
		}
	}
	@-o-keyframes await{
		0% {
			width: 0.14rem;
			height: 0.14rem;			
			opacity:1;  
    		-khtml-opacity: 1; 			
		}
		25% {
			width: 0.13rem;
			height: 0.13rem;			
			opacity:0.75;  
    		-khtml-opacity: 0.75; 			
		}
		50%{
			width: 0.12rem;
			height: 0.12rem;			
			opacity:0.50;   
    		-khtml-opacity: 0.5; 
		}
		75%{
			width: 0.11rem;
			height: 0.11rem;			
			opacity:0.25;    
    		-khtml-opacity: 0.25; 			
		}
		100%{
			width: 0.10rem;
			height: 0.10rem;			
			opacity:0;  
    		-khtml-opacity: 0;  			
		}
	}	
	@keyframes await{
		0% {
			width: 0.14rem;
			height: 0.14rem;			
			opacity:1;		
		}
		25% {
			width: 0.13rem;
			height: 0.13rem;			
			opacity:0.75;		
		}
		50%{
			width: 0.12rem;
			height: 0.12rem;			
			opacity:0.50; 
		}
		75%{
			width: 0.11rem;
			height: 0.11rem;			
			opacity:0.25;			
		}
		100%{
			width: 0.10rem;
			height: 0.10rem;			
			opacity:0; 			
		}
	}

</style>
<template>
	<div class="mainView">
		<div style="position: relative;">
			<div v-for="(value,index) in array" :key="index" >
					<item :index='index'></item>
			</div>				
		</div>
	</div>
</template>
<script type="text/javascript">
import Vue from 'vue';
Vue.component('item',{
	props:['index'],
	computed:{
		left:function(){
			return (0.5-0.05)*Math.sin((1-this.index/11)*Math.PI*2) + 0.5 - 0.05 +'rem';
		},
		top:function(){
			return (0.5-0.05)*Math.cos((1-this.index/11)*Math.PI*2) + 0.5 - 0.05 +'rem';
		}
	},
	render(h){
//将来用  Autoprefixer 插件写兼容		
		return(
			<div
				style = {{
					width:'0.1rem',
					height:'0.1rem',
					borderRadius:'50%',
					backgroundColor:'#30ba78',
					position:'absolute',
					left:this.left,
					top:this.top,
					'animation':'await 1s infinite',
					'-moz-animation':'await 1s infinite',
					'-ms-animation':'await 1s infinite',
					'-o-animation':'await 1s infinite',
					'-webkit-animation':'await 1s infinite',
					animationDelay:this.index/12+'s',
					opacity:this.index/12
					}}
			>
			</div>
		)
	}
}
);
let arrObj = new Array(11);
export default {
	data(){
		return{
			array:arrObj
		}
	},
	
}
</script>