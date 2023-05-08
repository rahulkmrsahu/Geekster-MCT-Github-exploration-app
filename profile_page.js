const APIURL = "https://api.github.com/users/"

const container = document.querySelector("#container")
const reposList = document.querySelector(".repo_list_section")
const getUser = async (username) => {
    const response = await fetch(APIURL + username)
    const data = await response.json()
    const card = `<div id="user_details_box">
    <div id="img_box">
        <img src="${data.avatar_url}" id="avtar_img" alt="">
    </div>
    <div id="details_box">
        <div id="name">${data.name}</div>
        <div id="flex_details">
            <div id="repo">Repos: ${data.public_repos}</div>
            <div id="follower">Follower: ${data.followers}</div>
            <div id="following">Following :${data.following}</div>
        </div>
        <div id="address">${data.bio}</div>
        <div id="profile_link"> <a href="${data.html_url}"><button id="button">OPEN
                    PROFILE</button></a>
        </div>


    </div>

</div>`


    const repoCard = `<div id="no_repo">Repositories:${data.public_repos}</div>
    <div id="list_repo">
       

       

    </div>`
    container.innerHTML = card
    reposList.innerHTML = repoCard

    getRepos(username)



}

getUser("rahulkmrsahu")


const getRepos = async (username) => {
    const repos = document.querySelector("#list_repo")
    const response = await fetch(APIURL + username + "/repos")

    const data = await response.json()
    console.log(data)

    data.forEach(
        (item) => {
            const elem = document.createElement("a")
            elem.classList.add("repo_list")
            elem.herf = item.html_url
            elem.innerText = item.name
            elem.target = "_blank"
            list_repo.appendChild(elem)


        }
    )

}