const nameManager = {

    apiEndpoint: 'http://localhost:3000',

    async fetchAndInsertNames() {
        try {
            const response = await fetch(`${nameManager.apiEndpoint}/names`);

            if (!response.ok) {
                throw new Error(response);
            }
            const names = await response.json();

            Object.values(names).forEach((name) => {
                nameManager.insertNameInHtml(name);
            });
        } catch (error) {
            console.log(error);
        }
    },
    async insertNameInHtml(nameData) {
        const newDivElem = document.createElement('div');

        newDivElem.classList.add('member-item');
        newDivElem.textContent = nameData.name;

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

            // Reinitialize form after name is added
            event.currentTarget.reset();
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = nameManager;
