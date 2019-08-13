const CLASSNAME = {
    POPOVER: 'popover',
    POPOVER_ARROW: 'popover-arrow',
    POPOVER_BODY: 'popover-body',
    FIXED_POPOVER: 'fixed',
    SHOW: 'show',
};

const SELECTOR = {
    POPOVER: `.${CLASSNAME.POPOVER}`,
    POPOVER_BODY: `.${CLASSNAME.POPOVER_BODY}`,
    DOCUMENT_BODY: 'body',
};

const POPOVER_DIRECTION = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right',
};

let openedPopovers = [];

const togglePopover = function(popover) {
    if ($(popover).hasClass(CLASSNAME.SHOW)) {
        $(popover).removeClass(CLASSNAME.SHOW);
    } else {
        $(popover).addClass(CLASSNAME.SHOW);

        openedPopovers.push(popover);
    }
};

$(SELECTOR.POPOVER).on('click', function(event) {
    event.stopPropagation();

    togglePopover(this);
});

$('<div/>', {
    class: CLASSNAME.POPOVER_ARROW,
}).prependTo($(SELECTOR.POPOVER));

$(SELECTOR.POPOVER_BODY).on('click', function(event) {
    event.stopPropagation();
});

$(SELECTOR.DOCUMENT_BODY).on('click', function() {
    openedPopovers.forEach(p => togglePopover(p));

    openedPopovers = [];
});
