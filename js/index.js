function initializeSlider() {
    const cards = document.getElementById("cards");
    const leftButton = document.getElementById("button-left");
    const rightButton = document.getElementById("button-right");
    const cardItems = document.querySelectorAll("#cards .item");
    const firstItem = cardItems[0];
    let currentIndex = 0;

    function updateSlider() {
        const itemWidth = firstItem.offsetWidth;
        const maxIndex = cardItems.length - 1;
        
        // 範圍檢查
        if (currentIndex < 0) {
            currentIndex = maxIndex;
        } else if (currentIndex > maxIndex) {
            currentIndex = 0;
        }

        cards.style.transition = "transform 0.3s ease-in-out";
        cards.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function handleResize() {
        cards.style.transition = "none"; // 暫時禁用過渡效果
        updateSlider();
        // 強制重繪
        void cards.offsetWidth;
        cards.style.transition = "transform 0.3s ease-in-out"; // 重新啟用過渡效果
    }

    const debouncedHandleResize = debounce(handleResize, 250);

    leftButton.addEventListener("click", () => {
        currentIndex--;
        updateSlider();
    });

    rightButton.addEventListener("click", () => {
        currentIndex++;
        updateSlider();
    });

    // 添加觸摸滑動支持
    let startX, moveX;
    const threshold = 100; // 滑動閾值

    cards.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    cards.addEventListener("touchmove", (e) => {
        if (startX === undefined) return;
        moveX = e.touches[0].clientX;
    });

    cards.addEventListener("touchend", () => {
        if (startX === undefined || moveX === undefined) return;
        const diff = startX - moveX;
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                currentIndex++;
            } else {
                currentIndex--;
            }
            updateSlider();
        }
        startX = undefined;
        moveX = undefined;
    });

    window.addEventListener("resize", debouncedHandleResize);

    // 初始化滑塊位置
    updateSlider();
}

window.addEventListener("load", initializeSlider);