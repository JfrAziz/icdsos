let data = function () {
  return {
    isScroll: false,
    navOpen: false,
    menu: [
      {
        name: "home",
        link : "index.html"
      },
      {
        name: "speakers",
        link : "speaker.html"
      },
      {
        name: "publication",
        link : "publication.html"
      },
      {
        name: "important dates",
        link : "dates.html"
      },
      {
        name: "programs",
        link : "program.html"
      },
      {
        name: "awards",
        link : "awards.html"
      },
      {
        name: "commitee",
        link : "commitee.html"
      },
      {
        name: "pre_conference",
        link : "preconference.html"
      },
      {
        name: "registration",
        link : "registration.html"
      }
    ],
    isScrolling: () =>
      document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80,
  };
};