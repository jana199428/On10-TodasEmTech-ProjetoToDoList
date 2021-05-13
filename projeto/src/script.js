    // marcar todos
    selectAll . addEventListener ( "click" ,  ( )  =>  {
        deixe  getAllToDo  =  document . querySelectorAll ( ".newToDoText" ) ;
        deixe  getAllCheckIcon  =  document . querySelectorAll ( ".check" ) ;
  
        se  (
          selectAll . innerText  ===  "Marcar todos"  ||
          getAllCheckIcon . src  ==  "./assets/checked-off.svg"
        )  {
          getAllToDo . forEach ( ( p )  =>  p . classList . add ( "verificado" ) ) ;
          getAllCheckIcon . forEach ( ( img )  =>  ( img . src  =  "./assets/checked-on.svg" ) ) ;
          selectAll . innerText  =  "Desmarcar todos" ;
        }  Else  se  ( selectAll . InnerText  ===  "todos desmarcar" )  {
          getAllToDo . forEach ( ( p )  =>  p . classList . remove ( "verificado" ) ) ;
          getAllCheckIcon . forEach (
            ( img )  =>  ( img . src  =  "./assets/checked-off.svg" )
          ) ;
          selectAll . innerText  =  "Marcar todos" ;
        }
      } ) ;



