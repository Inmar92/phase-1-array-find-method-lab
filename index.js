function superbowlWin(record){
    let win = record.find(
        function(Element){
            if (Element.result === "W"){
                return(Element);
        }
    })
    if(win){
        return win.year
    }
    else{
        return undefined
    }
}
