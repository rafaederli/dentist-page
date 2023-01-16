function slider(sliderClass, sliderLeftClass, sliderRightClass) {
    let slider = document.querySelector(sliderClass)
    let sliderLeft = document.querySelector(sliderLeftClass)
    let sliderRight = document.querySelector(sliderRightClass)
    let screenWidth = window.screen.width

    screenWidth < 768 ? sliderWidth = -275 : sliderWidth = -568

    sliderLeft.addEventListener("click", () => {
        for (n = 1; n < slider.childElementCount; n++) {
            if (slider.style.transform === `translateX(${n * sliderWidth}px)`) {
                slider.style.transform = `translateX(${(n - 1) * sliderWidth}px)`
            }
        }
    })

    sliderRight.addEventListener("click", () => {
        if (slider.style.transform === "") {
            slider.style.transform = "translateX(0px)"
        }
        for (n = 0; n < (slider.childElementCount - 1); n++) {
            if (slider.style.transform === `translateX(${n * sliderWidth}px)`) {
                slider.style.transform = `translateX(${(n + 1) * sliderWidth}px)`
                break
            }
        }
    })
}