<script setup>
import { Icon } from '@iconify/vue';
const thisYear=new Date().getFullYear();
</script>
<template>
    <footer class="bg-back-900 px-10 pt-24 pb-12">
        <div class="container">
            <div class="flex flex-wrap">
                <div class="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/2">
                <h2 class="mb-5 text-4xl font-bold text-white">Info</h2>
                <h3 class="mb-2 text-2xl font-bold">Zainab, web developer</h3>
                <p>zainabsanar@gmail.com</p>
                <p>Erbil, Kurdistan Region</p>
                <p>Iraq</p>
              </div>
              <div class="mb-12 w-full px-4 md:w-1/2">
                <h3 class="mb-5 text-xl font-semibold text-white">Sections</h3>
                <ul class="text-slate-300">
                  <li>
                    <a href="#home" class="custom-btn">Home</a>
                  </li>
                  <li>
                    <a href="#skills" class="custom-btn">Skills</a>
                  </li>
                  <li>
                    <a href="#projects" class="custom-btn">Projects</a>
                  </li>
                  <li>
                    <a href="#contact" class="custom-btn">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full border-t border-slate-700 pt-10">
              <div class="mb-5 flex items-center justify-center">
                <!-- github -->
                <a
                href="https://github.com/zainab7681051/my-personal-portfolio"
                target="_blank"
                class="mr-3 flex h-9 w-9 items-center justify-center rounded-full  text-slate-300 hover:bg-primary hover:text-back-600 rounded-xl transition-all cursor-pointer duration-300 ease-linear;"
                title="GitHub"
                >
                <icon icon="akar-icons:github-fill" width="24" height="24"></icon>
                </a>
                <!-- LinkedIn -->
                <a
                    href="https://www.linkedin.com/in/zainab-sanar/"
                    target="_blank"
                    class="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:bg-primary hover:text-back-600 rounded-xl transition-all cursor-pointer duration-300 ease-linear;"
                    title="LinkedIn">
                 
                <icon icon="akar-icons:linkedin-box-fill" width="24" height="24"></icon>   
                </a>
                <!-- Freelancer -->
                <a
                    href="https://www.freelancer.com/u/zainab76810510"
                    target="_blank"
                    class="mr-3 flex h-9 w-9 items-center justify-center rounded-full  text-slate-300 hover:bg-primary hover:text-back-600 rounded-xl transition-all cursor-pointer duration-300 ease-linear;"
                    title="Freelancer.com">
                 
                <icon icon="simple-icons:freelancer" width="24" height="24"></icon>   
                </a>
                  </div>
                  <p class="text-center text-xs lg:text-sm font-medium
                   text-slate-400">
                    {{thisYear}} &nbsp|&nbsp made by 
                    <span class="custom-btn text-pink-500 hover:bg-pink-500 hover:text-white">
                        Zainab</span>, using 
                    <a href="https://vuejs.org/" target="_blank" 
                    class="custom-btn text-green-500 hover:bg-green-500 
                    hover:text-white">Vue</a>, and
                    <a href="https://tailwindcss.com" target="_blank" 
                    class="custom-btn text-sky-500 hover:bg-sky-500 hover:text-white">
                    Tailwind CSS</a>.<br>deployd and hosted on
                    <a href="https://firebase.google.com/" target="_blank" 
                    class="custom-btn text-orange-500 hover:bg-orange-500 hover:text-white">
                    Firebase</a>
                  </p>
                </div>
              </div>
            </footer>
</template>
