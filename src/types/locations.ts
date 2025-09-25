export interface MarkerData {
  position: [number, number];
  popupText: string;
}

export interface LocationsData {
  center: [number, number];
  zoom: number;
  markers: MarkerData[];
}