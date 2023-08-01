
     {/* Replace with your EmailJS User ID and Template ID */}
    const EMAILJS_USER_ID = 'service_j712uhk';
    const EMAILJS_TEMPLATE_ID = 'template_19xv3tw';

    {/* Initialize EmailJS */}
    emailjs.init(EMAILJS_USER_ID);

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            message: formData.get('message'),
        };
        sendEmail(data);
    });

    // Function to send email
    function sendEmail(data) {
        emailjs.send('default_service', EMAILJS_TEMPLATE_ID, data)
            .then(function (response) {
                alert('Message sent successfully!');
            }, function (error) {
                alert('Oops, something went wrong. Please try again later.');
                console.log('Error:', error);
            });
    }
