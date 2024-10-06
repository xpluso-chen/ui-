
const scroll = new LocomotiveScroll({
    el: document.querySelector("#scroll-zone"),
    smooth: true,
    lerp: 0.01,
    repeat: true,
    tablet:{
      smooth:true,
      breakpoint:250
    },
    smartphone:{
      smooth:false
    }
  });
  