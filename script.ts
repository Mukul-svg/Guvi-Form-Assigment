document.getElementById('contactForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    // Collect form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
  
    // Simple validation
    if (!name || !email || !contact || !subject || !message) {
      (document.getElementById('status') as HTMLElement).innerText = "All fields are required!";
      return;
    }
  
    if (!validateEmail(email)) {
      (document.getElementById('status') as HTMLElement).innerText = "Invalid email format!";
      return;
    }
  
    try {
      // Submit form data to MockAPI
      const response = await fetch('https://67172b903fcb11b265d4b1c6.mockapi.io/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, contact, subject, message }),
      });
  
      if (response.ok) {
        alert("Form submitted successfully");
        (document.getElementById('status') as HTMLElement).innerText = "Form Submitted Successfully!";
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (error) {
      (document.getElementById('status') as HTMLElement).innerText = "Submission Failed!";
    }
  });
  
  // Email validation helper function
  function validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }  