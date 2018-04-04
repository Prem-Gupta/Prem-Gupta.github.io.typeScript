var FbAbout = /** @class */ (function () {
    function FbAbout(_mobileNo, _birthday, _Education, _Hometown, _Relationship, _WorkPlace, _EmailId) {
        var _this = this;
        this.getMobile = function () {
            return _this.mobileNo;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getEducation = function () {
            return _this.Education;
        };
        this.getHometown = function () {
            return _this.Hometown;
        };
        this.getRelationship = function () {
            return _this.Relationship;
        };
        this.mobileNo = _mobileNo;
        this.birthday = _birthday;
        this.Education = _Education;
        this.Hometown = _Hometown;
        this.Relationship = _Relationship;
        this.WorkPlace = _WorkPlace;
        this.EmailId = _EmailId;
    }
    return FbAbout;
}());
var onFb = new FbAbout(7011854346, 16 / 2 / 1993, "NITK", "Karhal", "Single", "Gurgaon", "priyamgpt444@gmail.com");
var Mobile = onFb.getMobile();
var Birthday = onFb.getBirthday();
var Education = onFb.getEducation();
var Hometown = onFb.getHometown();
var Relationship = onFb.getRelationship();
console.log(Mobile);
console.log(Birthday);
console.log(Education);
console.log(Hometown);
console.log(Relationship);
