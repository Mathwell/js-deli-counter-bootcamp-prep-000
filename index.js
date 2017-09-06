var katzDeli=[]
function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  var string="Welcome, ${newPerson}. You are number ${katzDeliLine.length+1} in line."
  return(string)
}
