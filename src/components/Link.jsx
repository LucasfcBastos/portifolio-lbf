const Link = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) newWindow.focus();
};
  
export default Link;