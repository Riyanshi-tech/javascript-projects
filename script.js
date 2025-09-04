function toggleAccordion(id) {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.textContent = "-";
  } else {
    content.classList.add("hidden");
    icon.textContent = "+";
  }
}
