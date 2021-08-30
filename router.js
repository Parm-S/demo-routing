function Router(routes){
    try{
        if(!routes){
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch(e){
        console.error(e);
    }
}
Router.prototype = {
    routes:undefined,
    rootElem:undefined,
    constructor : function(routes){
        this.routes =routes;
        this.rootElem = document.getElementById('app');
    },
    init : function(){
        let route = this.routes;
         (function(scope , route){
             window.addEventListener('hashchange',function(e){
                 scope.hasChanged(scope,route);
             });
         })(this,route);
    },
    hasChanged : function(scope , route){
        if(window.location.hash.length>0){
            // console.log(route);
            for(let i = 0; i<route.length; i++){
                let r = route[i];
                console.log(r);
                if(r.isActiveRoute(window.location.hash.substr(1))){
                    console.log(r);
                    scope.goToRoute(r.htmlName);
                }
            }
        }else{
            for(let i=0; i<route.length;i++){
                let ro = route[i];
                if(route.default){
                    scope.goToRoute(ro.htmlName);
                }
            }
        }
    },
    goToRoute : function(htmlName){
        (function(scope){
            let url = htmlName,
            xhttp =  new XMLHttpRequest();
            xhttp.onreadystatechange =  function(){
                if (this.readyState === 4 && this.status=== 200){
                    scope.rootElem.innerHTML = this.responseText;
                }
            };
            console.log(url);
            xhttp.open('GET',url,true);
            xhttp.send();
        })(this);
    }
};