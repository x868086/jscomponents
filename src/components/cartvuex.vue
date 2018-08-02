<template>
        <div id="app">
        <div id="product">商品列表
            <ul v-for="list in productList"
            v-bind:key="list.id">
                <li>
                    <h5>产品名称：{{list.product}}</h5>
                    <span>单价：{{list.price | currency}}</span>
                    <div>
                        <span>库存：{{list.count}}</span>
                    </div>
                    <button v-on:click="addCart(list)"
                    v-bind:disabled="list.count <= 0">添加到购物车</button>
                </li>
            </ul>
        </div>
        <!-- <div class="line"></div> -->
        <div id="cart-list">购物车列表
            <ul v-for="(list,index) in cartList"
            v-bind:key="list.name">
                <li>
                    <h5>产品名称：{{list.product}}</h5>
                    <span>单价:{{list.price | currency}}</span>
                    <span>数量：{{list.num}}</span>
                    <button v-on:click="decrement(list)"
                    v-bind:disabled="list.num <= 1">-</button>
                    <button v-on:click="increment(list)"
                    v-bind:disabled="productList[productList.findIndex(e=>{return e.id===list.id})].count === 0">+</button>
                    <span>合计:{{list.total | currency}}</span>
                    <!--当购物车列表中的某商品id和商品列表中的某商品id相同时，判断，如果商品列表中的count等于0则购物车的+按钮失效-->
                </li>
            </ul>
            <div class="line"></div>
            <div>总价：{{totalPrice | currency}}</div>
            <button v-on:click="clear">点击结算</button>
        </div>
        <div id="pay"></div>
    </div>
</template>


<script>
import Vue from 'vue';
import store from './js/store.js';
import url from './js/api.js';
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    // el:"#app",
    store:store,
    computed:{
        ...mapState(['productList','cartList']),
        ...mapGetters(['totalPrice'])
    },
    methods:{
        ...mapActions(['getListsAction','addListAction','incrementAction','decrementAction',
    'clearAction']),
        addCart:function(list){
            let flag=this.cartList.find(item=>{
                return item.id===list.id
            })
            if(flag){
                return 
            }
            let arr={
                'id':list.id,
                'product':list.product,
                'price':list.price,
                'num':1,
                'total':list.price
            }
            this.addListAction(arr)
        },
        increment:function(list){
            let idx=this.cartList.findIndex(item=>{
                return item.id === list.id
            })
            this.incrementAction({"idx":idx,"id":list.id})
        },
        decrement:function(list){
            let idx=this.cartList.findIndex(item=>{
                return item.id === list.id
            })
            this.decrementAction({"idx":idx,"id":list.id})
        },
        clear:function(){
            this.clearAction(url.listAdd,this.cartList)
        }

    },
    created:function(){
        this.getListsAction(url.cartList,{})
    },
    filters:{
        currency:function(price){
            let str=price +``;
            if(str.indexOf(".")>-1){
                let arr=str.split(".");
                return arr[0] +`.` +arr[1].substr(0,2)
            }else{
                return str + `.00`
            }
        }
    }
}
</script>


<style scoped>
        .line{
            width:400px;
            border:1px solid #ccc;
        }

        ul,li{
            list-style:none;
        }

        [disabled]{
            background:#ccc;
        }

        h5{
            margin:0;
            padding:0
        }

        #product{
            border:1px solid #ddd;
            float:left;
            margin-left:50px;
        }

        #cart-list{
            border:1px solid #ddd;
            float:right;
            margin-left:20px;
        }

</style>


