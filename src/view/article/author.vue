<template>
<section class="author-summary">
    <div class="summary-inner">
        <div class="summary-header">
            <div class="summary-avatar">
                <router-link to="/app/my">
                    <img :src="user.avatar" alt="" />
                </router-link>
            </div>
            <div class="summary-content">
                <div class="summary-name">
                    <span>作者</span>
                    {{ user.name }}
                </div>
                <div class="summary-social">微信号：efopqwe 微博：efopqwe</div>
            </div>
        </div>
        <div class="summary-footer">本文版权归 寻找超强BUY 所有，任何形式转载请联系作者。</div>
    </div>
</section>
</template>

<script>
export default {
    name: 'AuthorSummary',
    data () {
        return {
            user: {
                name: '寻找超强BUY',
                avatar: require('../../assets/head2.jpg')
            }
        }
    }
}
</script>

<style lang="less" scoped>
.author-summary {
    color:#999; background: #fff; padding:15px;
    .summary-inner {
        background: #eee; padding:15px;

        .summary-header {
            padding-bottom:15px;
            
            display:box;
            display:-webkit-box;
            display:-moz-box;
            display:-ms-flexbox;
            display:-webkit-flex;
            display:flex;

            .summary-avatar {
                width:60px; height:60px; border-radius:50%; overflow:hidden; margin-right:12px;
            }
            .summary-content {
                .summary-name {
                    font-size: 15px;
                    span { font-size: 12px; opacity: 0.65; display: block;}
                }
                .summary-social { font-size: 13px; margin-top: 2px;}
            }
        }

        .summary-footer {
            font-size:11px; text-align:center; padding-top:12px; margin-bottom:-3px; position:relative;
            &::before {
                content:'';
                background-color:#cccccc;
                position:absolute; z-index:15; left:0; right:auto; top:0; bottom:auto;
                width:100%; height:1px; display:block;
                -webkit-transform-origin: 50% 100%;
                        transform-origin: 50% 100%;
            }
        }
    }
}
</style>

