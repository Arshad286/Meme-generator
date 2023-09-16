const generatebtn = document.querySelector('.meme-generator .generate-meme');
const mimg = document.querySelector('.meme-generator img');
const mtitle = document.querySelector('.meme-generator .meme-title');
const mAuthor = document.querySelector('.meme-generator .meme-author');

const upadateDeatil = (url, title, author) =>{
  mimg.setAttribute('src', url);
  mtitle.innerHTML = title;
  mAuthor.innerHTML = `Meme by: ${author}`;
}

const generatememe = () =>{
  fetch('https://meme-api.com/gimme').then((response) => response.json())
  .then((data) =>{
    upadateDeatil(data.url, data.title, data.author);
  });
};


generatebtn.addEventListener('click', generatememe);