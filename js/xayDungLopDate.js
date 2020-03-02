// Xây dựng lớp MyDate với phương thức khởi tạo có 3 tham số truyền vào
let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
};
// Xây dựng phương thức trả về ngày, tháng, năm
this.getDay = function () {
    return this.day;
}
this.getMonth = function () {
    return this.month;
}
this.getYear = function () {
    return this.year;
}
//  Xây dựng phương thức thiết đặt lại giá trị các thuộc tính day, month, year
this.setDay = function (day) {
    this.day = day;
}
this.setMonth = function (month) {
    this.month = month;
}
this.setYear = function (year) {
    this.year = year;
}

// Sử dụng lớp vừa tạo. Tạo đối tượng date với ngày:2, tháng:2, năm: 2007:
let date = new MyDate(2, 2, 2007);

// Truy cập phương thức của lớp date như sau:
let day = date.getDay(); // 2
let month = date.getMonth(); // 2
let year = date.getYear(); // 2007

// Hiển thị ngày, tháng, năm:
alert(day + "/" + month + "/" + year);

/* Gọi phương thức để thay đổi ngày, tháng, năm của đối tượng date
 vừa tạo ra thành ngày mùng 10/10/2019 sau đó hiển thị lại: */
date.setDay(10);
date.setMonth(10);
date.setYear(2019);

alert(day + "/" + month + "/" + year);