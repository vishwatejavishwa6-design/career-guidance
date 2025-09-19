// data.js

const hobbiesData = [
    {
        hobbyKey: "reading_writing_hobby",
        suggestions: [
            { careerKey: "author_writer_career", descriptionKey: "author_writer_desc" },
            { careerKey: "journalist_career", descriptionKey: "journalist_desc" },
            { careerKey: "editor_career", descriptionKey: "editor_desc" },
            { careerKey: "content_creator_career", descriptionKey: "content_creator_desc" }
        ]
    },
    {
        hobbyKey: "gaming_hobby",
        suggestions: [
            { careerKey: "game_developer_career", descriptionKey: "game_developer_desc" },
            { careerKey: "esports_player_coach_career", descriptionKey: "esports_player_coach_desc" },
            { careerKey: "game_tester_career", descriptionKey: "game_tester_desc" },
            { careerKey: "streamer_content_creator_gaming_career", descriptionKey: "streamer_content_creator_gaming_desc" }
        ]
    },
    {
        hobbyKey: "art_design_hobby",
        suggestions: [
            { careerKey: "graphic_designer_career", descriptionKey: "graphic_designer_desc" },
            { careerKey: "illustrator_career", descriptionKey: "illustrator_desc" },
            { careerKey: "animator_career", descriptionKey: "animator_desc" },
            { careerKey: "fashion_designer_career", descriptionKey: "fashion_designer_desc" }
        ]
    },
    {
        hobbyKey: "sports_fitness_hobby",
        suggestions: [
            { careerKey: "athlete_coach_career", descriptionKey: "athlete_coach_desc" },
            { careerKey: "sports_journalist_career", descriptionKey: "sports_journalist_desc" },
            { careerKey: "fitness_trainer_career", descriptionKey: "fitness_trainer_desc" },
            { careerKey: "sports_psychologist_career", descriptionKey: "sports_psychologist_desc" }
        ]
    },
    {
        hobbyKey: "cooking_baking_hobby",
        suggestions: [
            { careerKey: "chef_cook_career", descriptionKey: "chef_cook_desc" },
            { careerKey: "baker_pastry_chef_career", descriptionKey: "baker_pastry_chef_desc" },
            { careerKey: "food_critic_blogger_career", descriptionKey: "food_critic_blogger_desc" },
            { careerKey: "nutritionist_dietitian_career", descriptionKey: "nutritionist_dietitian_desc" }
        ]
    },
    {
        hobbyKey: "technology_coding_hobby",
        suggestions: [
            { careerKey: "software_developer_career", descriptionKey: "software_developer_desc" },
            { careerKey: "web_developer_career", descriptionKey: "web_developer_desc" },
            { careerKey: "data_scientist_career", descriptionKey: "data_scientist_desc" },
            { careerKey: "cybersecurity_analyst_career", descriptionKey: "cybersecurity_analyst_desc" }
        ]
    }
];

