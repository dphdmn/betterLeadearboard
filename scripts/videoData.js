const videoDataText = 
`

7bd3d62bb5a450b94df8e0f0bddd5fe840dc01ebed5560b195dc36b690a9441b https://www.youtube.com/watch?v=gclz6T9Z85Q
3cdec613da8e7f702ea3ae7e652c4cb14dea45d230ba9b3e8f5039a7cd49bab8 https://www.youtube.com/watch?v=FXyGXFs9Kjo

`
;

const videoData = videoDataText.trim().split('\n').reduce((acc, line) => {
    const [key, value] = line.trim().split(' ');
    acc[key] = value;
    return acc;
}, {});