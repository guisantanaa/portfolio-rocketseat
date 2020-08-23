
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        
        const urlID = card.getAttribute("id")

        window.location.href = `/courses/${urlID}`
    })
}

