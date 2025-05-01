document.addEventListener("DOMContentLoaded", function () {
  let username = prompt("您的用户名是:");
  if (!username) username = "匿名用户";

  const greeting = document.getElementById("greeting");
  greeting.textContent = `您好，${username}！很高兴您来访。`;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const logEntry = `${year}/${month}/${date}-(${hour})时/(${minute})分: '${username}' 访问该网站`;

  const storageKey = `visitorLog_${username}`;
  let logArray = JSON.parse(localStorage.getItem(storageKey)) || [];

  logArray.push(logEntry);

  localStorage.setItem(storageKey, JSON.stringify(logArray));

  const logList = document.getElementById("visitor-log");
  logArray.forEach(entry => {
    const listItem = document.createElement("li");
    listItem.textContent = entry;
    logList.appendChild(listItem);
  });
});
