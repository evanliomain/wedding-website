import { fetch } from '../helper/fetchDirection'

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

export const searchDirection =
  lodging =>
    dispatch =>
      fetch(lodging)
        .then(direction =>
          dispatch(applyDirection(lodging, direction))
        );

export const applyDirection = (lodging, direction) => ({
  type : 'APPLY_DIRECTION',
  lodging,
  direction
})
