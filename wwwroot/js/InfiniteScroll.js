class InfiniteScroll {

    constructor(elementid, DotNetHelper) {

        this.element = document.getElementById(elementid);

        this.DotNetHelper = DotNetHelper;
        
        this.ListenToScroll = function (event,element,DotNetHelper) {
            var bounding = element.getBoundingClientRect();
            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || element.clientWidth) &&
                bounding.bottom <= (window.innerHeight || element.clientHeight)
            ) {
                console.log('In the viewport!');
                DotNetHelper.invokeMethodAsync("LoadMore");
            }
        };        

        this.handler = (ev) => { this.ListenToScroll(ev, this.element, this.DotNetHelper) };

        document.addEventListener("scroll", this.handler, true);

        this.RemoveListener = function () {
            document.removeEventListener("scroll", this.handler, true);
            console.log('Listener removed!');
        }
    }
}