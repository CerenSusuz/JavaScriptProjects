var carInformation = [{
        Id: 1,
        year: 2010,
        color: 'red',
        serviceInfo: [{
                Id: 125245,
                date: '10/01/2010',
                km: '200',
                price: 1234
            },
            {
                Id: 3353,
                date: '11/02/2010',
                km: '5000',
                price: 258
            },
            {
                Id: 43543,
                date: '8/05/2010',
                km: '25000',
                price: 1025
            },
            {
                Id: 235434,
                date: '27/08/2010',
                km: '250',
                price: 15470
            }
        ]
    },
    {
        Id: 2,
        year: 2012,
        color: 'dark blue',
        serviceInfo: [{
                Id: 125245,
                date: '10/01/2010',
                km: '200',
                price: 1234
            },
            {
                Id: 3353,
                date: '11/02/2010',
                km: '5000',
                price: 258
            },
            {
                Id: 43543,
                date: '8/05/2010',
                km: '25000',
                price: 1025
            },
            {
                Id: 235434,
                date: '27/08/2010',
                km: '250',
                price: 15470
            }
        ]
    },
    {
        Id: 3,
        year: 2015,
        color: 'black',
        serviceInfo: [{
                Id: 125245,
                date: '10/01/2010',
                km: '200',
                price: 1234
            },
            {
                Id: 43543,
                date: '8/05/2010',
                km: '25000',
                price: 1025
            },
        ]
    },
    {
        Id: 4,
        year: 2020,
        color: 'white',
        serviceInfo: [{
                Id: 125245,
                date: '10/01/2010',
                km: '200',
                price: 1234
            },
            {
                Id: 3353,
                date: '11/02/2010',
                km: '5000',
                price: 258
            },
            {
                Id: 43543,
                date: '8/05/2010',
                km: '25000',
                price: 1025
            },
            {
                Id: 235434,
                date: '27/08/2010',
                km: '250',
                price: 15470
            },
            {
                Id: 235434,
                date: '27/10/2010',
                km: '250',
                price: 15470
            }
        ]
    },
];

console.log(carInformation[1]);
console.log(carInformation[2].serviceInfo);