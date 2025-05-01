document.addEventListener("DOMContentLoaded", function () {
  let username = prompt("您的用户名是:");
  if (!username) username = "匿名用户";

  const greeting = document.getElementById("greeting");
  greeting.textContent = `您好，${username}！很高兴您来访。`;

  const logList = document.getElementById("visitor-log");

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes().toString().padStart(2, '0');

  const logEntry = `${year}/${month}/${date}-${hour}/${minute}: '${username}' 访问该网站`;

  const listItem = document.createElement("li");
  listItem.textContent = logEntry;
  logList.appendChild(listItem);
});
