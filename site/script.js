document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('dashboard-iframe');
    var loader = document.getElementById('loader');

    iframe.addEventListener('load', function () {
        iframe.classList.add('loaded');
        loader.classList.add('hidden');
    });

    // Fallback: hide loader after 15s even if load event doesn't fire
    setTimeout(function () {
        if (!iframe.classList.contains('loaded')) {
            iframe.classList.add('loaded');
            loader.classList.add('hidden');
        }
    }, 15000);
});
