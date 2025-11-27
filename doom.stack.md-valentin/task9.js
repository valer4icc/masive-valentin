 const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                tabContents.forEach(tab => {
                    tab.classList.remove('active');
                });
                tabButtons.forEach(btn => {
                    btn.classList.remove('active-btn');
                });
                button.classList.add('active-btn');
                const targetTab = document.getElementById(targetId);
                if (targetTab) {
                    targetTab.classList.add('active');
                }
            });
        });