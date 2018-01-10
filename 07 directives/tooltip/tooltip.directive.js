myApp.directive("tooltip", function(tooltip) {
    return {
        restrict: "A",
        compile: function(element, attrs) {
            console.log("compile", tooltip);

            return function link(scope, element, attrs) {
                let timerId = null;

                function showTooltip() {
                    tooltip.show(attrs.tooltip);

                    scope.$apply();
                }

                function startTimer() {
                    stopTimer();

                    timerId = setTimeout(showTooltip, 750);
                }

                function stopTimer() {
                    if(timerId) {
                        clearTimeout(timerId);
                        timerId = null;
                    }

                    tooltip.hide();

                    scope.$apply();
                }

                element.on("mouseover", function() {
                    startTimer();
                });

                element.on("mousemove", function() {
                    startTimer();
                });

                element.on("mouseleave", function() {
                    stopTimer();
                });

                console.log("link");
            }
        }
    };
});
