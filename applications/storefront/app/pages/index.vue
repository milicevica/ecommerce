<script lang="ts" setup>
const items = [
  { src: "https://picsum.photos/640/640?random=1", alt: "Slide 1" },
  { src: "https://picsum.photos/640/640?random=2", alt: "Slide 2" },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="w-full h-screen">
      <u-carousel
        v-slot="{ item }"
        :items="items"
        autoplay
        class="w-full h-screen"
      >
        <div class="relative w-full h-screen">
          <img
            :src="item.src"
            :alt="item.alt"
            class="w-full h-screen object-cover"
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

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4 p-12 text-center">
        <h2 class="text-4xl font-bold">
          Explore Our Clocks
        </h2>
        <p>Our designs take their cue from timeless interiors - crafted to become the standout piece that finds its perfect spot on yout shelf, sideboard, or wall.</p>
      </div>

      <div class="flex items-center justify-center gap-4">
        <div class="flex flex-col items-center justify-center gap-2">
          <img
            src="https://picsum.photos/640/640?random=1"
            alt="Category 1"
            width="320"
            height="320"
          >
          <u-button variant="outline" class="w-[250px] justify-center">
            Living Room
          </u-button>
        </div>

        <div class="flex flex-col items-center justify-center gap-2">
          <img
            src="https://picsum.photos/640/640?random=2"
            alt="Category 2"
            width="320"
            height="320"
          >
          <u-button variant="outline" class="w-[250px] justify-center">
            Large Wall Clocks
          </u-button>
        </div>

        <div class="flex flex-col items-center justify-center gap-2">
          <img
            src="https://picsum.photos/640/640?random=3"
            alt="Category 3"
            width="320"
            height="320"
          >
          <u-button variant="outline" class="w-[250px] justify-center">
            Outdoors
          </u-button>
        </div>

        <div class="flex flex-col items-center justify-center gap-2">
          <img
            src="https://picsum.photos/640/640?random=4"
            alt="Category 4"
            width="320"
            height="320"
          >
          <u-button variant="outline" class="w-[250px] justify-center">
            Mantel Clocks
          </u-button>
        </div>
      </div>
    </div>
  </div>
</template>
