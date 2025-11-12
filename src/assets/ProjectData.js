const images = import.meta.glob('/src/assets/Images/*.{png,jpg,jpeg,svg}', { eager: true });
const imageList = Object.values(images).map(module => module.default);

export default imageList