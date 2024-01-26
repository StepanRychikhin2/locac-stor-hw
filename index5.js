const contactForm = document.getElementById('contactForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const contactList = document.getElementById('contactList');

// Load contacts from localStorage
const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function renderContacts() {
    contactList.innerHTML = '';

    contacts.forEach((contact, index) => {
        const contactElement = document.createElement('div');
        contactElement.classList.add('contact');

        const nameLabel = document.createElement('label');
        nameLabel.textContent = `${contact.firstName} ${contact.lastName}`;

        const phoneLabel = document.createElement('label');
        phoneLabel.textContent = `Phone: ${contact.phone}`;

        const emailLabel = document.createElement('label');
        emailLabel.textContent = `Email: ${contact.email}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newFirstName = prompt('Enter a new first name:', contact.firstName);
            const newLastName = prompt('Enter a new last name:', contact.lastName);
            const newPhone = prompt('Enter a new phone number:', contact.phone);
            const newEmail = prompt('Enter a new email address:', contact.email);

            if (newFirstName !== null && newLastName !== null && newPhone !== null && newEmail !== null) {
                contacts[index] = {
                    firstName: newFirstName.trim(),
                    lastName: newLastName.trim(),
                    phone: newPhone.trim(),
                    email: newEmail.trim()
                };
                saveContacts();
                renderContacts();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            contacts.splice(index, 1);
            saveContacts();
            renderContacts();
        });

        contactElement.appendChild(nameLabel);
        contactElement.appendChild(phoneLabel);
        contactElement.appendChild(emailLabel);
        contactElement.appendChild(editButton);
        contactElement.appendChild(deleteButton);

        contactList.appendChild(contactElement);
    });
}

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const newContact = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim()
    };

    contacts.push(newContact);
    saveContacts();
    contactForm.reset();
    renderContacts();
});

renderContacts();