<template>
  <div class="le13">
    <h2>Lession 13</h2>
    <div>
      <div class="content">
        <h2>Siblings communication</h2>
        <coupon></coupon>
        <h1 v-if="couponApplied">You used a coupon!</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  window.Event = new Vue()

  const Coupon = Vue.component('coupon', {
    template: '<input placeholder="Enter our coupon code" @blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            Event.$emit('applied')
        }
    }
  })


  export default {
    name: 'le12',
    data() {
      return {
        couponApplied: false
      }
    },
    methods: {
    },
    components: {
      Coupon
    },
    created() {
      Event.$on('applied', () => this.couponApplied = true)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
