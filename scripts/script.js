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
    // Event range slider value
    $('#range-slider').slider({
        range: true,
        min: 75, // min value
        max: 475, // max value
        step: 1, // step change default 1
        values: [112, 185], // start value
        slide: function(event, ui) {
            $amount.val(`${ui.values[0]}zł-${ui.values[1]}zł`);
        }
    });
    // Start input value
    $amount.val(`${$range.slider('values', 0)}zł - ${$range.slider('values', 1)}zł`); 
});
