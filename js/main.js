const menu = document.querySelector("#menu-btn");
const menuCon = document.querySelector("#menu");
menu.onclick = () =>{
  document.querySelector("#menu").classList.toggle("hidden");
  document.querySelector("#menu-btn").classList.toggle("open");
}

menuCon.onclick = () => {
  document.querySelector("#menu").classList.toggle("hidden");
  document.querySelector("#menu-btn").classList.toggle("open");
}
