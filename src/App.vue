<template>
  <div
    id="app"
    class="bg-yellow dark:bg-navy-darker min-h-screen font-sans antialiased leading-tight"
  >
    <div class="px-12 sm:px-24 md:px-32 lg:px-48">
      <navbar></navbar>
      <div class="pt-16">
        <h1 class="text-white text-5xl font-semibold text-center">
          Start your plan today
        </h1>
        <div class="flex flex-wrap -mx-4 mt-16">
          <div class="w-full xl:w-1/2 px-4">
            <plan-tab :active="planSelected" @change="tabChange"></plan-tab>
            <plan-selector
              :planSelected="planSelected"
              :planActive="planActive"
              :plans="plans"
              @change="planChange"
            ></plan-selector>
          </div>
          <div class="w-full xl:w-1/2 px-4">
            <plan-form></plan-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import PlanTab from '@/components/PlanTab'
import PlanSelector from '@/components/PlanSelector'
import PlanForm from '@/components/PlanForm'
export default {
  name: 'App',
  components:{
    Navbar,
    PlanTab,
    PlanSelector,
    PlanForm,
  },
  data() {
    return {
      planSelected: 'Monthly',
      planActive: 2,
      plans: [
        {
          type: 'Starter',
          priceMonthly: '119',
          priceYearly: '219',
          lists: [
            '5,000 download / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more...',
          ],
        },
        {
          type: 'Professional',
          priceMonthly: '149',
          priceYearly: '249',
          lists: [
            '15,000 download / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more...',
          ],
        },
        {
          type: 'Business',
          priceMonthly: '199',
          priceYearly: '299',
          lists: [
            '50,000 download / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more...',
          ],
        },
      ]
    }
  },
  methods: {
    tabChange(payload) {
      this.planSelected = payload
    },
    planChange(payload) {
      this.planActive = payload
    },
  },
  mounted() {
    localStorage.setItem('theme', 'light')
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }
}
</script>

<style>
</style>
