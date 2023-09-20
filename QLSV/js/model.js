function StudentsInfomation(stuId,stuName,email,password,birthday,courses,mathScore,physicSCore,chemistryScore) {
    this.stuId = stuId;
    this.stuName = stuName;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
    this.courses = courses;
    this.mathScore = mathScore;
    this.physicSCore = physicSCore;
    this.chemistryScore = chemistryScore;
    this.totalScore = function() {
       var score = (this.mathScore + this.chemistryScore + this.physicSCore) /3;
       return score.toLocaleString();
    }
}