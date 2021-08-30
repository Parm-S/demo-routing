(function(){
    function init(){
        let router =  new Router([
            new Route('home','index.html',true),
            new Route('about','about.html'),
            new Route('contact', 'contact.html')
        ]);
    }
    init();
}());