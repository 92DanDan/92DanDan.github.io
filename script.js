document.addEventListener("DOMContentLoaded", function () {
  let username = prompt("您的用户名是:");
  if (!username) username = "匿名用户";

  const greeting = document.getElementById("greeting");
  greeting.textContent = `您好，${username}！很高兴您来访。`;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();    // 无前导零
  const minute = now.getMinutes(); // 无前导零

  const logEntry = `${year}/${month}/${date}-(${hour})时/(${minute})分: '${username}' 访问该网站`;

  const logList = document.getElementById("visitor-log");
  const listItem = document.createElement("li");
  listItem.textContent = logEntry;
  logList.appendChild(listItem);
});
