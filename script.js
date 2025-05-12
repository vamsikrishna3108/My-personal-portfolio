window.addEventListener('load', function () {
  console.log("Portfolio site loaded successfully!");
});
function sendEmail(){
    
    let options={
       from_name:document.getElementById("name").value,
       email_id:document.getElementById("email").value,
       message:document.getElementById("message").value
    }
    emailjs.send("service_25aeb2o","template_jng982v",options).then(function(response){
        alert("success!"+response.status)
    })
}