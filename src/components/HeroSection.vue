<script setup lang="ts">
</script>

<template>
  <div class="relative flex items-center justify-start h-screen overflow-hidden">
    <div class="absolute inset-0 z-10">
      <img src="/src/assets/images/misc/cover.png" alt="Heroview" class="w-full h-full object-cover" />
    </div>
    <div class="relative z-20 ml-12 text-white text-left">
      <p class="text-sm">POSTED ON <b>STARTUP</b></p>
      <h1 class="text-4xl font-bold mb-4"><b>Step-by-step guide to choosing<br>great font pairs</b></h1>
      <div class="mb-4">
        <p class="text-lg">By <a href="#"
            class="text-blue-500 hover:text-x-yellow transition duration-150 ease-in-out">James West</a> | May 23, 2022
        </p>
      </div>
      <p class="text-lg mb-5">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu<br>fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident.
      </p>
      <router-link to="/blog-post">
        <button class="bg-x-blue text-white py-2 px-4 rounded hover:bg-x-yellow transition duration-150 ease-in-out">
          Read More > <i class="fas fa-arrow-right ml-2"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>
