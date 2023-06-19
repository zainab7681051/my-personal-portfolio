<template>
  <section class="px-10 bg-back-900">
    <div class="container">
      <div class="w-full px-4 items-center text-center">
        <h1
          class="text-base font-semibold text-primary text-2xl top-text greet"
        >
          Hello there 👋, I am
          <span
            class="mt-1 block text-7xl md:text-8xl font-bold text-dark text-slate-100 text-shadow-pop-bl outline-black mt-5 top-text name"
            >Zainab</span
          >
        </h1>
        <p
          class="mt-5 mb-10 font-medium leading-relaxed text-secondary bottom-text"
        >
          A software developer skilled in HTML, CSS, JavaScript, Node.js,
          Vue.js, C#, .NET Core and more. I create efficient and engaging
          web-based softwares and solutions, focusing on quality and user
          experience. Let's collaborate and bring your ideas to life!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.top-text {
  opacity: 0;
  transform: translateY(-50vh);
}
.top-text.name {
  -webkit-text-stroke: 2px #000;
}
.bottom-text {
  opacity: 0;
  transform: translateX(200vw);
}
</style>
