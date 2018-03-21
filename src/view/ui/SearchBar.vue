<template>
<div class="search-container">
    <input type="text" placeholder="搜索">
</div>
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<style lang="less" scoped>
.search-container {
    background-color:#e9e9e9; height:44px; width:100%; padding:8px; position:fixed; left:0; z-index:200;

    input {
        color: #000;
        font-family: inherit; font-size: 14px; font-weight: 400;
        width: 100%; height: 100%; padding: 0 28px; display: block;
        border:none; border-radius: 5px;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: 8px center;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2013%2013'%20enable-background%3D'new%200%200%2013%2013'%3E%3Cg%3E%3Cpath%20fill%3D'%23939398'%20d%3D'M5%2C1c2.2%2C0%2C4%2C1.8%2C4%2C4S7.2%2C9%2C5%2C9S1%2C7.2%2C1%2C5S2.8%2C1%2C5%2C1%20M5%2C0C2.2%2C0%2C0%2C2.2%2C0%2C5s2.2%2C5%2C5%2C5s5-2.2%2C5-5S7.8%2C0%2C5%2C0%20L5%2C0z'%2F%3E%3C%2Fg%3E%3Cline%20stroke%3D'%23939398'%20stroke-miterlimit%3D'10'%20x1%3D'12.6'%20y1%3D'12.6'%20x2%3D'8.2'%20y2%3D'8.2'%2F%3E%3C%2Fsvg%3E");
        -webkit-background-size: 13px 13px;
        background-size: 13px 13px;
    }
}
</style>
