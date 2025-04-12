type Position =  {x: number, y: number};

const red = color('#ff0000');
const blue = color('#0000ff');

function pixelColour = ({ x, y }: Position) {
  let t = sin(x);
  t = (t + 1) / 2; // Normalize to [0, 1]
  return mix(red, blue, t);
}

// Linear interpolation between two colors
function mix(a: number, b: number, t: number) {
  return new Color(
    a.r * (1 - t) + b.r * t,
    a.g * (1 - t) + b.g * t,
    a.b * (1 - t) + b.b * t,
  )
}
