const data = [
  {
    name: "프레시안",
    img: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png",
  },
];

$(document).ready(function () {
  let newsItems = $(".news-items");

  for (let i = 0; i < 23; i++) {
    let item = `
      <li class="news-item">
        <a class="news-item-link" href="#">
          <img
            alt=${data[0].name}
            class="news-item-logo"
            loading="lazy"
            src=${data[0].img}
          />
        </a>
        <div class="news-item-hover-box">
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </div>
      </li>
    `;

    newsItems.append(item);
  }
});
