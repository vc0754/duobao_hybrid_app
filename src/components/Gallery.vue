<template>
<div class="gallery" v-if="items.length">
    <div class="image">
        <img :src="baseURL + image">
    </div>
    <div class="thumbnail">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <img :src="baseURL + item" @click="showImage(index)">
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Gallery',
    props: ['items'],
    data () {
        return {
            baseURL: axios.defaults.baseURL,
            image: this.items[0]
        }
    },
    methods: {
        showImage (i) {
            this.image = this.items[i]
        }
    }
}
</script>

<style lang="less" scoped>
@main-color: #ff4060;

.gallery {
    ul, li {
        padding:0; margin:0; list-style:none;
    }
    img { display:block; max-width:100%;}

    .image {
        img { width:100%;}
    }

    .thumbnail {
        overflow-x: auto;
        -webkit-overflow-scrolling:touch;
        
        ul {
            position: relative; padding:10px 0 15px; margin:0 -2px;
            display:-webkit-flex; display: flex;

            li {
                width:33.33%; padding:0 2px;
                flex-shrink:0;
            }
        }
        
        &::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>
