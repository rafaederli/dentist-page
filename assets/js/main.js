certifications.map((element) => {
    let content = document.createElement("div")
    content.classList.add("certifications__content")

    let awardIcon = document.createElement("i")
    awardIcon.classList.add("ri-award-line")
    awardIcon.classList.add("certifications__content--icon")
    content.appendChild(awardIcon)

    let title = document.createElement("h4")
    title.classList.add("certifications__content--title")
    title.innerHTML = `${element.degree} `
    let emphasis = document.createElement("em")
    emphasis.innerHTML = element.sensu
    title.appendChild(emphasis)
    title.innerHTML += ` em ${element.course} - ${element.institution}`
    content.appendChild(title)

    let searchIcon = document.createElement("i")
    searchIcon.classList.add("ri-search-2-line")
    searchIcon.classList.add("certifications__icon")
    content.appendChild(searchIcon)

    let image = document.createElement("div")
    image.classList.add("certifications__content--image")
    let imageSource = document.createElement("img")
    imageSource.setAttribute("src", element.image)
    imageSource.setAttribute("alt", element.alt)
    image.appendChild(imageSource)
    content.appendChild(image)

    let certifications = document.querySelector(".certifications")
    certifications.appendChild(content)

    content.addEventListener("click", () => {
        content.classList.contains("show-diploma") ?
            content.classList.remove("show-diploma") :
            content.classList.add("show-diploma")
    })
})

toggles.map((element) => {
    let toggle = document.createElement("div")
    toggle.classList.add("treatment__toggle")

    let toggleTitle = document.createElement("div")
    toggleTitle.classList.add("treatment__toggle--title")

    let toggleTitleIcon = document.createElement("i")
    toggleTitleIcon.classList.add("ri-arrow-right-line")

    let toggleTitleH4 = document.createElement("h4")
    toggleTitleH4.innerHTML = element.title

    toggleTitle.appendChild(toggleTitleIcon)
    toggleTitle.appendChild(toggleTitleH4)

    let toggleDescription = document.createElement("div")
    toggleDescription.classList.add("treatment__toggle--description")

    let toggleDescriptionImages = document.createElement("div")
    toggleDescriptionImages.classList.add("treatment__toggle--description--images")

    let contentBefore = document.createElement("div")

    let imageBefore = document.createElement("img")
    imageBefore.setAttribute("src", element.image1)
    imageBefore.setAttribute("alt", element.alt1)

    let labelBefore = document.createElement("p")
    labelBefore.innerHTML = element.label1

    contentBefore.appendChild(imageBefore)
    contentBefore.appendChild(labelBefore)

    let contentAfter = document.createElement("div")

    let imageAfter = document.createElement("img")
    imageAfter.setAttribute("src", element.image2)
    imageAfter.setAttribute("alt", element.alt2)

    let labelAfter = document.createElement("p")
    labelAfter.innerHTML = element.label2

    contentAfter.appendChild(imageAfter)
    contentAfter.appendChild(labelAfter)

    toggleDescriptionImages.appendChild(contentBefore)
    toggleDescriptionImages.appendChild(contentAfter)

    let toggleDescriptionTexts = document.createElement("div")
    toggleDescriptionTexts.classList.add("treatment__toggle--description--texts")

    let toggleDescriptionTextsH4 = document.createElement("h4")
    toggleDescriptionTextsH4.innerHTML = element.subtitle

    let toggleDescriptionTextsDescription = document.createElement("p")
    toggleDescriptionTextsDescription.innerHTML = element.description

    toggleDescriptionTexts.appendChild(toggleDescriptionTextsH4)
    toggleDescriptionTexts.appendChild(toggleDescriptionTextsDescription)

    toggleDescription.appendChild(toggleDescriptionImages)
    toggleDescription.appendChild(toggleDescriptionTexts)

    toggle.appendChild(toggleTitle)
    toggle.appendChild(toggleDescription)

    let treatments = document.getElementById("treatments")
    treatments.appendChild(toggle)

    toggle.addEventListener('click', () => {
        toggle.classList.contains("show__description") ?
            toggle.classList.remove("show__description") :
            toggle.classList.add("show__description")
    })
})

testimonials.map((element) => {
    let testimony = document.createElement("div")
    testimony.classList.add("slide")
    testimony.classList.add("testimony")

    let image = document.createElement("img")
    image.setAttribute("src", element.image)
    image.setAttribute("alt", element.alt)
    image.classList.add("testimony__image")
    testimony.appendChild(image)

    let texts = document.createElement("div")
    texts.classList.add("testimony__texts")
    let title = document.createElement("h4")
    title.innerHTML = element.name
    texts.appendChild(title)

    let treatment = document.createElement("p")
    let strong = document.createElement("strong")
    strong.innerHTML = element.treatment
    treatment.appendChild(strong)
    texts.appendChild(treatment)

    let description = document.createElement("p")
    description.innerHTML = element.testimony
    texts.appendChild(description)

    testimony.appendChild(texts)

    let slider = document.querySelector(".testimonials__slider")
    slider.appendChild(testimony)
})
slider(".testimonials__slider", ".testimonials__left", ".testimonials__right")

place.map((element) => {
    let image = document.createElement("div")
    image.classList.add("slide")
    image.classList.add("place__image")

    let imageContent = document.createElement("img")
    imageContent.setAttribute("src", element)
    imageContent.setAttribute("alt", "image")

    image.appendChild(imageContent)

    let slider = document.querySelector(".place__slider")
    slider.appendChild(image)
})
slider(".place__slider", ".place__left", ".place__right")