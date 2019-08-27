"use strict"

$(document).ready(function(){

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
    

    //set up map
    mapboxgl.accessToken = 'pk.eyJ1IjoidG9tbWNhbmRyZXciLCJhIjoiY2p6NG51Z3duMDhwazNwbXFjZHBnenI5cCJ9.5ccAP5PC8FsCa0GjCJDm0Q'
    let map = new mapboxgl.Map({
        container: document.getElementsByClassName("map-div")[0], 
        style: 'mapbox://styles/tommcandrew/cjzsp0iqa07wj1cp8kcfe7xks', 
        center: [-0.2062788,51.5069086],
        zoom: 10, 
        logoPosition: 'bottom-right'
    });
    map.addControl(new mapboxgl.NavigationControl());


    //declare variables
    let allZones = [1, 2, 3, 4, 5, 6]
    let allRatings = [1, 2, 3, 4]
    let allExams = ["IELTS", "TOEFL", "PET", "CAE", "FCE", "CPE", "GESE", "ISE", "TOEIC", "OET", ]
    let filterObj
    let shownSchools = []

    //set custom classes
    $(".zone-checkbox").attr("data-filter", "zones")
    $(".rating-checkbox").attr("data-filter", "rating")
    $(".exam-checkbox").attr("data-filter", "exams")
    $(".other-checkbox").attr("data-filter", "other")

    resetFilters()


    //EVENT LISTENERS

    //for menu show/hide button
    $('.hide-menu').on('click', function(e){
        e.preventDefault()
        $(".sidebar-wrapper").fadeToggle()
    })
    
    $('.show-menu').on('click', function(e){
        e.preventDefault()
        $(".sidebar-wrapper").fadeToggle()
    })

    
    //for zone checkboxes
    
    $(".checkbox").each(function() {
        $(this).on("click", updateFilters)
    })

    //for reset button

    $(".reset-button").on("click", resetFilters)


    //FUNCTIONS

    function showOnMap(){
        let currentMarkers = $(".mapboxgl-marker")
        for (let marker of currentMarkers) {
                marker.parentNode.removeChild(marker)
        }
        shownSchools.forEach(function(school){
        let popup = new mapboxgl.Popup()
        .setHTML(`<h3>${school.name}</h3>` + `<img src=${school.img}>` + `<p>Google rating: ${school.rating}</p>` + 
        `<a href="${school.website}" target="_blank">Website</a>`)
        .setMaxWidth("170px")
    
        let marker = new mapboxgl.Marker()
        .setLngLat(school.coordinates)
        .setPopup(popup)
        .addTo(map);
    })
    }

    function resetFilters() {
        filterObj = {
            zones: [...allZones],
            rating: [...allRatings],
            exams: [...allExams],
            accessible: [true, false],
            young: [true, false],
            accommodation: [true, false],
            private: [true, false],
            business: [true, false],
            accredited: [true, false],
            online: [true, false],
            small: [true, false]
        }
        $(".checkbox").prop("checked", false)
        updateShownSchools()
    }

    function updateFilters(e) {
        let targetId
        if (e.target.classList.contains("zone-checkbox") || e.target.classList.contains("rating-checkbox")) {
            targetId = Number(e.target.id[e.target.id.length - 1])
        } else {
            targetId = e.target.id
        }
        e.target.classList.toggle("selected")

        //WHEN FILTER IS SELECTED
        if (e.target.classList.contains("selected")) {
            //code for zones
            if (e.target.classList.contains("zone-checkbox")) {
                if (filterObj.zones.length == 6) {
                    filterObj.zones = []
                }
                filterObj.zones.push(targetId)
            }
            // code for rating
            if (e.target.classList.contains("rating-checkbox")) {
                    filterObj.rating = []
                    $(".rating-checkbox").removeClass("selected")
                    filterObj.rating.push(targetId)
            }
            //code for exams
            if (e.target.classList.contains("exam-checkbox")) {
                if (filterObj.exams.length == 10) {
                    filterObj.exams = []
                }
                filterObj.exams.push(targetId)
            }
            //code for other
            if (e.target.classList.contains("other-checkbox")) {
                if (filterObj[targetId].length == 2) {
                    filterObj[targetId] = []
                }
                filterObj[targetId].push(true)
            }

            //WHEN FILTER IS DESELECTED
        } else {
            //code for zones, ratings and exams
            let type = e.target.dataset.filter
            if (!e.target.classList.contains("other-checkbox")) {
                let indexToRemove = filterObj[type].indexOf(targetId)
                filterObj[type].splice(indexToRemove, 1)
            }
            //code for other
            else {
                let property = e.target.id 
                filterObj[`${property}`] = [true, false]
        }

        if (filterObj.zones.length == 0) {
            filterObj.zones = [...allZones]
        }
        if (filterObj.rating.length == 0) {
            filterObj.rating = [...allRatings]
        }
        if (filterObj.exams.length == 0) {
            filterObj.exams = [...allExams]
        }
    }
    updateShownSchools()
}

    function updateShownSchools() {
        shownSchools = []
        let lowestRating = Math.min(...filterObj.rating)
        for (let i = 0; i < schools.length; i++) {
            //the some function checks if a condition is true for any item in an array
            let includesExam = schools[i].exams.some(exam=> filterObj.exams.includes(exam))
            let smallClasses = schools[i].max < 7
            if (filterObj.zones.includes(schools[i].zone) && schools[i].rating >= lowestRating && includesExam == true && filterObj.accessible.includes(schools[i].accessible) && filterObj.young.includes(schools[i].young) && filterObj.accommodation.includes(schools[i].accommodation) && filterObj.private.includes(schools[i].private) && filterObj.business.includes(schools[i].business) && filterObj.accredited.includes(schools[i].accredited) && filterObj.online.includes(schools[i].online) && filterObj.small.includes(smallClasses)) {
                shownSchools.push(schools[i])
            }
        }
        showOnMap()
    }
})