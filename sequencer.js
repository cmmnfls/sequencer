// Event delegation function
function handleDownloadClick(event) {
    if (event.target.id === 'downloadBtn') {
        downloadVcardAndShowForm();
    }
}

// Function to download vCard and show the form
function downloadVcardAndShowForm() {
    const link = document.createElement('a');
    link.download = 'contact.vcf';
    link.href = vcardUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showConfirmationMessages();
    setTimeout(() => {
        const downloadBtn = document.getElementById('downloadBtn');
        downloadBtn.textContent = 'Share Your Details With Me! 🔄';
        downloadBtn.addEventListener('click', handleShareDetailsClick);
    }, 2000); // Change the button text and behavior after 2 seconds
}

// Function to display confirmation messages and show the form
function showConfirmationMessages() {
    const prompt1 = document.createElement('p');
    prompt1.textContent = 'You just downloaded a digital business card with all my details.';
    prompt1.classList.add('confirmation-message');

    const prompt2 = document.createElement('p');
    prompt2.textContent = 'You may need to save the information by opening ';
    prompt2.classList.add('confirmation-message');

    const contentElement = document.getElementById('content');

    contentElement.appendChild(prompt1);
    prompt1.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
        contentElement.appendChild(prompt2);
        prompt2.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
            contentElement.removeChild(prompt1);
            contentElement.removeChild(prompt2);
            const formContainer = contentElement.querySelector('#formContainer');
            formContainer.style.display = 'block';
        }, 2000);
    }, 2000);
}

// Function to handle the click event for sharing details (cycle icon)
function handleShareDetailsClick() {
    // Add your logic for handling this event here
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Use event delegation for download button click
    document.body.addEventListener('click', handleDownloadClick);
});

// CSS styles for confirmation messages and other styles
const style = document.createElement('style');
style.textContent = `
    .confirmation-message {
        background: #d4edda;
        color: #155724;
        padding: 10px;
        border: 1px solid #c3e6cb;
        border-radius: 5px;
    }
`;
document.head.appendChild(style);
