<template>
  <header class="flex items-center justify-between mx-auto pt-8 text-white">
    <div>
      <h3 class="text-navy-darker dark:text-yellow font-bold text-2xl">
        Planners
      </h3>
    </div>
    <div class="flex items-center">
      <div class="flex justify-between items-center" @click="switchTheme">
        <!-- <h2>Switch Theme</h2> -->
        <div
          class="border-2 w-14 h-8 flex items-center rounded-full px-1 duration-600 ease-in-out"
          :class="{
            'border-white' : toggleActive,
            'bg-white' : !toggleActive,
            'border-navy-dark' : !toggleActive,
            'bg-navy-dark' : toggleActive,
          }"
        >
          <div
            class="w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out"
            :class="{
              'bg-navy-dark': !toggleActive,
              'bg-yellow': toggleActive,
              'translate-x-6': toggleActive,
            }"
          ></div>
        </div>
      </div>
      <!-- <a href="#" class="text-navy-darker dark:text-white hover:underline"
        >Sign in</a
      > -->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return{
      toggleActive: false,
    }
  },
  methods: {
    switchTheme() {
      const getTheme = localStorage.theme
      if (getTheme === 'light') {
        localStorage.theme = 'dark'
        document.querySelector('html').classList.remove('light')
        document.querySelector('html').classList.add('dark')
      } else {
        localStorage.theme = 'light'
        document.querySelector('html').classList.remove('dark')
        document.querySelector('html').classList.add('light')
      }
      // console.log(this.toggleActive)
      this.toggleActive = !this.toggleActive
    }
  }
}
</script>

<style>
</style>