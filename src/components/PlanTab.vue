<template>
  <div
    class="mx-auto mb-6 w-40 bg-navy-dark text-navy-light flex rounded overflow-hidden uppercase text-xs text-center font-bold tracking-wide"
  >
    <a
      v-for="(item, index) in plans"
      :key="index"
      @click.passive="tabChange(item)"
      :class="
        active === item
          ? 'bg-white text-navy-darker'
          : 'bg-navy-dark text-navy-ligh hover:text-white hover:bg-navy'
      "
      class="cursor-pointer rounded py-1 w-1/2"
      >{{ item }}</a
    >
  </div>
</template>

<script>
export default {
    props: {
        active: {
            type: String,
        },
    },
    data() {
      return {
        plans: [
        'Monthly',
        'Yearly',
        ],
      }
    },
    methods: {
      tabChange(item) {
        this.$emit('change', item)
      }
    }
}
</script>

<style>
</style>