//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.





//Solution
function domainName(url){
    url=url.replace('www.','')
    url=url.replace('https://','')
      url=url.replace('http://','')
    url=url.split('.')
    
    return url[0]
    }