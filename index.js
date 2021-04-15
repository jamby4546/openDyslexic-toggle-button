$(':checkbox').change(function() {
  toggleNav();
});


var nav = false;

    function openNav() {
      $("body").css("font-family", "openDyslexic");

      nav = true;
                    }

    function closeNav() {
      $("body").css("font-family", "PT Serif");
      $("body").css("background-color", "white");
      nav = false;
                    }

    function toggleNav() {
      nav ? closeNav() : openNav();
    }
