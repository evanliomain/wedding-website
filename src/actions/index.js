
export const scrollChange = scroll => ({
  type : 'SCROLL_CHANGE',
  scroll
});

export const lodgingTabChange = tab => ({
  type : 'LODGING_TAB_CHANGE',
  tab
});

export const lodgingSelected = lodging => ({
  type : 'LODGING_SELECTED',
  lodging
});

export const lodgingHover = lodging => ({
  type : 'LODGING_HOVER',
  lodging
});
