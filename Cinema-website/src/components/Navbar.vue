<template>
    <div>
    <nav class="navbar navbar-light bg-main-white">
        <a style="color: #f9f9f9" class="navbar-brand hidden" href="#">Navbar</a>
    </nav>

    <nav style="margin-top: -5px;" class="navbar navbar-expand-sm navbar-light bg-main-white sticky-top p-verticalfull">
        <a class="navbar-brand ml-2" href="#"><b>WebName</b></a>
        <button class="navbar-toggler my-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav" style="margin-right: auto;margin-left: auto;">
                <li class="nav-item" style="margin-right: 1em;">
                    <a class="nav-link" href="#">หน้าแรก <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item" style="margin-right: 1em;">
                    <a class="nav-link" href="#">ภาพยนตร์</a>
                </li>
                <li class="nav-item" style="margin-right: 1em;">
                    <a class="nav-link" href="#">โรงภาพยนตร์</a>
                </li>
            </ul>
            <a style="font-size: 12px" id="sign-up" class="nav-item my-2 link text-md-right" href="#"><i style="color:#191919!important" class="fas fa-sign-in-alt"></i>
                Sign-in/Sign-up</a>
        </div>
    </nav>
    <!-- Login -->

    <div id="sign-in" class="modal">

        <form class="modal-content animate">
            <div class="imgcontainer">
                <span class="close" title="Close Modal">&times;</span>
                <img src="img/logo.png" alt="Avatar" class="avatar">
            </div>

            <div class="container">
                <div class="text-center">
                    <input type="text" placeholder="Username" name="uname" required>

                    <input type="password" placeholder="Password" name="psw" required><br>

                    <button class="btn btn-primary" type="submit">Sign-in</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>
                    <span>Forgot <a href="#">password?</a></span>
                </div>
            </div>

        </form>
    </div>
    <!-- end login -->
    </div>
</template>