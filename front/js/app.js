const nameManager = require('./name.js');

const app = {
    init() {
        nameManager.fetchAndInsertNames();
        document.querySelector('.new-member-form').addEventListener('submit', nameManager.handleForm);
    },
};

document.addEventListener('DOMContentLoaded', app.init);
