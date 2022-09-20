// this is the unit model, we consider it as our database since we have almost nothing to register inside the database
// we could use the mongodb database to store the data and mongoose to manage the data
const Units = [{
    'unit': {
        'title': 'cm',
        conversions: [
            {
                title: 'm',
                type: 'divide',
                by: 100
            },
            {
                title: 'km',
                type: 'divide',
                by: 100000
            },
            {
                title: 'dm',
                type: 'divide',
                by: 10
            }
        ]

    }
},
{
    'unit': {
        'title': 'dm',
        conversions: [
            {
                title: 'm',
                type: 'divide',
                by: 10
            },
            {
                title: 'km',
                type: 'divide',
                by: 10000
            },
            {
                title: 'cm',
                type: 'multiply',
                by: 10
            }
        ]
    }
},
{
    'unit': {
        'title': 'm',
        conversions: [
            {
                title: 'dm',
                type: 'multiply',
                by: 10
            },
            {
                title: 'km',
                type: 'divide',
                by: 1000
            },
            {
                title: 'cm',
                type: 'multiply',
                by: 100
            }
        ]
    }
},
{
    'unit': {
        'title': 'km',
        conversions: [
            {
                title: 'dm',
                type: 'multiply',
                by: 10000
            },
            {
                title: 'm',
                type: 'multiply',
                by: 1000
            },
            {
                title: 'cm',
                type: 'multiply',
                by: 100000
            }
        ]
    }
}
]

export default Units