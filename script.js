document.addEventListener('DOMContentLoaded', function() {
    const relatedProductImages = document.querySelectorAll('.related-product-image');

    relatedProductImages.forEach(function(image) {
        image.addEventListener('click', function() {
            alert('해당 제품 상세 페이지로 이동합니다');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('instagram-btn').addEventListener('click', function() {
        alert('인스타그램 페이지로 연결합니다');
        window.location.href = 'https://www.youtube.com/channel/UCIEWwnGtqeBckCTzrFXoEQw';
    });

    document.getElementById('youtube-btn').addEventListener('click', function() {
        alert('유튜브 페이지로 연결합니다');
        window.location.href = 'https://www.instagram.com/kookmin.univ/';
    });
});