     let TableauGraph2 = [];
                    //1.  ON RECUPERE TOUS LES TD 
                  let allTrGraph2 = document.getElementById("table2").getElementsByTagName('tr');
                  for (let iTr = 0; iTr < allTrGraph2.length; iTr++){
                      let LigneDuTableau = {};
                      let tdGraph2 = allTrGraph2[iTr].getElementsByTagName('td');
                      for(let iTd = 0; iTd < tdGraph2.length; iTd++){
                          LigneDuTableau.Nom = tdGraph2[0].innerHTML;
                          LigneDuTableau.premiereDate = tdGraph2[1].innerHTML;
                          LigneDuTableau.secondeDate = tdGraph2[2].innerHTML;   
                      }
                      
                      TableauGraph2.push(LigneDuTableau);       
                  }
                  
                  console.log(TableauGraph2);
                 
                  var svg2 = dimple.newSvg("#SecondeGraph", 1590, 800);
                      
                  var myChart2 = new dimple.chart(svg2, TableauGraph2);
                  myChart2.setBounds(60, 30, 510, 330)
                  let nomX = myChart2.addCategoryAxis("x" ,["Nom","premiereDate"]);
                  myChart2.addMeasureAxis("y", "secondeDate" );
                  myChart2.addSeries("Nom", dimple.plot.bar);
                  myChart2.addLegend(65, 10, 510, 20, "right");
                  myChart2.draw();
               ;
              