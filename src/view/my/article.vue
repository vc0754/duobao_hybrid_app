<template>
<div class="view">
    <navbar>
        <div @click="goBack" slot="left">
            <i class="icon icon21">后退</i>
        </div>

        <div slot="center">
            <span>我的文章</span>
        </div>
    </navbar>
    
    <div class="main">
        <div class="page">
            <div class="page-content">
                <div class="content-block">
                    我的文章信息
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import navbar from '@/view/ui/NavBar'
export default {
    name: 'MyArticle',
    components: {
        navbar
    },
    data () {
        return {
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>
