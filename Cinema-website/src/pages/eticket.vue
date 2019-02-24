<template>
    <div>
        <navbar />
        <ticket />
        <ifooter />
    </div>
</template>

<script>
import navbar from '../components/navbar'
import ifooter from '../components/ifooter'
import ticket from '../components/ticket'

export default {
  components: {
    navbar,
    ifooter,
    ticket
  }
}
</script>
