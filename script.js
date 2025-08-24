document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    
    const savedMode = localStorage.getItem('dark-mode');
    
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark');
        modeIcon.classList.add('dark');
    } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark');
        modeIcon.classList.remove('dark');
    }

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.documentElement.classList.toggle('dark');
        
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.classList.add('dark');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            modeIcon.classList.remove('dark');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});

/*
function funcGithub() {
    document.location='https://github.com/jvmelo0';
}
function funcLinkedin() {
    document.location='https://www.linkedin.com/in/jvofmelo/';
}
function funcInsta() {
    document.location='https://www.instagram.com/jvomelo/';
}
*/
