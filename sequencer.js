    // Event delegation function
    function handleDownloadClick(event) {
      if (event.target.id === 'downloadBtn') {
        downloadVcardAndShowForm();
      }
    }

    // Function to download vCard and show the form
    function downloadVcardAndShowForm() {
      // Create a link element
      const link = document.createElement('a');

      // Set the download attribute with a filename
      link.download = 'contact.vcf';

      // Set the href attribute to the URL of the hosted .vcf file
      link.href = vcardUrl; // Use the vcardUrl variable defined in the HTML header

      // Append the link to the body
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);

      // Display confirmation messages and show the form
      showConfirmationMessages();
    }

    // Function to display confirmation messages and show the form
function showConfirmationMessages() {
  const prompt1 = document.createElement('p');
  prompt1.textContent = 'A digital version of my business card was just saved to your device.';
  prompt1.classList.add('confirmation-message');

  const prompt2 = document.createElement('p');
  prompt2.textContent = 'Simply navigate to it, open it, and save it in your contacts.';
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

    // Add event listener for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      // Use event delegation for download button click
      document.body.addEventListener('click', handleDownloadClick);
    });

    // CSS styles for confirmation messages
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
