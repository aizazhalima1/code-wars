//Complete the function/method so that it returns the url with anything after the anchor (#) removed.





//Solution
function removeUrlAnchor(url){
    return url.includes('#')? url.slice(0,url.indexOf('#')):url
    
    }