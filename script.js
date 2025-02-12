function generatePassword(length = 15) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function generatePasswords() {
    const password1Element = document.getElementById('password1');
    const password2Element = document.getElementById('password2');
    
    // Clear the elements first
    password1Element.innerHTML = '';
    password2Element.innerHTML = '';
    
    // Generate passwords
    const pass1 = generatePassword();
    const pass2 = generatePassword();
    
    // Add the passwords and hints
    password1Element.innerHTML = `
        <span class="password-text">${pass1}</span>
        <span class="copy-hint">📋</span>
    `;
    password2Element.innerHTML = `
        <span class="password-text">${pass2}</span>
        <span class="copy-hint">📋</span>
    `;
}

function copyToClipboard(text, element) {
    // Update to get just the password text
    const passwordText = element.querySelector('.password-text').textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        element.classList.add('copied');
        setTimeout(() => {
            element.classList.remove('copied');
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Add click handlers for the password elements
document.getElementById('password1').addEventListener('click', function() {
    if (this.textContent) {
        copyToClipboard(this.textContent, this);
    }
});

document.getElementById('password2').addEventListener('click', function() {
    if (this.textContent) {
        copyToClipboard(this.textContent, this);
    }
});

document.getElementById('generateBtn').addEventListener('click', generatePasswords); 