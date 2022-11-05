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
