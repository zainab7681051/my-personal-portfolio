<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <section id="projects" class="px-10 pt-20 bg-back-900">
          <div class="container">
            <div class="w-full px-4">
              <div class="mx-auto mb-16 max-w-xl text-center">
                <h4 class="mb-2 text-lg font-semibold text-primary">Projects</h4>
                <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Finished Works</h2><!-- 
                <p class="text-md font-medium text-secondary md:text-lg">
                  here you can find what I have worked on in the past.
                </p> -->
              </div>
            </div>
            <div class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
              <div class="mb-12 p-4 md:w-1/2">
                <div class="overflow-hidden rounded-md">
                  <img src="../assets/free-documentaries.png" alt="free-documentaries.png" width="900"/>
                </div>
                <h3 class="mt-5 mb-3 text-xl font-semibold text-white">Free-Documentaries</h3>
                <p class="text-base font-medium text-secondary">A web App for viewing free documentaries fetched from various YouTube Channels.</p>
                <div class="flex">
                  <a href="https://github.com/zainab7681051/free-documentaries"
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
                  <a href="https://free-documentaries.onrender.com/"
                    target="_blank" title="visit this app">
                    <icon icon="codicon:live-share"
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
              </div>
              </div>
              
              <div class="mb-12 p-4 md:w-1/2">
                <div class="overflow-hidden rounded-md shadow-md">
                  <img src="../assets/pizza-delivery.png" alt="pizza-delivery.png" width="900" />

                </div>
                <h3 class="mt-5 mb-3 text-xl font-semibold text-white">Pizza-Delivery</h3>
                <p class="text-base font-medium text-secondary">A wep app for pizzerias. A user can log in and order pizza's and their order is saved in the cloud database.</p>

                <div class="flex">
                  <a href="https://github.com/zainab7681051/pizza-delivery"
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
                  <a href="https://pizza-delivery-5201d.web.app/"
                    target="_blank" title="visit this app">
                    <icon icon="codicon:live-share"
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
              </div>
              </div>

              <div class="mb-12 p-4 md:w-1/2">
                <div class="overflow-hidden rounded-md shadow-md">
                  <img src="../assets/todolist.png" alt="todolist.png" width="900" />
                </div>
                <h3 class="mt-5 mb-3 text-xl font-semibold text-white">todo app</h3>
                <p class="text-base font-medium text-secondary">simple todo app for keepig track of your tasks and objectives.</p>

                <div class="flex">
                  <a href="https://github.com/zainab7681051/simple-to-do-list-app"
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
              </div>
              </div>
            </div>
          </div>
        </section>    
</template>

