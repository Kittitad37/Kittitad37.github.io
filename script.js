const nextPageButton = document.getElementById('scrollNextPage');
const pdfIframe = document.getElementById('pdfIframe');

nextPageButton.addEventListener('click', function() {
    const iframeDoc = pdfIframe.contentWindow;
    
    if (iframeDoc) {
        iframeDoc.scrollBy(0, iframeDoc.innerHeight);
    }
});