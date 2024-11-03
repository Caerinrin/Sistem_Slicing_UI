<script setup lang="ts">
import CallActionSection from '@/components/CallActionSection.vue';
import ChooseCategorySection from '@/components/ChooseCategorySection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <div class="bg-white min-h-screen flex flex-col items-center">
            <!-- Featured Post Section -->
            <div class="relative flex items-center justify-between h-96 w-full bg-violet-50">
                <!-- Text content on the left side -->
                <div class="relative justify-center z-20 w-1/2 ml-12 text-black text-left p-8">
                    <p class="text-sm uppercase tracking-wide text-gray-600">FEATURED POST</p>
                    <h1 class="text-4xl font-bold mb-2">Step-by-step guide to choosing great font pairs</h1>
                    <div class="mb-4 text-gray-500">
                        <p class="text-base">By
                            <a href="#" class="text-yellow-500 hover:text-x-blue">John Doe</a>
                            | May 23, 2022
                        </p>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mb-6">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <button
                        class="bg-x-blue text-white py-2 px-4 rounded hover:bg-x-yellow transition duration-150 ease-in-out">
                        Read More >
                    </button>
                </div>
                <!-- Image on the right side, centered vertically -->
                <div class="flex items-center justify-center w-1/2 h-full p-12">
                    <img src="/src/assets/images/misc/man-with-white-shirt.png" alt="blogview" class="w-96 h-64" />
                </div>
            </div>

            <!-- All Posts Section -->
            <div class="container mx-auto px-16 mt-8">
                <div class="flex flex-col items-start">
                    <h1 class="text-3xl font-bold mb-2">All posts</h1>
                    <div class="w-full border-t border-gray-300 mt-2 mb-8"></div>
                </div>
                <div class="grid grid-cols-1 gap-12">
                    <!-- Post Item 1 -->
                    <div class="flex items-center bg-white">
                        <img src="/src/assets/images/misc/two-woman-in-erase-board.png" alt="Design tips"
                            class="w-3/6 h-96 object-cover" />
                        <div class="p-4 flex flex-col justify-between">
                            <span
                                class="text-lg mb-4 text-x-yellow transition duration-150 ease-in-out font-bold uppercase">Startup</span>
                            <h2 class="text-4xl font-bold mb-4 text-black">Design tips for designers that cover<br>
                                everything you need</h2>
                            <p class="text-gray-700 text-sm mb-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat<br>
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <!-- Post Item 2 -->
                    <div class="flex items-center bg-white">
                        <img src="/src/assets/images/misc/people-doing-handshake.png" alt="Raport client"
                            class="w-3/6 h-96 object-cover" />
                        <div class="p-4 flex flex-col justify-between">
                            <span
                                class="text-lg mb-4 text-x-yellow transition duration-150 ease-in-out font-bold uppercase">Business</span>
                            <h2 class="text-4xl font-bold mb-4 text-black">How to build rapport with your web<br>
                                design clients</h2>
                            <p class="text-gray-700 text-sm mb-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat<br>
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <!-- Post Item 3 -->
                    <div class="flex items-center bg-white">
                        <img src="/src/assets/images/misc/woman-looking-man.png" alt="Raport with client"
                            class="w-3/6 h-96 object-cover" />
                        <div class="p-4 flex flex-col justify-between">
                            <span
                                class="text-lg mb-4 text-x-yellow transition duration-150 ease-in-out font-bold uppercase">Startup</span>
                            <h2 class="text-4xl font-bold mb-4 text-black">Logo design trends to avoid in 2022</h2>
                            <p class="text-gray-700 text-sm mb-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat<br>
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <!-- Post Item 4 -->
                    <div class="flex items-center bg-white">
                        <img src="/src/assets/images/misc/people-walking.png" alt="Raport"
                            class="w-3/6 h-96 object-cover" />
                        <div class="p-4 flex flex-col justify-between">
                            <span
                                class="text-lg mb-4 text-x-yellow transition duration-150 ease-in-out font-bold uppercase">Technology</span>
                            <h2 class="text-4xl font-bold mb-4 text-black">8 Figma design systems you can<br>
                                download for free today</h2>
                            <p class="text-gray-700 text-sm mb-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat<br>
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <!-- Post Item 5 -->
                    <div class="flex items-center bg-white">
                        <img src="/src/assets/images/misc/two-woman-in-erase-board.png" alt="client"
                            class="w-3/6 h-96 object-cover" />
                        <div class="p-4 flex flex-col justify-between">
                            <span
                                class="text-lg mb-4 text-x-yellow transition duration-150 ease-in-out font-bold uppercase">Economy</span>
                            <h2 class="text-4xl font-bold mb-4 text-black">Font sizes in UI design: The complete<br>
                                guide to follow</h2>
                            <p class="text-gray-700 text-sm mb-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat<br>
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center mt-8">
                    <button class="text-gray-400 px-4 py-2 text-lg hover:text-black font-bold">&lt; Prev</button>
                    <button class="text-gray-400 px-4 py-2 text-lg hover:text-black font-bold">Next &gt;</button>
                </div>
            </div>
        </div>
        <h1 class="container mx-auto px-16 mt-8 flex flex-col items-start text-3xl font-bold">All Categories</h1>
        <ChooseCategorySection></ChooseCategorySection>
        <CallActionSection></CallActionSection>
    </MainLayout>
</template>