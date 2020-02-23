/**
 * @file
 */

(function ($) {

Backdrop.behaviors.auto_nodetitleFieldsetSummaries = {
  attach: function (context) {
    $('fieldset#edit-auto-nodetitle', context).backdropSetSummary(function (context) {

      // Retrieve the value of the selected radio button.
      var ant = $("input[name='ant']:checked").val();

      if (ant == 0) {
        return Backdrop.t('Disabled')
      }
      else if (ant == 1) {
        return Backdrop.t('Automatic (hide title field)')
      }
      else if (ant == 2) {
        return Backdrop.t('Automatic (if title empty)')
      }
    });
  }
};

})(jQuery);
