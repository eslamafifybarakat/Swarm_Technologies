function openPopup() {
    var myModal = new bootstrap.Modal(document.getElementById('customPopup'), {
        keyboard: true
    });
    myModal.show();
}

// Function to close Bootstrap Modal
function closePopup() {
    var myModalEl = document.getElementById('customPopup');
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
}

// Add event listener to buttons dynamically
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".open-popup-btn");

    buttons.forEach(button => {
        button.addEventListener("click", openPopup);
    });
});