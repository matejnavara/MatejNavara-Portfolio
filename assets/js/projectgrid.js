var App = function () {};

proto(App, {
  init: function () {
    this._bindEvents();

    this._createGrid();
    this._createItems();
    this._connectItemsToGrid();
  },

  _bindEvents: function () {
    var me = this;

    $("#asc").on("change", function (e) {
      me._grid.sort(e.target.value).resort();
    });
    $("#filter").on("change", function (e) {
      me._grid.filter(e.target.value);
    });
  },

  _createGrid: function () {
    var me = this;
    var $grid = $(".grid");

    me._grid = new Gridifier($grid, {
      class: "item",
      toggle: "scaleWithFade",
      sort: {
        selected: "a_z",
        a_z: function (first, second, sort) {
          return sort.byData(first, second, "data-sort");
        },
        z_a: function (first, second, sort) {
          return sort.byData(first, second, "data-sort", true);
        },
      },
      filter: {
        selected: "all",
        game: function (item) {
          return $(item).hasClass("game");
        },
        software: function (item) {
          return $(item).hasClass("software");
        },
        website: function (item) {
          return $(item).hasClass("website");
        },
        java: function (item) {
          return $(item).hasClass("java");
        },
        "c#": function (item) {
          return $(item).hasClass("c#");
        },
        python: function (item) {
          return $(item).hasClass("python");
        },
        javascript: function (item) {
          return $(item).hasClass("javascript");
        },
      },
    });
  },

  _createItems: function () {
    var itemsData = [
      {
        name: "Infection Propagation Simulation",
        desc: "Healthy cells vs Infected cells. Python simulation using the Pygame framework.",
        link: '"portfolio_contagion.html"',
        img: "link-contagion.jpg",
        date: "2015",
        filter: ["software", "python"],
      },
      {
        name: "Super Awesome Line Game",
        desc: "The first published Android app from our Greedy Gulls Studio. Developed in Java using the LibGDX framework.",
        link: '"portfolio_salg.html"',
        img: "link-salg.jpg",
        date: "2014",
        filter: ["game", "java"],
      },
      {
        name: "Greedy Gull Game",
        desc: "Early prototype of the Greedy Gull game created in Java using the LibGDX framework.",
        link: '"portfolio_greedy.html"',
        img: "link-greedy.jpg",
        date: "2015",
        filter: ["game", "java"],
      },
      {
        name: "Procedural Puzzle Level Generation",
        desc: "Final year project for Computer Science (Games) BSc Hons at the University of Brighton. Developed using Unity and C#/Javascript.",
        link: '"portfolio_pplf.html"',
        img: "link-pplf.jpg",
        date: "2015",
        filter: ["game", "c#", "javascript"],
      },
      {
        name: "Whodunit Padma",
        desc: "Play as Padma, the ship's AI, in this sci-fi murder mystery short listed for the Tranzfuser Fund 2016. Developed in 3 months using Unity/C#/Ink.",
        link: '"portfolio_padma.html"',
        img: "link-padma.jpg",
        date: "2016",
        filter: ["game", "c#"],
      },
      {
        name: "VR Pharma Project",
        desc: "Project for multinational pharmaceutical company simulating the effects of sight disorders in VR. Created in Unity for Oculus VR/Google Cardboard.",
        img: "link-vr.jpg",
        date: "2016",
        filter: ["software", "c#", "javascript"],
      },
      {
        name: "Tidal Browser Game",
        desc: "Created in 8 hours for the EGX Rezzed Creative Assembly Game Jam. Developed using pure Javascript.",
        link: '"portfolio_tidal.html"',
        img: "link-tidal.jpg",
        date: "2016",
        filter: ["game", "javascript"],
      },
      {
        name: "Novana Beauty Website",
        desc: "Bespoke website, branding and promotional material for London based beauty studio.",
        link: '"http://www.novanabeauty.com/" target="_blank"',
        img: "web_novanabeauty.gif",
        date: "2016",
        filter: ["website", "javascript"],
      },
      {
        name: "Frosty the No Man",
        desc: "You are a giant sentient iceberg washed up on a tropical beach. Run as far as you can before you melt. Created in a week whilst sailing the Andaman Sea with American McGee for Pirate Jam 2017.",
        link: '"portfolio_frosty.html"',
        img: "link-frosty.gif",
        date: "2017",
        filter: ["game", "c#"],
      },
      {
        name: "Planet Sloth",
        desc: "Plant seeds and grow trees in this reforestation idle game. Created over a weekend in Unity as part of Slow Game Jam 2017.",
        link: '"portfolio_sloth.html"',
        img: "link-sloth.gif",
        date: "2017",
        filter: ["game", "c#"],
      },
      {
        name: "CloudPusher Website",
        desc: "Prototype site for cloud photography social network.",
        // link: '"http://cloudpusher.tk/" target="_blank"',
        img: "web_cloudpusher.gif",
        date: "2017",
        filter: ["website", "javascript"],
      },
      {
        name: "iTracR",
        desc: "Commercial timecard and resource management software. Created using Django, MySQL and web technologies.",
        link: '"https://itracr.com/" target="_blank"',
        img: "link-itracr.jpg",
        date: "2017",
        filter: ["website", "software", "python"],
      },
      {
        name: "Document Management Microservice",
        desc: "Headless RESTful document management microservice for the UK Ministry of Justice. Created using SpringBoot and Postgres.",
        img: "link-moj.png",
        date: "2017",
        filter: ["software", "java"],
      },
      {
        name: "eJudiciary",
        desc: "Bespoke SharePoint platform for the Royal Courts of Justice. Created in close collaboration with high court judges.",
        img: "web_rcj.jpg",
        date: "2017",
        filter: ["software", "java"],
      },
      {
        name: "Radish Tech Solutions Website",
        desc: "Bespoke website and branding of tech solutions company.",
        link: '"http://radishtech.solutions/" target="_blank"',
        img: "web_radish.gif",
        date: "2018",
        filter: ["website", "javascript"],
      },
      {
        name: "Anastasiia Golovina Website",
        desc: "WordPress website for international opera singer and travel blogger.",
        link: '"http://anastasiia-golovina.com/" target="_blank"',
        img: "web_anastasiiagolovina.gif",
        date: "2018",
        filter: ["website"],
      },
      {
        name: "Stop That Baby",
        desc: "Asymmetric 1 v 1 local multiplayer on one keyboard or with two controllers. Created for Pirate Jam 2018 whilst sailing the Andaman Sea, surviving storms and sipping SamSong.",
        link: '"https://matejnavara.itch.io/stop-that-baby" target="_blank"',
        img: "link-baby.jpg",
        date: "2018",
        filter: ["game", "c#"],
        weblink: true,
      },
      {
        name: "AFC Website",
        desc: "Bespoke showcase site for London based fire and security company.",
        link: '"https://afcfire.co.uk/" target="_blank"',
        img: "web_afc.gif",
        date: "2019",
        filter: ["website"],
      },
      {
        name: "Herbanika eCommerce",
        desc: "Woocommerce store for international loose leaf tea startup.",
        link: '"https://herbanika.co/" target="_blank"',
        img: "link-herbanika.png",
        date: "2019",
        filter: ["website"],
      },
      {
        name: "Feedr",
        desc: "React based commerce site and Android/iOS apps for fast growing food tech startup.",
        link: '"https://feedr.co" target="_blank"',
        img: "link-feedr.png",
        date: "2020",
        filter: ["website", "software", "javascript"],
      },
      {
        name: "Messy Crossings",
        desc: "Simple arcade style timing/reaction game. Inspired by Lemmings and a pedestrian crossing light in Romania. Created whilst sailing the Andaman Sea for Pirate Jam 2020.",
        link: '"https://matejnavara.itch.io/messy-crossings" target="_blank"',
        img: "web_crossing.gif",
        date: "2020",
        filter: ["game", "c#"],
        weblink: true,
      },
      {
        name: "Lettuce Give Back",
        desc: "Supported local food charity set up their website and delivery online",
        link: '"https://lettucegiveback.org/" target="_blank"',
        img: "web_lettuce.gif",
        date: "2020",
        filter: ["website"],
        weblink: true,
      },
      {
        name: "Mont Design Co",
        desc: "Custom WordPress platform for Interior eDesign studio",
        link: '"https://montdesign.co/" target="_blank"',
        img: "web_mont-loader.gif",
        date: "2020",
        filter: ["website"],
        weblink: true,
      },
      {
        name: "Expired News",
        desc: "Historic New York Times web app built using React/NextJS/Vercel",
        //link: '"https://expired.news/" target="_blank"',
        img: "web_news.gif",
        date: "2021",
        filter: ["website", "software"],
        //weblink: true,
      },
    ];

    for (var i = 0; i < itemsData.length; i++) this._createItem(itemsData[i]);
  },

  _createItem: function (object) {
    var item = "";
    var data = 'data-sort="' + object.date + '"';

    var filters = object.filter;
    var classfilters = "";
    for (var i = 0; i < filters.length; i++) {
      classfilters += filters[i] + " ";
    }

    item +=
      '<div class="item col-xs-12 col-sm-6 col-md-4 ' +
      classfilters +
      '" ' +
      data +
      ">";
    item += '   <div class="box style2">';
    item +=
      "       <a href=" +
      object.link +
      ' class="image featured"><img src="assets/images/' +
      object.img +
      '" alt="" /></a>';
    item +=
      "       <h2><a href=" + object.link + ">" + object.name + "</a></h2>";
    item += "       <p>" + object.desc + "</p>";
    if (
      (!$.inArray("website", object.filter) || object.weblink) &&
      object.link != null
    ) {
      item +=
        '   <a class="btn btn-secondary btn-sm" href=' +
        object.link +
        ' role="button">See it online <i class="fa fa-external-link" aria-hidden="true"></i></a>';
    } else if (object.link != null) {
      item +=
        '   <a class="btn btn-secondary btn-sm" href=' +
        object.link +
        ' role="button">See more details</a>';
    } else {
      item +=
        '   <a class="btn btn-secondary btn-sm disabled" href="#" role="button">Details coming soon</a>';
    }
    item += "   </div>";
    item += "</div>";

    $(".grid").append($.parseHTML(item));
  },

  _connectItemsToGrid: function () {
    this._grid.appendNew();
  },

  refreshGrid: function () {
    this._grid.sort("z_a").resort();
  },
});
