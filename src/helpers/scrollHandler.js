export const lockWindowScrollInModal = (isActive) => {
    isActive ? document.body.classList.add("lock-scroll") : document.body.classList.remove("lock-scroll")
}