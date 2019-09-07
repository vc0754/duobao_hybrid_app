<template>
<div class="subnavbar">
    <ul :style="{ transform: 'translate3d(' + tran.X + ',' + tran.Y + ',' + tran.Z + ')'}">
        <li v-for="(item, i) in items" :key="i" :class="i == index ? 'active' : ''" @click="changeTab(item)">{{ item.name }}</li>
    </ul>
</div>

</template>

<script>
export default {
    name: 'Subnavbar',
    props: {
        items: Array,
        index: Number
    },
    methods: {
        changeTab (i) {
            this.$emit('changeTab', i)
            // .scrollLeft = 0;
        }
    },
    computed: {
        tran () {
            // var x = -20 * Math.abs(this.index - 4) + '%'
            return {
                X: 0,
                Y: 0,
                Z: 0
            }
        }
    },
    mounted () {
        // 接收 swiper 组件传过来的导航按钮索引，跳转到相应标签
        // this.$root.eventHub.$on('slideTab', this.slideTab)
    }
}
</script>

<style lang="less" scoped>
@main-color: #ff4060;

.subnavbar {
    background-color:#fff; position:absolute; top:100%; width:100%; left:0; overflow-x: auto;

    ul {
        height:44px; min-width:100%; padding:0; margin:0; list-style:none;
        display:flex;
        
        align-content: center;

        li {
            width:20%;
            flex-shrink:0;
            display:flex;

            justify-content: center;
            align-items: center;

            &.active {
                color:#fff;
                background-color: @main-color;
            }
        }
    }

    &::after {
        background-color:#ddd;
        position:absolute; bottom:0; left:0;
        content: ''; display:block; width:100%; height:1px;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
    }

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
