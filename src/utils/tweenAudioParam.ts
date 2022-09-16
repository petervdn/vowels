import gsap from "gsap";

export const tweenAudioParam = (
  audioParam: AudioParam,
  value: number,
  duration: number,
  onComplete?: () => void
) => {
  gsap.killTweensOf(audioParam);
  gsap.fromTo(
    audioParam,
    { value: audioParam.value },
    {
      value: value,
      duration: duration,
      onComplete,
    }
  );
};
