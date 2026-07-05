const CurrentYear = new Date().getFullYear();
document.getElementById("CurrentYear").textContent = CurrentYear

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;