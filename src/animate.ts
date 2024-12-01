import anime from "animejs/lib/anime.es.js"

// text typing animation
document.querySelectorAll(".text").forEach((e, i) => {
    setTimeout(() => { e.classList.remove("hidden") }, i * 150 + 500)
})

const letterWidth = 23.4
const wrapper = document.getElementById("wrapper")

// text collapsing animation
var animation = anime({
    targets: ".text",
    translateX: { value: (_: Element, i: number) => letterWidth * (4.5 - i), duration: 500 },
    opacity: { value: 0, delay: 2800, duration: 200 },
    easing: "easeInBack",
    delay: 2500,
    complete: () => {
        // adding new letters
        wrapper!.innerHTML = ""

        "danielwzyang".split("").forEach(e => {
            const letter = document.createElement("h1")
            letter.className = "text opacity-0 hover:scale-110"
            letter.innerHTML = e == " " ? "\u00A0" : e
            wrapper!.appendChild(letter)
        })

        // text expanding animation
        animation = anime({
            targets: ".text",
            translateX: [(_: Element, i: number) => letterWidth * (5.5 - i), 0],
            opacity: { value: 1, duration: 100 },
            easing: "easeOutBack",
            duration: 500,
            complete: () => {
                // hide skip
                anime({
                    targets: "#skipWrapper",
                    opacity: 0,
                    duration: 2000
                })

                // reveal info
                const infoWrapper = document.getElementById("infoWrapper")
                infoWrapper!.classList.remove("hidden")
                infoWrapper!.classList.add("flex-col")

                // title moving animation
                anime({
                    targets: wrapper,
                    easing: "easeOutQuint",
                    height: "7rem"
                })
            }
        })
    }
})

const skip = document.getElementById("skip")
skip!.addEventListener("click", () => {
    skipAnimation()
})

onkeydown = (event) => { if (event.key == "x") skipAnimation() }

function skipAnimation() {
    animation.pause()
    wrapper!.innerHTML = ""
    wrapper!.style.height = "7rem"

    "danielwzyang".split("").forEach(e => {
        const letter = document.createElement("h1")
        letter.innerHTML = e == " " ? "\u00A0" : e
        wrapper!.appendChild(letter)
    })

    const infoWrapper = document.getElementById("infoWrapper")
    infoWrapper!.classList.remove("hidden")
    infoWrapper!.classList.add("flex-col")

    const skipWrapper = document.getElementById("skipWrapper")
    skipWrapper!.classList.add("opacity-0")
}