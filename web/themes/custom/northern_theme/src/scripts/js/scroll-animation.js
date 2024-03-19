
(function ($) {
    function handleRevealAnimation (block) {
    var blocks = document.querySelectorAll (block);
    blocks.forEach (function (block, i) {
    // Add reveal animation class to blocks if they don't already have it (For custom use) 
    if (!block.classList.contains('animation-processed')){
    block.classList.add('animate-reveal');
    }
    // Conditional to handle reveal elements loaded post ajax
    if (!block.classList.contains('animation-processed')) {
    // Use callbacks to control the state of the animation 
    ScrollTrigger.create({
        trigger: block,
        end: "center center",
        once: true,
        onEnter: function () {
             // If it's scrolled past, set the state as animated by class
             if (this.progress !== 1) {
                block.classList.add('animated');
            } 
        }
    });

    // Class to indicate that animation is ready for trigger 
    block.classList.add('animation-processed');
    }
});
}
    Drupal.behaviors.revealAnimation = {
        attach: function (context, settings) { 
            handleRevealAnimation('.animate-reveal');
        }
    };

})(jQuery);
