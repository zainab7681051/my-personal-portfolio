<script setup>
import navicon from'./navicon.vue'
import { Icon } from '@iconify/vue';
</script>

<template>
        <div class="fixed top-0 left-0 h-full w-16 md:w-1/12  m-0
         bg-back-800 text-white shadow-lg">
            <div class="navicons">
            <navicon iconName="carbon:earth-filled" idprop="#home" tip="Home"/>
            <navicon iconName="carbon:skill-level-advanced" idprop="#skills" tip="My Technical Skills"/>
            <navicon iconName="bi:briefcase-fill" idprop="#projects" tip="My Work & Projects"/>
            <navicon iconName="entypo:email" idprop="#contact" tip="Contact Me"/>
            
            <a href="https://firebasestorage.googleapis.com/v0/b/zainab-portfolio.appspot.com/o/Resume.pdf?alt=media&token=b1a32688-8e90-49f5-8014-129dbcd561c6" 
            target="_blank" class="custom-icon group navicon">
                <icon icon="bi:cloud-download-fill" width="42" height="42"></icon>
                <span class="tooltip group-hover:scale-100">
                    Download my CV
                </span>
            </a>
            </div>
        </div>

        
</template>
