let h = 0;
let m = 0;
let s = 0;
let running = false;
let timerId;
function start() {
  let btns = document.querySelectorAll('button');
  if (!running) {
    btns[1].textContent = 'Stop';
    timerId = setInterval(tick, 1000); 
    running = true;
  } else {
    btns[1].textContent = 'Start';
    clearInterval(timerId);
    running = false;
  }
}
function tick() {
  s++;
  if (s == 60) {
    s = 0;
    m++;
  }
  if (m == 60) {
    h++;
    m = 0;
  }
  let h1 = document.querySelector('h1');
  h1.textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

let batmanUrl = 'https://i.pinimg.com/736x/ec/bf/66/ecbf66484f8439fd7021f3ef224a50a8.jpg';
let supermanUrl = 'https://i.pinimg.com/736x/4e/d1/39/4ed139ba2daa68dfe469da1939646562.jpg';
let titoCalderon = 'https://i1.sndcdn.com/artworks-70Pj6BzlwIozTb4Z-36KnEQ-t500x500.jpg';
let la35 = 'https://yt3.googleusercontent.com/ytc/AIdro_mLFWnKFPGUnsl0ZdJNmObibVkYq8Aoc0C9NvYO30m-jw=s160-c-k-c0x00ffffff-no-rj';
let spidermanUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCwYyHV21a59VN1AiqN0Y-kMRBgxCBL_yHw&s';
let urls = [spidermanUrl, batmanUrl, supermanUrl, titoCalderon, la35];

function spiderman(event) {
  event.preventDefault();
  let n = +event.target.n.value;
  for (let i = 0; i < n; i++) {
    let img = document.createElement('img');
    img.src = spidermanUrl;
    //img.src = urls[Math.floor(Math.random() * urls.length)];
    img.classList.add('spiderman');
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    img.style.top  = y+'%';
    img.style.left = x+'%';
    img.onclick = e => {
      e.target.remove();
    };
    setInterval(() => {
      img.style.transform = `translate(${Math.random()*100}%,${Math.random()*100}%)`;
    }, 1000);
    /*setTimeout(() => {
      img.remove();
    }, (Math.floor(Math.random()*20)+1)*1000);
    */
    document.body.append(img);
  }
}

function gempf() {
  let imgs = document.querySelectorAll('img');
  if (imgs.length == 1) {
    imgs[0].style.width = '200px';
    imgs[0].style.height = '200px';
    return;
  }
  imgs[Math.floor(Math.random() * imgs.length)].remove();
}



