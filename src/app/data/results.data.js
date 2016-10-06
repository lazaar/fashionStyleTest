(function () {
    'use strict';

    angular.module('playquizzy').constant('resultsData', {
    
        /*
         * result
         */
        male : [
            {
                description: "You have an attitude of maturity and confidence. You inspire others to trust and have confidence in their abilities. You avoid extremes in most things including your clothes and this leads you to prefer classic styled garments rather than anything highly fashionable. For business wear you desire clothes that project authority, maturity, respectability and credibility.",
                image:'assets/images/classicm.png',
                name:'Classic Clothing Personality',
                facebookName:'{{userName}} has a Classic Clothing Personality',
                facebookDescription:'{{userName}} has an attitude of maturity and confidence, he inspires others to trust and have confidence in their abilities. For business wear {{userName}} desires clothes that project authority, maturity, respectability and credibility.'
            }, 
            {
                description: 'Romantic men are charming and charismatic. Your overall image is one of relaxed gentleness and a caring, sensitive nature. You are adored by women for the genuine respect and affection they show for them. Romantic men feel most at home in clothes that are made from soft and luxurious fabrics and those that are not overly structured.',
                image:'assets/images/romanticm.png',
                name:'Romantic Clothing Personality',
                facebookName:'{{userName}} has a Romantic Clothing Personality',
                facebookDescription:'Romantic men are charming and charismatic. His overall image is one of relaxed gentleness and a caring, sensitive nature. {{userName}} is adored by women for the genuine respect and affection he show for them.'
            },
            {
                description: 'Dramatic men love attention and power. your manner is one of supreme confidence and you are always in control of yourself and your situation. Your clothes reflect an exaggerated strength as does your personal coloring which is most often dark (hair and eyes). Dramatic men are energetic and hence are most commonly found living in busy cities where they can live life in the fast lane.',
                image:'assets/images/dramaticm.png',
                name:'Dramatic Clothing Personality',
                facebookName:'{{userName}} has a Dramatic Clothing Personality',
                facebookDescription:'Dramatic men love attention and power. {{userName}}\'s manner is one of supreme confidence and he is always in control of himself and his situation. His clothes reflect an exaggerated strength as does his personal coloring which is most often dark (hair and eyes).'
            },
            {
                description: 'You are friendly, informal, unpretentious and optimistic. You hate being closed-in or restricted in any way and this extends from suits to your places of employment. you are generally not greatly concerned about their appearance and if given the chance would happily live in jeans and a T-shirt. Natural men feel best in clothes that are comfortable, relaxed in style and those that allow them plenty of unrestricted movement (sportswear).',
                image:'assets/images/naturalm.png',
                name:'Natural Clothing Personality',
                facebookName:'{{userName}} has a Natural Clothing Personality',
                facebookDescription:'{{userName}} is friendly, informal, unpretentious and optimistic. he hates being closed-in or restricted in any way and this extends from suits to his places of employment. Natural men feel best in clothes that are comfortable.'
            },
            {
                description: 'You have an incredible ability to put together completely unrelated garments, Coors, patterns and accessories and somehow make them work.  Creative men often seek employment in creative professions, such as acting, interior design, fashion design or the arts, It is young men who best carry off this mode of dress.',
                image:'assets/images/creativem.png',
                name:'Creative Clothing Personality',
                facebookName:'{{userName}} has a Creative Clothing Personality',
                facebookDescription:'{{userName}} has an incredible ability to put together completely unrelated garments, Coors, patterns and accessories and somehow make them work.'
            },
            {
                description: 'You are the epitome of refinement, maturity and old money. Every facet of your appearance is meticulously managed to command respect and admiration. Usually you are successful and financially secure. you can afford clothes that are of the highest quality, and the time it takes to maintain his appearance.',
                image:'assets/images/elegant.png',
                name:'Elegant Clothing Personality',
                facebookName:'{{userName}} has an Elegant Clothing Personality',
                facebookDescription:'{{userName}} is the epitome of refinement, maturity and old money. Every facet of his appearance is meticulously managed to command respect and admiration.'
            }
        ], 
        female : [
            {
                description: "You dress conservatively than other fashionistas and your wardrobe consists of a lot of neutrals such as black, gray, navy blue and beige. You prefer to keep your outfit simple, timeless and business-like. A tendency to match your clothes  is in your nature. You're not into loud, faddish trends. <br> <b>Your Celebrity Style Twins</b>: Chanel, Jackie O, Katie Holmes, Victoria Beckham, Lauren Conrad, Angelina Jolie, Michelle Obama ... ",
                image:'assets/images/classic.png',
                name:'Classic Clothing Personality',
                facebookName:'{{userName}} has a Classic Clothing Personality',
                facebookDescription:'{{userName}} dresses conservatively than other fashionistas and her wardrobe consists of a lot of neutrals such as black, gray, navy blue and beige.'
            }, 
            {
                description: 'You like to wear all kinds of trends - often all at the same time and you manage to look good! Your style is up-to-date without the constraints of traditional fashion. This fashion persona covers a variety of sub-categories, mainly because women who have this as their dominant clothing personality tend to have scattered closet choices.<br> <b>Your Celebrity Style Twins</b>: Jessica Simpson, Beyoncé, Miley Cyrus, Paris Hilton, Jennifer Hudson, Alicia Keys, Rihanna ... ',
                image:'assets/images/trendy.png',
                name:'Trendy Clothing Personality',
                facebookName:'{{userName}} has a Trendy Clothing Personality',
                facebookDescription:'{{userName}} like to wear all kinds of trends - often all at the same time and she manages to look good! her style is up-to-date without the constraints of traditional fashion.'
            },
            {
                description: "You can appear sensual and seductive; or sophisticated but striking. You like adding \"drama\" to your look. And you you tend to select bold clothes – either highly structured or body-hugging/skin revealing. You like statement accessories and often high contrast colors <br> <b>Your Celebrity Style Twins</b>: Monica Bellucci, Helena Christensen, Nigella Lawson, Milla Jovovich, Megan Fox, Kim Kardashian, Oprah Winfrey, Jennifer Lopez, Emma Stone ...",
                image:'assets/images/dramatic.png',
                name:'Dramatic Clothing Personality',
                facebookName:'{{userName}} has a Dramatic Clothing Personality',
                facebookDescription:'{{userName}} can appear sensual and seductive; or sophisticated but striking. She like adding \"drama\" to her look.'
            },
            {
                description: "You are the the easy-going girl next door who prefers comfortable and easy-to-maintain clothes. You stray away from fussy fashion. You like wearing your hair tousled. Your clothes are softly tailored, loose with a bit of structure. You like buying easy garments with very few details, and value comfort and functionality. Your makeup is natural and simple. <br> <b>Your Celebrity Style Twins</b>: Audrey Hepburn, Jennifer Aniston, Cameron Diaz, Sandra Bullock, Julia Roberts, Ellen Degeneres, Natalie Portman, Selena Gomez ...",
                image:'assets/images/natural.png',
                name:'Natural Clothing Personality',
                facebookName:'{{userName}} has a Natural Clothing Personality',
                facebookDescription:'{{userName}} is the  easy-going girl next door who prefers comfortable and easy-to-maintain clothes. She stray away from fussy fashion. '
            }, 
            {
                description: "You value femininity and may be a hopeless romantic. Ruffles, lace, pleats, those are just a few of the whimsy, feminine details that tend to catch your attention when you're in a store. You like to wear soft colors and often choose fabrics like chiffon and silk that drape graciously on your body <br> <b>Your Celebrity Style Twins</b>: Marilyn Monroe, Freida Pinto, Michelle Williams, Jennifer Love Hewitt, Naomi Watts, Taylor Swift, Emma Watson, Jennifer Lopez... ",
                image:'assets/images/romantic.png',
                name:'Romantic Clothing Personality',
                facebookName:'{{userName}} has a Romantic Clothing Personality',
                facebookDescription:'{{userName}} values femininity and may be a hopeless romantic. Ruffles, lace, pleats, those are just a few of the whimsy, feminine details that tend to catch her attention when she is in a store.'
            },
            {
                description: "Your style showcases creativity and your preference to unconventional fashion. The way you dress appear bold and innovative. You like to combine different styles in one, and often use unusual prints and color combinations. You love creating a strong fashion statement, You probably have an individualistic, creative and unconventional lifestyle. <br> <b>Your Celebrity Style Twins</b>: Nicole Richie, Solange, Tracee Ellis Moss, Vanessa Hudgens, Mischa Barton, Rachel Zoe,Katy Perry, Lady Gaga, Lana del Rey...",
                image:'assets/images/creative.png',
                name:'Creative Clothing Personality',
                facebookName:'{{userName}} has a Creative Clothing Personality',
                facebookDescription:'{{userName}}\'s style showcases creativity and her preference to unconventional fashion. The way she dress appear bold and innovative and she like to combine different styles in one.'
            }
        ]
        
    });
})();
