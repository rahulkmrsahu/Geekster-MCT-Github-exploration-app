const APIURL = "https://api.github.com/users/"

const container = document.querySelector("#container")
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
            <div id="repo">${data.public_repos}</div>
            <div id="follower">${data.followers}</div>
            <div id="following">${data.following}</div>
        </div>
        <div id="address">${data.bio}</div>
        <div id="profile_link"> <a href="https://api.github.com/users/${name}"><button id="button">OPEN
                    PROFILE</button></a>
        </div>


    </div>

</div>`
    container.innerHTML = card
}

getUser("rahulkmrsahu")