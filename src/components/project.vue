<script setup>
import { Icon } from '@iconify/vue';
defineProps({
    title:String,
    description:String,
    imgSrc:String,
    githubUrl:String,
    appUrl:String
})
</script>

<template>
	<div class="mb-12 p-4 md:w-1/2">
		<div class="overflow-hidden rounded-md">
		  <img :src=imgSrc :alt=title width="900"/>
		</div>
		<h3 class="mt-5 mb-3 text-xl font-semibold text-white">
		{{title}}</h3>
		<p class="text-base font-medium text-secondary">{{description}}</p>
		<div class="flex">
		  <a :href=githubUrl
		    target="_blank" title="view code on github">
		    <icon icon="akar-icons:github-fill"
		    width="24" height="24" 
		    class="h-10 w-10 
		    relative flex items-center 
		    justify-center
		    mt-2 mb-2 mx-auto
		    p-2
		    bg-back-900
		    text-primary 
		    hover:bg-primary
		    hover:text-back-600
		    rounded-xl 
		    transition-all cursor-pointer
		    duration-300 ease-linear;"/>
		  </a>
		  <a :href=appUrl
		    target="_blank" title="visit this app"
		    :class="appUrl=='' ? 'disable-link': ''">
		    <icon icon="codicon:live-share"
		    width="24" height="24" 
		    :class="appUrl=='' ? 'h-10 w-10  relative flex items-center  justify-center mt-2 mb-2 mx-auto p-2 bg-back-900 text-slate-400':'h-10 w-10  relative flex items-center  justify-center mt-2 mb-2 mx-auto p-2 bg-back-900 text-primary hover:bg-primary hover:text-back-600 rounded-xl transition-all cursor-pointer duration-300 ease-linear;'"/>
		  </a>
		</div>
	</div>
</template>

<style scoped>
.disable-link{
  pointer-events: none;
  cursor: default;
  text-decoration: none;
}
</style>