class LanguageControl {
    constructor() {
        this.languages = ['en', 'es', 'fr', 'de']; // Example languages
        this.currentLanguage = this.getLanguageFromStorage();
    }

    getLanguageFromStorage() {
        return localStorage.getItem('appLanguage') || 'en'; // Default to English
    }

    setLanguage(language) {
        if (this.isValidLanguage(language)) {
            this.currentLanguage = language;
            localStorage.setItem('appLanguage', language);
        } else {
            console.error(`Language ${language} is not supported.`);
        }
    }

    isValidLanguage(language) {
        return this.languages.includes(language);
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    changeLanguage(language) {
        this.setLanguage(language);
        // Additional code to change the app's displayed language can be added here
    }
}

// Example usage:
const langControl = new LanguageControl();
langControl.changeLanguage('es'); // Change to Spanish
console.log(langControl.getCurrentLanguage()); // Output the current language