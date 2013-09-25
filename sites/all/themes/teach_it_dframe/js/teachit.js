(function ($) {

    $(document).ready(function () {
      var url = String(window.location);
      
      if(url.indexOf('/recycle') > 0) {
        $('.logo-shop a').addClass('not-active');
        $('.logo-consign a').addClass('not-active');
      }
      
      if(url.indexOf('/consign') > 0) {
        $('.logo-shop a').addClass('not-active');
        $('.logo-recycle a').addClass('not-active');
      }
      
        //Mobile Navigation
      $('#zone-menu .menu').mobileMenu({
        defaultText: 'Navigate to...',
        className: 'mnav',
        subMenuDash: '&emsp;'
      });
  
    });

})(jQuery);
