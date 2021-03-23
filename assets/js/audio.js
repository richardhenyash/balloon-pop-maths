/**
* @fileOverview JavaScript Audio Function Library.
* @author <a href="https://github.com/richardhenyash">Richard Ash</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */
/* globals $, soundPop, soundDeflate, soundHighScore, soundUnlucky, soundWellDone, bpmSoundEffectsMuted:true */

/**
* [Function to toggle audio mute]
* @return {[boolean]}     [bpmSoundEffectsMuted global variable]
*/
function muteAudioToggle(){
    // Check bpmSoundEffectsMuted global variable
    if (bpmSoundEffectsMuted == false) {
        // Mute sound effects
        muteAudio();
    } else {
        // Un-mute sound effects
        unMuteAudio();
    }
    return(bpmSoundEffectsMuted);
}

/**
* [Function to mute audio]
* @return {[boolean]}     [bpmSoundEffectsMuted global variable]
*/
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
    return(bpmSoundEffectsMuted);
}

/**
* [Function to un-mute audio]
* @return {[boolean]}     [bpmSoundEffectsMuted global variable]
*/
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
    return(bpmSoundEffectsMuted);
}