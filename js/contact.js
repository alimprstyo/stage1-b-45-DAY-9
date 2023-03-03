const button = document.getElementById('submit')
button.addEventListener('click', () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phoneNumber = document.getElementById('phoneNumber').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    if(name == '') return alert('Please enter name')
    if(email == '') return alert('Please enter email')
    if(phoneNumber == '') return alert('Please enter phone number')
    if(subject == '') return alert('Please enter subject')
    if(message == '') return alert('Please enterr message')
    

    const emailRecevier = 'hi.dandi9@gmail.com'
    const a = document.createElement('a')
    a.setAttribute('href',`mailto:${emailRecevier}?subject=${subject}&body=Hallo nama saya ${name}, bisakah anda menghubungi saya di ${phoneNumber}, pesan saya : ${message}`)
    a.click()

    let data = {
        name, email, phoneNumber, subject, message
    }
    console.log(data)

}) 

