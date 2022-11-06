## Initial setup

```sh
cd src
rm App.css
mkdir components contexts hooks pages layouts
touch layouts/main.jsx
touch routes/router.jsx
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
