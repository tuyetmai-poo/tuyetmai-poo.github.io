document.addEventListener("DOMContentLoaded", function () {
  const btnLogin = document.querySelector(".hai button");
  const btnShare = document.querySelector(".tren .nut button:first-child");
  const btnCollection = document.querySelector(".tren .nut button:last-child");
  const btnStart = document.querySelector(".duoi button");

  const sectionCollection = document.querySelector(".giua2");

  btnLogin.addEventListener("click", function () {
    alert("Tính năng đăng nhập sẽ sớm được cập nhật!");
  });

  btnShare.addEventListener("click", function () {
    alert("Hãy chọn hình ảnh hoặc video bạn muốn chia sẻ!");
  });

  btnCollection.addEventListener("click", function () {
    sectionCollection.scrollIntoView({ behavior: "smooth" });
  });

  btnStart.addEventListener("click", function () {
    alert("Chào mừng bạn đến với Memory Story 💖");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const icons = document.querySelectorAll(".cuoi svg");
  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.stroke = "crimson";
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.stroke = "currentColor";
    });
  });
});
