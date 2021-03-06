    const schools = [
        {
            name: "One to One English",
            coordinates: [-0.1233875, 51.5136338],
            img: "https://findyourenglishschool.com/wp-content/uploads/2019/04/School-exterior.jpg",
            rating: 4.1,
            website: "http://www.onetooneenglish.co.uk/about-us.php/",
            zone: 1,
            exams: ["IELTS", "TOEFL", "PET", "CAE", "FCE", "CPE", "GESE", "ISE", "TOEIC", "OET"],
            max: 6,
            accessible: false,
            young: true,
            accommodation: true,
            private: true,
            business: true,
            accredited: true,
            online: true
        },

        {
            name: "Stafford House",
            coordinates: [-0.1219474, 51.5182328],
            img: "https://www.knowledgezone.ae/wp-content/uploads/2018/09/stafford-house-London_-e1537434772598.jpg",
            rating: 4.1,
            website: "https://www.staffordhouse.com/",
            zone: 1,
            exams: ["IELTS", "TOEFL", "CAE", "FCE", "CPE"],
            max: 15,
            accessible: false,
            young: false,
            accommodation: true,
            private: true,
            business: true,
            accredited: true,
            online: false
        },

        {
            name: "International House",
            coordinates: [-0.1230795, 51.5160924],
            img: "https://learnenglishin.com/wp-content/uploads/international-house-london-image2-1024x683.jpeg",
            rating: 4.1,
            website: "https://www.ihlondon.com/",
            zone: 1,
            exams: ["IELTS","CAE", "FCE", "CPE", "OET", "BULATS"],
            max: 14,
            accessible: true,
            young: true,
            accommodation: true,
            private: true,
            business: false,
            accredited: true,
            online: false
        },

        {
            name: "Brittania School of English",
            coordinates: [-0.019868, 51.5285739],
            img: "http://bse.ac/wp-content/uploads/2016/05/IMG_2119.jpg",
            rating: 4.8,
            website: "https://www.bse.ac/",
            zone: 2,
            exams: ["IELTS", "FCE"],
            max: 16,
            accessible: false,
            young: false,
            accommodation: true,
            private: false,
            business: false,
            accredited: true,
            online: false
        },

        {
            name: "Wimbledon School of English",
            coordinates: [-0.2110982, 51.4203904], 
            img: "http://studybritishenglish.co.uk/wp-content/uploads/Wimbledon-School-2.jpg",
            rating: 4.5,
            website: "https://www.wimbledon-school.ac.uk/",
            zone: 3,
            exams: ["IELTS", "CAE", "FCE", "CPE", "OET"],
            max: 14,
            accessible: false,
            young: false,
            accommodation: true,
            private: false,
            business: true,
            accredited: true,
            online: true
        },

        {
            name: "British Study Centres - London Central",
            coordinates: [-0.1234121, 51.5195787], 
            img: "https://cdn6.eslcompany.com/agency/assets/data/category/header/3770.jpg?preset=header-320-1x",
            rating: 3.7,
            website: "https://www.british-study.com/adults/english-language-schools/london/",
            zone: 1,
            exams: ["IELTS", "TOEFL", "CAE", "FCE", "CPE", "TOEIC", "OET"],
            max: 14,
            accessible: false,
            young: false,
            accommodation: true,
            private: true,
            business: true,
            accredited: true,
            online: false
        },

        
        {
            name: "British Study Centres - London Hampstead",
            coordinates: [-0.195555, 51.5567335], 
            img: "http://fusionsigns.com/wp-content/uploads/2017/12/BSC-BLOG.jpg",
            rating: 4.2,
            website: "https://www.british-study.com/adults/english-language-schools/hampstead/",
            zone: 2,
            exams: ["IELTS", "TOEFL", "CAE", "FCE", "CPE", "TOEIC", "OET"],
            max: 14,
            accessible: false,
            young: false,
            accommodation: true,
            private: true,
            business: true,
            accredited: true,
            online: false
        },
        
        {
            name: "Eurocentres - London Eltham",
            coordinates: [0.0510074, 51.4445407], 
            img: "https://www.languagecourse.net/cours-de-langues/images/schools/top-images-small/eurocentres-eltham_1461656710960.jpg",
            rating: 3.8,
            website: "https://www.eurocentres.com/language-school-london-greenwich-eltham",
            zone: 4,
            exams: ["IELTS", "CAE", "FCE", "PET", "TOEIC", "TOEFL"],
            max: 14,
            accessible: true,
            young: false,
            accommodation: true,
            private: true,
            business: true,
            accredited: true,
            online: true
        },

        {
            name: "Eurocentres - London Central",
            coordinates: [-0.144107, 51.4914283], 
            img: "https://www.languagecoursesuk.co.uk/wp-content/uploads/2016/07/London-Victoria-Eurocentres-1.jpg",
            rating: 3.9,
            website: "https://www.eurocentres.com/language-school-london-greenwich-eltham",
            zone: 1,
            exams: ["IELTS", "CAE", "FCE", "PET", "TOEIC", "TOEFL"],
            max: 14,
            accessible: true,
            young: false,
            accommodation: true,
            private: true,
            business: true,
            accredited: true,
            online: true
        },

        {
            name: "West London English School",
            coordinates: [-0.3086841, 51.5123481], 
            img: "https://www.london-ryugaku.com/wp2017/wp-content/uploads/westlondonenglish-school1.jpg",
            rating: 3.9,
            website: "https://www.wles.net/welcome-west-london-english-school/",
            zone: 3,
            exams: ["IELTS", "CAE", "FCE", "TOEIC", "TOEFL", "GESE", "OET"],
            max: 14,
            accessible: true,
            young: true,
            accommodation: true,
            private: true,
            business: true,
            accredited: true,
            online: true
        },

        {
            name: "The London School of English - Westcroft Square",
            coordinates: [-0.2113398, 51.5051254], 
            img: "https://marshallservices.it/wp-content/uploads/2017/11/study-learn-English-language-course-abroad-in-London-at-London-School-of-English-Westcroft-Square-school-11.jpg",
            rating: 4.7,
            website: "https://www.londonschool.com/locations/uk/westcroft-square/",
            zone: 2,
            exams: ["IELTS", "CAE", "FCE"],
            max: 14,
            accessible: true,
            young: false,
            accommodation: true,
            private: true,
            business: true,
            accredited: true,
            online: false
        },

        {
            name: "Flexilearning Centre Ltd",
            coordinates: [0.0718261, 51.5574177], 
            img: "http://ilfordofficespace.co.uk/wp-content/uploads/2018/02/MG_5566.jpg",
            rating: 4.5,
            website: "https://www.flexilearningcentre.co.uk/",
            zone: 4,
            exams: ["GESE", "ISE"],
            max: 6,
            accessible: false,
            young: false,
            accommodation: false,
            private: false,
            business: false,
            accredited: true,
            online: false
        },

        {
            name: "The English Studio",
            coordinates: [-0.1198144, 51.5178337], 
            img: "http://www.goartha.com/media/catalog/product/cache/8/thumbnail/9df78eab33525d08d6e5fb8d27136e95/f/a/fachada-2-english-studio-london-inglaterra_6.jpg",
            rating: 4.3,
            website: "https://englishstudio.com/",
            zone: 1,
            exams: ["IELTS", "CAE"],
            max: 22,
            accessible: false,
            young: true,
            accommodation: true,
            private: false,
            business: true,
            accredited: true,
            online: false
        }
    ]
    
    export default schools