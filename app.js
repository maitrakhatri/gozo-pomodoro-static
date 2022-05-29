const settings = document.querySelector("#settings-section")
const openSettings = document.querySelector("#opensettings")
const saveSettings = document.querySelector("#save")

openSettings.addEventListener("click", () => {
    settings.classList.remove("hide")
})

saveSettings.addEventListener("click", () => {
    settings.classList.add("hide")
})