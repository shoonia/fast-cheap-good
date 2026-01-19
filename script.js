const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const result = document.getElementById('result');

const messages = {
    'cheap-fast': 'Fast + Cheap = Lower Quality 📉',
    'fast-good': 'Fast + Good = Higher Cost 💰',
    'cheap-good': 'Cheap + Good = Takes More Time ⏰'
};

function updateCheckboxes() {
    const checked = Array.from(checkboxes).filter(cb => cb.checked);
    
    if (checked.length >= 2) {
        checkboxes.forEach(cb => {
            if (!cb.checked) {
                cb.disabled = true;
            }
        });
        
        const selected = checked.map(cb => cb.value).sort().join('-');
        const message = messages[selected] || 'You can only pick two!';
        result.textContent = message;
        result.classList.add('active');
    } else {
        checkboxes.forEach(cb => {
            cb.disabled = false;
        });
        result.textContent = '';
        result.classList.remove('active');
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCheckboxes);
});

updateCheckboxes();
