$('#loadMore').on('click', function() {
    $.ajax({
        url: 'more-content.html',
        success: function(data) {
            $('.content-container').append(data);
        }
    });
});