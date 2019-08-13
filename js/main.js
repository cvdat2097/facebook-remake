// MESSENGER-BAR
const CLASSNAME = {
    SHOW: 'show',
    EXPANDED: 'expanded',
};

const SELECTOR = {
    MESSENGER_BAR: '#messenger-bar',
    MESSENGER_BAR_HEADER: '#messenger-bar-header',
    MESSENGER_BAR_SETTINGS: '#messenger-bar-settings',

    NEW_POST: '#new-post',
    NEW_POST_BACKDROP: '#new-post-backdrop',
};

const toggleElement = function(element, toggleClass) {
    if ($(element).hasClass(toggleClass)) {
        $(element).removeClass(toggleClass);
    } else {
        $(element).addClass(toggleClass);
    }
};

$(SELECTOR.MESSENGER_BAR_HEADER).on('click', () => {
    toggleElement($(SELECTOR.MESSENGER_BAR), CLASSNAME.SHOW);
    toggleElement($(SELECTOR.MESSENGER_BAR_SETTINGS), CLASSNAME.SHOW);
});

const newPostComposer = $(SELECTOR.NEW_POST);
const newPostBackdrop = $(SELECTOR.NEW_POST_BACKDROP);

$(newPostComposer).on('click', function() {
    if (!newPostComposer.hasClass(CLASSNAME.EXPANDED)) {
        $(newPostComposer).addClass(CLASSNAME.EXPANDED);
        $(newPostBackdrop).addClass(CLASSNAME.SHOW);
    }
});

$(newPostBackdrop).on('click', function() {
    $(newPostComposer).removeClass(CLASSNAME.EXPANDED);
    $(newPostBackdrop).removeClass(CLASSNAME.SHOW);
});
