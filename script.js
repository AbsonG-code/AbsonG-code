const bookRideBtn = document.querySelector(".book-now");
const bookRideForm = document.getElementById("book-ride-form");

bookRideBtn.addEventListener("click", () => {
    bookRideForm.style.display = bookRideForm.style.display === "none" ? "block" : "none";
});

const quickRideBtn = document.getElementById('quick-ride-btn');
const scannerContainer = document.getElementById('scanner-container');

const html5QrCode = new Html5Qrcode("gh-pagesscanner-container");

quickRideBtn.addEventListener('click', () => {
    html5QrCode.start(
        { facingMode: "environment" }, // Use rear camera
        {
            fps: 10,    // Optional, frame per second for qr code scanning
            qrbox: 250  // Optional, if you want bounded box UI
        },
        qrCodeMessage => {
            console.log(`QR Code detected: ${qrCodeMessage}`);
            // Handle the QR code message here
            html5QrCode.stop().then(ignore => {
                // QR Code scanning is stopped.
            }).catch(err => {
                // Stop failed, handle it.
            });
        },
        errorMessage => {
            // parse error, ignore it.
        })
    .catch(err => {
        // Start failed, handle it.
    });
});
const scanner = new Html5QrcodeScanner(
  "scanner-container",
  { fps: 10, qrbox: 250 }
);

