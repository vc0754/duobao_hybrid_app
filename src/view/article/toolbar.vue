<template>
<div class="toolbar">
    <div class="inner">
        <div class="link">
            <i class="icon icon15"></i>
            <span>86</span>
        </div>
        <div class="link">
            <i class="icon icon14"></i>
            <span>13</span>
        </div>
        <div class="link">
            <i class="icon icon10"></i>
            <span>55</span>
        </div>
        <div class="link">
            <i class="icon icon19"></i>
            <span>分享</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'toolbar'
}
</script>

<style lang="less" scoped>
@main-color: #ff4060;

.toolbar {
    background: #f7f7f8;
    width:100%; height:50px; position:fixed; z-index:500; top:auto; right:auto; bottom:0; left:0;

    display:box;
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:-webkit-flex;
    display:flex;
    
    .inner { width:100%; padding:0 10px;
        display:box;
        display:-webkit-box;
        display:-moz-box;
        display:-ms-flexbox;
        display:-webkit-flex;
        display:flex;
        
        justify-content: space-between;
        align-items: center;
        
        .link {
            color:@main-color;
            position:relative;

            flex-grow: 1;

            display:box;
            display:-webkit-box;
            display:-moz-box;
            display:-ms-flexbox;
            display:-webkit-flex;
            display:flex;

              -webkit-box-align: center;
                 -moz-box-align: center;
                 -ms-flex-align: center;
            -webkit-align-items: center;
                    align-items: center;
            
            justify-content:center;
            
            .icon {
                width:24px; height:24px; margin-right:4px;
            }

            span { font-size:12px; transform:translate3d(0, -3px, 0);}
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
