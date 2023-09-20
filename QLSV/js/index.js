var studentsList = [];

const STUSTORAGE = "STUDENT_LIST";
// when user reloading page => data loaded
var startPage = localStorage.getItem(STUSTORAGE);
// render tu json qua javascript

// kiem tra xem duoi local storage có giá trị thi mới render ra html
if (startPage != null) {
  studentsList = JSON.parse(startPage).map((student) => {
    return new StudentsInfomation(
      student.stuId,
      student.stuName,
      student.email,
      student.password,
      student.birthday,
      student.courses,
      student.mathScore,
      student.physicSCore,
      student.chemistryScore
    );
  }); // dssv có giá trị tu localstorage json chuyen qua javascript
  renderData(studentsList);
}

// thêm sinh viên
function addStudents() {
  var StuInfo = GetDataForm();
  // kiem tra validate truoc khi them push vo studentlist
  //if fill het thong tin thì mới được thêm
  var isValid =
    validateInfo(StuInfo.stuId, "spanMaSV") &
    validateInfo(StuInfo.stuName, "spanTenSV") &
    validateInfo(StuInfo.birthday, "spanNgaySinh") &
    validateInfo(StuInfo.mathScore, "spanToan") &
    validateInfo(StuInfo.physicSCore, "spanLy") &
    validateInfo(StuInfo.chemistryScore, "spanHoa") &
    validateInfo(StuInfo.email, "spanEmailSV");

  isValid =
    isValid & validateInfo(StuInfo.courses, "spanKhoaHoc") &&
    similarityCheck(
      StuInfo.email,
      "spanEmailSV",
      studentsList,
      "email",
      "Email đã được sử dụng"
    ) &
      similarityCheck(
        StuInfo.stuId,
        "spanMaSV",
        studentsList,
        "stuId",
        "ID đã được sử dụng"
      ) &&
    checkNumber(StuInfo.mathScore, "spanToan") &
      checkNumber(StuInfo.physicSCore, "spanLy") &
      checkNumber(StuInfo.chemistryScore, "spanHoa");
  if (!isValid) {
    return;
  }

  studentsList.push(StuInfo);
  renderData(studentsList);
  // lưu data vào localStorage
  // stept 1: convert từ javascript qua json
  var convertJson = JSON.stringify(studentsList);
  // save data consider to reserve data when reloading page
  localStorage.setItem(STUSTORAGE, convertJson);
}
console.log(studentsList);
// xóa sinh viên

function deleteInfo(id) {
  // kiem tra neu ma id trùng với dk hay ko
  console.log(id);
  var indexBtn;
  for (var i = 0; i < studentsList.length; i++) {
    if (studentsList[i].stuId == id) {
      indexBtn = i;
    }
  }
  studentsList.splice(indexBtn, 1);

  // update len localStorage
  var json = JSON.stringify(studentsList);
  localStorage.setItem(STUSTORAGE, json);
  renderData(studentsList);
}

// edit button
function editButton(id) {
  var currentIndex = studentsList.findIndex((value) => value.stuId == id); // funtion return true/false => value == true :ex: value[0].stuId = 123 & id = 123 thì trả vê true => studentsList.findIndex(0) trả về index vi tri 0

  var currStudents = studentsList[currentIndex];
  document.getElementById("txtMaSV").value = currStudents.stuId;
  document.getElementById("txtTenSV").value = currStudents.stuName;
  document.getElementById("txtEmail").value = currStudents.email;
  document.getElementById("txtPass").value = currStudents.password;
  document.getElementById("txtNgaySinh").value = currStudents.birthday;
  document.getElementById("khSV").value = currStudents.courses;
  document.getElementById("txtDiemToan").value = currStudents.mathScore;
  document.getElementById("txtDiemLy").value = currStudents.physicSCore;
  document.getElementById("txtDiemHoa").value = currStudents.chemistryScore;

  document.getElementById("updateBtn").onclick = function () {
    // cho value input vo 1 bien moi sau do splice voi studentsList => 1 studentsList mới
    var newStuInfo = GetDataForm();
    var isValid =
      validateInfo(newStuInfo.stuId, "spanMaSV") &
      validateInfo(newStuInfo.stuName, "spanTenSV") &
      validateInfo(newStuInfo.birthday, "spanNgaySinh") &
      validateInfo(newStuInfo.mathScore, "spanToan") &
      validateInfo(newStuInfo.physicSCore, "spanLy") &
      validateInfo(newStuInfo.chemistryScore, "spanHoa") &
      validateInfo(newStuInfo.email, "spanEmailSV");
    if (!isValid) {
      return;
    }

    //
    console.log("🫀 ~ document.getElementById ~ newStuInfo 2:", newStuInfo);
    studentsList.splice(currentIndex, 1, newStuInfo);

    console.log("🫀 ~ document.getElementById ~ studentsList 3:", studentsList);

    localStorage.setItem(STUSTORAGE, JSON.stringify(studentsList));
    renderData(studentsList);
  };
}

//reset
function ressetInfo() {
  // localStorage.clear(STUSTORAGE);
  location.reload();
  alert("Resetting successfully");
  // alert("Resetting successfully. Please reload the page")
}

// search function
document.getElementById("btnSearch").onclick = function () {
  var findInput = document.getElementById("txtSearch").value.replace(/ /g, "");
  var input = findInput.toLowerCase();
  // kiem tra nếu trong studenlist.name == triminput
  var html = [];
  for (var i = 0; i < studentsList.length; i++) {
    if (studentsList[i].stuName.toLowerCase() == input) {
      console.log(studentsList[i]);
      renderData("");
      html.push(studentsList[i]);
    }
  }
  if (html != "") {
    renderData(html);
  } else {
    alert("KHÔNG TÌM THẤY");
  }
};
