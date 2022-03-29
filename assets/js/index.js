const values = [
  {
    name: "Bài 1. Giới thiệu",
    youtubeLink: "https://www.youtube.com/watch?v=xSTG5mIHi5I",
    demoLink: null,
    background: "./assets/img/b1.png",
    description: "Giới thiệu về Automation test, định hướng nghề nghiệp",
  },
  {
    name: "Bài 2. Cài đặt môi trường",
    youtubeLink: "https://www.youtube.com/watch?v=D_mCjqUIwLY",
    demoLink: null,
    background: "./assets/img/b2.png",
    description: "Cài đặt môi trường chuẩn bị cho những bài học tiếp theo",
  },
  {
    name: "Bài 3. Tìm hiểu về TestNG",
    youtubeLink: "https://www.youtube.com/watch?v=vgO9EUfhTN4",
    demoLink: null,
    background: "./assets/img/b3.png",
    description: "No action",
  },
  {
    name: "Bài 4. Tìm hiểu cấu trúc của 1 trang web",
    youtubeLink: "https://www.youtube.com/watch?v=pKCfSg8G0UY",
    demoLink: null,
    background: "./assets/img/b4.png",
    description: "Bài dành cho các bạn chưa biết HTML là gì",
  },
  {
    name: "Bài 5. Selenium - Lý thuyết",
    youtubeLink: "https://www.youtube.com/watch?v=zvxfVqek7e4",
    demoLink: null,
    background: "./assets/img/b5.png",
    description: "Các thành phần của Selenium, cách thức hoạt động",
  },

  {
    name: "Bài 6. Selenium - Thực hành",
    youtubeLink: "https://www.youtube.com/watch?v=IqqcIBPjFGU",
    demoLink: null,
    background: "./assets/img/b6.png",
    description: "Thực hành cơ bản về Selenium",
  },

  {
    name: "Bài 7. Tìm hiểu về WebElement",
    youtubeLink: null,
    demoLink: "./lessons/lession7/index.html",
    background: "./assets/img/b7.png",
    description: "Tìm hiểu WebElement và các API của nó",
  },
  {
    name: "Bài ?. Tìm hiểu về Xpath",
    youtubeLink: null,
    demoLink: './lessons/xpath/index.html',
    background: null,
    description: "No action",
  },
];

$(document).ready(function () {
  let html = "";
  values.forEach((item) => {
    const btnGoToLession = item.youtubeLink ? `<a href="${item.youtubeLink}" target="_blank" class="btn btn-success">Vào bài học</a >` : `<button class="btn btn-light" disabled>Comming soon...</button >`;
    const btnGotoDemo = item.demoLink ? `<a href="${item.demoLink}" target="_blank" class="btn btn-success">Demo</a >` : '';
    const background = item.background? item.background: './assets/img/placeholder.jpg';

    html += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div class="card">
          <img src="${background}" class="card-img-top" alt="${item.name}" />
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            ${btnGoToLession}
            ${btnGotoDemo}
          </div>
        </div>
      </div>`;
  });

  document.getElementById("content").innerHTML = html;
});
