<template>
    <div>
        <navbar />
        <movie />
        <schedule />
        <ifooter />
    </div>
</template>

<script>
import navbar from '../components/navbar'
import ifooter from '../components/ifooter'
import schedule from '../components/schedule'
import movie from '../components/movie'

export default {
  components: {
    navbar,
    ifooter,
    schedule,
    movie
  }
}
</script>

