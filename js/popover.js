const PO_CLASSNAME = {
    POPOVER: 'popover',
    POPOVER_ARROW: 'popover-arrow',
    POPOVER_BODY: 'popover-body',
    FIXED_POPOVER: 'fixed',
    SHOW: 'show',
};

const PO_SELECTOR = {
    POPOVER: `.${PO_CLASSNAME.POPOVER}`,
    POPOVER_BODY: `.${PO_CLASSNAME.POPOVER_BODY}`,
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
    if ($(popover).hasClass(PO_CLASSNAME.SHOW)) {
        closePopover(popover);
    } else {
        openPopover(popover);
    }
};

const closePopover = function(popover) {
    $(popover).removeClass(PO_CLASSNAME.SHOW);
};

const openPopover = function(popover) {
    $(popover).addClass(PO_CLASSNAME.SHOW);

    openedPopovers.push(popover);
};

$(PO_SELECTOR.POPOVER).on('click', function(event) {
    event.stopPropagation();

    togglePopover(this);
});

$('<div/>', {
    class: PO_CLASSNAME.POPOVER_ARROW,
}).prependTo($(PO_SELECTOR.POPOVER));

$(PO_SELECTOR.POPOVER_BODY).on('click', function(event) {
    event.stopPropagation();
});

$(PO_SELECTOR.DOCUMENT_BODY).on('click', function() {
    openedPopovers.forEach(p => closePopover(p));

    openedPopovers = [];
});
