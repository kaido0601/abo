const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const filterButtons = document.querySelectorAll(".filter-button");
const posts = document.querySelectorAll(".post-card");
const savedTheme = localStorage.getItem("abo-theme");

if (savedTheme === "light") {
  root.classList.add("light");
}

themeToggle?.addEventListener("click", () => {
  root.classList.toggle("light");
  localStorage.setItem("abo-theme", root.classList.contains("light") ? "light" : "dark");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    posts.forEach((post) => {
      const tags = post.dataset.tags?.split(" ") ?? [];
      post.classList.toggle("is-hidden", filter !== "all" && !tags.includes(filter));
    });
  });
});
