let form = document.getElementById("my-form")

let button = document.querySelector(".search-button")


form.addEventListener('submit', function (e) {
    e.preventDefault()

    let search = document.getElementById("search").value

    let originalName = search.split(' ').join('')

    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)

            button.addEventListener('click', () => {
                openInNewTab("profile_page.html")
            })









        })




})

