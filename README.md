# My-personal-portfolio
My portfolio is completely based on my skills and certifications and contacts
--------------------------------------------------------------------------------------------------HTML---------------------------------------------------------------------------------------------------------------
Your HTML portfolio starts with the <!DOCTYPE html> declaration, which tells the browser to render the page using HTML5 standards. The <html lang="en"> element wraps your entire document and specifies that the content is in English. Inside the <head> section, you define metadata for the page such as the character set (UTF-8) and viewport settings, which are important for mobile responsiveness. You also set the page title, which appears in the browser tab.

You link to an external CSS file called style.css to style your website and include a script.js file using the defer attribute to ensure the script runs only after the HTML content has fully loaded. You then include Bootstrap 4.5 via a CDN (Content Delivery Network), along with jQuery, Popper.js, and Bootstrap’s JavaScript, which enable interactive components like the navbar toggle on smaller screens.

In the body of your page, the navigation bar (<nav>) uses Bootstrap classes like navbar, navbar-expand-lg, and bg-info to create a responsive blue menu bar. The navbar contains links that, when clicked, scroll to the corresponding section of your portfolio using internal IDs (e.g., #profilCard, #skillCard).

The Profile section begins with a <section> tag and contains a Bootstrap card that introduces you with a heading, a profile image, and a short paragraph about your web development skills and interests. Following that is the Skills section, where you describe your technical competencies in tools like Git, JavaScript, OOP, and Agile methodologies. You also include links to your GitHub and Salesforce Trailhead profiles.

The Certifications section lists your Salesforce Administrator certification and an internship certificate, both downloadable through <a> tags. These links let users download PDF files when clicked.

The Contact section includes a form with fields for the user's name, email, and message. It uses Bootstrap classes for styling. The “Send Message” button is set to call a JavaScript function named sendEmail()—you would need to define this function in your script.js file for the button to actually send an email.

Finally, the footer at the bottom includes your name, the current year, and quick links to your GitHub, email (via a pre-filled Gmail link), and back to the contact section.
--------------------------------------------------------------------------------------------------CSS------------------------------------------------------------------------------------------------------------------
The body selector sets the default style for the whole webpage. It uses the Arial font (or sans-serif as a fallback), removes the default margin and padding around the edges, sets a comfortable line height for readability, applies a light gray background (#f4f4f4), and sets the default text color to a dark gray (#333).

The header styles the top section of the page with a dark background (#333), white text, 20 pixels of padding, and centers the content using text-align: center.

The nav a rule targets all anchor tags inside a navigation bar. It sets the link color to white, adds horizontal spacing (margin: 0 10px), and removes underlines by setting text-decoration: none.

The section rule is applied to all section blocks. It gives them internal padding of 30 pixels, a white background, spacing around them using margin: 20px, and rounded corners with a border-radius of 8 pixels.

The .profile class centers the content inside the profile section using text-align: center.

Similarly, the .skills class centers the skills content and adds vertical (40px) and horizontal (20px) padding for breathing space.

The img rule resizes images (likely your profile photo) to a fixed width of 150 pixels and makes them circular by applying a border-radius of 50%.

The .certifications class centers the text inside that section and fixes its height to 200 pixels while stretching it to the full width of the container (100%).

The .project class adds spacing below each project section using margin-bottom: 20px.

The .contact-section styles the contact area by setting a white background, a tall height of 130% of the viewport (130vh), and centers the contents both vertically and horizontally using display: flex with justify-content and align-items.

The .login-heading class centers the heading text and adds space below it (margin-bottom: 40px).

The .user-name class customizes form labels by coloring the text black, increasing the font size to 20px, setting the font to “Bree Serif” (you'll need to import it if not already), left-aligning the text, and pushing it to the left with margin-right: 330px.

The .icons class increases the size of any icon to 40 pixels.

The @media screen and (max-width: 768px) block defines a responsive design rule. When the screen size is 768 pixels wide or smaller (like on tablets or phones), it sets the .card-container width to 60% of the viewport and adds 20 pixels of padding for spacing.

The .card class adds a soft box shadow around cards for depth (box-shadow) and slightly rounded corners (border-radius: 12px), making them look like elevated cards.

Lastly, the footer styles the bottom section of the page by centering the text, adding 10 pixels of padding, and using a dark background with white text—consistent with the header.
-----------------------------------------------------------------------------------------------JAVASCRIPT------------------------------------------------------------------------------------------------------------
The script begins with window.addEventListener('load', function () {...});, which sets up a function to run only after the entire webpage (HTML, CSS, images, etc.) has fully loaded. This ensures that all elements are ready to be interacted with. Inside this function, console.log("Portfolio site loaded successfully!"); is used to print a message to the browser’s developer console. This is helpful for debugging, confirming that your site and scripts are loading correctly.

Next is the definition of the sendEmail() function, which will be triggered when the user clicks the "Send Message" button in your contact form.

Inside this function, you define an object called options. This object holds three key-value pairs that collect data from the form:

from_name: gets the value from the input field with the ID "name" using document.getElementById("name").value. This extracts the user's name.

email_id: gets the email entered by the user from the field with ID "email".

message: fetches the message typed into the textarea with ID "message".

These values are then passed to the emailjs.send() method. This is a function from the EmailJS service, which allows you to send emails directly from the client-side (i.e., from the browser without a backend server). The first argument, "service_25aeb2o", is your EmailJS service ID, and "template_jng982v" is your email template ID. These are required by EmailJS to identify which email template to use and how to send 
it.

After sending, the .then() part is a promise that runs when the email has been successfully sent. If it works, it shows an alert saying "success!" followed by the status code from the response (response.status), which can help confirm delivery.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                                    OVERALL HTML,CSS,BOOSTRAP,JAVASCRIPT | HOW IT WORKS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Your portfolio project demonstrates a strong foundation in front-end development by combining HTML, CSS, Bootstrap, and JavaScript effectively. You’ve structured the HTML semantically, dividing content into logical sections like Profile, Skills, Certifications, and Contact. Bootstrap's classes like navbar, card, m-4, p-4, and text-center have been properly used to enhance layout and responsiveness without writing excessive custom CSS. Your custom style.css file complements Bootstrap by setting up a clean color scheme, text alignment, spacing, and layout enhancements, including shadows, radius, and media queries for mobile devices. The contact-section is styled to center the form using Flexbox, which is a good practice for modern responsive design.

In the JavaScript, you correctly listen for the page load event and use the sendEmail() function to collect user input and send it using the EmailJS API. You organized the object clearly (from_name, email_id, message) and used a .then() promise to notify users of success. This shows you're comfortable with asynchronous operations and client-side form handling.

Visually, the site is simple and elegant, with functional navigation links that jump to anchored sections. All external resources (Bootstrap, jQuery, EmailJS) are linked properly, showing you're capable of integrating third-party tools. Minor improvements could include completing all tags, cleaning up unused classes (like bg-), validating inputs, and potentially adding form reset or loading indicators for better UX. Overall, this is a solid, beginner-to-intermediate portfolio project with clean layout, functional code, and modern development techniques.

✅ HTML:

✅ Semantic structure: good use of <section>, <nav>, <footer>.

✅ Bootstrap components like navbar and card used correctly.

⚠️ Some unclosed tags and extra nesting (e.g., <div class="skills"> inside .card).

✅ Clear and navigable layout using anchor tags (#id links).

✅ CSS:

✅ Clean layout with spacing (padding, margin, text-align, background).

✅ Media queries for responsiveness.

✅ Shadows and rounded corners enhance visual appeal.

⚠️ Missing font import for "bree serif" (can be added via Google Fonts).

⚠️ Unfinished class bg- (e.g., bg-info, bg-dark needed).

✅ Bootstrap:

✅ Proper use of grid and utility classes (margins, padding, color).

✅ Responsive navbar with collapse behavior.

✅ Uses cards for sectioning content.

✅ JavaScript:

✅ Uses window.addEventListener('load') properly for safe DOM interaction.

✅ Gathers input using getElementById efficiently.

✅ Sends email using EmailJS with success alert.

⚠️ No form validation or error handling on failure.

⚠️ Could benefit from form reset or loading feedback after submission.

Deployment:
Optionally, deploy on GitHub Pages and optimize SEO/meta tags etc.




















