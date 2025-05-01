document.addEventListener("DOMContentLoaded", function () {
  let username = prompt("您的用户名是:");
  if (!username) username = "匿名用户";

  const greeting = document.getElementById("greeting");
  greeting.textContent = `您好，${username}！很高兴您来访。`;
});
