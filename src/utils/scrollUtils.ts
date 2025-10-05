import {scroller} from "react-scroll";

export function scrollTo(id: string) {
  scroller.scrollTo(id, {
    duration: 500,
    smooth: true,
    offset: -getNavbarHeight()
  });
}

export function getNavbarHeight(): number {
  const property = getComputedStyle(document.documentElement).getPropertyValue('--navbar-height');
  return parseInt(property.trim().replace("px", "")) - 1;
}