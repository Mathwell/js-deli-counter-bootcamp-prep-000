var katzDeli=[]
function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  var n=katzDeliLine.length+1
  var string="Welcome, "+ newPerson + n.toString() + ". You are number "+ " in line."
  return(string)
}
