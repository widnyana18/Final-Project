console.log(data);

var col = [];

for(var i=0; i<data.length;i++){
    for(var key in data[i]){
        if(col.indexOf(key) === -1){
            col.push(key);
        }
    }    
}

var table, tr,th,td;

table = document.createElement("table");
tr = table.insertRow(-1);
for(var i=0; i<col.length-5; i++){    
    th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
}

for(var i=0; i< data.length; i++){
    tr = table.insertRow(-1);
    
    for(var j=0; j<col.length-5; j++){
        td = tr.insertCell(-1);
        td.innerHTML = data[i][col[j]];
    }
}

var show = document.getElementById("showTable");
show.innerHTML = "";
show.appendChild(table);

function searchBox(){
    var input, filter, tr, td, create;
    input = document.getElementById("dataInput");
    filter = input.value.toUpperCase();

    table = document.getElementsByTagName("table");
    tr = document.getElementsByTagName("tr");    
    for(var i=0; i< tr.length; i++){
        td = tr[i].getElementsByTagName("td");
        tr[i].style.display = "";
        for(j=0; j<td.length; j++){            
            if(td[j].innerHTML.toUpperCase().indexOf(filter)>-1){
                create = true;                
            }                                                   
        }
        if(create){
            tr[i].style.display = "";
            create = false;                    
        }
        else{
            tr[i].style.display = "none";                
        }
    }
}