(function ($, once) {
    'use strict';
    Drupal.behaviors.facultySubtheme = {
      attach: function (context) {
        const searchIcon = $('<i />', { class: 'fas fa-search'});
        const menuSearchLink = $('<a>', { class: 'menu-search-link', 'href': '/search', 'aria-label': 'Go to search page' }).prepend(searchIcon);
        $('.su-multi-menu', context).append(menuSearchLink);

        // $('.su-lockup__cell1').remove();
      }
    };
  
  })(jQuery, once);