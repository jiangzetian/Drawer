<template>
    <template v-for="(item,index) in menu">
        <a-menu-item
                v-if="!item.children && item.meta.menuShow"
                :key="item.name"
                :index="index"
        >
            {{item.meta.title}}{{index}}
        </a-menu-item>

<!--        <a-sub-menu-->
<!--                v-if="item.children && item.meta.menuShow"-->
<!--                :key="item.name"-->
<!--        >-->
<!--            <template #title>-->
<!--                <span class="submenu-title-wrapper">-->
<!--                    {{item.meta.title}}-->
<!--                </span>-->
<!--            </template>-->
<!--            &lt;!&ndash; 递归 &ndash;&gt;-->
<!--            <sidebar-item-->
<!--                    :menu="item.children"-->
<!--                    :parent="parent ? parent + '/' + item.path : item.path"-->
<!--            />-->
<!--        </a-sub-menu>-->
    </template>
</template>

<script>
    export default {
        name: "SidebarItem",
        props: ["menu", "parent"],
    }
</script>

<style scoped>

</style>
