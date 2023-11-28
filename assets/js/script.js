

/*==================== scroll sections active link ====================*/
let list = document.querySelectorAll('.Navbar a');
function active(){
    list.forEach((i) =>
    i.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((i) =>
i.addEventListener('click',active));

 
/*==================== active navbar, remove toggle icon and navbar when click navbar link (scroll) ====================*/
 let menuIcon = document.querySelector('#Menu-icon');
 let Navbar = document.querySelector('.Navbar');
 
 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    Navbar.classList.toggle('active');

 }
Navbar.onclick = () => {
    menuIcon.classList.remove('bx-x');
    Navbar.classList.remove('active');
}


 


/*==================== scroll reveal ====================*/

/*==================== sticky header ====================*/
 

/*==================== type contact ====================*/
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessages = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken: "8564dcc6-056a-4ff0-9bc4-1628fd973a55",
        To : 'reyaryamedia@gmail.com',
        From : "reyaryamedia@gmail.com",
        Subject : subject.value,
        Body : bodyMessages
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Thanks For Support Us!",
                text: "Your Message Has Been Sent To Developer, Enjoy :)",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement,classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");
    
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Please Type Email Correctly!";
        }
        else {
            errorTxtEmail.innerText = "Email Can't Be Blank!";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs()

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }

   
});

/*==================== typed js ====================*/

