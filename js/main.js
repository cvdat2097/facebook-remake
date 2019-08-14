const toggleElement = function(element, toggleClass) {
    if ($(element).hasClass(toggleClass)) {
        $(element).removeClass(toggleClass);
    } else {
        $(element).addClass(toggleClass);
    }
};

const messengerBarFeatures = (function() {
    const _CLASSNAME = {
        SHOW: 'show',
    };

    const _SELECTOR = {
        MESSENGER_BAR: '#messenger-bar',
        MESSENGER_BAR_HEADER: '#messenger-bar-header',
        MESSENGER_BAR_SETTINGS: '#messenger-bar-settings',
    };

    const addEventHandlers = function() {
        $(_SELECTOR.MESSENGER_BAR_HEADER).on('click', function() {
            toggleElement($(_SELECTOR.MESSENGER_BAR), _CLASSNAME.SHOW);
            toggleElement($(_SELECTOR.MESSENGER_BAR_SETTINGS), _CLASSNAME.SHOW);
        });
    };

    return {
        addEventHandlers: addEventHandlers,
    };
})();

const postComposerFeatures = (function() {
    const _CLASSNAME = {
        SHOW: 'show',
        EXPANDED: 'expanded',
    };

    const _SELECTOR = {
        NEW_POST: '#new-post',
        NEW_POST_BACKDROP: '#new-post-backdrop',
    };

    const addEventHandlers = function() {
        const newPostComposer = $(_SELECTOR.NEW_POST);
        const newPostBackdrop = $(_SELECTOR.NEW_POST_BACKDROP);

        $(newPostComposer).on('click', function() {
            if (!newPostComposer.hasClass(_CLASSNAME.EXPANDED)) {
                $(newPostComposer).addClass(_CLASSNAME.EXPANDED);
                $(newPostBackdrop).addClass(_CLASSNAME.SHOW);
            }
        });

        $(newPostBackdrop).on('click', function() {
            $(newPostComposer).removeClass(_CLASSNAME.EXPANDED);
            $(newPostBackdrop).removeClass(_CLASSNAME.SHOW);
        });
    };

    return {
        addEventHandlers: addEventHandlers,
    };
})();

$(document).ready(function() {
    messengerBarFeatures.addEventHandlers();
    postComposerFeatures.addEventHandlers();
});
