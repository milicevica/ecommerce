<script lang="ts" setup>
const filters = [
  {
    label: "Color",
    slot: "color",
    values: ["Blue", "Rosy Brown", "Hot Pink", "Light Sky Blue", "Coral", "Dark Violet", "Light Green"],
  },
  {
    label: "Size",
    slot: "size",
    values: ["S", "M", "L", "XL"],
  },
  {
    label: "Price",
    slot: "price",
  },
];

const price = ref([0, 95]);
</script>

<template>
  <u-slideover title="Filters">
    <u-button
      color="neutral"
      variant="ghost"
      leading-icon="tabler:filter"
      class="px-8 py-4 h-full cursor-pointer rounded-none"
    >
      Filter
    </u-button>

    <template #body>
      <div class="h-full flex justify-center font-bold uppercase">
        <u-accordion :items="filters" type="multiple">
          <template #color="{ item }">
            <div class="flex gap-2 mb-4">
              <u-avatar
                v-for="color in item.values"
                :key="color"
                size="md"
                style="background-color: blue;"
                class="cursor-pointer"
              />
            </div>
          </template>

          <template #size>
            <div class="flex gap-2 mb-4">
              <u-badge>38</u-badge>
              <u-badge>39</u-badge>
              <u-badge>40</u-badge>
              <u-badge>41</u-badge>
              <u-badge>42</u-badge>
              <u-badge>43</u-badge>
            </div>
          </template>

          <template #price>
            <u-slider
              v-model="price"
              color="neutral"
              size="xl"
              :min="0"
              :max="95"
              tooltip
            />
          </template>
        </u-accordion>
      </div>
    </template>
  </u-slideover>
</template>
