<template>
<div class="navbar">
    <div class="inner">
        <div class="left">
            <slot name="left"></slot>
        </div>
        
        <div class="center">
            <slot name="center">
                <span>{{ title }}</span>
            </slot>
        </div>
        
        <div class="right">
            <slot name="right"></slot>
        </div>
        
        <slot name="subnavbar"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['title'],
    data () {
        return {}
    }
}
</script>

<style lang="less" scoped>
.navbar {
    background: #fff;
    width:100%; height:44px; position:fixed; z-index:500; top:0; right:auto; bottom:auto; left:0;
    display: -webkit-flex;
    display: flex;

    .inner { width:100%; padding:0 10px;
        
        display:box;
        display:-webkit-box;
        display:-moz-box;
        display:-ms-flexbox;
        display:-webkit-flex;
        display:flex;
        
        justify-content: space-between;

        > * {
            display:box;
            display:-webkit-box;
            display:-moz-box;
            display:-ms-flexbox;
            display:-webkit-flex;
            display:flex;
            
            align-items: center;
        }
    }
    
    .logo {
        height:25px;
    }

    .left {
        margin-right:10px;
        flex-shrink: 0;

        span {
            margin-left:6px;
        }
    }

    .right {
        margin-left:10px;
        flex-shrink: 0;

        span {
            margin-right:6px;
        }
    }

    .center {
        font-size:17px;
        overflow:hidden;
        flex-grow: 10;
        justify-content: center;

        span {
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
        }
    }

    &::after {
        content: ''; display: block;
        position: absolute; left:0; right:auto; top:auto; bottom:0;
        height: 1px; width:100%;
        background-color: #ddd;
        z-index: 15;
        -webkit-transform-origin: 50% 0;
                transform-origin: 50% 0;
    }

    .icon { width:22px; height:22px;}

    &.navbar-hidden {
        -webkit-transition-duration:400ms;
                transition-duration:400ms;
        -webkit-transform:translate3d(0, -100%, 0);
                transform:translate3d(0, -100%, 0);
    }
}
</style>