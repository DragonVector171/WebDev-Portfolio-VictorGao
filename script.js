// --- Modal Elements ---
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const contactCloseBtn = contactModal ? contactModal.querySelector('.modal-close') : null;

const contactForm = document.getElementById('contactForm');
const sentModal = document.getElementById('sentModal');
const sentCloseBtn = document.getElementById('sentCloseBtn');

// --- Open Contact Modal ---
if (contactBtn && contactModal) {
    contactBtn.addEventListener('click', () => {
        contactModal.style.display = 'flex';
        setTimeout(() => {
            const nameInput = document.getElementById('name');
            if (nameInput) nameInput.focus();
        }, 100);
    });
}

// --- Close Contact Modal ---
if (contactCloseBtn && contactModal) {
    contactCloseBtn.addEventListener('click', () => {
        contactModal.style.display = 'none';
        contactBtn && contactBtn.focus();
    });
}

// --- Open Sent Modal and Reset Contact Form ---
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Success: Hide Contact Modal, show Sent Modal
        contactForm.reset();
        contactModal.style.display = 'none';
        if (sentModal) {
            sentModal.style.display = 'flex';
            setTimeout(() => { sentCloseBtn && sentCloseBtn.focus(); }, 100);
        }
    });
}

// --- Close Sent Modal ---
if (sentCloseBtn && sentModal) {
    sentCloseBtn.addEventListener('click', () => {
        sentModal.style.display = 'none';
        contactBtn && contactBtn.focus();
    });
}

// --- Click Outside to Close Any Modal ---
window.addEventListener('click', function (e) {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
        contactBtn && contactBtn.focus();
    }
    if (e.target === sentModal) {
        sentModal.style.display = 'none';
        contactBtn && contactBtn.focus();
    }
});

// --- Utility: Email Validation ---
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
