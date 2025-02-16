(function () {
    // Check if button already exists
    if (document.getElementById('yourbrand-payment-button')) return;

    // Create the button
    const button = document.createElement('button');
    button.id = 'yourbrand-payment-button';
    button.innerText = 'Pay with YourBrand';
    button.style.backgroundColor = '#007AFF';
    button.style.color = 'white';
    button.style.padding = '12px 20px';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';
    button.style.marginTop = '20px';

    // Add click event to open the payment modal
    button.onclick = () => {
        openPaymentModal();
    };

    // Append button to the target div
    const target = document.getElementById('nz-payment-button');
    if (target) {
        target.appendChild(button);
    }

    // Function to open the payment modal
    function openPaymentModal() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'payment-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '10000';

        // Create iframe for payment
        const iframe = document.createElement('iframe');
        iframe.src = 'https://yourusername.github.io/payment-widget/payment.html'; // Payment page
        iframe.style.width = '400px';
        iframe.style.height = '600px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '10px';
        iframe.allow = 'payment';

        // Add iframe to overlay
        overlay.appendChild(iframe);

        // Close overlay when clicked outside the iframe
        overlay.addEventListener('click', function (event) {
            if (event.target === overlay) {
                document.body.removeChild(overlay);
            }
        });

        // Append overlay to body
        document.body.appendChild(overlay);
    }

})();
