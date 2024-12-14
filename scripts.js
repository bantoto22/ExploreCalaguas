window.onload = function() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
    
    window.scrollTo(0, 0);
};

