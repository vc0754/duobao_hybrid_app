<template>
<div class="toolbar">
    <div class="inner">
        <router-link class="link" to="/app/home">
            <i class="icon icon1"></i>
            <span>首页</span>
        </router-link>
        <router-link class="link" to="/app/discovery">
            <i class="icon icon2"></i>
            <span>发现</span>
        </router-link>
        <div class="link">
            <i class="icon icon3"></i>
            <span></span>
        </div>
        <router-link class="link" to="/app/message">
            <i class="icon icon4"></i>
            <span>消息</span>
        </router-link>
        <router-link class="link" to="/app/my">
            <i class="icon icon5"></i>
            <span>我的</span>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'TabsBar'
}
</script>

<style lang="less" scoped>
@main-color: #ff4060;

.toolbar {
    background: #f7f7f8;
    width:100%; height:50px; position:fixed; z-index:500; top:auto; right:auto; bottom:0; left:0;
    
    display:flex;
    
    .inner { width:100%; padding:0 10px;

        display:flex;

        justify-content: space-between;
        align-items: center;
        
        .router-link-exact-active { color:@main-color;}

        .link {
            flex-grow: 1;
            
            display:flex;

            flex-direction: column;
            align-items: center;
            
            .icon {
                background-position-y:100%;
            }

            span { font-size:12px;}

            &.router-link-exact-active { color:#ff4060;}
            &.router-link-exact-active .icon { background-position-y:0;}
        }
    }

    &::before {
        content: ''; display: block;
        position: absolute; left:0; right:auto; top:0; bottom:auto;
        height: 1px; width:100%;
        background-color: #ddd;
        z-index: 15;
        -webkit-transform-origin: 50% 0;
                transform-origin: 50% 0;
    }
}
</style>