function send(){
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phoneNumber = document.getElementById('phone-number').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  if (name == "") {
    alert("Masukan Nama Anda!");
  } else if (email == "") {
    alert("Masukan Email Anda!");
  } else if (phoneNumber == "") {
    alert("Masukan Nomor Telphone Anda!");
  } else if (subject == "") {
    alert("isi Subject Anda!");
  } else if (message == "") {
    alert("jangan Kosongkan Pesan Anda!");
  } else {
    const defaultEmail = "septiyan63@gmail.com";

    let mailTo = document.createElement('a');
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Greetings! My name is ${name}, ${message}, You can contact me at ${phoneNumber}.`;
    mailTo.target = "_blank";
    mailTo.click();

    let Message = {
      name,
      email,
      phoneNumber,
      subject,
      message
    };

    console.log(Message);
  }
}
