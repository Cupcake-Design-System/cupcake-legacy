  $(document).ready(function() {

    // sidebar nav elements
    var $sidebarNavContainer = $(".c-sidebar-nav")
    var $sidebarNavBody = $(".c-sidebar-nav-body");
    var $sidebarNavListToggle = $(".c-sidebar-nav-list-toggle");
    var $sidebarNavLinkName =$(".c-sidebar-nav-link");
    var $sidebarNavChildList = ".c-sidebar-nav-list";
    var $sidebarNavToggle = $(".c-sidebar-nav-toggle");

    // sidebar nav sub menu toggle
    $sidebarNavListToggle.on("click", function() {
      $(this).find(".fa").toggleClass("fa-caret-right fa-caret-down");
      $(this).siblings($sidebarNavChildList).slideToggle(200);
      $(this).parent().toggleClass("open");
    })

    // sidebar nav adjustable panels
    $sidebarNavBody.resizable({
      handleSelector: ".c-sidebar-nav-divider",
      resizeWidth: false
    });

    // sidebar navigation open/close toggle
    $sidebarNavToggle.on("click", function() {
      $(this).find(".fa").toggleClass("fa-angle-double-left fa-angle-double-right");
      $sidebarNavContainer.toggleClass("c-sidebar-nav-closed");
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
    $sidebarNavLinkName.each(function() {
      var $this = $(this);
      var title = $this.text();
      $this.attr('title', title);
    })
  })
