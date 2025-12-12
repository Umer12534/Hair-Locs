function togglefilter() {
  const filterSidebar = document.getElementById("filter-sidebar");
  const overlay = document.getElementById("overlay");

  filterSidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}
