<template>
<div>
    <h2>搭配视频</h2>
    <ul class="vc-guid-container">
        <li v-for="(item, i) in items" :key="i">
            <div class="thumb video-thumb">
                <img :src="item.thumbnail" alt="">
            </div>
            <div class="info">
                <h3>{{ item.title }}</h3>
                <div class="meta">{{ item.user.name }}</div>
            </div>
        </li>
    </ul>

    <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
        <span slot="no-more">-- 我已经是底部 --</span>
        <span slot="no-result">-- 没有更多数据了 --</span>
        <span slot="spinner"><div class="preloader"></div></span>
    </infinite-loading>
</div>
</template>

<script>
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading'

export default {
    name: 'DiscoveryVideo',
    components: {
        InfiniteLoading
    },
    methods: {
        infiniteHandler ($state) {
            var urlVideo = '/videoitems'
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
                window.console.log(error)
            })
        }
    },
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
h2 {
    background-color:#fff; font-size:16px; text-align: center; padding:15px 0; margin:0; position:relative;

    &::before {
        content: ''; display: block;
        position: absolute; left: 15px; right: 15px; top:-1px; bottom:auto;
        height: 1px;
        background-color: #c8c7cc;
        z-index: 15;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
    }
}

.vc-guid-container {
    background-color:#fff; padding:0 15px; margin:0; list-style:none;
    
    li {
        position:relative;
        
        .thumb {
            background-color:#eee; width:100%; overflow:hidden; position:relative;
            flex-shrink:0;
            
            img { display:block; max-width:100%; }
        }
        
        .video-thumb::after {
            content: ''; display: block; width: 100%; height: 100%;
            position: absolute; top: 0; left: 0;
            background: rgba(0,0,0,0.3) url(../../assets/video.png) no-repeat center center; background-size: 25%;
        }

        .info {
            padding: 10px 0 15px;

            h3 { padding:0; margin:0; }
            h4 { font-size:13px; font-weight:normal; text-align: center; padding:0; margin:0 0 0.5rem; }
            p { margin-top:0; opacity:0.75; }
            .meta { font-size:85%; opacity:0.55; }
        }
    }
}
</style>
