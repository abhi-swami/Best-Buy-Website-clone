import { otherNavbar,otherFooter } from "./components/otherNavbar.js";

let Navbar=document.getElementById("otherNavbar");
Navbar.innerHTML=otherNavbar();

let footerSec=document.getElementById("footerSection");
footerSec.innerHTML=otherFooter();

class User{
    constructor() {

    }
    async Login(u, p) {
        this.username = u;
        this.password = p;
        let actual_data = JSON.stringify(this);
        try {
            const login_url=`https://masai-api-mocker.herokuapp.com/auth/login`;
            let res=await fetch(login_url,{
                method: 'POST',
                body: actual_data,
                headers:{
                    'Content-Type': 'application/json',
                },
            });
            let data = await res.json();
            // console.log("data", data)
            let token = data.token;
            getProfile(this.username,token)

        }
        catch (err) {
            console.log("error", err)
        }
    }
}

let u1 = new User();
let l=document.getElementById("Login")
l.onclick=()=>{
    Login();
}
function Login() {
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    u1.Login(username, password);
}

async function getProfile(username, token) {
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;
    let res = await fetch(api, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    let data = await res.json();
    console.log(data);
    alert(`Dear,${data.name} your login is successfull`)
    if(data.name == "admin"){
        window.location.href="admin.html"
    }else{
        window.location.href="index.html"
    }
    
}



