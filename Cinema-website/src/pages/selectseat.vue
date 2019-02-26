<template>
    <div>
        <navbar />
        <movie />
        <seats @select="selects"/>
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
  },


      data () 
      {
      // function() {
        return {
            isActive: false,
            seats: []
        }
    },

  methods: {
      selects(value) {
        console.log(value)
        console.log(this.isActive)
        
        this.seats.push(value);
        console.log(this.seats)
      }
  },
  
}
</script>
