var katzDeli=[]
function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  var n=katzDeliLine.length+1
  var string="Welcome, "+ newPerson+ ". You are number "+ n.toString() + " in line."
  return(string)
}
