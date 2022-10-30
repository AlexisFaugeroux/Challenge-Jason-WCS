const app = {
    init() {
        // Fetch the API to get all existing names in database
        nameManager.fetchAndInsertNames();
        // Add an event listener to the new member form on submit
        document.querySelector('.new-member-form').addEventListener('submit', nameManager.handleForm);
    },
};

// Wait until the DOM is loaded before app.init() is called
document.addEventListener('DOMContentLoaded', app.init);
