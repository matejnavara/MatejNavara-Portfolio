var App = function() {};

proto(App, {
    init: function() {
        this._bindEvents();

        this._createGrid();
        this._createItems();
        this._connectItemsToGrid();
    },

    _bindEvents: function() {
        var me = this;

        $("#asc").on("change", function(e) {
            me._grid.sort(e.target.value).resort();
        });
        $("#filter").on("change", function(e) {
            me._grid.filter(e.target.value);
        });
    },

    _createGrid: function() {
        var me = this;
        var $grid = $(".grid");

        me._grid = new Gridifier($grid, {
            class: "item",
            toggle: "scaleWithFade",
            sort: {
                selected: "z_a",
                a_z: function(first, second, sort) {
                    return sort.byData(first, second, "data-sort");
                },
                z_a: function(first, second, sort) {
                    return sort.byData(first, second, "data-sort", true);
                }
            },
            filter: {
                "selected": "all",
                "game": function(item) { return $(item).hasClass("game"); },
                "software": function(item) { return $(item).hasClass("software"); },
                "website": function(item) { return $(item).hasClass("website"); },
                "java": function(item) { return $(item).hasClass("java"); },
                "c#": function(item) { return $(item).hasClass("c#"); },
                "python": function(item) { return $(item).hasClass("python"); },
                "javascript": function(item) { return $(item).hasClass("javascript"); }
            }
        });    
    },

    _createItems: function() {
        var itemsData = [
            {
                name: "Tidal Browser Game", 
                desc: "Created in 8 hours for the EGX Rezzed Creative Assembly Game Jam. Developed using pure Javascript.",
                link: '"portfolio_tidal.html"',
                img: "link-tidal.jpg",
                date: "2016",
                filter: ["game","javascript"]
            },
            {
                name: "Infection Propagation Simulation", 
                desc: "Healthy cells vs Infected cells. Python simulation using the Pygame framework.",
                link: '"portfolio_contagion.html"',
                img: "link-contagion.jpg",
                date: "2015",
                filter: ["software", "python"]
            },
            {
                name: "Super Awesome Line Game", 
                desc: "The first published Android app from our Greedy Gulls Studio. Developed in Java using the LibGDX framework.",
                link: '"portfolio_salg.html"',
                img: "link-salg.jpg",
                date: "2014",
                filter: ["game", "java"]
            },
            {
                name: "Greedy Gull Game", 
                desc: "Early prototype of the Greedy Gull game created in Java using the LibGDX framework.",
                link: '"portfolio_greedy.html"',
                img: "link-greedy.jpg",
                date: "2015",
                filter: ["game", "java"]
            },
            {
                name: "Procedural Puzzle Level Generation", 
                desc: "Final year project for Computer Science (Games) BSc Hons at the University of Brighton. Developed using Unity and C#/Javascript.",
                link: '"portfolio_pplf.html"',
                img: "link-pplf.jpg",
                date: "2015",
                filter: ["game", "c#", "javascript"]
            },
            {
                name: "Whodunit Padma", 
                desc: "Play as Padma, the ship's AI, in this sci-fi murder mystery short listed for the Tranzfuser Fund 2016. Developed in 3 months using Unity/C#/Ink.",
                link: '"portfolio_padma.html"',
                img: "link-padma.jpg",
                date: "2016",
                filter: ["game", "c#"]
            },
            {
                name: "VR Pharma Project", 
                desc: "Project for multinational pharmaceutical company simulating the effects of sight disorders in VR. Created in Unity for Oculus VR/Google Cardboard.",
                link: '""',
                img: "link-vr.jpg",
                date: "2016",
                filter: ["software", "c#", "javascript"]
            },
            {
                name: "Frosty the No Man", 
                desc: "You are a giant sentient iceberg washed up on a tropical beach. Run as far as you can before you melt. Created in a week whilst sailing the Andaman Sea with American McGee for Pirate Jam 2017.",
                link: '"portfolio_frosty.html"',
                img: "link-frosty.gif",
                date: "2017",
                filter: ["game", "c#"]
            },
            {
                name: "Planet Sloth", 
                desc: "Plant seeds and grow trees in this reforestation idle game. Created over a weekend in Unity as part of Slow Game Jam 2017.",
                link: '"portfolio_sloth.html"',
                img: "link-sloth.gif",
                date: "2017",
                filter: ["game", "c#"]
            },
            {
                name: "Novana Beauty Website", 
                desc: "Bespoke website, branding and promotional material for London based beauty studio.",
                link: '"http://www.novanabeauty.com/" target="_blank"',
                img: "web_novanabeauty.gif",
                date: "2016",
                filter: ["website", "javascript"]
            },
            {
                name: "Radish Tech Solutions Website", 
                desc: "Bespoke website and branding of tech solutions company.",
                link: '"http://radishtech.solutions/" target="_blank"',
                img: "web_radish.gif",
                date: "2018",
                filter: ["website", "javascript"]
            },
            {
                name: "Anastasiia Golovina Website", 
                desc: "WordPress website for international opera singer and travel blogger.",
                link: '"http://anastasiia-golovina.com/" target="_blank"',
                img: "web_anastasiiagolovina.gif",
                date: "2018",
                filter: ["website"]
            },
            {
                name: "CloudPusher Website", 
                desc: "Prototype site for cloud photography social network.",
                link: '"http://cloudpusher.tk/" target="_blank"',
                img: "web_cloudpusher.gif",
                date: "2017",
                filter: ["website", "javascript"]
            },
            {
                name: "iTracR", 
                desc: "Commercial timecard and resource management software. Created using Django, MySQL and web technologies.",
                link: '""',
                img: "link-itracr.png",
                date: "2017",
                filter: ["software", "python"]
            },
            {
                name: "Document Management Microservice", 
                desc: "Headless RESTful document management microservice for the UK Ministry of Justice. Created using SpringBoot and Postgres.",
                link: '""',
                img: "link-moj.png",
                date: "2017",
                filter: ["software", "java"]
            },
        ];

        for(var i = 0; i < itemsData.length; i++)
            this._createItem(itemsData[i]);
    },

    _createItem: function(object) {
        var item = '';
        var data = 'data-sort="' + object.date + '"';

        var filters = object.filter;
        var classfilters = '';
        for(var i = 0; i < filters.length; i++){
            classfilters += filters[i] + ' ';
        }

        item += '<div class="item col-xs-12 col-sm-6 col-md-4 ' + classfilters + '" ' + data + '>';
        item += '   <div class="box style2">';
        item += '       <a href='+ object.link +' class="image featured"><img src="assets/images/'+ object.img +'" alt="" /></a>';
        item += '       <h2><a href='+ object.link +'>' + object.name + '</a></h2>';
        item += '       <p>'+ object.desc +'</p>';
        if(!$.inArray('website',object.filter)){
            item += '   <a class="btn btn-secondary btn-sm" href='+ object.link +' role="button">See the site <i class="fa fa-external-link" aria-hidden="true"></i></a>'
        } else if(object.link != '""'){
            item += '   <a class="btn btn-secondary btn-sm" href='+ object.link +' role="button">See more details</a>'
        } else {
            item += '   <a class="btn btn-secondary btn-sm disabled" href="#" role="button">Details coming soon</a>'
        }
        item += '   </div>';
        item += '</div>';

        $(".grid").append($.parseHTML(item));
    },

    _connectItemsToGrid: function() {
        this._grid.appendNew();
    }
});
