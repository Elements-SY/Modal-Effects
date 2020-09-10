var el = document.querySelector('.dialog-modal');
var colse = document.querySelector('.md-close');
var btn = document.querySelector('.btn');
var mark = document.querySelector('.mark_modal');

btn.onclick = function () {
  el.classList.add("md-show");
}

mark.onclick = function () {
  el.classList.remove("md-show")
}

colse.onclick = function () {
  el.classList.remove("md-show")
}
