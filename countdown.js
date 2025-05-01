function getNextDate(month, day) {
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(year, month - 1, day);

  if (target < now) {
    target.setFullYear(year + 1);
  }
  return target;
}

function formatCountdown(targetDate) {
  const now = new Date();
  const diffMs = targetDate - now;

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);

  return `${days}天 ${hours}小时 ${minutes}分钟`;
}

document.addEventListener("DOMContentLoaded", function () {
  const njwBirthday = getNextDate(7, 23);
  const ycBirthday = getNextDate(9, 16);
  const anniversary = getNextDate(7, 26);

  document.getElementById("birthday-njw").textContent =
    `距离倪佳炜生日还有 ${formatCountdown(njwBirthday)}`;
  document.getElementById("birthday-yc").textContent =
    `距离杨纯生日还有 ${formatCountdown(ycBirthday)}`;
  document.getElementById("anniversary").textContent =
    `距离纪念日还有 ${formatCountdown(anniversary)}`;
});
