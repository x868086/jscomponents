<template>
    <div id="app">
        <span>可设置最大值，最小值，初始值</span>
        <number-input v-bind:value="value"
        v-bind:max="10"
        v-bind:min="0"
        v-on:update="updateValue">
    </number-input>
    </div>
</template>


<script>
import numberInput from './numberinput/numberinput.vue';
export default {
    data:function(){
        return value=5
    },
    methods:{
        updateValue:function(val){
            this.value=val
        }
    },
    components:{
        numberInput:numberInput
    } 
}
</script>

<style scoped>
   #app{
       margin-left:30px;
       margin-top:30px;
   }
</style>


