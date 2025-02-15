// widget.js
(function () {
    const button = document.createElement('button');
    button.innerText = 'Pay with YourBrand';
    button.style.backgroundColor = '#007AFF';
    button.style.color = 'white';
    button.style.padding = '12px 20px';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';

    button.onclick = async function () {
        alert('Payment flow would start here.');
        // Example: Redirect to your payment page
        window.open('https://example.com/pay', '_blank');
    };

    const target = document.getElementById('nz-payment-button');
    if (target) target.appendChild(button);
})();
