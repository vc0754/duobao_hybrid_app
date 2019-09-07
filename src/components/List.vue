<template>
<ul class="vc-list-container" v-if="items.length">
    <li v-for="(item, index) in items" :key="index">
        <router-link to="/app/market">
            <i class="icon"></i>
            <span>{{ item.title }}</span>
        </router-link>
    </li>
</ul>
</template>

<script>
export default {
    name: 'List',
    props: ['items']
}
</script>

<style lang="less" scoped>

</style>
