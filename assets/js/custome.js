// mega dropdown content onclick function

function opencontent(category) {
    console.log(category); // still undefined
    $('.category-content-section').removeClass('active');
    console.log('#' + category + '-content');
    
    $('#' + category + '-content').addClass('active');
    $('.category-item').removeClass('active');
    $(this).parent().addClass('active');
    return false;
}