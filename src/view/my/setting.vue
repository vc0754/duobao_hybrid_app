<template>
<div class="view">
    <navbar>
        <div @click="goBack" slot="left">
            <i class="icon icon21">后退</i>
        </div>

        <div slot="center">
            <span>设置</span>
        </div>
    </navbar>
    
    <div class="main">
        <div class="page">
            <div class="page-content">
                <div class="content-block">
                    设置信息
                    <button @click="logout">确认退出</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import navbar from '@/view/ui/NavBar'
import { mapActions } from 'vuex'
import { USER_SIGNOUT } from '@/store/modules/user'
export default {
    name: 'MySetting',
    components: {
        navbar
    },
    data () {
        return {
        }
    },
    methods: {
        ...mapActions([USER_SIGNOUT]),
        logout () {
            this.USER_SIGNOUT()
            this.$router.replace({ path: '/login' })
        },
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>
