<template>
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
</template>

<script>
import axios from 'axios'
export default {
    name: 'DiscoveryTab2',
    data () {
        return {
            baseURL: axios.defaults.baseURL,
            items: []
        }
    },
    mounted () {
        var urlSwiper = '/attenditems'
        this.$http.get(urlSwiper, {})
            .then((response) => {
                this.items = response.data
            }).catch((error) => {
                window.console.log(error)
            })
    }
}
</script>

<style lang="less" scoped>
.vc-list-container {
    background-color:#fff; padding:0; margin:0; list-style:none;

    li {
        padding:15px; position:relative;
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
</style>
