<template>
        <div id="app">
            <tabs>
                <pannel v-bind:label="'标签一'"
                        v-bind:index=1>
                        <h3>关于Vue</h3>
                        <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
                            与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。
                            Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
                            另一方面，当与现代化的工具链以及各种支持类库结合使用时，
                            Vue 也完全能够为复杂的单页应用提供驱动。</p>
                </pannel>

                <pannel v-bind:label="'标签二'"
                        v-bind:index=2>
                        <h3>Vue核心团队成员</h3>
                        <img src="https://github.com/yyx990803.png" alt="#"
                        style="width:100px">
                        <img src="https://github.com/eddyerburgh.png" alt="#"
                        style="width:100px">
                </pannel>

                <pannel v-bind:label="'标签三'"
                        v-bind:index=3>
                        <div>标签三的内容</div>
                </pannel>
            </tabs>
        </div>
</template>


<script>
import Vue from 'vue';
import tabs from './tabslot/tabslot.vue';
import pannel from './tabslot/pannel.vue'
export default {
    components:{
        tabs:tabs,
        pannel:pannel
    }
}
</script>


<style scoped>
    p,h3{
        margin:0px;
        padding:0px
    }
</style>


