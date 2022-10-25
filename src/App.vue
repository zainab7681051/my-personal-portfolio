<script setup>
import NavBar from './components/navbar.vue'
import home from './components/home.vue'
import skills from './components/skills.vue'
import projects from './components/projects.vue'
import contact from './components/contact.vue'
import footercomp from './components/footercomp.vue'
</script>

<template>
  <div class="grid grid-cols-12 gap-0">
    <div class="col-span-1">
      <nav-bar/>
    </div>
    
    <div class="col-span-11">
      <home/>
      <!-- curvy-divider -->
      <skills/>
      <!-- curvy-divider -->
      <projects/>
      <!-- curvy-divider -->
      <contact/>
      <!-- curvy-divider -->        
      <footercomp/>
    </div>
  </div>
</template>

