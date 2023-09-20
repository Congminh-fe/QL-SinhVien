
// lấy thông tin tu nguoi dung
function GetDataForm(){
    var stuId = document.getElementById("txtMaSV").value;
    var stuName = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var password = document.getElementById("txtPass").value;
    var birthday = document.getElementById("txtNgaySinh").value;
    var courses = document.getElementById("khSV").value;
    var mathScore = document.getElementById("txtDiemToan").value * 1;
    var physicSCore = document.getElementById("txtDiemLy").value * 1;
    var chemistryScore = document.getElementById("txtDiemHoa").value * 1;
    var StuInfo = new StudentsInfomation(
      stuId,
      stuName,
      email,
      password,
      birthday,
      courses,
      mathScore,
      physicSCore,
      chemistryScore
    );
    return StuInfo
}
// render data len tren website
function renderData(data){
    var htmls = '';
    
    for(var i = 0; i < data.length; i++){
        var sv = data[i]
        var string = `<tr>
        <th>${sv.stuId}</th>
        <th>${sv.stuName}</th>
        <th>${sv.email}</th>
        <th>${sv.birthday}</th>
        <th>${sv.courses}</th>
         <th>${sv.totalScore()}</th>
        <th>
        <button onclick= "editButton('${
          sv.stuId
        }')" class= "btn btn-success w-100">edit </button>
        <button onclick= "deleteInfo('${
          sv.stuId
        }')" class= "btn btn-danger w-100">delete </button>
         </th>
       
         </tr>`;
        htmls += string;
    }
   
    document.getElementById("tbodySinhVien").innerHTML = htmls;
}
