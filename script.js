// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// // Add task on Enter key press
// taskInput.addEventListener("keydown", function (e) {
//   if (e.key === "Enter" && taskInput.value.trim() !== "") {
//     addTask(taskInput.value.trim());
//     taskInput.value = "";
//   }
// });

// function addTask(taskText) {
//   const li = document.createElement("li");

//   const span = document.createElement("span");
//   span.textContent = taskText;
//   span.addEventListener("click", function () {
//     span.classList.toggle("completed");
//   });

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.addEventListener("click", function () {
//     taskList.removeChild(li);
//   });

//   li.appendChild(span);
//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);
// }
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherDiv = document.getElementById("weather");
  const apiKey = "97e98a1d29c282c95d374ab257ef95fc";



  if (!city) {
    weatherDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );


    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const { name, main, weather } = data;

    weatherDiv.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${main.temp} °C</p>
      <p><strong>Condition:</strong> ${weather[0].main}</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
    `;
  } catch (error) {
    weatherDiv.innerHTML = `❌ ${error.message}`;
  }
}
