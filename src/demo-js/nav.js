  $(document).ready(function() {
    // left nav elements
    var $leftNavWrapper = $(".c-sidebar-nav-body");
    var $leftNavLink = $(".c-sidebar-nav-link");
    var $leftNavChildList = $(".c-sidebar-nav-list")
    var $navToggle = $(".c-sidebar-nav-toggle");
    // left navigation sub menu toggle
    $leftNavLink.on("click", function() {
      $(this)
        .next($leftNavChildList)
        .slideToggle(200);
    })
    $leftNavLink.on("click", function() {
      $(this).parent()
        .toggleClass("open")
    })
    // left menu adjustable panels
    $leftNavWrapper.resizable({
      handleSelector: ".c-sidebar-nav-divider",
      resizeWidth: false
    });
    // left navigation open/close toggle
    $navToggle.on("click", function() {
      $(".c-sidebar-nav").toggleClass("c-sidebar-nav-closed");
    })

    // Dropdown controls
    $(".c-dropdown").click(function(){
      $(this).find(".c-dropdown-list").slideToggle(100);
    });
    $(document).on("click", function(event){
      var $dropdownTrigger = $(".c-dropdown");
      if($dropdownTrigger !== event.target && !$dropdownTrigger.has(event.target).length){
        $(".c-dropdown-list").slideUp("fast");
      }
    });
    // Create nav tooltips
    // Loop through all nav links and copy the text to the title attribute for tooltips
    $leftNavLink.each(function() {
      var $this = $(this);
      var title = $this.text();
      $this.attr('title', title);
    })
  })