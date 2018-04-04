var YouTube = /** @class */ (function () {
    function YouTube(hours1, views1, videolength1, title1, channel1, suscribes1) {
        var _this = this;
        this.getViews = function () {
            return _this.views;
        };
        this.gethours = function () {
            return _this.hours;
        };
        this.getLegth = function () {
            return _this.videolength;
        };
        this.getTitle = function () {
            return _this.title;
        };
        this.getChannel = function () {
            return _this.channel;
        };
        this.hours = hours1;
        this.views = views1;
        this.videolength = videolength1;
        this.title = title1;
        this.channel = channel1;
        this.suscribes = suscribes1;
    }
    return YouTube;
}());
var onYoutube = new YouTube(2, 15434, 23.0, "Cricket", "Sports", "40M");
var view = onYoutube.getViews();
var hour = onYoutube.gethours();
var Length = onYoutube.getLegth();
var titles = onYoutube.getTitle();
var channel = onYoutube.getChannel();
console.log(view);
console.log(hour);
console.log(Length);
console.log(titles);
console.log(channel);
