<template>
    <div>
        <navbar />
        <payment />
        <ifooter />
    </div>
</template>

<script>
import navbar from '../components/navbar'
import ifooter from '../components/ifooter'
import payment from '../components/payment'

export default {
  components: {
    navbar,
    ifooter,
    payment
  }
}
</script>
