<template>
    <div>
        <navbar />
        <movie />
        <seats />
        <ifooter />
    </div>
</template>

<script>
import navbar from '../components/navbar'
import ifooter from '../components/ifooter'
import seats from '../components/seats'
import movie from '../components/movie'

export default {
  components: {
    navbar,
    ifooter,
    seats,
    movie
  }
}
</script>
