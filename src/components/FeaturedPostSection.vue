<script setup lang="ts">
</script>

<template>
  <div class="flex w-full px-12 mb-10 mt-10">
    <!-- Featured Post Section -->
    <div class="w-3/5 p-4">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Featured Post</h1>
      <div class="featured-post p-7 bg-white shadow-md">
        <div class="post-content">
          <img src="/src/assets/images/misc/white-building.png" alt="Featured Post Image"
            class="post-image w-full mb-4" />
          <div class="post-meta text-sm text-gray-500 mb-2">
            By <a href="#" class="text-yellow-400 hover:text-x-blue">John Doe</a> | May 23, 2022
          </div>
          <h2 class="post-title text-3xl font-bold text-gray-800 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing<br>elit, sed do eiusmod tempor.
          </h2>
          <p class="post-excerpt text-gray-600 leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore<br>eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <router-link to="/blog">
            <a href="#"
              class="read-more inline-block bg-x-blue text-white px-4 py-2 hover:bg-x-yellow transition duration-300">
              Read More &gt;
            </a>
          </router-link>
        </div>
      </div>
    </div>

    <!-- All Posts Section -->
    <div class="w-2/5 p-4">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">All Posts</h1>
      <div class="all-post p-5 bg-white">
        <router-link to="/blog">
          <a href="#"
            class="view-all text-right text-yellow-400 text-sm hover:text-x-blue transition duration-300 mb-2 block">View
            All</a>
        </router-link>

        <!-- All Posts List -->
        <router-link to="/blog">
          <div v-for="(post, index) in [
            { author: 'John Deo', date: 'Aug 23, 2021', title: '8 Figma design systems that you can download for free today.' },
            { author: 'John Doe', date: 'Aug 23, 2021', title: '8 Figma design systems that you can download for free today.' },
            { author: 'John Doe', date: 'Aug 23, 2021', title: '8 Figma design systems that you can download for free today.' },
            { author: 'John Doe', date: 'Aug 23, 2021', title: '8 Figma design systems that you can download for free today.' }
          ]" :key="index" class="post py-4 px-4 hover:bg-yellow-100 transition duration-300">
            <div class="post-header flex justify-between text-sm text-gray-500 mb-1">
              <span class="post-author">
                By <a href="#" class="text-yellow-400">{{ post.author }}</a>
              </span>
              <span class="post-date">{{ post.date }}</span>
            </div>
            <div class="post-title pr-24 text-2xl font-bold text-black">{{ post.title }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
