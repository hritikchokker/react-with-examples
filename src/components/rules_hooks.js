// function Counter() {
// const [count, setCount] = useState(0);
// const [checked, toggle] = useState(false);

// useEffect(() => {
// ...
// }, [checked]);

// useEffect(() => {
// ...
// }, []);

// useEffect(() => {
// ...
// }, [count]);

// return ( ... )
// }

// The order of Hook calls is the same for each and every render:

// [count, checked, DependencyArray, DependencyArray, DependencyArray]

// function Counter() {
// const [count, setCount] = useState(0);
// const [checked, toggle] =
// useState(
// count => (count < 5)
// ? undefined
// : !c,
// (count < 5) ? undefined

// );

// useEffect(() => {
// ...
// });

// useEffect(() => {
// if (count < 5) return;
// ...
// });

// useEffect(() => {
// ...
// });

// return ( ... )
// }

useEffect(() => {
const fn = async () => {
await SomePromise();
};
fn();
});