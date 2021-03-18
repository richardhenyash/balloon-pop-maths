// JavaScript Audio Function Library //

/** Function to toggle audio mute.  **/
function muteAudioToggle(){
    // Check bpmSoundEffectsMuted global variable
    if (bpmSoundEffectsMuted == false) {
        // Mute sound effects
        muteAudio();
    } else {
        // Un-mute sound effects
        unMuteAudio();
    }
}

/** Function to mute audio.  **/
function muteAudio(){
    // Mute sound effects
    soundPop.muted = true;
    soundDeflate.muted = true;
    soundHighScore.muted = true;
    soundUnlucky.muted = true;
    soundWellDone.muted = true;
    $("#mute").removeClass("fa-volume-up").addClass("fas fa-volume-mute");
    $("#audio-on").removeClass("active").attr("aria-pressed", "false");
    $("#audio-off").addClass("active").attr("aria-pressed", "true");
    bpmSoundEffectsMuted = true; 
}

/** Function to un-mute audio.  **/
function unMuteAudio() {
    // Unmute sound effects
    soundPop.muted = false;
    soundDeflate.muted = false;
    soundHighScore.muted = false;
    soundUnlucky.muted = false;
    soundWellDone.muted = false;
    $("#mute").removeClass("fa-volume-mute").addClass("fas fa-volume-up");
    $("#audio-off").removeClass("active").attr("aria-pressed", "false");
    $("#audio-on").addClass("active").attr("aria-pressed", "true");
    bpmSoundEffectsMuted = false;
}