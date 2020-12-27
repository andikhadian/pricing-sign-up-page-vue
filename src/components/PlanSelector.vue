<template>
  <div>
    <div v-for="(item, index) in plans" :key="index">
      <plan-card
        :isActive="planActive === index ? true : false"
        :index="index"
        :plan="item.plan"
        :type="item.type"
        :price="
          planSelected === 'Monthly' ? item.priceMonthly : item.priceYearly
        "
        :lists="item.lists"
        @click="selectorChange(index)"
      ></plan-card>
    </div>
  </div>
</template>

<script>
import PlanCard from './PlanCard.vue'
export default {
  components: { PlanCard },
    props: {
        planActive: {
            type: Number,
            required: true,
        },
        planSelected: {
            type: String,
            required: true,
        },
        plans: {
            type: Array,
            required: true,
        }
    },
    methods: {
      selectorChange(id) {
        this.$emit('change', id)
      }
    },
}
</script>

<style>
</style>