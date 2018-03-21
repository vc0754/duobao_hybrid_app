<template>
<div class="vc-tabs-container">
    <ul class="tab-nav">
        <li v-for="(item, i) in items" :key="i" :class="i == index ? 'active' : ''" @click="changeTab(item)">{{ item.name }}</li>
    </ul>
    <div class="tab-content">
        <slot></slot>
    </div>
</div>
</template>

<script>

export default {
    name: 'vcTabs',
    props: {
        items: Array,
        index: Number
    },
    methods: {
        changeTab (i) {
            this.$emit('changeTab', i)
        }
    }
}
</script>

<style lang="less" scoped>
@main-color: #ff4060;
.vc-tabs-container {
    .tab-nav {
        background-color:#fff;
        width:100%; height:44px;
        padding:0; margin:0; list-style:none; border-bottom:solid 1px #ddd;
        display:-webkit-flex; display:flex;
        justify-content: space-between;
        align-content:center;

        li {
            display:-webkit-flex; display:flex;
            justify-content:center;
            align-items:center;
            flex-grow:1;

            &.active {
                background-color:@main-color;
                color:#fff;
            }
        }
    }
    .hide { display:none;}
}
</style>



<styles>
.showAnminous {
    opacity: 1;
    -webkit-backface-visibility: hidden;
    -webkit-animation-name: "rightMove";
    /*动画名称，需要跟@keyframes定义的名称一致*/
    -webkit-animation-duration: .3s;
    /*动画持续的时间长*/
    -webkit-animation-iteration-count: 1;
    /*动画循环播放的次数为1 infinite为无限次*/
}

@-webkit-keyframes rightMove {
    0% {
        -webkit-transform: translate(110%, 0);
    }
    100% {
        -webkit-transform: translate(0, 0);
    }
}

@-ms-keyframes rightMove {
    0% {
        -ms-transform: translate(110%, 0);
    }
    100% {
        -ms-transform: translate(0, 0);
    }
}

@keyframes rightMove {
    0% {
        -webkit-transform: translate(110%, 0);
        -ms-transform: translate(110%, 0);
        transform: translate(110%, 0);
    }
    100% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}
</styles>
