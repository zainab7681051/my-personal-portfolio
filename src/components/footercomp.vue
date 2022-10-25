<script setup>
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
                <!-- TikTok -->
                <!-- <a
                  href="https://tiktok.com/@sandhika.galih"
                  target="_blank"
                  class="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                  >
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>TikTok</title>
                    <path
                      d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                      />
                    </svg>
                  </a> -->
                  <!-- LinkedIn -->
                  <!-- <a
                    href="https://linkedin.com/in/sandhikagalih"
                    target="_blank"
                    class="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                    >
                    <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>LinkedIn</title>
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        />
                      </svg>
                    </a> -->
                  </div>
                  <p class="text-center text-xs lg:text-sm font-medium
                   text-slate-400">
                    {{thisYear}} &nbsp|&nbsp made by 
                    <span class="custom-btn text-pink-500 hover:bg-pink-500 hover:text-white">
                        Zainab</span>, using 
                    <a href="#" target="_blank" 
                    class="custom-btn text-green-500 hover:bg-green-500 
                    hover:text-white">Vue</a>, and
                    <a href="https://tailwindcss.com" target="_blank" 
                    class="custom-btn text-sky-500 hover:bg-sky-500 hover:text-white">
                    Tailwind CSS</a>.<br>deployd and hosted on
                    <a href="#" target="_blank" 
                    class="custom-btn text-orange-500 hover:bg-orange-500 hover:text-white">
                    Firebase</a>
                  </p>
                </div>
              </div>
            </footer>
</template>
