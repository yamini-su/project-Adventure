function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const closeAll = openDetails => {
  let list = document.querySelectorAll("details");
  for (var item of list)
  if (item != openDetails)
  item.removeAttribute("open");
};

