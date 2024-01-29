import {type YeFormConfig} from "@yoe/form";

export const example: YeFormConfig = {
    rows: [
        {
            fields: [
                {
                    name: "checkbox",
                    type: "checkbox",
                    label: {
                        de: "Checkbox",
                        fr: "Checkbox",
                        it: "Checkbox",
                        en: "Checkbox",
                    },
                    required: true,
                    layout: { spanMobile: 3, spanDesktop: 3 },
                },
            ],
        },
        {
            fields: [
                {
                    name: "dob",
                    type: "date",
                    label: {
                        de: "Geburtsdatum",
                        fr: "Date de naissance",
                        it: "Data di nascita",
                        en: "Date of birth",
                    },
                    required: true,
                    layout: { spanMobile: 3, spanDesktop: 3 },
                    tooltip: {
                        de: "Geburtsdatum",
                        fr: "Date de naissance",
                        it: "Data di nascita",
                        en: "Date of birth",
                    },
                },
            ],
        },
        {
            fields: [
                {
                    name: "title",
                    type: "select",
                    label: {
                        de: "Anrede",
                        fr: "Civilité",
                        it: "Civiltà",
                        en: "Title",
                    },
                    required: true,
                    options: [
                        {
                            name: {
                                de: "Herr",
                                fr: "Monsieur",
                                it: "Signore",
                                en: "Mr",
                            },
                            value: "mr",
                        },
                        {
                            name: {
                                de: "Frau",
                                fr: "Madame",
                                it: "Signora",
                                en: "Mrs",
                            },
                            value: "mrs",
                        },
                        {
                            name: {
                                de: "Divers",
                                fr: "Divers",
                                it: "Diverso",
                                en: "Other",
                            },
                            value: "other",
                        },
                    ],
                    layout: {
                        spanMobile: 3,
                        spanDesktop: 3,
                    },
                },
            ],
        },
        {
            fields: [
                {
                    name: "theme",
                    type: "radio",
                    label: {
                        de: "Thema",
                        fr: "Thème",
                        it: "Tema",
                        en: "Theme",
                    },
                    required: true,
                    options: [
                        {
                            name: {
                                de: "Hell",
                                fr: "Clair",
                                it: "Chiaro",
                                en: "Light",
                            },
                            value: "light",
                        },
                        {
                            name: {
                                de: "Dunkel",
                                fr: "Sombre",
                                it: "Scuro",
                                en: "Dark",
                            },
                            value: "dark",
                        },
                        {
                            name: {
                                de: "System",
                                fr: "Système",
                                it: "Sistema",
                                en: "System",
                            },
                            value: "system",
                        },
                    ],
                    layout: {
                        spanMobile: 3,
                        spanDesktop: 6,
                    },
                },
            ],
        },
        {
            fields: [
                {
                    name: "firstName",
                    type: "text",
                    label: {
                        de: "Vorname",
                        fr: "Prénom",
                        it: "Nome",
                        en: "First name",
                    },
                    required: true,
                    validators: {
                        min: 1,
                    },
                    placeholder: {
                        de: "Vorname",
                        fr: "Prénom",
                        it: "Nome",
                        en: "First name",
                    },

                    layout: {
                        spanMobile: 3,
                        spanDesktop: 3,
                    },
                },
                {
                    name: "lastname",
                    type: "text",
                    label: {
                        de: "Nachname",
                        fr: "Nom",
                        it: "Cognome",
                        en: "Last name",
                    },
                    required: true,
                    validators: {
                        min: 1,
                    },
                    placeholder: {
                        de: "Nachname",
                        fr: "Nom",
                        it: "Cognome",
                        en: "Last name",
                    },
                    layout: {
                        spanMobile: 3,
                        spanDesktop: 3,
                    },
                },
            ],
        },
        {
            fields: [
                {
                    name: "address",
                    type: "text",
                    label: {
                        de: "Adresse",
                        fr: "Adresse",
                        it: "Indirizzo",
                        en: "Address",
                    },
                    required: true,
                    placeholder: {
                        de: "Adresse",
                        fr: "Adresse",
                        it: "Indirizzo",
                        en: "Address",
                    },
                    layout: {
                        spanMobile: 3,
                        spanDesktop: 4,
                    },
                },
                {
                    name: "number",
                    type: "number",
                    label: { de: "Nummer", fr: "Numéro", it: "Numero", en: "Number" },
                    required: false,
                    placeholder: {
                        de: "Nummer",
                        fr: "Numéro",
                        it: "Numero",
                        en: "Number",
                    },
                    layout: {
                        spanMobile: 3,
                        spanDesktop: 2,
                    },
                },
            ],
        },
        {
            fields: [
                {
                    name: "email",
                    type: "email",
                    label: {
                        de: "Email",
                        fr: "Email",
                        it: "Email",
                        en: "Email",
                    },
                    placeholder: {
                        de: "email@test.com",
                        fr: "email@test.com",
                        it: "email@test.com",
                        en: "email@test.com",
                    },
                    required: true,
                    layout: {
                        spanMobile: 3,
                        spanDesktop: 6,
                    },
                },
            ],
        },
    ],
    restEndpoint: "someotherendpoint.com",
    buttonText: { de: "Senden", fr: "Envoyer", it: "Invia", en: "Send" },
    emailConfig: {
        sender: "Peter",
        internalRecipient: "test@youengineering.ch",
        internalSubject: "Neuer User",
        internalTemplate:
            "{{firstname}} {{lastname}} hat sich angemeldet. {{title}}",
        confirmationRecipientField: "email",
        confirmationSubject: {
            de: "Anmeldung {{firstname}} {{lastname}}",
            en: "Registration {{firstname}} {{lastname}}",
            fr: "Inscription {{firstname}} {{lastname}}",
            it: "Registrazione {{firstname}} {{lastname}}",
        },
        confirmationTemplate: {
            de: "Hallo {{firstname}} {{lastname}}. Danke, dass du dich angemeldet hast.",
            en: "Hello {{firstname}} {{lastname}}. Thank you for registering.",
            fr: "Bonjour {{firstname}} {{lastname}}. Merci de vous être inscrit.",
            it: "Ciao {{firstname}} {{lastname}}. Grazie per esserti registrato.",
        },
    },
    submissionMethod: "email",
};