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
    youtubeLink: null,
    demoLink: null,
    background: "./assets/img/b1.png",
    description: "No action",
  },
];

$(document).ready(function () {
  let html = "";
  values.forEach((item) => {
    const btnGoToLession = item.youtubeLink ? `<a href="${item.youtubeLink}" target="_blank" class="btn btn-success">Vào bài học</a >` : `<button class="btn btn-light" disabled>Comming soon...</button >`;
    const btnGotoDemo = item.demoLink ? `<a href="${item.demoLink}" target="_blank" class="btn btn-success">Demo</a >` : `<button class="btn btn-light" disabled>Comming soon...</button >`;

    html += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div class="card">
          <img src="${item.background}" class="card-img-top" alt="${item.name}" />
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            ${btnGoToLession}
          </div>
        </div>
      </div>`;
  });

  document.getElementById("content").innerHTML = html;
});
