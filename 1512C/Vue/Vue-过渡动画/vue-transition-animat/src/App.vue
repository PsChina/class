<template>
  <div id="app">
      <button @touchend="show=!show">显示/隐藏</button>

    <transition name="fade">
        <!-- 过渡动画专用 用transition包裹需要加动画的元素 -->
        <div class="myDiv" v-if="show" v-text="msg" ></div>
    </transition>
      

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
      return {
          msg:'Hello !',
          show:true,//默认是显示的
      }
  },
  components: {
    
  }
}
</script>

<style>
/*
    类名是 transition 上的 name + 一些约定好的类名钩子
6个
v-enter：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。

v-enter-active：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (与此同时 v-enter 被删除)，在 transition/animation 完成之后移除。

v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。

v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (与此同时 v-leave 被删除)，在 transition/animation 完成之后移除。
*/

    /* 关键帧动画 */
    @keyframes rotate { 
        from{
            transform:rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }   


    .fade-enter{ /* 进入之前 */
        opacity: 0;
    }
    .fade-enter-active{ /*进入的过程中*/
        transition: opacity 5s;
        animation: rotate 5s;
    }
    .fade-enter-to{ /*进入之后*/ 
        opacity: 1;
    }

    .fade-leave{ /*离开之前*/
        opacity: 1;
    }
    .fade-leave-active{ /*离开的过程中*/
        transition: opacity 5s;
        animation: rotate 5s reverse;
    }
    .fade-leave-to{ /*离开之后*/
        opacity: 0;
    }

    .myDiv{
        width: 50px;
    }

</style>
