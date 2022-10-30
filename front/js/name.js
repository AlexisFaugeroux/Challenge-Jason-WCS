const nameManager = {

    apiEndpoint: 'http://localhost:8000',

    async fetchAndInsertNames() {
        try {
            // GET all existing names in database
            const response = await fetch(`${nameManager.apiEndpoint}/names`);
            // Handle error if one occurs when fetching the database
            if (!response.ok) {
                throw new Error(response);
            }

            // Convert response (promise) into JSON format
            const names = await response.json();

            // Insert each name from "names" array in HTML
            Object.values(names).forEach((name) => {
                nameManager.insertNameInHtml(name);
            });
        } catch (error) {
            console.log(error);
        }
    },
    async insertNameInHtml(nameData) {
        // Create new div
        const newDivElem = document.createElement('div');

        // Add class to the div and set texContent value to the name
        newDivElem.classList.add('member-item');
        newDivElem.textContent = nameData.name;

        // Select parent list "member-list" and insert our new div as a child
        document.querySelector('.member-list').appendChild(newDivElem);
    },
    async handleForm(event) {
        // Prevent default page refresh once form is submitted
        event.preventDefault();

        // Store input data from new-member form using FormData object
        const nameFormData = new FormData(event.currentTarget);

        // Send data to API
        try {
            const response = await fetch(`${nameManager.apiEndpoint}/names`, {
                method: 'POST',
                body: nameFormData,
            });

            if (!response.ok) {
                throw new Error(response);
            }

            const newName = await response.json();
            // Insert new name in DOM
            nameManager.insertNameInHtml(newName);
        } catch (error) {
            console.log(error);
        }

        // Reinitialize form after name is added
        const formElem = document.querySelector('.new-member-form');
        formElem.reset();
    },
};
