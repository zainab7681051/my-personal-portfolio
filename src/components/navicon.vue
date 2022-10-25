<script setup>
defineProps({
    iconName:String,
    tip:String,
    idprop:String
})
</script>

<template>
    <a :href="idprop" className="custom-icon group">
        <iconify-icon :icon="iconName" width="42" height="42"></iconify-icon>
        <span class="tooltip group-hover:scale-100">
            {{tip}}
        </span>
    </a>
</template>

<style scoped>
</style>
