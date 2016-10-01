(function () {
    'use strict';

    angular.module('playquizzy').constant('questionsData', {
    
        /*
         * Questions
         * result :  Classic - Romantic - Dramatic - Natural - Creative - Elegant
         */
        male      : [
            {
                text: 'Select the attributes that best describe your personality: ',
                responses:[
                    {
                        value:"Unconventional and Creative",
                        flags:[0, 0,1, 0, 5, 0]
                    },
                    {
                        value:"Romantic and Charismatic",
                        flags:[0, 5, 1, 0, 1 ,0 ]
                    },
                    {
                        value:"Friendly and Relaxed",
                        flags:[2, 0, 0, 5, 0, 0]
                    },
                    {
                        value:"Confidence and Self-assured",
                        flags:[5, 0, 5, 0, 0, 1]
                    },
                    {
                        value:"Perfectionist and Well-organised",
                        flags:[2, 0, 0, 0, 0, 5]
                    }
                ]
            },
            {
                text: 'How do you wear your hair?',
                //image:'assets/images/quizzImage.png',
                responses:[
                    {
                        value:"I have regular cuts but the only product I use is shampoo.",
                        flags:[2, 0, 2, 3, 1, 0]
                    },
                    {
                        value:"I don't really care about it. I get it cut whenever I feel like it.",
                        flags:[1, 0, 0, 3, 4, 0]
                    },
                    {
                        value:"I keep it clean and short. I use gel occasionally.",
                        flags:[1, 2, 3, 1, 2]
                    },
                    {
                        value:"I keep it up with the latest styles. I have an assortment of products.",
                        flags:[0, 2, 3, 0, 0, 4]
                    }
                ]
            },
            {
                text: 'What do you like to do on Saturdays?',
                responses:[
                    {
                        value:"Some kind of activity: tennis, golf, sailing.",
                        flags:[0, 1, 3, 2, 2, 3]
                    },
                    {
                        value:"Shop and go out.",
                        flags:[2, 2, 1, 0, 0, 2]
                    },
                    {
                        value:"Hang out at home, play some video games, surf the net.",
                        flags:[2, 1, 0, 3, 2, 0]
                    },
                    {
                        value:"Family time",
                        flags:[2, 2, 2, 3, 0, 1]
                    }
                ]
            },
            {
                text: 'What do you wear when it is cold outside?',
                responses:[
                    {
                        value:"An overcoat",
                        flags:[3, 2, 4, 0, 0, 4]
                    },
                    {
                        value:"A leather jacket",
                        flags:[1, 2, 3, 2, 1, 0]
                    },
                    {
                        value:"A sweatshirt",
                        flags:[0, 0,0, 3, 3, 0]
                    },
                    {
                        value:"Whatever I grab first",
                        flags:[0, 0, 0, 2, 3, 0]
                    }
                ]
            },
            {
                text: 'What do you find most attractive in a woman?',
                responses:[
                    {
                        value:"her sense of humor",
                        flags:[0, 2, 0, 3, 2, 0]
                    },
                    {
                        value:"her sense of style",
                        flags:[2, 3, 2, 0, 1, 1]
                    },
                    {
                        value:"how she gets along with the guys",
                        flags:[2, 3,2, 1, 0, 2]
                    },
                    {
                        value:"her elegance and class",
                        flags:[2, 3, 2, 0, 1, 4]
                    }
                ]
            },
            {
                text: 'What are your favorite colors?',
                responses:[
                    {
                        value:"Neutrals, black, whites",
                        flags:[4, 0, 2, 0, 0, 1]
                    },
                    {
                        value:"Colors that represent authority",
                        flags:[1, 1, 3, 0, 0, 2]
                    },
                    {
                        value:"Simplistic colors (Gray, blue ..)",
                        flags:[0, 0, 0, 4, 3, 0]
                    },
                    {
                        value:"Pastels and soft colors, not too bold",
                        flags:[0, 4, 0, 1, 2, 2]
                    },
                    {
                        value:"Mixing all kinds of colors ",
                        flags:[1, 1, 0, 3, 4, 1]
                    }
                ]
            },
            {
                text: 'If you could buy one of these accessories, which would it be?',
                responses:[
                    {
                        value:"A simple watch",
                        flags:[3, 2, 1, 3, 0, 1]
                    },
                    {
                        value:"Some kind of jewelry, a necklace or ring",
                        flags:[2, 3, 3, 0, 2, 4]
                    },
                    {
                        value:"Scarves",
                        flags:[0, 2, 1, 1, 3, 3]
                    },
                    {
                        value:"I don't like accesories",
                        flags:[0, 0, 0, 3, 1, 0]
                    }
                ]
            },
            {
                text: 'How much time do you spend deciding what to wear?',
                responses:[
                    {
                        value:"5min",
                        flags:[2, 0, 1, 4, 2, 0]
                    },
                    {
                        value:"10min",
                        flags:[3, 2, 2, 0, 3, 1]
                    },
                    {
                        value:"20min",
                        flags:[2, 3, 2, 0, 2, 2]
                    },
                    {
                        value:"30min ",
                        flags:[1, 2, 1, 0, 0, 4]
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
