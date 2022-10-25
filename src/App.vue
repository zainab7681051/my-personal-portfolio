<script setup>
import NavBar from './components/navbar.vue'
import home from './components/home.vue'
import skills from './components/skills.vue'
import projects from './components/projects.vue'
import contact from './components/contact.vue'
import footercomp from './components/footercomp.vue'
</script>

<template>
  <div class="grid grid-cols-12">
    <div class="col-span-1">
      <nav-bar/>
    </div>
    
    <div class="col-span-11">
      
      <home/>

      <div class="spacer wavey"></div>
      
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

