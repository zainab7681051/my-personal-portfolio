<script setup>
import navicon from'./navicon.vue'

const download=()=>{
    try{
        window.open('../../public/cv.pdf', '_blank'); 
        return true;
    }catch(e){
        console.log(e)
        return false;
    }
}
</script>

<template>
        <div className="fixed top-0 left-0 h-full w-16 md:w-1/12  m-0
         bg-back-800 text-white shadow-lg">
            
            <navicon iconName="carbon:earth-filled" idprop="#home" tip="Home"/>
            <navicon iconName="carbon:skill-level-advanced" idprop="#skills" tip="My Technical Skills"/>
            <navicon iconName="fluent-mdl2:work" idprop="#projects" tip="My Work & Projects"/>
            <navicon iconName="entypo:email" idprop="#contact" tip="Contact Me"/>
            <navicon @click="download()" iconName="bi:cloud-download-fill" tip="Download my CV"/>
            
        </div>

        
</template>

<style scoped>
</style>
