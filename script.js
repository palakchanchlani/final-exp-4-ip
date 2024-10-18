// Real-time validation for mobile input
document.getElementById('mobile').addEventListener('input', function() {
    var mobile = document.getElementById("mobile").value;
    var mobilePattern = /^\d{9}$/; // 9-digit mobile number
    var mobileError = document.getElementById("mobileError");

    if (mobilePattern.test(mobile)) {
        mobileError.innerText = "✓ Valid mobile number";
        mobileError.style.color = "#28a745"; // Green for valid input
        document.getElementById("mobile").style.borderColor = "#28a745";
    } else {
        mobileError.innerText = "Mobile number must be exactly 9 digits.";
        mobileError.style.color = "#dc3545"; // Red for invalid input
        document.getElementById("mobile").style.borderColor = "#dc3545";
    }
});

// Validation function for form submission and generating receipt
function validateForm() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var mobile = document.getElementById("mobile").value;
    var color = document.getElementById("color").value;
    var quantity = document.getElementById("quantity").value;
    var mobilePattern = /^\d{9}$/;
    var messageError = document.getElementById("messageError");
    var mobileError = document.getElementById("mobileError");

    // error messages
    messageError.innerText = "";
    mobileError.innerText = "";

    // Validate name
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    // Validate message
    if (message.length > 50) {
        messageError.innerText = "Message cannot exceed 50 characters.";
        messageError.style.color = "#dc3545";
        return false;
    }

    // Validate mobile number (9 digits)
    if (!mobilePattern.test(mobile)) {
        mobileError.innerText = "Mobile number must be exactly 9 digits.";
        mobileError.style.color = "#dc3545";
        return false;
    }

    // If validation passes, generate the receipt
    generateReceipt(name, message, mobile, color, quantity);
    return false; // Prevent actual form submission
}

// Function to generate and display the receipt
function generateReceipt(name, message, mobile, color, quantity) {
    // Hide the form
    document.getElementById("tshirtOrderForm").style.display = "none";

    // Show the receipt with user data
    document.getElementById("receipt").style.display = "block";
    document.getElementById("receiptName").innerText = name;
    document.getElementById("receiptMessage").innerText = message;
    document.getElementById("receiptMobile").innerText = mobile;
    document.getElementById("receiptColor").innerText = color;
    document.getElementById("receiptQuantity").innerText = quantity;
}
