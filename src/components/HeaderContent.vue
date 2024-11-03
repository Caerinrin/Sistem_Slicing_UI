<script setup lang="ts">

</script>

<template>
  <nav class="px-12 w-full h-[80px] bg-x-black flex items-center justify-between">
    <img src="@/assets/images/logo/logo-join-sistem.png" alt="Join Sistem Logo">
    <ul class="flex gap-4">
      <li>
        <router-link to="/">
          <a class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</a>
        </router-link>
      </li>
      <li>
        <router-link to="/blog">
          <a class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</a>
        </router-link>
      </li>
      <li>
        <router-link to="/about-us">
          <a class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</a>
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          <a class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</a>
        </router-link>
      </li>
    </ul>
    <router-link to="/contact">
      <a class="bg-x-blue px-4 py-2 rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out">Contact Us</a>
    </router-link>
  </nav>
</template>
