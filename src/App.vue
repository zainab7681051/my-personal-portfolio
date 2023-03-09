<script setup>
import NavBar from './components/navbar.vue'
import home from './components/home.vue'
import skills from './components/skills.vue'
import projects from './components/projects.vue'
import contact from './components/contact.vue'
import foot from './components/foot.vue'
import { Icon } from '@iconify/vue';
import {ref} from 'vue'
let open=ref(false);
const openMenu=()=>{
  open.value=!open.value
  return open.value
}

</script>

<template>
  <div class="grid grid-cols-12">

    <!-- sidebar -->
    <div
    class="md:grid md:col-span-1"
    :class="open ?
    'col-span-1 grid':
    'col-span-0 hidden'">
      <nav-bar/>
    </div>
    
    <!-- main sections -->
    <div class="md:col-span-11"
    :class="open ? 'col-span-11':'col-span-12'">

      <div id="home">
        <svg id="visual" viewBox="0 0 900 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="200" fill="#141d26"></rect><path d="M0 74L18.8 79.7C37.7 85.3 75.3 96.7 112.8 96.7C150.3 96.7 187.7 85.3 225.2 74.5C262.7 63.7 300.3 53.3 337.8 50.8C375.3 48.3 412.7 53.7 450.2 65.7C487.7 77.7 525.3 96.3 562.8 106.2C600.3 116 637.7 117 675.2 110.5C712.7 104 750.3 90 787.8 81.7C825.3 73.3 862.7 70.7 881.3 69.3L900 68L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z" fill="#7289da" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
      </div>

      <!-- sidebar button for small screen -->
      <button 
      class="
      ml-5
      text-primary
      shadow-lg
      bg-back-800 
      fixed 
      bottom-20
      h-12
      w-12
      justify-center
      flex justify-center items-center
      rounded-full
      md:hidden
      z-10"
      :class="open ? 'left-12':'left-0'"
      @click="openMenu()">
          <icon v-if="!open" icon="uil:bars"
           width="42" height="42"></icon>
          
          <icon v-if="open" icon="material-symbols:close" 
          width="42" height="42"></icon>
      </button>

      <home/> 

      <div>
        <svg id="visual" viewBox="0 0 900 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="200" fill="#141d26"></rect><path d="M0 136L15 138.5C30 141 60 146 90 141.5C120 137 150 123 180 115.5C210 108 240 107 270 108C300 109 330 112 360 110.5C390 109 420 103 450 102.8C480 102.7 510 108.3 540 112C570 115.7 600 117.3 630 115.2C660 113 690 107 720 103.8C750 100.7 780 100.3 810 106.8C840 113.3 870 126.7 885 133.3L900 140L900 201L885 201C870 201 840 201 810 201C780 201 750 201 720 201C690 201 660 201 630 201C600 201 570 201 540 201C510 201 480 201 450 201C420 201 390 201 360 201C330 201 300 201 270 201C240 201 210 201 180 201C150 201 120 201 90 201C60 201 30 201 15 201L0 201Z" fill="#7289da" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
      </div>
      
      <skills/>

      <div>
        <svg id="visual" viewBox="0 0 900 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="200" fill="#141d26"></rect><path d="M0 147L15 138.8C30 130.7 60 114.3 90 115.7C120 117 150 136 180 137.3C210 138.7 240 122.3 270 122.8C300 123.3 330 140.7 360 140.3C390 140 420 122 450 122.5C480 123 510 142 540 141.2C570 140.3 600 119.7 630 115.8C660 112 690 125 720 132.7C750 140.3 780 142.7 810 143.3C840 144 870 143 885 142.5L900 142L900 201L885 201C870 201 840 201 810 201C780 201 750 201 720 201C690 201 660 201 630 201C600 201 570 201 540 201C510 201 480 201 450 201C420 201 390 201 360 201C330 201 300 201 270 201C240 201 210 201 180 201C150 201 120 201 90 201C60 201 30 201 15 201L0 201Z" fill="#7289da" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
      </div>

      <projects/>
      
      <div>
        <svg id="visual" viewBox="0 0 900 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="200" fill="#141d26"></rect><path d="M0 104L11.5 110.7C23 117.3 46 130.7 69 133.8C92 137 115 130 138.2 123.8C161.3 117.7 184.7 112.3 207.8 110.2C231 108 254 109 277 115.7C300 122.3 323 134.7 346 142C369 149.3 392 151.7 415.2 144.7C438.3 137.7 461.7 121.3 484.8 117C508 112.7 531 120.3 554 125C577 129.7 600 131.3 623 127C646 122.7 669 112.3 692.2 115.8C715.3 119.3 738.7 136.7 761.8 139C785 141.3 808 128.7 831 128C854 127.3 877 138.7 888.5 144.3L900 150L900 201L888.5 201C877 201 854 201 831 201C808 201 785 201 761.8 201C738.7 201 715.3 201 692.2 201C669 201 646 201 623 201C600 201 577 201 554 201C531 201 508 201 484.8 201C461.7 201 438.3 201 415.2 201C392 201 369 201 346 201C323 201 300 201 277 201C254 201 231 201 207.8 201C184.7 201 161.3 201 138.2 201C115 201 92 201 69 201C46 201 23 201 11.5 201L0 201Z" fill="#7289da" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
      </div>

      <contact/>

      <div><svg id="visual" viewBox="0 0 900 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="200" fill="#141d26"></rect><path d="M0 136L15 138.5C30 141 60 146 90 141.5C120 137 150 123 180 115.5C210 108 240 107 270 108C300 109 330 112 360 110.5C390 109 420 103 450 102.8C480 102.7 510 108.3 540 112C570 115.7 600 117.3 630 115.2C660 113 690 107 720 103.8C750 100.7 780 100.3 810 106.8C840 113.3 870 126.7 885 133.3L900 140L900 201L885 201C870 201 840 201 810 201C780 201 750 201 720 201C690 201 660 201 630 201C600 201 570 201 540 201C510 201 480 201 450 201C420 201 390 201 360 201C330 201 300 201 270 201C240 201 210 201 180 201C150 201 120 201 90 201C60 201 30 201 15 201L0 201Z" fill="#7289da" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
      </div>

      <foot/>
    </div>
  </div>
</template>

<style scoped>

</style>