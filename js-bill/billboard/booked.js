// booked.js
export const bookedBill = (value) => {
    if (value && (value.booking || value.booked)) {
        const bookingButtons = document.querySelectorAll("#booking");
        bookingButtons.forEach(button => {
            button.style.display = "none";
        });
    
        const bookedElements = document.querySelectorAll(".booked");
        bookedElements.forEach(bookedElement => {
            bookedElement.innerText = 'Booked';
            bookedElement.style.fontSize = '20px';
            bookedElement.style.fontStyle = 'italic';
        });

        const BgColor = document.querySelectorAll(".listBill");
        BgColor.forEach(color => {
            color.style.backgroundColor = "#FFC0CB";
        });
    }
}
