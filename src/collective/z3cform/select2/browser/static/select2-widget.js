var initializeSelect2SingleWidget = function(obj) {

  var format = function(state) {
      var option = $(state.element);
      return '<span class="' + option.data('css') + '">' + state.text + '</span>';
  };

  $(obj).select2({
      width: 'resolve',
      formatResult: format,
      formatSelection: format,
      escapeMarkup: function(m) { return m; },
  });
};

jQuery(document).ready(function($) {

  $('.single-select2-widget').each(function() {
    initializeSelect2SingleWidget($(this));
  });

});
