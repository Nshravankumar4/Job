function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var position = document.getElementById('position').value;
    var qualifications = document.getElementById('higherQualifications').value;
    var skills = document.getElementById('skills').value;
    var coverLetter = document.getElementById('coverLetter').value;

    // Create a URL with query parameters to pass data to the next page
    var url = 'submitted.html?' +
        'name=' + encodeURIComponent(name) +
        '&email=' + encodeURIComponent(email) +
        '&phone=' + encodeURIComponent(phone) +
        '&position=' + encodeURIComponent(position) +
        '&qualifications=' + encodeURIComponent(qualifications) +
        '&skills=' + encodeURIComponent(skills) +
        '&coverLetter=' + encodeURIComponent(coverLetter);

    // Redirect to the submitted data page
    window.location.href = url;
}
