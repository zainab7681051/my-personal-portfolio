<script setup>
import NavBar from './components/navbar.vue'
import home from './components/home.vue'
import skills from './components/skills.vue'
import projects from './components/projects.vue'
import contact from './components/contact.vue'
import footercomp from './components/footercomp.vue'
import {ref} from 'vue'
let open=ref(false);
const openMenu=()=>{
  open.value=!open.value
  return open.value
}
</script>

<template>
  <div class="grid grid-cols-12">
    <div class="
    md:visible
    md:col-span-1 
    duration-200 transition-all ease-in-out
    origin-left"
    :class="open ?
    'colspan-1 visible':
    'col-span-0 hidden'">
      <nav-bar/>
    </div>
    
    <div class="md:col-span-11"
    :class="open ? 'col-span-11':'col-span-12'">

      <div class="spacer wavey-top"></div>

      <!-- sidebar button for small screen -->
      <button 
      class="ml-5
      text-primary
      shadow-lg
      bg-back-600 
      fixed 
      bottom-20
      h-10
      w-10
      justify-center
      flex justify-center items-center
      rounded-full
      md:hidden"
      :class="open ? 'left-12':'left-0'"
      @click="openMenu()">
          <iconify-icon v-if="!open" icon="bi:arrow-right-circle"
           width="42" height="42"></iconify-icon>
          
          <iconify-icon v-if="open" icon="bi:arrow-left-circle" 
          width="42" height="42"></iconify-icon>
      </button>

      <home/>

      <div class="spacer wavey "></div>
      
      <skills/>

      <div class="spacer wavey-2"></div>

      <projects/>
      
      <div class="spacer wavey-3"></div>

      <contact/>

      <div class="spacer wavey"></div>

      <footercomp/>
    </div>
  </div>
</template>

