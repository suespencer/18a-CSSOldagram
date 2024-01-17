const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let selfieThumbEl = document.getElementsByClassName("selfie-thumbnail");

let artistNameEl = document.getElementById("artist-name");

let artistTownEl = document.getElementById("artist-town");

let selfieImg = document.getElementsByClassName("selfie-img");

let usernameEl = document.getElementById("username");

let postEl = document.getElementById("post");

let likesEl = document.getElementsByClassName("NoOflikes");

let artistInfoSectionEl = document.getElementsByClassName("artist-info-section")
console.log(artistInfoSectionEl)

artistInfoSectionEl.textContent = `<img src='${posts[0].avatar}' alt='avatar' class='selfie-thumbnail' />`

let divArtistInfo = document.createElement('div')



// function putPostsOnPage() {
//   for (let i = 0; i < posts.length; i++) {
//     selfieThumbEl.innerHTML = posts[i].avatar;
//     artistNameEl.textContent = posts[i].name;
//     artistTownEl.textContent = posts[i].location;
//     usernameEl.textContent = posts[i].username;
//     postEl.textContent = posts[i].comment;
//     likesEl.textContent = posts[i].likes;
//     selfieImg.innerHTML = posts[i].post;
   
//   }
// }

// putPostsOnPage();
