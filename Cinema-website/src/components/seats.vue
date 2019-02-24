<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2">
                <div style="width:fit-content;border:1px solid #000;padding: .6em .6em 0em .6em;margin-top: 2em;text-align: center;">
                    <h5>CINEMA</h5>
                    <h1>4</h1>
                </div>
            </div>
            <div class="col-md-10">
                <div class="d-flex flex-row" style="padding: .6em .6em 0em 0em;margin-top: 2em;font-size: 1.2em;">
                    <span class="cinema-seat" style="color: rgb(96, 205, 255);margin-right: 1em;"><i class="fas fa-square"></i> Deluxe Seat</span>
                    <span class="cinema-seat" style="color: rgb(0, 64, 182);margin-right: 1em;"><i class="fas fa-square"></i> Premium Seat</span>
                    <span class="cinema-seat" style="color: rgb(70, 0, 150);"><i class="fas fa-square"></i> Honeymoon Seat</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                <p class="text-center">------------------- screen -------------------</p>
    
                <div class="cinema">
                    <!-- Row : G -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">G</span>
                        <span class="cinema-seat deluxe" @click="$emit('select', 'G1')" v-bind:id="{'select-seat': isActive}"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe" @click="$emit('select', 'G2')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe" @click="$emit('select', 'G3')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe" @click="$emit('select', 'G4')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">G</span>
                    </div>
                    <!-- Row : F -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">F</span>
                        <span class="cinema-seat deluxe" @click="$emit('select', 'F1')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe" @click="$emit('select', 'F2')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe" @click="$emit('select', 'F3')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe" @click="$emit('select', 'F4')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">F</span>
                    </div>
                    <!-- Row : E -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">E</span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">E</span>
                    </div>
                    <br>
                    <!-- Row : D -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">D</span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">D</span>
                    </div>
                    <!-- Row : C -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">C</span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe" id="select-seat"><i class="far fa-check-circle"></i></span>
                        <span class="cinema-seat deluxe" id="select-seat"><i class="far fa-check-circle"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat deluxe"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">C</span>
                    </div>
                    <!-- Row : B -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">B</span>
                        <span class="cinema-seat premium" id="booking-seat" value="B1"><i class="fas fa-user"></i></span>
                        <span class="cinema-seat premium" id="booking-seat" value="B2"><i class="fas fa-user"></i></span>
                        <span class="cinema-seat premium" id="booking-seat" value="B3"><i class="fas fa-user"></i></span>
                        <span class="cinema-seat premium" value="B4"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium" value="B5"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium" value="B6"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium" value="B7"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium" value="B8"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">B</span>
                    </div>
                    <!-- Row : A -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">A</span>
                        <span class="cinema-seat premium"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat premium"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">A</span>
                    </div>
                    <!-- Row : AA -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">AA</span>
                        <span class="cinema-seat sofa"><i class="fas fa-square"></i><i class="fas fa-square"></i></span>
                        <span class="cinema-seat sofa"><i class="fas fa-square"></i><i class="fas fa-square"></i></span>
                        <span class="cinema-seat sofa"><i class="fas fa-square"></i><i class="fas fa-square"></i></span>
                        <span class="cinema-seat sofa"><i class="fas fa-square"></i><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">AA</span>
                    </div>
                </div>
                
            </div>
            <div class="col-md-3" style="background: rgb(216, 216, 216);padding: 3em 1.25em 1.25em 1.25em;">
                <div class="member"><i class="fas fa-user-circle"></i> Login/Signup</div>
                <br>
                <div class="information">
                    <h5>Friend Zone</h5>
                    <p style="color: rgb(0, 83, 161);">21 February 2019<br>14:20</p>
                    <br>
                    <h5>CINEMA 4</h5>
                    <p style="color: rgb(0, 83, 161);">Seacon Cineplex</p>
                </div>
                <div class="selected-seat">
                    <h5 style="background: rgba(145, 145, 145, 0.329);color:#000;padding: .5em;">Selected Seats</h5>
                    <span v-for="i in seats">{{ i }} </span>
                </div>
                <div class="total">
                    <h5  style="background: rgba(145, 145, 145, 0.329);color:#000;padding: .5em;">Total</h5>
                    <span>800 THB</span>
                </div>
                <br>
                <div class="continue">
                    <button class="btn btn-outline-info" style="width: 100%;"><i class="far fa-money-bill-alt"></i> Discounts</button>
                    <br><br>
                    <a href="../"><button class="btn btn-outline-primary" style="width: 100%;">Continue</button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: {
        isActive: false,
        seats: []
    },
    methods: {
      select(value) {
        seats.push(value);
      }
    }
}
</script>