const collegesData = [
    // Engineering Colleges
    {
        id: "iit-bombay",
        nameKey: "iit_bombay_name",
        stream: "engineering",
        locationKey: "mumbai_maharashtra",
        descriptionKey: "iit_bombay_desc",
        image: "iit-bombay engineering colleges.jpeg"
    },
    {
        id: "iit-delhi",
        nameKey: "iit_delhi_name",
        stream: "engineering",
        locationKey: "new_delhi_delhi",
        descriptionKey: "iit_delhi_desc",
        image: "iit-delhi Engineering college.jpeg"
    },
    {
        id: "iit-kanpur",
        nameKey: "iit_kanpur_name",
        stream: "engineering",
        locationKey: "kanpur_uttar_pradesh",
        descriptionKey: "iit_kanpur_desc",
        image: "iit-kanpur engineering colleges.jpeg"
    },
    {
        id: "iit-kharagpur",
        nameKey: "iit_kharagpur_name",
        stream: "engineering",
        locationKey: "kharagpur_west_bengal",
        descriptionKey: "iit_kharagpur_desc",
        image: "iit-karghapur engineering colleges.jpeg"
    },
    {
        id: "nit-trichy",
        nameKey: "nit_trichy_name",
        stream: "engineering",
        locationKey: "tiruchirappalli_tamil_nadu",
        descriptionKey: "nit_trichy_desc",
        image: "NIT-tiruchirappalli.jpg"
    },

    // Medical Colleges
    {
        id: "aiims-delhi",
        nameKey: "aiims_delhi_name",
        stream: "medical",
        locationKey: "new_delhi_delhi",
        descriptionKey: "aiims_delhi_desc",
        image: "aiims medical college.jpeg"
    },
    {
        id: "jipmer",
        nameKey: "jipmer_name",
        stream: "medical",
        locationKey: "puducherry",
        descriptionKey: "jipmer_desc",
        image: "jipmer medical college.jpeg"
    },
    {
        id: "pgimer",
        nameKey: "pgimer_name",
        stream: "medical",
        locationKey: "chandigarh",
        descriptionKey: "pgimer_desc",
        image: "PGIMER medical college.jpeg"
    },
    {
        id: "nimhans",
        nameKey: "nimhans_name",
        stream: "medical",
        locationKey: "bengaluru_karnataka",
        descriptionKey: "nimhans_desc",
        image: "nimhans medical colleges.jpeg"
    },
    {
        id: "maulana-azad",
        nameKey: "maulana_azad_name",
        stream: "medical",
        locationKey: "new_delhi_delhi",
        descriptionKey: "maulana_azad_desc",
        image: "maulana azad college kolkata mpc.jpeg"
    },

    // Arts Colleges
    {
        id: "jnu",
        nameKey: "jnu_name",
        stream: "arts",
        locationKey: "new_delhi_delhi",
        descriptionKey: "jnu_desc",
        image: "jnu ba courses.jpeg"
    },
    {
        id: "du-arts",
        nameKey: "du_arts_name",
        stream: "arts",
        locationKey: "new_delhi_delhi",
        descriptionKey: "du_arts_desc",
        image: "university of delhi arts and humanities.jpeg"
    },
    {
        id: "lsr",
        nameKey: "lsr_name",
        stream: "arts",
        locationKey: "new_delhi_delhi",
        descriptionKey: "lsr_desc",
        image: "lsr arts and humanities.jpeg"
    },
    {
        id: "hansraj",
        nameKey: "hansraj_name",
        stream: "arts",
        locationKey: "new_delhi_delhi",
        descriptionKey: "hansraj_desc",
        image: "hansraj college arts and humanities.jpeg"
    },
    {
        id: "st-stephens",
        nameKey: "st_stephens_name",
        stream: "arts",
        locationKey: "new_delhi_delhi",
        descriptionKey: "st_stephens_desc",
        image: "st.stephens college cec.jpeg"
    },
    // Degree Colleges
    {
        id: "loyola-chennai",
        nameKey: "loyola_chennai_name",
        stream: "degree",
        locationKey: "chennai_tamil_nadu",
        descriptionKey: "loyola_chennai_desc",
        image: "loyola degree college chennai.jpg"
    },
    {
        id: "st-josephs-bengaluru",
        nameKey: "st_josephs_bengaluru_name",
        stream: "degree",
        locationKey: "bengaluru_karnataka",
        descriptionKey: "st_josephs_bengaluru_desc",
        image: "St. Joseph's degree College, Bengaluru.jpg"
    },
    {
        id: "presidency-kolkata",
        nameKey: "presidency_kolkata_name",
        stream: "degree",
        locationKey: "kolkata_west_bengal",
        descriptionKey: "presidency_kolkata_desc",
        image: "Presidency  degree University, Kolkata.jpg"
    },
    {
        id: "fergusson-pune",
        nameKey: "fergusson_pune_name",
        stream: "degree",
        locationKey: "pune_maharashtra",
        descriptionKey: "fergusson_pune_desc",
        image: "Fergusson degree College, Pune.jpg"
    },
    {
        id: "christ-bengaluru",
        nameKey: "christ_bengaluru_name",
        stream: "degree",
        locationKey: "bengaluru_karnataka",
        descriptionKey: "christ_bengaluru_desc",
        image: "Christ degree University, Bengaluru.jpg"
    }
];

