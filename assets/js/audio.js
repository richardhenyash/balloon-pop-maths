// JavaScript Audio Functions //

/** Function to toggle audio mute.  **/
function muteAudioToggle(){
    // Check bpmSoundEffectsMuted global variable
    if (bpmSoundEffectsMuted == false) {
        // Mute sound effects
        soundPop.muted = true;
        soundDeflate.muted = true;
        soundHighScore.muted = true;
        soundUnlucky.muted = true;
        soundWellDone.muted = true;
        $(this).removeClass("fa-volume-off").addClass("fas fa-volume-mute");
        bpmSoundEffectsMuted = true;
    } else {
        // Un-mute sound effects
        soundPop.muted = false;
        soundDeflate.muted = false;
        soundHighScore.muted = false;
        soundUnlucky.muted = false;
        soundWellDone.muted = false;
        $(this).removeClass("fa-volume-mute").addClass("fas fa-volume-off");
        bpmSoundEffectsMuted = false;
    }
}
