<template>
<div class="main">
    <div class="page">
        <div class="page-content infinite-scroll pull-to-refresh-content" data-ptr-distance="55">
            <!-- 默认的下拉刷新层 -->
            <div class="pull-to-refresh-layer">
                <div class="preloader"></div>
                <div class="pull-to-refresh-arrow"></div>
            </div>
            
            <ul class="vc-list-container">
                <li v-for="(item, i) in items" :key="i">
                    <div class="thumb">
                        <router-link :to="'/article/' + item.id">
                            <img :src="baseURL + item.thumbnail" alt="" />
                        </router-link>
                    </div>
                    <div class="info">
                        <h3>
                            <router-link :to="'/article/' + item.id">{{ item.title }}</router-link>
                        </h3>
                        <p>{{ item.excerpt }}</p>
                        <div class="meta">
                            <span>作者|分类|发布时间</span>
                        </div>
                    </div>
                </li>
            </ul>

            <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
                <span slot="no-more">-- 我已经是底部 --</span>
                <span slot="no-result">-- 没有更多数据了 --</span>
                <span slot="spinner"><div class="preloader"></div></span>
            </infinite-loading>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading'

export default {
    name: 'DiscoveryTab2',
    components: {
        InfiniteLoading
    },
    methods: {
        infiniteHandler ($state) {
            var urlItems = '/homeitems' + this.item.index
            this.$http.get(urlItems, {
                params: {
                    page: this.items.length / 6 + 1
                }
            }).then(({ data }) => {
                if (data.length) {
                    this.items = this.items.concat(data)
                    $state.loaded()
                    if (this.items.length / 6 === 3) {
                        $state.complete()
                    }
                } else {
                    $state.complete()
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    props: ['item'],
    data () {
        return {
            baseURL: axios.defaults.baseURL,
            items: []
        }
    },
    mounted () {
        // this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset')
    }
}
</script>

<style lang="less" scoped>
.vc-list-container {
    background-color:#fff; padding:0; margin:0; list-style:none;

    li {
        padding:15px; position:relative;
        
        display:box;
        display:-webkit-box;
        display:-moz-box;
        display:-ms-flexbox;
        display:-webkit-flex;
        display:flex;
        
        .thumb {
            background-color:#eee; width:30%; margin-right:5%; overflow:hidden;
            flex-shrink:0;

            img {
                display:block; max-width:100%;
            }
        }

        .info {
            width:65%; overflow: hidden;

            h3 { padding:0; margin:0 0 0.5rem; }
            p { margin-top:0; opacity:0.75; word-break:break-all; }
            .meta { font-size:85%; opacity:0.55; }
        }

        &::after {
            background-color:#ddd;
            position:absolute; bottom:0; left:0;
            content:""; display:block; width:100%; height:1px;
        }
    }
}

.infinite-scroll-preloader {
    margin-top:15px;
}
</style>
