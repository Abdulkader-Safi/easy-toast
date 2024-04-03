function easyToast(message, position, type, duration = 3) {
  const toast = document.getElementById("toast");
  toast.className = toast.className + " show";

  if (message) toast.innerText = message;

  if (position !== "") toast.className = toast.className + ` ${position}`;
  if (type !== "") toast.className = toast.className + ` ${type}`;

  setTimeout(function () {
    toast.className = toast.className.replace(" show", "");
  }, duration * 1000);
}
