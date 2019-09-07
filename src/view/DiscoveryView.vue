<template>
<div class="view no-navbar">
    
    <div class="main">
        <div class="page">
            <searchbar/>

            <div class="page-content infinite-scroll pull-to-refresh-content" data-ptr-distance="55">
                <!-- 默认的下拉刷新层 -->
                <div class="pull-to-refresh-layer">
                    <div class="preloader"></div>
                    <div class="pull-to-refresh-arrow"></div>
                </div>
                
                <div class="content-block-temp">
                    <vcTabs :items="vcTabItems" :index="vcTabIndex" @changeTab="changeTab">
                        <keep-alive>
                            <component :is="vcTabContent"/>
                        </keep-alive>
                    </vcTabs>
                    <DiscoveryVideo/>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import searchbar from '@/view/ui/SearchBar'
import vcTabs from '@/components/vcTabs'
import DisTab1 from '@/view/discovery/tab1'
import DisTab2 from '@/view/discovery/tab2'
import DiscoveryVideo from '@/view/discovery/video'

export default {
    name: 'DiscoveryView',
    components: {
        searchbar, vcTabs, DisTab1, DisTab2, DiscoveryVideo
    },
    methods: {
        changeTab (tab) {
            this.vcTabIndex = tab.index
            this.vcTabContent = tab.component
        }
    },
    data () {
        return {
            vcTabIndex: 0,
            vcTabItems: [
                {
                    index: 0,
                    name: '内容分类',
                    component: DisTab1
                },
                {
                    index: 1,
                    name: '我关注的',
                    component: DisTab2
                }
            ],
            vcTabContent: DisTab1
        }
    }
}
</script>

<style lang="less" scoped>
</style>
