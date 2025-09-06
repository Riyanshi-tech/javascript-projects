// function toggleAccordion(id) {
//   const allContents = document.querySelectorAll("[id^='content-']");
//   const allIcons = document.querySelectorAll("[id^='icon-']");

//   allContents.forEach((content) => {
//     if (content.id === `content-${id}`) {
//       // Toggle the clicked content
//       const icon = document.getElementById(`icon-${id}`);
//       if (content.classList.contains("hidden")) {
//         content.classList.remove("hidden");
//         icon.textContent = "-";
//       } else {
//         content.classList.add("hidden");
//         icon.textContent = "+";
//       }
//     } else {
//       // Hide all other contents
//       content.classList.add("hidden");
//       const otherId = content.id.split("-")[1];
//       document.getElementById(`icon-${otherId}`).textContent = "+";
//     }
//   });
// }
