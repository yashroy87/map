var config = {
    style: 'mapbox://styles/yashroy87/cltofkcq601l901qp5gie7rtc',
    accessToken: 'pk.eyJ1IjoieWFzaHJveTg3IiwiYSI6ImNsdGc0aTE3ZTB4NTIyanA3Y3YyNTdhaWkifQ.SosAoN90Q1u6jYpAYWbccQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Yale bubble',
    subtitle: 'Over 300 years, Yale has systematically expanded to now occupy much of downtown New Haven, and parts of the surronding neighborhoods. Come along and see how Yale has gradually destroyed the neighborhoods around it.',
    byline: 'By Yash Roy',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter 1',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to New Haven',
            image: '9squareplan.jpeg',
            description: 'Founded in 1638, New Haven predates Yale by close to six decades. Reverend John Davenport, the founder of New Haven, dreamed that the city would host a university, which at the time was a place where future clergymen were taught. His dream came true in 1716 when a New Haven merchant named Jeremiah Dummer convinced the city to give Yale a land grant, moving the university to New Haven.',
            location: {
                center: [-72.928, 41.318],
                zoom: 13,
                pitch: 60,
                bearing: -15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
        },
        {
            id: 'chapter 2',
            alignment: 'right',
            hidden: false,
            title: 'Yale from 1716-1840s',
            image: 'oldcampus.jpg',
            description: 'After moving to New Haven in 1716, Yale was fairly contained on the old campus. Students slept, studied, and ate on this original quad. In the 1800s, Theodore Dwight Woolsey turned the two rows of buildings originally built for Yale into an enclosed courtyard. Those buildings still stand today. But as the university grew, so did its needs. In the post-Civil War years, Yale began its expansion outwards.',
            location: {
                center: [-72.92862, 41.30894],
                zoom: 15,
                pitch: 45,
                bearing: -60,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubble1716',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubble1716',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter one point five',
            alignment: 'right',
            hidden: false,
            title: 'Full bubble',
            image: 'yale.jpeg',
            description: 'Before we examine the expansion over time, let us examine the full bubble of Yale today. The slide before showed where Yale started, and this part of the story shows Yale today. Throughout the rest of this story, I will walk you through the different expansions of Yale, trying to be as chronological as possible.',
            location: {
                center: [-72.928, 41.318],
                zoom: 13,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubbleFull',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubbleFull',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter 3',
            alignment: 'left',
            hidden: false,
            title: 'The first expansion of Yale',
            image: 'cross.jpeg',
            description: 'In the early 1900s, Yale spent three decades building outwards into what we now call the center of campus, Cross Campus, and the Residential College system. Before, this area was a residential part of town and its business hub. We still have some of that hub today with Broadway, but before, the street that is now Alexander Walk, as well as other parts of Cross Campus and the residential college system, were parts of non-university New Haven.',
            location: {
                center: [-72.92840, 41.31067],
                zoom: 14.6,
                pitch: 60,
                bearing: -60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubble1920',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubble1920',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter four',
            alignment: 'left',
            hidden: false,
            title: 'Hillhouse Avenue, the Divinty School and Science Hill: The expansion of Yale into East Rock and Prospect Hill',
            image: 'hillhouse.jpeg',
            description: 'This is Hillhouse Avenue, Science Hill and the Divinity School. Hillhouse was originally the place where the professors of Yale lived. This expansion is into what we now call the East Rock and Prospect Hill communities. Both of these communities today house much of the middle and upper-middle-class earners of New Haven. At the time of its construction, Mark Twain called Hillhouse Avenue the "most beautiful street in America." Today, the part of Hillhouse Avenue, closer to the central Yale campus, houses our social science, physics, engineering, and computer science buildings. The Divinity School, the farthest edge of the bubble, is the second part of the expansion into the East Rock and Prospect Hill communities. Built in the 1930s, the Divinity School moved from Old Campus to the far edge of New Haven. Science Hill, the middle portion of this bubble, was built in the 1930s alongside the Div School, solidifying the footprint of Yale in this part of New Haven.',
            location: {
                center: [-72.92300, 41.31490],
                zoom: 14.9,
                pitch: 60,
                bearing: 18.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubbleHill',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubbleHill',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter five',
            alignment: 'right',
            hidden: false,
            title: 'Using roads to create a fence around downtown New Haven',
            image: 'URI.jpg',
            description: 'After the expansion into Dixwell with Payne Whitney and East Rock/Prospect Hill with Hillhouse Avenue, the Div School, and Science Hill, New Haven took its curtain call to reshape the footprint of New Haven with the Urban Renewal Initiative. Spearheaded in the two decades after World War 2, New Haven built roads that created a boundary between downtown New Haven and, by extension, Yale, with the rest of New Haven, including Fair Haven, Long Wharf, and the Hill. All three of these neighborhoods were poorer and had far more people of color compared to downtown New Haven and, by extension, Yale. This kind of road construction to create fences between different groups and races in urban centers was a hallmark of urban planning in the 1950s-1970s. In the last five years, New Haven has begun to deconstruct these roads and highways to reconnect Fair Haven, the Hill and Long Wharf with downtown New Haven. Yale did not have a direct hand in the URI, but it did support Mayor Richard Lee in his efforts since it created a wall around much of downtown Yale.',
            location: {
                center: [-72.91700, 41.30587],
                zoom: 13.7,
                pitch: 30,
                bearing: -40,  
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubbleRoad',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubbleRoad',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter six',
            alignment: 'right',
            hidden: false,
            title: 'Expansion into Dixwell with Payne Whitney, Stiles and Morse',
            image: 'dixwell.jpeg',
            description: 'Yale began expanding into Dixwell in the 1930s by building the Payne Whitney Gymnasium. Yale built Morse and Stiles over a former New Haven school in the 1960s. This boundary has recently expanded from Lake Place to Bristol Street. Over four decades, Yale bought up and destroyed a school and a community center, which were close to 200 homes. To make up for it, they built the Q House, a community center in Dixwell, but they forgot to ask people in Dixwell what they wanted, which led to no one using it until New Haveners took over. Dixwell, through the 1960s, was one of the Black capitals of New Haven, with cultural and musical spots like the Monterey Club, a jazz club where almost every Jazz great of the 20th century performed. In the words of the current Mayor Justin Elicker and Dixwell Alder Jeanette Morrison, the combination of Yale eating up Dixwell land and political cronies of the university in City Hall helped destroy much of Dixwell, making it a blighted community that the city has only started to rebuild in the last decade.',
            location: {
                center: [-72.93025, 41.31237],
                zoom: 14.95,
                pitch: 60,
                bearing: -15,   
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubbleMorse',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubbleMorse',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter seven',
            alignment: 'left',
            hidden: false,
            title: 'Yale Medical School and Yale New Haven Hospital: the expansion of Yale into the Hill',
            image: 'med.jpg',
            description: 'In the 1960s, Yale moved its medical school and built the Yale New Haven Hospital on the Hill. Over five years, Yale purchased hundreds of homes, and New Haven used eminent domain to procure the remaining houses that homeowners would not sell. Put together, the Hill Alder estimates that the Medical School and Yale New Haven Hospital stand on the site of close to 500 homes. One of the most famous examples of how this expansion affected Yale is the Amistad Park on the corner of the Medical School campus. Yale was building this part of campus during the 1960s, a time of protest, agitation, and protest both on and off campus. After the assassination of Martin Luther King Jr., the Black Panthers marched through the Hill, leading to riots. New Haven then purchased much of the property around where the Black Panthers marched, and they also closed Lee High School, which had been opened only a few years prior. A few years after using eminent domain to procure these parcels of property, Yale purchased it and built the School of Nursing, and they also created a park, the Amistad Park, to create a barrier between campus and the Hill.',
            location: {
                center: [-72.93414, 41.30296],
                zoom: 14.6,
                pitch: 60,
                bearing: -60,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubbleYNHH',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubbleYNHH',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter eight',
            alignment: 'right',
            hidden: false,
            title: 'School of Management: the 21st century expansion of Yale into East Rock',
            image: 'SOM.jpg',
            description: 'In the early 2010s, Yale moved its School of Management from the corner of Hillhouse Avenue closest to Science Hill to about a block away on Whitney Avenue. With the construction of the SOM, this part of Whitney Avenue, Yale continued its expansion into the East Rock neighborhood, building upon its expansion from the 20th century with Hillhouse Ave, Science Hill, and the Divinity School. Graduate and undergraduate students now occupy much of the housing in this bubble, and there are some favorites like Olmos, the best bagel place in the whole world :), September in Bangkok, a famous date spot, and the Bradley Street Co-Op. This push is part of the 21st-century expansion of Yale. Interestingly enough, compared to the expansion of Yale on the other side of campus(YNHH and the Med School), this side of the bubble is far more porous, probably because East Rock is a far more affluent part of town compared to the Hill and Dwight. There is a much less porous border alongside the right part of the bubble with State Street, which is part of the previous road bubble.',
            location: {
                center: [-72.91951, 41.31488],
                zoom: 14.9,
                pitch: 0,
                bearing: 26.4,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubbleSOM',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubbleSOM',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter nine',
            alignment: 'left',
            hidden: false,
            title: 'Pauli Murray and Ben Franklin colleges: Closing the bubble between Dixwell and Prospect Hill',
            image: 'murray.jpg',
            description: 'Just as the School of Management helped close and expand the bubble between East Rock and Fair Haven, the building of the two new residential colleges behind the Grove Street Cemetery cemented the bubble between Dixwell, with the expansion of Morse and Stiles and Science Hill and the Div School, with the expansion into Prospect Hill. Built to house more students and expand the undergraduate class size, these colleges also represent a new chapter in Yale New Haven relations. The number of students at Yale has jumped by about 15% in the last decade, between undergraduates and graduate students, which means that housing demands have also increased, pushing out the Yale bubble. This bubble expanded a tad bit behind Murray and Franklin since parts of Mansfield Street became an essential part of off-campus housing, thus making it part of the Yale bubble.',
            location: {
                center: [-72.92600, 41.31639],
                zoom: 14.9,
                pitch:  0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubbleMurray',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubbleMurray',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter ten',
            alignment: 'right',
            hidden: false,
            title: 'Buying up Broadway and more off-campus housing: The modern push into Dwight',
            image: 'broadway.jpeg',
            description: 'With an increase in the number of students at Yale, off-campus housing continues to expand, leading to this expansion of the Yale bubble over the last decade. Today, students hold most of the apartments through Dwight Street. Moreover, during the pandemic, many businesses on Broadway began to fold, leading Yale to buy up much of the property and convert previous New Haven-centric apartments to off-campus housing for Yale students.',
            location: {
                center: [-72.93258, 41.31211],
                zoom: 14.6,
                pitch: 0,
                bearing: -58.40,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubbleDwight',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubbleDwight',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter 11',
            alignment: 'right',
            hidden: false,
            title: 'The push onto Bristol Street',
            image: 'dixwell.jpeg',
            description: 'Before the pandemic, Lake Place was the border of the Yale bubble, but again, as more off-campus housing is needed, students have expanded onto Bristol Street, one more block into Dixwell. This push brings the Yale bubble only two blocks from the Q house, which is the center of Dixwell.',
            location: {
                center: [-72.93134, 41.31566],
                zoom: 15,
                pitch: 0,
                bearing: -15.5,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubbleBristol',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubbleBristol',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter 12',
            alignment: 'left',
            hidden: false,
            title: 'Full bubble',
            description: 'Here is the full bubble again. Now, hopefully, you have a better understanding of the expansion.',
            location: {
                center: [-72.928, 41.318],
                zoom: 13,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bubbleFull',
                    opacity: .5,
                    duration: 50
                }
         ],
         onChapterExit: [
                {
                    layer: 'bubbleFull',
                    opacity: 0
                }
         ]
        },
        {
            id: 'chapter 13',
            alignment: 'fully',
            hidden: false,
            title: 'Here we come, Spring Break :)',
            location: {
                center: [-72.928, 41.318],
                zoom: 12,
                pitch: 60,
                bearing: -15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
        }
        
    ]
};
