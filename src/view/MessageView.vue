<template>
<div class="view">
    <navbar>
        <div slot="center">
            <span>消息</span>
        </div>
        <div slot="right">
            <div>
                <i class="icon icon7">+</i>
            </div>
        </div>
    </navbar>
    
    <div class="main">
        <div class="page">
            <searchbar/>
            <div class="page-content infinite-scroll pull-to-refresh-content" data-ptr-distance="55">
                <!-- 默认的下拉刷新层 -->
                <div class="pull-to-refresh-layer">
                    <div class="preloader"></div>
                    <div class="pull-to-refresh-arrow"></div>
                </div>
                
                <div class="none-message" v-if="!items.length">
                    <img src="../assets/noneMessage.png" width="22%">
                    <h3 @click="opt">您还没有消息哦～</h3>
                    <p class="mt0 color-gray">快添加好友，一起畅聊吧！</p>
                </div>
                
                <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
                    <span slot="no-more">-- 我已经是底部 --</span>
                    <span slot="no-results">-- 没有更多数据了 --</span>
                    <span slot="spinner"><div class="preloader"></div></span>
                </infinite-loading>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

import navbar from '@/view/ui/NavBar'
import searchbar from '@/view/ui/SearchBar'
export default {
    name: 'MessageView',
    components: {
        InfiniteLoading, navbar, searchbar
    },
    data () {
        return {
            items: []
        }
    },
    methods: {
        infiniteHandler ($state) {
            var urlVideo = '/message'
            this.$http.get(urlVideo, {
                params: {
                    page: this.items.length / 2 + 1
                }
            }).then(({ data }) => {
                if (data.length) {
                    this.items = this.items.concat(data)
                    $state.loaded()
                    if (this.items.length / 2 === 3) {
                        $state.complete()
                    }
                } else {
                    $state.complete()
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        opt () {
            console.log('ss')
        }
    }
}
</script>

<style lang="less" scoped>
.icon-message { background-color:#ddd; width:120px; height:48px;}

.none-message {
    background-color:#fff;
    width:100%; height:100%; margin-bottom:35px;
    
    display:box;
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:-webkit-flex;
    display:flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h3 { margin-bottom: 0;}
    p { margin:0;}
}
</style>
