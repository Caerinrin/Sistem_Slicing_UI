<script setup lang="ts">
import CallActionSection from '@/components/CallActionSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <div class="font-sans">
            <!-- Main Content -->
            <main
                class="flex flex-col items-start pr-20 mt-28 max-w-full font-sans text-gray-800 w-[768px] mx-auto max-md:pr-5 max-md:mt-10">
                <section class="flex gap-4 items-center text-amber-300">
                    <img loading="lazy" src="/src/assets/images/misc/man-with-glasses.png" alt="Andrew Jonson"
                        class="object-contain shrink-0 mt-1.5 w-12 rounded-full aspect-square" />
                    <div>
                        <h1 class="text-xl font-semibold opacity-90">Andrew Jonson</h1>
                        <p class="text-gray-500 text-sm">Posted on 27th January 2022</p>
                    </div>
                </section>
                <h2
                    class="mt-6 text-5xl font-bold tracking-tight leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                    Step-by-step guide to choosing great font pairs
                </h2>
                <div class="flex gap-2 mt-4 text-gray-800 text-xl font-semibold whitespace-nowrap items-center">
                    <img loading="lazy" src="/src/assets/images/misc/shuttle.png" alt=""
                        class="object-contain shrink-0 w-6 aspect-square" />
                    <span>Startup</span>
                </div>
            </main>

            <!-- Blog Post Image -->
            <img loading="lazy" src="/src/assets/images/misc/woman-with-glasses.png" alt="Blog post main image"
                class="object-contain mt-16 max-w-full aspect-[2.2] w-[1280px] mx-auto max-md:mt-10" />

            <!-- Blog Content -->
            <section
                class="flex flex-col mt-28 max-w-full w-[843px] mx-auto text-base leading-7 text-zinc-500 max-md:mt-10">
                <h3 class="text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h3>
                <p class="mt-4 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
                    risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
                    Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in
                    hendrerit gravida rutrum quisque non.
                </p>
                <h3
                    class="mt-12 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h3>
                <p class="mt-4 max-md:mr-1.5 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
                    risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
                    Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in
                    hendrerit gravida rutrum quisque non.
                </p>
                <p class="mt-4 max-md:mr-1.5 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
                    risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
                    Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in
                    hendrerit gravida rutrum quisque non.
                </p>
                <ul
                    class="list-disc list-inside space-y-2 pl-1 mt-6 text-2xl font-bold leading-none text-gray-600 max-md:max-w-full">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Non blandit massa enim nec scelerisque</li>
                    <li>Neque egestas congue quisque egestas</li>
                </ul>
                <p class="mt-6 max-md:mr-2 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
                    risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
                    Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in
                    hendrerit gravida rutrum quisque non.
                </p>
                <h3 class="text-4xl font-bold mt-12 tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h3>
                <p class="mt-4 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
                    risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
                    Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in
                    hendrerit gravida rutrum quisque non.
                </p>
            </section>

            <!-- Suggested Articles Section -->
            <section class="flex flex-col mt-28 max-w-full w-[1280px] mx-auto max-md:mt-10">
                <div class="mx-10 max-md:max-w-full">
                    <h2 class="text-4xl font-bold tracking-tighter leading-none text-left text-black">What to read next
                    </h2>
                    <div class="flex gap-5 max-md:flex-col">
                        <!-- Article 1 -->
                        <article class="flex flex-col w-[33%] max-md:w-full">
                            <div class="flex flex-col mt-12 text-gray-800 max-md:mt-10">
                                <img loading="lazy" src="/src/assets/images/misc/two-woman-in-erase-board.png"
                                    alt="Article image" class="object-contain w-full aspect-[1.27]" />
                                <p class="mt-8 text-sm font-medium leading-none text-amber-300">
                                    By <span class="text-amber-300">John Doe</span> | Aug 23, 2021
                                </p>
                                <h3 class="mt-4 text-3xl font-bold tracking-tighter leading-10">A UX Case Study Creating
                                    a Studious Environment for Students:</h3>
                                <p class="mt-4 text-base leading-7 opacity-70">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                        </article>
                        <!-- Article 2 -->
                        <article class="flex flex-col w-[33%] max-md:w-full">
                            <div class="flex flex-col mt-12 text-gray-800 max-md:mt-10">
                                <img loading="lazy" src="/src/assets/images/misc/people-doing-handshake.png"
                                    alt="Article image" class="object-contain w-full aspect-[1.27]" />
                                <p class="mt-8 text-sm font-medium leading-none text-amber-300">
                                    By <span class="text-amber-300">John Doe</span> | Aug 23, 2021
                                </p>
                                <h3 class="mt-4 text-3xl font-bold tracking-tighter leading-10">A UX Case Study Creating
                                    a Studious Environment for Students:</h3>
                                <p class="mt-4 text-base leading-7 opacity-70">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                        </article>
                        <!-- Article 3 -->
                        <article class="flex flex-col w-[33%] max-md:w-full">
                            <div class="flex flex-col mt-12 text-gray-800 max-md:mt-10">
                                <img loading="lazy" src="/src/assets/images/misc/woman-looking-man.png"
                                    alt="Article image" class="object-contain w-full aspect-[1.27]" />
                                <p class="mt-8 text-sm font-medium leading-none text-amber-300">
                                    By <span class="text-amber-300">John Doe</span> | Aug 23, 2021
                                </p>
                                <h3 class="mt-4 text-3xl font-bold tracking-tighter leading-10">A UX Case Study Creating
                                    a Studious Environment for Students:</h3>
                                <p class="mt-4 text-base leading-7 opacity-70">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
        <div class="items-center w-10/12 border-t border-gray-400 mt-8 mx-auto"></div>
        <CallActionSection></CallActionSection>
    </MainLayout>
</template>