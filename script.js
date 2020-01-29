i=1
$.get({    
    url: "https://swapi.co/api/people/",
    
            success: function(perso) {
                console.log(perso);
               console.log(perso.results);
        
                for(i=0;i<perso.results.length;i++)
                { 
                    $("tbody tr:last-child").after("<tr><th class=\"bounceIn\">"+perso.results[i].name+"<button type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\" onclick=\"boutonDetails("+i+")\"class=\"btn btn-outline-warning\">Voir</button></td></tr>");
                    
                    console.log(perso.results[i].name);
                    
                }   
                
                
            
                },
            
            dataType: "json"
            });

$("#boutons").on("click",function(){suivant()});

function suivant (){
    i=i+1;
    $.get({    
        url: "https://swapi.co/api/people/?page="+i,
        
        success: function(suiv) {
            console.log("suiv ."+suiv);
            for(i=0;i<suiv.results.length;i++)
                { 
                    $("tbody tr:last-child").after("<tr><th class=\"bounceIn\">"+suiv.results[i].name+"<button type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\" onclick=\"boutonDetails("+i+")\"class=\"btn btn-outline-warning\">Voir</button></td></tr>");
                }
            },
                dataType: "json"
            });}


 function boutonDetails(a)
 {
    $.get({    
        url: "https://swapi.co/api/people/",
        data : {count:a},
                success: function(perso) {
                console.log(perso.results[a].height);
                $("#modalBody").html("")
                $("#modalBody").append("<p>"+perso.results[a].height+"</p><p>"+perso.results[a].mass+"</p><p>"+perso.results[a].hair_color+"</p><p>"+perso.results[a].skin_color+"</p><p>"+perso.results[a].eye_color+"</p><p>"+perso.results[a].birth_year+"</p><p>"+perso.results[a].gender+"</p>")

                },
                dataType: "json"
            });

        }

    
    
