function operate(operation_id){
    let first_val = parseFloat(document.getElementById("first_operand").value);
    let second_val =  parseFloat(document.getElementById("second_operand").value);

    switch(operation_id){
        case 1:
            document.getElementById("result").value = first_val + second_val;
            break;
        case 2:
            document.getElementById("result").value = first_val - second_val;
            break;
        case 3:
            document.getElementById("result").value = first_val * second_val;
            break;
        case 4:
            if(second_val!=0){
                document.getElementById("result").value = first_val / second_val;
            }else{
                document.getElementById("result").value = "Неправильно введен второй операнд!"
            }
            break;
    }
}