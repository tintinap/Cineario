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
                    <span class="cinema-seat" style="margin-left: 5em;margin-right: 1.5em;" id="booking-seat"><i class="fas fa-user"></i> เต็ม</span>
                    <span class="cinema-seat" style="margin-right: 1.5em;" id="select-seat"><i class="far fa-check-circle"></i> เลือกที่นั่ง</span>
                    <span class="cinema-seat"><i class="fas fa-square"></i> ว่าง</span>
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
                        <span class="cinema-seat" @click="$emit('select', 'G1')" v-bind:id="{'select-seat': isActive}"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'G2')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'G3')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'G4')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'G5')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'G6')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'G7')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'G8')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">G</span>
                    </div>
                    <!-- Row : F -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">F</span>
                        <span class="cinema-seat" @click="$emit('select', 'F1')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'F2')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'F3')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'F4')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'F5')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'F6')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'F7')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'F8')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">F</span>
                    </div>
                    <!-- Row : E -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">E</span>
                        <span class="cinema-seat" @click="$emit('select', 'E1')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'E2')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'E3')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'E4')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'E5')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'E6')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'E7')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'E8')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">E</span>
                    </div>
                    <br>
                    <!-- Row : D -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">D</span>
                        <span class="cinema-seat" @click="$emit('select', 'D1')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'D2')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'D3')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'D4')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'D5')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'D6')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'D7')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'D8')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">D</span>
                    </div>
                    <!-- Row : C -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">C</span>
                        <span class="cinema-seat" @click="$emit('select', 'C1')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'C2')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'C3')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'C4')" id="select-seat"><i class="far fa-check-circle"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'C5')" id="select-seat"><i class="far fa-check-circle"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'C6')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'C7')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'C8')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">C</span>
                    </div>
                    <!-- Row : B -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">B</span>
                        <span class="cinema-seat" @click="$emit('select', 'B1')" id="booking-seat"><i class="fas fa-user"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'B2')" id="booking-seat"><i class="fas fa-user"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'B3')" id="booking-seat"><i class="fas fa-user"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'B4')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'B5')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'B6')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'B7')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'B8')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">B</span>
                    </div>
                    <!-- Row : A -->
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">A</span>
                        <span class="cinema-seat" @click="$emit('select', 'A1')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'A2')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'A3')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'A4')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'A5')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'A6')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'A7')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat" @click="$emit('select', 'A8')"><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">A</span>
                    </div>
                    <!-- Row : AA 
                    <div class="cinema-row d-flex flex-row justify-content-center" style="font-size: 2em;">
                        <span class="cinema-seat txt left">AA</span>
                        <span class="cinema-seat sofa" @click="$emit('select', 'AA1')"><i class="fas fa-square"></i><i class="fas fa-square"></i></span>
                        <span class="cinema-seat sofa" @click="$emit('select', 'AA2')"><i class="fas fa-square"></i><i class="fas fa-square"></i></span>
                        <span class="cinema-seat sofa" @click="$emit('select', 'AA3')"><i class="fas fa-square"></i><i class="fas fa-square"></i></span>
                        <span class="cinema-seat sofa" @click="$emit('select', 'AA4')"><i class="fas fa-square"></i><i class="fas fa-square"></i></span>
                        <span class="cinema-seat txt right">AA</span>
                    </div>-->
                </div>
                
            </div>
            <div class="col-md-3" style="background: rgb(216, 216, 216);padding: 1.5em 1.25em 1.25em 1.25em;">
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
                <div class="selected-seat">
                    <h5 style="background: rgba(145, 145, 145, 0.329);color:#000;padding: .5em;">Select Type</h5>
                    <div class="row">
                        <div class="col-sm-4"><label for="adult">Adult : </label></div>
                        <div class="col-sm-8"><input type="number" class="form-control" id="adult"></div>
                    </div><br>
                    <div class="row">
                        <div class="col-sm-4"><label for="child">Child : </label></div>
                        <div class="col-sm-8"><input type="number" class="form-control" id="child"></div>
                    </div>
                </div>
                <div class="total">
                    <h5  style="background: rgba(145, 145, 145, 0.329);color:#000;padding: .5em;">Total</h5>
                    <span>800 THB</span>
                </div>
                <br>
                <div class="continue">
                    <a href="/e-ticket"><button class="btn btn-outline-primary" style="width: 100%;">Continue</button></a>
                </div>
            </div>
        </div>
        <br><br>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            seat : '',
        }
    },
    methods: {
        select() {
            this.$emit('select', this.seat);
        }
    },
    computed: {
        
    },
}
</script>