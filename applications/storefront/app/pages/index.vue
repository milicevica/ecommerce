<script lang="ts" setup>
const items = [
  { src: "https://picsum.photos/640/640?random=1", alt: "Slide 1" },
  { src: "https://picsum.photos/640/640?random=2", alt: "Slide 2" },
];
</script>

<template>
  <div class="flex flex-col gap-4 w-full h-full">
    <u-carousel
      v-slot="{ item }"
      :items="items"
      autoplay
      class="w-full h-full"
    >
      <div class="relative w-full h-full">
        <img
          :src="item.src"
          :alt="item.alt"
          class="w-full h-full object-cover"
        >

        <div class="absolute inset-0 bg-black/40 flex flex-col gap-4 justify-center items-center text-center text-white p-6">
          <h3 class="text-xl font-bold">
            Fall Back In Style
          </h3>
          <h2 class="text-4xl font-bold">
            Save 15% On Arabic & Mulberry Collections
          </h2>
          <div class="flex gap-4">
            <u-button color="primary">
              Explore Now
            </u-button>
            <u-button variant="ghost" color="neutral">
              Clocks Go Back!
            </u-button>
          </div>
        </div>
      </div>
    </u-carousel>
  </div>
</template>
