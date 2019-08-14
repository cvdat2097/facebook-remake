const POPOVER = {};

POPOVER.CLASSNAME = {
    POPOVER: 'popover',
    POPOVER_ARROW: 'popover-arrow',
    POPOVER_BODY: 'popover-body',
    FIXED_POPOVER: 'fixed',
    SHOW: 'show',
};

POPOVER.SELECTOR = {
    POPOVER: `.${POPOVER.CLASSNAME.POPOVER}`,
    POPOVER_BODY: `.${POPOVER.CLASSNAME.POPOVER_BODY}`,
    DOCUMENT_BODY: 'body',
};

POPOVER.DIRECTION = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right',
};

POPOVER.openedPopovers = [];

const togglePopover = function(popover) {
    if ($(popover).hasClass(POPOVER.CLASSNAME.SHOW)) {
        closePopover(popover);
    } else {
        openPopover(popover);
    }
};

const closePopover = function(popover) {
    $(popover).removeClass(POPOVER.CLASSNAME.SHOW);
};

const openPopover = function(popover) {
    $(popover).addClass(POPOVER.CLASSNAME.SHOW);

    POPOVER.openedPopovers.push(popover);
};

const popoverFeatures = {
    addEventHandlers: function() {
        $(POPOVER.SELECTOR.POPOVER).on('click', function(event) {
            event.stopPropagation();

            togglePopover(this);
        });

        $(POPOVER.SELECTOR.POPOVER_BODY).on('click', function(event) {
            event.stopPropagation();
        });

        $(POPOVER.SELECTOR.DOCUMENT_BODY).on('click', function() {
            POPOVER.openedPopovers.forEach(p => closePopover(p));

            POPOVER.openedPopovers = [];
        });
    },

    prependPopoverArrow: function() {
        $('<div/>', {
            class: POPOVER.CLASSNAME.POPOVER_ARROW,
        }).prependTo($(POPOVER.SELECTOR.POPOVER));
    },
};

$(document).ready(function() {
    popoverFeatures.prependPopoverArrow();
    popoverFeatures.addEventHandlers();
});
