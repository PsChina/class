
<template>
  <div>
      <awaits></awaits>
  </div>
</template>

<script>
import awaits from './components/await.vue';

export default {
    components:{
        awaits
    }
    /*
   
   render (createElemt) { // <-- h must be in scope

    // return createElemt('div',{
    //     style:{
    //         background:'red',width:'100px',height:'100px'
    //     },
    //     domProps:{
    //         innerText:'My First Vue vDom!'
    //     }
    // })
    const colorArr = ['red','orange','green']
    const index = Math.floor(Math.random()*3);
    const obj = `background:${colorArr[index]}; width:100px;height:100px`;
    
    console.log(obj);
    return (<div style={obj}>
    My First Vue jsx!
    <div>{index}</div>
    </div>)
 
  }*/
}
</script>

<style>

</style>
