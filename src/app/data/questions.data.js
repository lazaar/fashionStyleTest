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
                                isImage: false,
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
                 isImage: false,
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
                                isImage: false,
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
                                isImage: false,
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
                                isImage: false,
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
                                isImage: false,
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
                                isImage: false,
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
                                isImage: false,
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
         /*
         * Questions
         * result :  Classic - Trendy - Dramatic - Natural - Romantic - Creative
         */

      female      : [
            {
                text: 'Select the attributes that best describe your personality: ',
                isImage: false,
                responses:[
                    {
                        value:"Well-groomed & sophisticated",
                        flags:[0, 0,1, 0, 5, 0]
                    },
                    {
                        value:"Independent & self-assured",
                        flags:[0, 5, 1, 0, 1 ,0 ]
                    },
                    {
                        value:"Friendly and Relaxed",
                        flags:[2, 0, 0, 5, 0, 0]
                    },
                    {
                        value:"Hopeless romantic and sensitive",
                        flags:[5, 0, 5, 0, 0, 1]
                    },
                    {
                        value:"Unconventional and creative",
                        flags:[2, 0, 0, 0, 0, 5]
                    }
                ]
            },
            {
                text: 'Your dream outfit would be similar to:',
                isImage: true,
                responses:[
                    {
                        value:"assets/images/responseImage/question2a.png",
                        text:"Breton top, chino pants, skinny belt with matching leather tote bag, pearl necklace and neutral sandals",
                        flags:[5, 2, 0, 0, 1, 0]
                    },
                    {
                        value:"assets/images/responseImage/question2b.png",
                         text:"Romper, cropped leather jacket, chunky platform sandals, trendy earrings, studded clutch purse",
                        flags:[0, 5, 2, 0, 0, 1]
                    },
                    {
                        value:"assets/images/responseImage/question2c.png",
                        text:"Jumpsuit, statement necklace, sleek patent clutch purse, Louboutin open toe pumps",

                        flags:[3, 0, 5, 1, 2,0,1]
                    },
                    {
                        value:"assets/images/responseImage/question2d.png",
                         text:"Casual white jeans with a chambray shirt, simple pendant necklace, rope bracelet, messenger bag and a pair of leather sandals",

                        flags:[1, 0, 0, 5, 2,3,1]
                    },
                    {
                        value:"assets/images/responseImage/question2e.png",
                        text:"Pretty dress, vintage-inspired purse, peep toe sandals, simple stud earrings, charm chain bracelet",

                        flags:[0, 0, 0, 1, 5,0,3]
                    },
                    {
                        value:"assets/images/responseImage/question2f.png",
                        text:"Print dress, bright-colored blazer, quirky sunglasses, fun platform sandals, layers of necklace and an exotic snake print clutch purse",
                        flags:[0, 2, 0, 0, 2, 5]
                    }
                ]
            },
            {
                text: 'Which famous celebrity fashionistas would you say you look up to in terms of style?',
                 isImage: false,

                    responses:[
                    {
                        value:"Victoria Beckham, Anne Hathaway ",
                        flags:[5, 1, 0, 2, 0, 4]
                    },
                    {
                        value:"Beyonce, Rihanna",
                        flags:[0, 5, 2, 0, 4, 0]
                    },
                    {
                        value:"Jennifer Aniston, Cameron Diaz",
                        flags:[1, 0, 5, 4, 2, 0]
                    },
                    {
                        value:"Taylor Swift, Jennifer Lopez",
                        flags:[0, 1, 2, 5, 2,0]
                    }
                ]
            },
            {
                text: 'What are your favorite colors?',
              isImage: false,
                responses:[
                    {
                        value:"Neutrals, black, whites",
                        flags:[5, 0, 2, 0, 0, 1]
                    },
                    {
                        value:"Colors that represent authority",
                        flags:[1, 5, 3, 0, 0, 2]
                    },
                    {
                        value:"Simplistic colors (Gray, blue ..)",
                        flags:[0, 0, 5, 4, 3, 0]
                    },
                    {
                        value:"Pastels and soft colors, not too bold",
                        flags:[4, 0, 0, 5, 2, 2]
                    },
                    {
                        value:"Mixing all kinds of colors ",
                        flags:[1, 1, 0, 3, 5, 3]
                    }
                ]
            }
            ,
           
            {
                   text: "What do you like to do on Saturdays?",
                    isImage: false,
                    responses:[
                    {
                        value:"Some kind of activity: tennis, golf, sailing.",
                        flags:[1,2, 4, 0, 2, 1]
                    },
                    {
                        value:"Shop and go out.",
                        flags:[2, 5, 1, 4, 3, 2]
                    },
                    {
                        value:"Hang out at home, surf the net.",
                        flags:[3, 2, 1, 4, 5, 1]
                    },
                    {
                        value:"Family time",
                        flags:[2, 2, 2, 3, 1, 1]
                    }
                ]
            },
            {
                text: 'What type of shoes catches your eye?',
                isImage: true,
                responses:[
                    {
                        value:"assets/images/responseImage/question3a.png",
                        text:"Simple pumps, ballerina flats, riding boots. ",
                        flags:[5, 2, 3, 0, 1, 1]
                    },
                    {
                        value:"assets/images/responseImage/question3b.png",
                        text:"Platform sandals and booties, usually anything in the Newest Arrivals section.",
                        flags:[1, 5, 2, 1, 0, 2]
                    },
                    {
                        value:"assets/images/responseImage/question3c.png",
                        text:"Designer pumps, stilettos, peep toe high heels, sleek knee boots and ankle booties",
                        flags:[2, 5, 2, 3, 1, 2]
                    },
                    {
                        value:"assets/images/responseImage/question3d.png",
                        text:"Comfort is very important to me. ",
                        flags:[4, 4, 5, 1, 2, 3]
                    },
                    {
                        value:"assets/images/responseImage/question3e.png",
                        text:"Vintage-inspired footwear such as oxfords, court pumps and cute print flats",
                        flags:[1, 2, 5, 4, 3]
                    },
                    {
                        value:"assets/images/responseImage/question3f.png",
                        text:"Anything colorful, bold and unique.",
                        flags:[3, 4, 3, 0, 1, 5]
                    }
                ]
            },
            {
                text: 'How much time do you spend deciding what to wear?',
                isImage: false,
                responses:[
                    {
                        value:"10min",
                        flags:[2, 0, 1, 4, 2, 0]
                    },
                    {
                        value:"15min",
                        flags:[3, 2, 2, 0, 3, 1]
                    },
                    {
                        value:"25min",
                        flags:[2, 3, 2, 0, 2, 2]
                    },
                    {
                        value:"35min ",
                        flags:[1, 2, 1, 0, 0, 4]
                    }
                ]
            }
        
        ]
        
    });
})();
