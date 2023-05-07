let form = document.getElementById("my-form")

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let search = document.getElementById("search").value

    let originalName = search.split(' ').join('')

    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)

            document.getElementById("result").innerHTML = `<img src="${data.avatar_url}"/>`
        })




})