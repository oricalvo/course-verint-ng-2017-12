class TooltipComponent {
    constructor(di) {
        this.isActive = false;

        di.value("tooltip", this);
    }

    show(message) {
        console.log("TooltipComponent.show");

        this.message = message;
        this.isActive = true;
    }

    hide() {
        this.message = "";
        this.isActive = false;
    }
}

myApp.component("appTooltip", {
    templateUrl: "tooltip.component.html",
    controller: TooltipComponent,
});