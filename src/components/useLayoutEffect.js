// useLayoutEffect is called at a specific moment in the render cycle. The
// series of events is as follows:

// 1. Render
// 2. useLayoutEffect is called
// 3. Browser paint: the time when the component’s elements are
// actually added to the DOM
// 4. useEffect is called

function useWindowSize {
const [width, setWidth] = useState(0);
const [height, setHeight] = useState(0);
const resize = () => {
setWidth(window.innerWidth);
setHeight(window.innerHeight);
};
useLayoutEffect(() => {
window.addEventListener("resize", resize);
resize();
return () => window.removeEventListener("resize", resize);
}, []);
return [width, height];
};


function useMousePosition {
const [x, setX] = useState(0);
const [y, setY] = useState(0);
const setPosition = ({ x, y }) => {
setX(x);
setY(y);
};
useLayoutEffect(() => {
window.addEventListener("mousemove", setPosition);
return () => window.removeEventListener("mousemove", setPosition);
}, []);
return [x, y];
};