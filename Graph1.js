
       $(document).ready(function(){
           
            $("#choix_date li").click(function(){
             $("#choix_date li").removeClass("selection");
             $(this).addClass("selection");
                
            });
          }); 
let choix_actuel = 'date1';
                    let PremierTableau = [];
                    //1.  ON RECUPERE TOUS LES TD 
                     let trTable1 = document.getElementById("table1").getElementsByTagName('tr');
                     for(let i = 0; i<trTable1.length; i++){
                        let tdTable1 = trTable1[i].getElementsByTagName('td');
                       // console.log('AU SUIVANT ');
                        let ligneTableau = {};
                         // Pour vider l'objet encodé avant d aller dans le grand tableai 
                        for(let donnee = 0 ; donnee < tdTable1.length; donnee++){  
                             for(let z = 1; z<tdTable1.length; z++){
                                 ligneTableau.Pays = tdTable1[0].innerHTML;
                                 ligneTableau["date" + z] = tdTable1[z].innerHTML;
                             }  
                         } 
                        PremierTableau.push(ligneTableau);
                     }
                     
                    let mw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                    var svg = dimple.newSvg("#FirstGraph", 1000, 600);
                    var chart = new dimple.chart(svg, PremierTableau);
                    chart.addCategoryAxis("x", "Pays");
                    let li_choix_date = document.getElementById('choix_date').getElementsByTagName('li');
                    for(let li_nbr = 0; li_nbr< li_choix_date.length; li_nbr++){
                         li_choix_date[li_nbr].addEventListener('click', function(){
                         choix_actuel = li_choix_date[li_nbr].innerHTML;
                         // console.log(choix_actuel);
                         let MyAxis = chart.addMeasureAxis("y", choix_actuel);
                             MyAxis.title = "";
                         chart.addSeries(null, dimple.plot.bar);
                         chart.draw();
                             
                         })
                          
                     }