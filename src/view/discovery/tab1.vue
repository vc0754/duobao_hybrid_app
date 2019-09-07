<template>
<ul class="vc-guid-container">
    <li v-for="(item, i) in items" :key="i">
        <div class="thumb">
            <router-link :to="'/article/tag/' + item.id">
                <img :src="item.thumbnail" alt="" />
            </router-link>
        </div>
        <div class="info">
            <h4>
                <router-link :to="'/article/tag' + item.id">{{ item.title }}</router-link>
            </h4>
        </div>
    </li>
</ul>
</template>

<script>
import axios from 'axios'
export default {
    name: 'DiscoveryTab1',
    data () {
        return {
            baseURL: axios.defaults.baseURL,
            items: []
        }
    },
    mounted () {
        var urlSwiper = '/categoryitems'
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
.vc-guid-container {
    background-color:#fff; padding:0 15px; margin:0; list-style:none;
    padding:5px 7px; overflow: hidden;
    /*
    display:flex;
    flex-wrap: wrap;
    */

    li {
        width:33.33%; padding:10px 8px;
        position:relative;
        float:left;
        
        .thumb {
            background-color:#eee; width:100%; overflow:hidden; position:relative;
            margin-bottom:5px;
            flex-shrink:0;
            
            img { display:block; max-width:100%; }
        }
        
        .info {
            padding:0;

            h3 { padding:0; margin:0 0 0.5rem; }
            h4 { font-size:13px; font-weight:normal; text-align: center; padding:0; margin:0 0 0.5rem; }
            p { margin-top:0; opacity:0.75; }
            .meta { font-size:85%; opacity:0.55; }
        }
    }
}
</style>