const examsData = [
    {
        id: "jee-main",
        nameKey: "jee_main_name",
        stream: "engineering",
        descriptionKey: "jee_main_desc",
        officialLink: "https://jeemain.nta.nic.in/"
    },
    {
        id: "jee-advanced",
        nameKey: "jee_advanced_name",
        stream: "engineering",
        descriptionKey: "jee_advanced_desc",
        officialLink: "https://jeeadv.ac.in/"
    },
    {
        id: "neet-ug",
        nameKey: "neet_ug_name",
        stream: "medical",
        descriptionKey: "neet_ug_desc",
        officialLink: "https://neet.nta.nic.in/"
    },
    {
        id: "aiapget",
        nameKey: "aiapget_name",
        stream: "medical",
        descriptionKey: "aiapget_desc",
        officialLink: "https://exams.nta.ac.in/AIAPGET/"
    },
    {
        id: "clat",
        nameKey: "clat_name",
        stream: "law",
        descriptionKey: "clat_desc",
        officialLink: "https://consortiumofnlus.ac.in/"
    },
    {
        id: "lsat-india",
        nameKey: "lsat_india_name",
        stream: "law",
        descriptionKey: "lsat_india_desc",
        officialLink: "https://www.lsatindia.in/"
    }
];

const scholarshipsData = [
    {
        id: "nsp",
        nameKey: "nsp_name",
        type: "central",
        descriptionKey: "nsp_desc",
        link: "https://scholarships.gov.in/"
    },
    {
        id: "ugc-scholarships",
        nameKey: "ugc_scholarships_name",
        type: "central",
        descriptionKey: "ugc_scholarships_desc",
        link: "https://scholarships.gov.in/"
    },
    {
        id: "wbscc",
        nameKey: "wbscc_name",
        type: "state-west-bengal",
        descriptionKey: "wbscc_desc",
        link: "https://wbscc.wb.gov.in/"
    },
    {
        id: "oasis",
        nameKey: "oasis_name",
        type: "state-west-bengal",
        descriptionKey: "oasis_desc",
        link: "https://oasis.gov.in/"
    },
    {
        id: "mahadbt",
        nameKey: "mahadbt_name",
        type: "state-maharashtra",
        descriptionKey: "mahadbt_desc",
        link: "https://mahadbt.maharashtra.gov.in"
    },
    {
        id: "e-scholarship-maha",
        nameKey: "e_scholarship_maha_name",
        type: "state-maharashtra",
        descriptionKey: "e_scholarship_maha_desc",
        link: "https://www.buddy4study.com/article/maharashtra-scholarship"
    }
];

const quizQuestions = [
    {
        id: "q1",
        questionKey: "q1_text",
        options: [
            { value: "creative", textKey: "q1_opt1" },
            { value: "analytical", textKey: "q1_opt2" },
            { value: "social", textKey: "q1_opt3" }
        ]
    },
    {
        id: "q2",
        questionKey: "q2_text",
        options: [
            { value: "science", textKey: "q2_opt1" },
            { value: "math", textKey: "q2_opt2" },
            { value: "humanities", textKey: "q2_opt3" }
        ]
    },
    {
        id: "q3",
        questionKey: "q3_text",
        options: [
            { value: "independent", textKey: "q3_opt1" },
            { value: "team", textKey: "q3_opt2" },
            { value: "dynamic", textKey: "q3_opt3" }
        ]
    }
];
