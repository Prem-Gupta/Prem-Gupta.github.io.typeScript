
class YouTube {

    hours: number;
    views: number;
    videolength: number;
    title: string;
    channel: string;
    suscribes : string;

    constructor(hours1: number, views1: number, videolength1: number,
         title1: string, channel1: string,suscribes1:string) {
        this.hours = hours1;
        this.views = views1;
        this.videolength = videolength1;
        this.title = title1;
        this.channel = channel1;
        this.suscribes = suscribes1;

    }

    getViews = () => {
        return this.views;
    }
    gethours = () => {
        return this.hours;
    }
    getLegth = () => {
        return this.videolength;
    }
    getTitle = () => {
        return this.title;
    }
    getChannel = () => {
        return this.channel;
    }

}


let onYoutube = new YouTube(2,15434,23.0,"Cricket","Sports","40M")

let view = onYoutube.getViews();
let hour = onYoutube.gethours();
let Length = onYoutube.getLegth();
let titles = onYoutube.getTitle();
let channel = onYoutube.getChannel();
console.log(view);
console.log(hour);
console.log(Length);
console.log(titles);
console.log(channel);