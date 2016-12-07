var $viewContainer = $('.view-content');
var $loadingFooter = $('<span>').addClass('devices-list-loading-footer').html(__(options.loading_footer) || '');
$viewContainer.append($loadingFooter);

if (options.loading_title) {
	Homey.setTitle(__(options.loading_title));
}

var origHideLoadig = hideLoading.bind(null);
hideLoading = function () {
	if (options.title) {
		Homey.setTitle(__(options.title));
	}
	$('.devices-list-loading-footer').remove();
	$viewContainer.append($('<span>').addClass('devices-list-footer').html(__(options.footer) || ''));
	origHideLoadig();
};
