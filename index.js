var katzDeli=[]
function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  var n=katzDeliLine.length
  var string="Welcome, "+ newPerson+ ". You are number "+ n.toString() + " in line."
  return(string)
}

 function nowServing(katzDeliLine){
   if (katzDeliLine.length===0){
     return("There is nobody waiting to be served!")
   }else{
     var person=katzDeliLine.shift()
     var string='Currently serving ${person}.'
     return(string)
   }
 }
