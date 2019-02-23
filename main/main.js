var auth = new Vue({
    el: "#sign-in",
    data: {
        signup: false,
        signed: false,
        btntext: 'Sign-in',
        username: '',
        password: '',
        confirmpass: '',
    },
    methods: {
        setSignDisplay() {
            console.log('setting..')
            if ((!(this.username === '') && this.username.length < 9) &&
                (!(this.password === '')) && this.password.length > 5) {
                console.log("changing");

                nav.sign_display = this.username;
                this.username = ''
                this.password = ''
                this.confirmpass = ''
                this.signed = true;
                document.getElementById('psw').classList.remove('red-holder');
                document.getElementById('uname').classList.remove('red-holder');
                document.getElementById('sign-in').style.display = 'none'
            } else {
                console.log("nochange");
                document.getElementById('psw').classList.add('red-holder');
                document.getElementById('uname').classList.add('red-holder');
            }
        },

        logout() {
            console.log("logout")
            nav.sign_display = "Sign-in/Sign-up";
            this.signed = false;
            document.getElementById('sign-in').style.display = 'none'
        },
        checkDisplay() {
            console.log("value missing")
            if ((!(this.username === '') && this.username.length < 9) &&
                (!(this.password === '') && this.password.length > 5) &&
                (!(this.confirmpass === '')) && this.password.length > 5) {
                console.log("convert signup")
                this.signup = !this.signup
                document.getElementById('psw').classList.remove('red-holder');
                document.getElementById('uname').classList.remove('red-holder');
                document.getElementById('conpsw').classList.remove('red-holder');
            } else {
                document.getElementById('psw').classList.add('red-holder');
                document.getElementById('uname').classList.add('red-holder');
                document.getElementById('conpsw').classList.add('red-holder');
            }
        }
    }
})

var nav = new Vue({
    el: '#nav-bar',
    data: {
        sign_display: 'Sign-in/Sign-up',

    },
    methods: {
        openPopup() {
            document.getElementById('psw').classList.remove('red-holder');
            document.getElementById('uname').classList.remove('red-holder');
            document.getElementById('conpsw').classList.remove('red-holder');
        }
    },
})