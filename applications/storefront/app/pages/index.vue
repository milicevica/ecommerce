<script lang="ts" setup>
// const items = [
//   { src: "https://picsum.photos/640/640?random=1", alt: "Slide 1" },
//   { src: "https://picsum.photos/640/640?random=2", alt: "Slide 2" },
// ];

// const products = ref(Array.from({ length: 10 }, (_, i) => ({
//   id: i + 1,
//   name: `Product ${i + 1}`,
//   image: `https://picsum.photos/seed/product${i}/300/300`,
//   price: `$${(i + 1) * 10}.00`,
// })));

// const currentIndex = ref(0);
// const itemsPerPage = 4;

// const visibleProducts = computed(() => {
//   return products.value.slice(currentIndex.value, currentIndex.value + itemsPerPage);
// });

// const canPrev = computed(() => currentIndex.value > 0);
// const canNext = computed(() => currentIndex.value < products.value.length - itemsPerPage);

// function prev() {
//   if (canPrev.value)
//     currentIndex.value--;
// }

// function next() {
//   if (canNext.value)
//     currentIndex.value++;
// }
</script>

<template>
  <p>index</p>
  <!-- <div class="flex flex-col gap-12">
    <div class="w-full">
      <u-carousel
        v-slot="{ item }"
        :items="items"
        autoplay
        class="w-full"
      >
        <div class="relative w-full h-[89vh]">
          <img
            :src="item.src"
            :alt="item.alt"
            class="w-full h-full object-cover"
            fetchpriority="high"
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

    <u-container>
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
              fetchpriority="high"
            >
            <u-button variant="outline" class="w-full justify-center">
              Living Room
            </u-button>
          </div>

          <div class="flex flex-col items-center justify-center gap-2">
            <img
              src="https://picsum.photos/640/640?random=2"
              alt="Category 2"
              width="320"
              height="320"
              fetchpriority="high"
            >
            <u-button variant="outline" class="w-full justify-center">
              Large Wall Clocks
            </u-button>
          </div>

          <div class="flex flex-col items-center justify-center gap-2">
            <img
              src="https://picsum.photos/640/640?random=3"
              alt="Category 3"
              width="320"
              height="320"
              fetchpriority="high"
            >
            <u-button variant="outline" class="w-full justify-center">
              Outdoors
            </u-button>
          </div>

          <div class="flex flex-col items-center justify-center gap-2">
            <img
              src="https://picsum.photos/640/640?random=4"
              alt="Category 4"
              width="320"
              height="320"
              fetchpriority="high"
            >
            <u-button variant="outline" class="w-full justify-center">
              Mantel Clocks
            </u-button>
          </div>
        </div>
      </div>
    </u-container>

    <div class="flex flex-col gap-4 items-center">
      <u-container>
        <div class="flex flex-col gap-4 p-12 text-center">
          <h3 class="text-md font-bold uppercase">
            Featured Collection
          </h3>
          <h2 class="text-4xl font-bold uppercase">
            House Clocks
          </h2>
        </div>
        <div class="relative w-full">
          <div class="flex items-center gap-2">
            <u-button
              icon="i-lucide-chevron-left"
              variant="ghost"
              :disabled="!canPrev"
              class="absolute top-1/2 -translate-y-1/2 left-2 shadow-md rounded-full w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100"
              @click="prev"
            />

            <div class="grid grid-cols-4 gap-4 w-full">
              <div
                v-for="product in visibleProducts"
                :key="product.id"
                class="overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-48 object-cover"
                >
                <div class="p-3 flex flex-col items-center">
                  <h3 class="font-bold text-center truncate">
                    {{ product.name }}
                  </h3>
                  <p class="text-sm text-gray-500">
                    {{ product.price }}
                  </p>
                </div>
              </div>
            </div>

            <u-button
              icon="i-lucide-chevron-right"
              variant="ghost"
              :disabled="!canNext"
              class="absolute top-1/2 -translate-y-1/2 right-2 shadow-md rounded-full w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100"
              @click="next"
            />
          </div>
        </div>
      </u-container>

      <u-button color="primary" class="w-[150px] justify-center">
        Shop Now
      </u-button>
    </div>

    <div class="w-full h-[550px] relative">
      <img
        src="https://picsum.photos/1920/600?random=5"
        alt="Promotional Banner"
        class="w-full h-[550px] object-cover"
        fetchpriority="high"
      >

      <h3 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl uppercase font-bold">
        Our Story
      </h3>
    </div>

    <div class="flex flex-col gap-4 items-center">
      <u-container>
        <div class="flex flex-col gap-4 p-12 text-center">
          <h3 class="text-md font-bold uppercase">
            SHOP
          </h3>
          <h2 class="text-4xl font-bold uppercase">
            Our Best Sellers
          </h2>
        </div>
        <div class="relative w-full">
          <div class="flex items-center gap-2">
            <u-button
              icon="i-lucide-chevron-left"
              variant="ghost"
              :disabled="!canPrev"
              class="absolute top-1/2 -translate-y-1/2 left-2 shadow-md rounded-full w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100"
              @click="prev"
            />

            <div class="grid grid-cols-4 gap-4 w-full">
              <div
                v-for="product in visibleProducts"
                :key="product.id"
                class="overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-48 object-cover"
                >
                <div class="p-3 flex flex-col items-center">
                  <h3 class="font-bold text-center truncate">
                    {{ product.name }}
                  </h3>
                  <p class="text-sm text-gray-500">
                    {{ product.price }}
                  </p>
                </div>
              </div>
            </div>

            <u-button
              icon="i-lucide-chevron-right"
              variant="ghost"
              :disabled="!canNext"
              class="absolute top-1/2 -translate-y-1/2 right-2 shadow-md rounded-full w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100"
              @click="next"
            />
          </div>
        </div>
      </u-container>

      <u-button color="primary" class="w-[150px] justify-center">
        Shop Now
      </u-button>
    </div>

    <div class="w-full">
      <u-container>
        <div class="flex gap-4 items-center justify-center">
          <div class="flex flex-col items-center justify-center gap-4 p-12">
            <u-icon name="tabler:truck-delivery" size="48" />
            <h4 class="font-bold uppercase">
              Free Delivery
            </h4>
            <p>2-3 Working Days on Orders Over $100</p>
          </div>
          <div class="flex flex-col items-center justify-center  gap-4 p-12">
            <u-icon name="tabler:credit-card-pay" size="48" />
            <h4 class="font-bold uppercase">
              Secure Payment Gateway
            </h4>
            <p>Keeping You Safe At All Times</p>
          </div>
          <div class="flex flex-col items-center justify-center gap-4 p-12">
            <u-icon name="tabler:brand-adobe-indesign" size="48" />
            <h4 class="font-bold uppercase">
              Quality Assured
            </h4>
            <p>Durable Materials & Expert Craftsmanship</p>
          </div>
        </div>
      </u-container>
    </div>
  </div> -->
</template>
