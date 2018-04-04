
class FbAbout {

    mobileNo: number;
    birthday: string;
    Education: string;
    Hometown: string;
    Relationship: string;
    WorkPlace : string;
    EmailId : string;

    constructor(_mobileNo: number, _birthday: string,_Education : string,
         _Hometown: string, _Relationship: string,_WorkPlace:string,_EmailId:string) {
        this.mobileNo = _mobileNo;
        this.birthday = _birthday;
        this.Education = _Education;
        this.Hometown = _Hometown;
        this.Relationship = _Relationship;
        this.WorkPlace = _WorkPlace;
        this.EmailId = _EmailId;

    }

    getMobile = () => {
        return this.mobileNo;
    }
    getBirthday = () => {
        return this.birthday;
    }
    getEducation = () => {
        return this.Education;
    }
    getHometown = () => {
        return this.Hometown;
    }
    getRelationship = () => {
        return this.Relationship;
    }

}


let onFb = new FbAbout(7011854346,"16/2/1993","NITK","Karhal","Single","Gurgaon","priyamgpt444@gmail.com")

let Mobile = onFb.getMobile();
let Birthday = onFb.getBirthday();
let Education = onFb.getEducation();
let Hometown = onFb.getHometown();
let Relationship = onFb.getRelationship();
console.log(Mobile);
console.log(Birthday);
console.log(Education);
console.log(Hometown);
console.log(Relationship);
