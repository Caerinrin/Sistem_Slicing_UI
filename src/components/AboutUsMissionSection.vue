<script setup lang="ts">
</script>

<template>
  <!-- About Us & Our Mission Section -->
  <div class="bg-white py-16 px-16">
    <!-- Garis atas dengan warna kuning dan biru -->
    <div class="relative mb-5"> <!-- Added margin-bottom for spacing -->
  <div class="absolute top-0 right-1/4 w-3/5 h-5 bg-yellow-400 z-10"></div> <!-- Yellow line on top -->
  <div class="absolute top-0 right-0 w-1/4 h-5 bg-blue-500 z-0"></div> <!-- Blue line behind -->
</div>

    <!-- Combined Box for About Us and Our Mission -->
    <div class="flex gap-10 pt-10 p-8 bg-purple-100 shadow-md min-h-[400px]"> <!-- Adjusted height here -->
      <!-- About Us (2/5 width) -->
      <div class="w-2/5 pl-10">
        <h3 class="text-sm mb-4 font-bold text-gray-500 uppercase">About Us</h3>
        <h2 class="text-4xl font-bold text-black mt-2 leading-tight">
          We are a community of content writers who share their learnings
        </h2>
        <p class="text-sm text-gray-600 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <router-link to="/about-us">
          <a href="#" class="text-yellow-500 hover:text-x-blue font-semibold mt-4 inline-block">Read More &gt;</a>
        </router-link>
      </div>

      <!-- Our Mission (2/5 width) -->
      <div class="w-3/5 pl-32 pr-52">
        <h3 class="text-sm mb-4 font-bold text-gray-500 uppercase">Our Mission</h3>
        <h2 class="text-2xl font-semibold text-black mt-2 leading-tight">
          Creating valuable content for creatives all around the world
        </h2>
        <p class="text-sm text-gray-600 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>
