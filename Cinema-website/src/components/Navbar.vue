<template>
    <div>
    <nav class="navbar navbar-light bg-main-white">
        <a style="color: #f9f9f9; font-size: 5px;" class="navbar-brand hidden" href="#">Navbar</a>
    </nav>
    <div id="nav-bar">
        <nav style="margin-top: -5px; position: fixed; width:100%;" class="navbar navbar-expand-sm navbar-light bg-main-white sticky-top p-verticalfull shadow-down pt-3">
            <a class="navbar-brand ml-2 logo" href="#"><b>Cineario</b></a>
            <button class="navbar-toggler my-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav" style="margin-right: auto;margin-left: auto;">
                    <li class="nav-item" style="margin-right: 1em;">
                        <a class="nav-link" href="#">หน้าแรก <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item" style="margin-right: 1em;">
                        <a class="nav-link" href="#movies-list" data-scroll="movies-list">ภาพยนตร์</a>
                    </li>
                    <li class="nav-item" style="margin-right: 1em;">
                        <a class="nav-link" href="#">โรงภาพยนตร์</a>
                    </li>
                </ul>
                <a @click.prevent="openPopup" style="font-size: 12px" id="sign-up" class="nav-item my-2 link text-md-right" onclick="document.getElementById('sign-in').style.display='block'" href="#">
                    <span v-if="sign_display === 'Sign-in/Sign-up'">
                    <i style="color:#191919!important" class="fas fa-sign-in-alt"></i>
                </span>
                    <span v-else>
                    <i style="color:#191919!important" class="fas fa-user"></i>
                </span> {{ sign_display }}</a>
            </div>
        </nav>
    </div>
    <!-- Login -->

    <div id="sign-in" class="modal">

        <form class="modal-content animate">
            <!-- <div class="modal-content animate"> -->
            <div class="logocontainer">
                <span v-on:click="setDefault" class="close" title="Close Modal">&times;</span>
                <!-- <div class="avatar logo">Cineario</div> -->
                <img style="width: 350px; padding-top: 55px;" src="img/logo.png" alt="">
            </div>

            <div class="container">
                <div class="text-center">
                    <span v-if="signed">
                        <button @click.prevent="logout" class="btn btn-primary justify-content-center px-4" type="submit">Log out</button>
                    </span>
                    <span v-else>
                        <input class="" :class="{ 'red-holder': uname }" v-model="username" type="text" placeholder="Username" id="uname" required>
    
                        <input class="" :class="{ 'red-holder': psw }" v-model="password" type="password" placeholder="Password" id="psw" required><br>
                        <span v-if="signup">
                            <input class="" :class="{ 'red-holder': conpsw }" v-model="confirmpass" type="password"  placeholder="Confirm Password" id="conpsw"required><br>
                        </span>

                    <div class="lower-part">
                        <span v-if="!signup">
                                <button @click.prevent="setSignDisplay"style="float: left;" class="btn btn-primary justify-content-left px-4" type="submit">Sign-in</button>
                                <label style="float: right;" class="justify-content-end">
                                        <input type="checkbox" checked="checked" name="remember"> Remember me <br>
                                        <span><a @click.prevent="signup = !signup;
                                            uname = false
                                            psw = false
                                            conpsw = false" href="#">Sign-up</a></span>
                        </label>
                        </span>
                        <span v-else>
                                <button @click.prevent="checkDisplay" class="btn btn-primary justify-content-center px-4" type="submit">Sign-up</button>
                            </span>
                    </div>
                    </span>
                </div>
            </div>

            <!-- </div> -->
        </form>
    </div>
    <!-- end login -->
    </div>
</template>
