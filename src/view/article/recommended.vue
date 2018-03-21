<template>
<section class="recommends">
    <h2>推荐文章</h2>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            <div class="thumb">
                <router-link :to="'/article/' + item.id">
                    <img :src="baseURL + item.thumbnail" alt="" />
                </router-link>
            </div>
            <div class="info">
                <h3>
                    <router-link :to="'/article/' + item.id">{{ item.excerpt }}</router-link>
                </h3>
                <div class="meta">
                    <span>{{ item.user.name }}</span>
                </div>
            </div>
        </li>
    </ul>
</section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'RecommendedArticles',
    data () {
        return {
            baseURL: axios.defaults.baseURL,
            items: []
        }
    },
    mounted () {
        var urlSwiper = '/recommends'
        this.$http.get(urlSwiper, {})
            .then((response) => {
                this.items = response.data
            }).catch((error) => {
                console.log(error)
            })
    }
}
</script>

<style lang="less" scoped>
.recommends {
    background-color:#fff; padding:15px; margin:-15px 0;

    h2 {
        background-color:#fff; font-size:15px; text-align: center; padding:0 0 15px 0; margin:0; position:relative;

        // &::before {
        //     content: ''; display: block;
        //     position: absolute; left: 15px; right: 15px; top:-1px; bottom:auto;
        //     height: 1px;
        //     background-color: #c8c7cc;
        //     z-index: 15;
        //     -webkit-transform-origin: 50% 100%;
        //     transform-origin: 50% 100%;
        // }
    }
    
    ul {
        li {
            position:relative; padding:15px 0;
            
            .thumb {
                width:110px; overflow:hidden; margin-left:8%; float:right;
                
                img { width:100%;}
            }

            .info {
                display:box;
                display:-webkit-box;
                display:-moz-box;
                display:-ms-flexbox;
                display:-webkit-flex;
                display:flex;
                
                flex-direction:column;

                h3 {
                    color:#666; font-size:14px; font-weight:normal; line-height:21px;
                    margin:0;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .meta {
                    color: #ccc; font-size: 12px; margin-top: 15px;
                }
            }

            &::before {
                content:''; display:block;
                position:absolute; z-index:15; left:0; right:auto; top:0; bottom:auto;
                background-color:#c8c7cc; width:100%; height:1px;
                -webkit-transform-origin: 50% 100%;
                        transform-origin: 50% 100%;
            }
        }
    }
}

html.pixel-ratio-2 .recommends .list-block .item-content:after {
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
</style>
