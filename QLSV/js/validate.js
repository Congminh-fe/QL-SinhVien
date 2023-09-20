// kiem tra xem có value hay ko
function validateInfo(value,idErr){
    if( value != ""){
        document.getElementById(idErr).innerHTML = "";
        return true
    }else{
        document.getElementById(idErr).innerHTML = "Thông tin không được để trống!";
        return false
    }
}
// kiem tra co bi trung id ko 
// similarityCheck(maSv(123),spanThongBao,studentlist,keyvalue)
function similarityCheck(id,spanId,StuInfo,key,content){
var valid = StuInfo.findIndex(function(value){
    return value[key] == id;})
    if(valid == -1){
        document.getElementById(spanId).innerHTML = ""
        return true
    }else{
        document.getElementById(spanId).innerHTML = content
        return false
    };
}

// kiem tra có phải là số hay không
function checkNumber(value,idSpan){
    var number = value * 1;
    var isNum = Number.isFinite(number);

    if(isNum){
        document.getElementById(idSpan).innerHTML = "";
        return true
    }else{
        document.getElementById(idSpan).innerHTML = "Vui lòng nhập một số";
        return false
    }
}
