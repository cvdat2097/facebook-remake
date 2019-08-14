const popoverFeatures = (function() {
    const _CLASSNAME = {
        POPOVER: 'popover',
        POPOVER_ARROW: 'popover-arrow',
        POPOVER_BODY: 'popover-body',
        FIXED_POPOVER: 'fixed',
        SHOW: 'show',
    };

    const _SELECTOR = {
        POPOVER: '.popover',
        POPOVER_BODY: '.popover-body',
        DOCUMENT_BODY: 'body',
    };

    let _openedPopovers = [];

    const _togglePopover = function(popover) {
        if ($(popover).hasClass(_CLASSNAME.SHOW)) {
            _closePopover(popover);
        } else {
            _openPopover(popover);
        }
    };

    const _closePopover = function(popover) {
        $(popover).removeClass(_CLASSNAME.SHOW);
    };

    const _openPopover = function(popover) {
        $(popover).addClass(_CLASSNAME.SHOW);

        _openedPopovers.push(popover);
    };

    const addEventHandlers = function() {
        $(_SELECTOR.POPOVER).on('click', function(event) {
            event.stopPropagation();

            _togglePopover(this);
        });

        $(_SELECTOR.POPOVER_BODY).on('click', function(event) {
            event.stopPropagation();
        });

        $(_SELECTOR.DOCUMENT_BODY).on('click', function() {
            _openedPopovers.forEach(function(p) {
                _closePopover(p);
            });

            _openedPopovers = [];
        });
    };

    const prependPopoverArrow = function() {
        $('<div/>', {
            class: _CLASSNAME.POPOVER_ARROW,
        }).prependTo($(_SELECTOR.POPOVER));
    };

    return {
        addEventHandlers: addEventHandlers,
        prependPopoverArrow: prependPopoverArrow,
    };
})();

$(document).ready(function() {
    popoverFeatures.prependPopoverArrow();
    popoverFeatures.addEventHandlers();
});
