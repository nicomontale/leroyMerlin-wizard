
export default [
    {
        question: 'Che tipo di attività devi svolgere?',
        category: 'Attività',
        answers: [
            {
                id: 100,
                title: 'Tenere in ordine il mio giardino',
                description: 'Falciatura ordinaria del prato, rifinitura aiuole',
                image: 'attivita_1.jpg'
            },
            {
                id: 101,
                title: 'Pulire e rinnovare il giardino',
                description: 'Presenza di arbusti, erbe alte e spesse, piante infestanti da rimuovere',
                image: 'attivita_2.jpg'
            }
        ]
    },
    {
        question: 'Sono presenti piante o ostacoli?',
        category: 'Ostacoli',
        answers: [
            {
                id: 102,
                title: 'Sono presenti aiuole e ostacoli di piccole dimensioni',
                description: null,
                image: 'ostacoli_1.jpg'
            },
            {
                id: 103,
                title: 'Sono presenti arbusti, alberi e ostacoli di grandi dimensioni',
                description: null,
                image: 'ostacoli_2.jpg'
            },
            {
                id: 104,
                title: 'No, non son presenti piante e ostacoli',
                description: null,
                image: 'ostacoli_3.jpg'
            }
        ]
    },
    {
        question: 'Ci sono pendenze o affossamenti?',
        category: 'Pendenza',
        answers: [
            {
                id: 105,
                title: 'Sì, il mio terreno è pendente o presenta degli affossamenti',
                description: null,
                image: 'pendenza_1.jpg'
            },
            {
                id: 106,
                title: 'No, ho un terreno piano',
                description: null,
                image: 'ostacoli_2.jpg'
            }
        ]
    },
    {
        question: 'Che dimensioni ha il tuo terreno?',
        category: 'Dimensioni',
        answers: [
            {
                id: 107,
                title: 'Fino a 100 m2',
                description: null,
                image: null
            },
            {
                id: 108,
                title: 'Da 100 a 500 m2',
                description: null,
                image: null
            },
            {
                id: 109,
                title: 'Da 500 a 1000 m2',
                description: null,
                image: null
            },
            {
                id: 110,
                title: 'Da 1000 a 2000 m2',
                description: null,
                image: null
            }
        ]
    }
];
