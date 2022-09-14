const fabricChangeBtn = document.getElementById('fabtic-change-btn');
const cornerChangeBtn = document.getElementById('corner-change-btn');
const legsChangeBtn = document.getElementById('legs-change-btn');


const listHook = document.getElementById('list-container');
const cornerHook = document.getElementById('corner-container');
const legsHook = document.getElementById('leg-container');


const colorText = document.getElementById('color-name-text');
const selectText = document.getElementById('select-leg-text');
const cornerTypeText = document.getElementById('corner-type-text');


const submitBtn = document.getElementById('submit');


let order = {
    fabric: null,
    leg: null,
    corner: null
}
// fabric type

fabricChangeBtn.addEventListener("click", ((e) => {
    toggleContainer(listHook);

}))

function updateFabric(fabric) {
    toggleContainer(listHook);
    colorText.innerText = fabric;
    order = {...order, fabric}
}

// legs color

legsChangeBtn.addEventListener("click", ((e) => {
    toggleContainer(legsHook);
}))


function updateLeg(leg) {
    toggleContainer(legsHook);
    selectText.innerText = leg;
    order = {...order, leg}
}

// corner

cornerChangeBtn.addEventListener("click", ((e) => {
    toggleContainer(cornerHook);
}))

function updateCorner(corner) {
    toggleContainer(cornerHook);
    cornerTypeText.innerText = corner;
    order = {...order, corner};

}

function toggleContainer(container) {
    container.classList.toggle('show');
}

//submit order

submitBtn.addEventListener("click", function (e) {
    if (order.leg && order.fabric && order.corner) {
        console.log(order);
        alert('Twoje zamowienie zostało wysłane');
        setTimeout(() => {
            window.location.reload();
        }, 5000)
    }
})


// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("myImg");
const modalImg = document.getElementById("myImg");
const captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
