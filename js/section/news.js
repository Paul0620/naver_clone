var data = [
  {
    name: "프레시안",
    img: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png",
  },
];

$(document).ready(function () {
  var newsItems = $(".news-items");

  for (var i = 0; i < 23; i++) {
    // let item = `
    //   <li class="news-item">
    //     <a class="news-item-link" href="#">
    //       <img
    //         alt=${data[0].name}
    //         class="news-item-logo"
    //         loading="lazy"
    //         src=${data[0].img}
    //       />
    //     </a>
    //     <div class="news-item-hover-box">
    //       <div>
    //          <button class="news-item-hover-button">구독</button>
    //          <button class="news-item-hover-button">해지</button>
    //          <button class="news-item-hover-button">기사보기</button>
    //       </div>
    //     </div>
    //   </li>
    // `;

    var item =
      "<li class='news-item'>\n" +
      "<a class='news-item-link' href='#'>\n" +
      "<img alt='" +
      data[0].name +
      "' class='news-item-logo' " +
      "loading='lazy' " +
      "src='" +
      data[0].img +
      "' />\n</a>\n" +
      "<div class='news-item-hover-box'>\n" +
      "<div>\n" +
      "<button class='news-item-hover-button'>구독</button>\n" +
      "<button class='news-item-hover-button'>기사보기</button>\n" +
      "</div>\n" +
      "</div>\n</li>";

    newsItems.append(item);
  }
});
