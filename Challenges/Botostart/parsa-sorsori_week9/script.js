const randomHexColor = () => {
const hexColor = (Math.random() * 0xfffff * 1000000).toString(16);
console.log('#' + hexColor.slice(0, 6));
};