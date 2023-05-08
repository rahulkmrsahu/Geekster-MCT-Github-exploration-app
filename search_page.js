let form = document.getElementById("my-form")

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let search = document.getElementById("search").value

    let originalName = search.split(' ').join('')

    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)

            document.getElementById("result").innerHTML = ` <a target="_blank" href="https://www.github.com/${originalName}"></a>`
        })




})