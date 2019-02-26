<template>
<div>
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
        <!-- carousel end -->
        <div id="movies-list" class="container text-center pt-5">
            <b style="font-size: 2rem;">
                    Movies
                </b>
            <!-- dropdown-selector -->
            <div class="container mx-auto mx-5 p-4 text-center">
                <div class="cinema-dropdown mx-auto p-3">
                    <div style="width:auto;" class="text-center d-flex justify-content-center">
                        <div class="d-flex flex-row">
                            <select v-model="selected_genere" name="genres-selector" class="genres-selector">
                                        <option value="" disabled>select genere</option>
                                        <option>all generes</option>
                                        <option>action</option>
                                        <option>comedy</option>
                                        <option>sci-fi</option>
                                        <option>horror</option>
                                        <option>thriller</option>
                                        <option>romance</option>
                                        <option>animated</option>
                                    </select>
                            <div class="cinema-search px-3">
                                <form>
                                    <input v-model="searchText" type="search" placeholder="all movies">
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- dropdown-selector end -->
            <div class="row py-5">
                <div class="col-md-4" v-for="movie in movieSearchResult">
                    <div class="movie-poster m-4">
                        <a href="#">
                            <div class="movie-card bg-main-white">
                                <img :src="movie.vertical_src" alt="">
                                <div class="p-3">
                                    <p>
                                        <span>RELEASE DATE:</span>
                                        <span>{{movie.releases_date}}</span>
                                    </p>
                                    <h4>
                                        <span>{{movie.title}}</span>
                                    </h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>


            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    
}
</script>
