var productData = [
  {
    title: "전상품 최대11%↓",
    subTitle: "best 득템해!",
    img: "https://s.pstatic.net/shopping.phinf/20221202_18/e0833a11-692b-493c-86e6-53c6e682ae1f.jpg?type=f214_292",
  },
];

var shopNewsData = [
  { title: "저스트타올", description: "귀여운곰돌이수건 할인판매진행중!" },
];

$(document).ready(function () {
  var productItems = $(".product-items");

  for (var i = 0; i < 11; i++) {
    var item =
      "<li class='product-item'>" +
      "<a href='#'>" +
      "<div class='product-img-box'>" +
      "<img src='" +
      productData[0].img +
      "' alt='상품'" +
      "/>" +
      "<span class='thumb-line'></span>" +
      "</div>" +
      "<div class='product-text-box'>" +
      "<div class='product-title'>" +
      productData[0].title +
      "</div>" +
      "<div class='product-subtitle'>" +
      productData[0].subTitle +
      "</div>" +
      "</div>" +
      "</a>" +
      "</li>";

    productItems.append(item);
  }
});

$(document).ready(function () {
  var shopNewsItems = $(".shop-news-items");

  for (var i = 0; i < 7; i++) {
    var item =
      "<li class='shop-news-item'>" +
      "<a href='#'>" +
      "<span class='title'>" +
      shopNewsData[0].title +
      "</span>" +
      "<span class='description'>" +
      shopNewsData[0].description +
      "</span>" +
      "</a>" +
      "</li>";

    shopNewsItems.append(item);
  }
});
