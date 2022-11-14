import{otherNavbar,otherFooter} from "./components/otherNavbar.js"


let Navbar=document.getElementById("otherNavbar");
Navbar.innerHTML=otherNavbar();


let footerSec=document.getElementById("footerSection");
footerSec.innerHTML=otherFooter();




class User{
    constructor() {

    }
    #checkUserName(username) {
        return username.includes("#") ? false : true;
        
    }
    #checkPassword(password) {
        return password.length>2 ? true: false;
        
    }
    async SignUp(n, e, u, p, m, d) {
        let isValidData = this.#checkUserName(u) && this.#checkPassword(p);
        if (isValidData) {
            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            this.mobile = m;
            this.description = d;
            let actual_data = JSON.stringify(this);
            try {
                const register_url = `https://masai-api-mocker.herokuapp.com/auth/register`
                let res = await fetch(register_url, {
                    method: "POST",
                    body: actual_data,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                let data = await res.json();
                console.log("data", data)
                alert("Registration Sucessful")
                window.location.href="login.html";
            }
            catch (err) {
                console.log("error", err)
            }
        }
    }
}
let u1 = new User();
let user=document.getElementById("rigesterUser")
user.onclick=()=>{
    Register()
}
function Register() {
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    let mobile=document.getElementById("mobile").value
    let description = document.getElementById("description").value
    
    u1.SignUp(name, email, username, password, mobile, description);
}