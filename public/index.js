const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")
const responseH1 = document.querySelector('#response')

const url = 'http://127.0.0.1:3000/api/user/'

userCreateForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const email = document.getElementById('email').value
    const username = document.getElementById('username').value
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const age = document.getElementById('age').value

    const user = {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    fetch(url, {
        method: 'POST',
        node: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (response.status == 409) {
            responseH1.innerHTML = 'Username is already taken'
        } else {
            responseH1.innerHTML = 'Username has been added'
        }
    })
    .catch(err => {
        console.log(err)
    })
})