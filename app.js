var a=parseFloat(prompt("ENTER FIRSTT NUMBER!"))
var b=parseFloat(prompt("ENTER SECOND NUMBER!"))

var operation=parseFloat(prompt("CHOOSE ON OF THEM: \n 1.Addition  \n 2.Subraction \n 3.Multiplication \n 4.Division"))
console.log("CHOOSE AN OPERATION: \n 1.Addition  \n 2.Subraction \n 3.Multiplication \n 4.Division")


function add(a,b) {
    return a+b;
}

function sub(a,b) {
        return a - b
    }
    
 function mul(a,b) {
        return a * b
    }
 function div(a,b) {
        return a / b
    }
    var result;

switch (operation){
    case 1:
    {
       result = add(a,b);
       console.log(result);
        break;
    }
    case 2:
    {
        result = sub(a,b);
        break;
    }
    case 3:
        {
            result = mul (a,b);
            break;
        }
        case 4:
            {
                result = div(a,b);
                break;
            }
    
               default:
               console.log("INVALD");
    
}
console.log("Result:"+result);