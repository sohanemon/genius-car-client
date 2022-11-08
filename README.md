## Initial setup

```sh
cd src
rm App.css
mkdir components contexts hooks pages layouts
touch layouts/main.jsx
touch routes/router.jsx
```

## Awesome navItems mapping

```js
const navItems = [
  <Link to='/'>Home</Link>,
  <a href='#about'>About</a>,
  <a href='#services'>services</a>,
  <Link to={"/orders"}>Orders</Link>,
];
```

## Disable next button on swiper

- to re-render create a state

```js
const [index, setIndex] = useState(0);
const swipe = useSwiper();
swipe.on("slideChange", () => {
  setIndex(swipe.realIndex);
});
```

- now apply as follow

```js
<BsArrowLeft
  className={`${
    index === 0 ? "cursor-not-allowed bg-black/50" : "bg-red-600"
  } text-xl text-white h-12 w-12 p-3 rounded-full`}
/>
<BsArrowRight
    className={`${
    index === banners.length - 1
        ? "cursor-not-allowed bg-black/50"
        : "bg-red-600"
    } text-xl text-white h-12 w-12 p-3 rounded-full`}
/>
```

## import image with require

- use default parameter

```js
const image = require("../assets/images/location/Group 32.svg").default;
```

> as being a part of es6 `require()` returns a module. As it is not a normal javascript but bundled by webpack, we will found our output at a folder like `/static/*/*.*`. Which is actually at `require().default`

> remember sometimes `.default` is not required. `require()` itself returns a static location

## using react-hook-form

- prebuilt component

```js
function InputField({ register, title }) {
  return (
    <div className='flex flex-col gap-4'>
      <label
        className='text-lg font-semibold text-gray-700 capitalize'
        htmlFor={title}
      >
        {title}
      </label>
      <input
        className='border-2 placeholder:font-semibold py-4 px-6 rounded-lg outline-gray-500'
        type={title}
        id={title}
        {...register(title)}
        placeholder={`Your ${title}`}
      />
    </div>
  );
}
```

- and pass as follow

```js
<InputField register={register} title='email' />
          <InputField register={register} title='password' />
```

### to use default values

- create a default value

```js
let defaultValues = {};
defaultValues.firstName = "Sohan";
defaultValues.lastName = "Emon";
reset({ ...defaultValues });
```

- or start as following

```js
const { reset, register } = useForm();

useEffect(() => {
  reset({ firstName: "sohan", lastName: "emon" });
}, []);

return (
  <div className='App'>
    <input {...register("firstName")} placeholder='First Name' />
    <input {...register("lastName")} placeholder='Last Name' />
  </div>
);
```

## Axios

> JSON.stringify is not required with axios

- passing to body `axios.post(uri,data)`

```js
axios.post(`${process.env.REACT_APP_host}/orders`, { dev: "emon" });
```

- passing to header `axios.get(uri,config)`

```js
axios.get(`${process.env.REACT_APP_host}/orders`, {
  headers: { name: "emon" },
});
```

- for passing both header and body `axios.post(uri, data, config)`

```js
axios.get(
  `${process.env.REACT_APP_host}/orders/?email=${user?.email}`,
  { dev: "emon" },
  {
    headers: { name: "emon" },
  }
);
```

### reset/empty field on submit in rhf

```js
const onSubmit = (data, e) => {
  e.target.reset();
};
```

## handling Promises

- `Promise` constructor receives a callback function and the callback function receives `res()` and `rej()`

```js
const prom = new Promise((resolve, reject) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      resolve("logged");
    })
    .catch((error) => {
      reject("out");
    });
});

prom.then(() => {});
```

> this promise may be invoked automatically.

- we should use as follow

```js
const funPromise = () =>
  new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        resolve("logged");
      })
      .catch((error) => {
        reject("out");
      });
  });
funPromise.then(() => {});
```

> a better way to handle promise

## react-router loads a page from its middle of content

- use following hook

```js
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
};
export default useScrollToTop;
```
