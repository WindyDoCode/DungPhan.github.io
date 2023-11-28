// phần kiểm tra định dạng email
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// khai báo phần ẩn hiện ở box hiện thông tin cá nhân
const logbox = document.querySelector(".login-box");
const logbtn = document.querySelector(".login-btn");
const loginp = document.querySelector(".login-input");
const infobox = document.querySelector(".info");
// khai bảo nút ẩn hiển ở các thông tin thêm như Kinh nghiệm, Hoạt động, Kỹ năng, Học Vấn, ngôn ngữ, sở thích
const expbtn = document.querySelector(".experience-btn");
const edubtn = document.querySelector(".education-btn");
const actbtn = document.querySelector(".active-btn");
const favorbtn = document.querySelector(".favor-btn");
const langbtn = document.querySelector(".language-btn");
const skillbtn = document.querySelector(".skill-btn");
const more = document.querySelector(".more-btn");
// khai báo các box chứa các thông tin ở các box Kinh Nghiệm, Hoạt Động, Kỹ Năng, Học vẫn, Ngôn Ngữ, Sở Thích

const edu = document.querySelector("#edu");
const exp = document.querySelector("#exp");
const act = document.querySelector("#act");
const favor = document.querySelector(".favor-box");
const lang = document.querySelector("#lang");
const skill = document.querySelector("#skill");
favor.style.display = "none";

// phần hoạt động chính của  ở các phần box Kinh Nghiệm, Kỹ Năng, Học vấn, Ngôn Ngữ, Sở Thích

expbtn.addEventListener("click", function () {
  exp.classList.toggle("hidden");
  if (exp.classList.contains("hidden")) {
    expbtn.textContent = "View more";
  } else {
    expbtn.textContent = "View less";
  }
});
edubtn.addEventListener("click", function () {
  edu.classList.toggle("hidden");
  if (edu.classList.contains("hidden")) {
    edubtn.textContent = "View more";
  } else {
    edubtn.textContent = "View less";
  }
});
actbtn.addEventListener("click", function () {
  act.classList.toggle("hidden");
  if (act.classList.contains("hidden")) {
    actbtn.textContent = "View more";
  } else {
    actbtn.textContent = "View less";
  }
});
favorbtn.addEventListener("click", function () {
  if (favor.style.display !== "flex") {
    favor.style.display = "flex";
    favorbtn.textContent = "View less";
  } else {
    favor.style.display = "none";
    favorbtn.textContent = "View more";
  }
});
langbtn.addEventListener("click", function () {
  lang.classList.toggle("hidden");
  if (lang.classList.contains("hidden")) {
    langbtn.textContent = "View more";
  } else {
    langbtn.textContent = "View less";
  }
});
skillbtn.addEventListener("click", function () {
  skill.classList.toggle("hidden");
  if (skill.classList.contains("hidden")) {
    skillbtn.textContent = "View more";
  } else {
    skillbtn.textContent = "View less";
  }
});
//phần hoạt động của thông tin cá nhân sau khi người dùng nhập email
logbtn.addEventListener("click", function () {
  let email = loginp.value;
  if (email !== "" && regex.test(email)) {
    logbox.classList.add("hidden");
    infobox.classList.remove("hidden");
  } else {
    alert("Bạn Nhập Email Không Hợp Lệ");
  }
});
