
export const linear = (start, end, duration) => partialApply(
  start,
  end,
  duration,
  _linear(start, end, duration)
);

export const bezier = (start, end, duration, d1, d2) => partialApply(
  start,
  end,
  duration,
  _bezier(start, end, duration, d1, d2)
);

export const ease = (start, end, duration) =>
  bezier(start, end, duration, 0.1, 0.9);

/*
cubic-bezier(0.4, 0.0, 0.2, 1);

u0, u1, u2, u3
y(x)=u0*(1-x^3)+3*u1*(1-x^2)*x+3*u2*(1-x)*x^2+u3*x^3


y(x)=0*(1-(x/10)^3)+3*0.1*(1-(x/10)^2)*(x/10)+3*0.9*(1-(x/10))*(x/10)^2+10*(x/10)^3


y(0)=u0
y(1)=u3

u0=0 = start
u3=1 = end
y(x)=3*0.1*(1-x^2)*x+3*0.9*(1-x)*x^2+x^3

y(x)=10*(3*0.1*(1-(x)^2/a)*(x)/a+3*0.9*(1-(x)/a)*(x)^2/a+(x)^3/a)


0 * ( 1 - u )^3 + P1 * 3 * u * ( 1 - u )^2 + P2 * 3 * u^2 * ( 1 - u ) + 1 * u^3


y(x)=start*(1-(x/duration)^3)+3*d1*(1-(x/duration)^2)*(x/duration)+3*d2*(1-(x/duration))*(x/duration)^2+end*(x/duration)^3


*/

const partialApply = (start, end, duration, f) => x => {
  if (x <= 0) {
    return start;
  }
  if (duration <= x) {
    return end;
  }
  return f(x);
};


const _linear = (start, end, duration) =>
  x => start - (start - end) * x / duration;

const _bezier = (start, end, duration, d1, d2) =>
  x => start * (1 - (x / duration) ** 3) +
       3 * d1 * (1 - (x / duration) ** 2) * (x / duration) +
       3 * d2 * (1 - x / duration) * (x / duration) ** 2 +
       end * (x / duration) ** 3;
