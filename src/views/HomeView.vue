<script setup lang="ts">
import AboutUsMissionSection from '@/components/AboutUsMissionSection.vue';
import CallActionSection from '@/components/CallActionSection.vue';
import ChooseCategorySection from '@/components/ChooseCategorySection.vue';
import FeaturedPostSection from '@/components/FeaturedPostSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import ListAuthorsSection from '@/components/ListAuthorsSection.vue';
import TestimoniSection from '@/components/TestimoniSection.vue';
import WeFeaturedSection from '@/components/WeFeaturedSection.vue';
import WhyWeStartedSection from '@/components/WhyWeStartedSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <HeroSection></HeroSection>
    <FeaturedPostSection></FeaturedPostSection>
    <AboutUsMissionSection></AboutUsMissionSection>
    <h1 class="container mx-auto px-16 mt-8 flex items-center justify-center text-3xl font-bold">Choose A Category</h1>
    <ChooseCategorySection></ChooseCategorySection>
    <WhyWeStartedSection></WhyWeStartedSection>
    <ListAuthorsSection></ListAuthorsSection>
    <WeFeaturedSection></WeFeaturedSection>
    <TestimoniSection></TestimoniSection>
    <CallActionSection></CallActionSection>
  </MainLayout>
</template>
