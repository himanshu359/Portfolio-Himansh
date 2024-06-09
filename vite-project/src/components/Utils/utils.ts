export const iconContainer = (duration: any) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

export const animateContainer=(delay:any)=>({
    hidden:{ x: -100, opacity: 0 },
    visible:{x:0 ,opacity:1, transition: {duration:0.5,delay :delay}}
  })