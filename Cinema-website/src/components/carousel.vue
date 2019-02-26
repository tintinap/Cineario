<template>
<div id="movies">

        <div class="poster-slide">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active lanscape">
                        <img class="d-block w-100" src="img/landscape poster/l5.jpg" alt="First slide">
                    </div>
                    <span>
                        <div class="carousel-item landscape"  v-for="movie in movies">
                            <img class="d-block w-100" :src="movie.landscape_src" alt="Second slide">
                        </div>
                    </span>
                </div>
            </div>
        </div>
</div>
</template>