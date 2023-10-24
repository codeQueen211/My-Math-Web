
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,

    };

    const serviceID = "service_r0kn7t4";
    const templateID = "template_6psxhwp";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";

            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));
        const newPageUrl= "mathQuiz.html";
        window.open(newPageUrl,"_blank")

}


