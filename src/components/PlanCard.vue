<template>
  <div>
    <div
      @click="clickCard"
      class="cursor-pointer flex items-center border bg-white dark:bg-navy-dark rounded mt-4 py-6 px-4 hover:opacity-100 relative"
      :class="isActive ? '' : 'opacity-50'"
    >
      <div v-if="isActive" class="absolute flex items-center -left-5">
        <div
          class="flex items-center justify-center w-10 h-10 bg-white rounded-full border"
        >
          <div class="w-5 h-5 bg-navy-dark dark:bg-yellow rounded-full"></div>
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row items-center text-center md:text-left justify-center mx-auto"
      >
        <div class="px-4 md:w-1/3 text-navy-dark dark:text-white">
          <h2 class="text-lg font-medium mb-1">{{ type }}</h2>
          <div class="font-medium">
            <span class="text-3xl font-bold">${{ price }}</span>
            <span class="mx-1">/</span>
            <span>month</span>
          </div>
        </div>
        <div class="px-14 mt-4 md:mt-0 md:w-2/3">
          <ul
            class="list-reset text-sm text-navy-dark dark:text-navy-light font-medium"
          >
            <li v-for="(listItem, idx) in lists" :key="idx" class="mb-1">
              {{ listItem }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
        },
        index: {
            type: Number,
        },
        type: {
            type: String,
        },
        price: {
            type: String,
        },
        lists: {
            type: Array,
        },
    },
    methods: {
      clickCard() {
        this.$emit('click', this.index)
      }
    },
}
</script>

<style>
</style>