// ACCORDION
$(function() {
    $('#accord').accordion();
});

// TABS
$(function() {
    $('#tabs').tabs();
});

// FORM RANGE 
$(function() {
    $('#date').datepicker();
  
    let $amount = $('#range');
    let $range = $('#range-slider');
    $('#range-slider').slider({
        range: true,
        min: 0,
        max: 500,
        values: [100, 200],
        slide: function(event, ui) {
            $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
        }
    });
    $amount
        .val('$' + $range.slider('values', 0)
        + ' - $' + $range.slider('values', 1));
});
