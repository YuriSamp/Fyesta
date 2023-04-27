export const modalRelativePosition = (
  divRef: DOMRect,
  type: 'Details' | 'Actions'
): { leftRef: number; topRef: number } => {
  const { left, top, height, width } = divRef;

  if (type === 'Actions') {
    return ActionPostion(left, width, top, height);
  }
  return DetailsPostion(left, width, top, height);
};

const DetailsPostion = (
  left: number,
  width: number,
  top: number,
  height: number
) => {
  let leftRef = 0;
  let topRef = 0;

  if (left + width < 1200) {
    leftRef = left + 1.1 * width;
  } else {
    leftRef = left - 3.2 * width;
  }

  if (top + height < 600) {
    topRef = top + height * 0.6;
  } else {
    topRef = top - 6 * height;
  }

  return { leftRef, topRef };
};

const ActionPostion = (
  left: number,
  width: number,
  top: number,
  height: number
) => {
  let leftRef = 0;
  let topRef = 0;

  if (left + width < 1200) {
    leftRef = left + 1.1 * width;
  } else {
    leftRef = left - 2.4 * width;
  }

  if (top + height < 500) {
    topRef = top + height * 0.6;
  } else if (top + height < 600) {
    topRef = top - 2 * height;
  } else {
    topRef = top - 3.2 * height;
  }

  return { leftRef, topRef };
};
