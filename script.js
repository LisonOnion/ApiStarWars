$.get({    
    url: "https://swapi.co/api/people/",
    
            success: function(perso) {
                console.log(perso);
               console.log(perso.results);
        
                for(i=0;i<perso.results.length;i++)
                { 
                    $("tbody tr:last-child").after("<tr><th class=\"bounceIn\">"+perso.results[i].name+"<button type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\" onclick=\"boutonDetails("+i+")\"class=\"btn btn-primary\">Voir</button></td></tr>");
                    
                    console.log(perso.results[i].name);
                    
                }   
                
                
            
                },
            
            dataType: "json"
            });

$("#boutons").on("click",suivant);

function suivant (){
    $.get({    
        url: "https://swapi.co/api/people/",
        
        success: function(suiv) {
            for(i=0;i<suiv.next.length;i++)
                { 
                    $("tbody tr:last-child").after("<tr><th class=\"bounceIn\">"+suiv.next[i].name+"<button type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\" onclick=\"boutonDetails("+i+")\"class=\"btn btn-primary\">Voir</button></td></tr>");
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
                
                $("#modalBody").append("<p>"+perso.results[a].height+"</p>")

                },
                dataType: "json"
            });

        }

        $("#boutonDetail").on("click",cleanAddModal);

        function cleanAddModal (){
            $("#modalBody").html("")
        }
    
