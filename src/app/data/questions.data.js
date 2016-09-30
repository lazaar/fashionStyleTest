(function () {
    'use strict';

    angular.module('playquizzy').constant('questionsData', {
    
        /*
         * Questions
         */
        male      : [
            {
                text: ' male Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lorem scelerisque ?',
                image:'assets/images/quizzImage.png',
                responses:[
                    {
                        value:"Response 1",
                        flags:[0, 5,2]
                    },
                    {
                        value:"Response 2",
                        flags:[5, 0, 3]
                    },
                    {
                        value:"Response 3",
                        flags:[0, 0, 5]
                    },
                    {
                        value:"Response 4",
                        flags:[2, 3, 2]
                    }
                ]
            },
            {
                text: 'Question 2 yeeh?',
                image:'assets/images/quizzImage.png',
                responses:[
                    {
                        value:"Response 1",
                        flags:[0, 5,2]
                    },
                    {
                        value:"Response 2",
                        flags:[5, 5,2]
                    },
                    {
                        value:"Response 3",
                        flags:[1, 4,2]
                    },
                    {
                        value:"Response 4",
                        flags:[2, 3,2]
                    }
                ]
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lorem scelerisque ?',
                responses:[
                    {
                        value:"Response 1",
                        flags:[0, 5,2]
                    },
                    {
                        value:"Response 2",
                        flags:[5, 5,2]
                    },
                    {
                        value:"Response 3",
                        flags:[1, 4,2]
                    },
                    {
                        value:"Response 4",
                        flags:[2, 3,2]
                    }
                ]
            },
            {
                text: 'Question 2 yeeh?',
                responses:[
                    {
                        value:"Response 1",
                        flags:[0, 5,2]
                    },
                    {
                        value:"Response 2",
                        flags:[5, 5,2]
                    },
                    {
                        value:"Response 3",
                        flags:[1, 4,2]
                    },
                    {
                        value:"Response 4",
                        flags:[2, 3,2]
                    }
                ]
            }
        ],

        female      : [
            {
                text: 'Female Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lorem scelerisque ?',
                image:'assets/images/quizzImage.png',
                responses:[
                    {
                        value:"Response 1",
                        flags:[0, 5,2]
                    },
                    {
                        value:"Response 2",
                        flags:[5, 0, 3]
                    },
                    {
                        value:"Response 3",
                        flags:[0, 0, 5]
                    },
                    {
                        value:"Response 4",
                        flags:[2, 3, 2]
                    }
                ]
            },
            {
                text: 'Question 2 yeeh?',
                image:'assets/images/quizzImage.png',
                responses:[
                    {
                        value:"Response 1",
                        flags:[0, 5,2]
                    },
                    {
                        value:"Response 2",
                        flags:[5, 5,2]
                    },
                    {
                        value:"Response 3",
                        flags:[1, 4,2]
                    },
                    {
                        value:"Response 4",
                        flags:[2, 3,2]
                    }
                ]
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lorem scelerisque ?',
                responses:[
                    {
                        value:"Response 1",
                        flags:[0, 5,2]
                    },
                    {
                        value:"Response 2",
                        flags:[5, 5,2]
                    },
                    {
                        value:"Response 3",
                        flags:[1, 4,2]
                    },
                    {
                        value:"Response 4",
                        flags:[2, 3,2]
                    }
                ]
            },
            {
                text: 'Question 2 yeeh?',
                responses:[
                    {
                        value:"Response 1",
                        flags:[0, 5,2]
                    },
                    {
                        value:"Response 2",
                        flags:[5, 5,2]
                    },
                    {
                        value:"Response 3",
                        flags:[1, 4,2]
                    },
                    {
                        value:"Response 4",
                        flags:[2, 3,2]
                    }
                ]
            }
        ]
        
    });
})();
